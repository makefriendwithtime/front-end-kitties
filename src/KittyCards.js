import React from "react";
import {
  Button,
  Card,
  Grid,
  Message,
  Modal,
  Form,
} from "semantic-ui-react";

import KittiesAvatar from "./KittiesAvatar";
import { useSubstrateState } from "./substrate-lib";
import { TxButton } from "./substrate-lib/components";

// --- About Modal ---

const TransferModal = (props) => {
  const { kitty, setStatus } = props;
  const [open, setOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState({});

  const formChange = (key) => (ev, el) => {
    setFormValue({ ...formValue, [key]: el.value });
  };

  const confirmAndClose = (unsub) => {
    unsub();
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button basic color="blue">
          转让
        </Button>
      }
    >
      <Modal.Header>Kitty转让</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input fluid label="Kitty" readOnly value={kitty.id} />
          <Form.Input
            fluid
            label="转让对象"
            placeholder="转让地址"
            onChange={formChange("target")}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="grey" onClick={() => setOpen(false)}>
          取消
        </Button>
        <TxButton
          label="确认转让"
          type="SIGNED-TX"
          setStatus={setStatus}
          onClick={confirmAndClose}
          attrs={{
            palletRpc: "kittiesModule",
            callable: "transfer",
            inputParams: [kitty.id, formValue.target],
            paramFields: [true, true],
          }}
        />
      </Modal.Actions>
    </Modal>
  );
};

const BreedModal = (props) => {
  const { kitty, setStatus } = props;
  const [open, setOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState({});

  const formChange = (key) => (ev, el) => {
    setFormValue({ ...formValue, [key]: el.value });
  };

  const confirmAndClose = (unsub) => {
    unsub();
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button basic color="blue">
          繁殖
        </Button>
      }
    >
      <Modal.Header>Kitty繁殖</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input fluid label="Kitty标识" readOnly value={kitty.id} />
          <Form.Input
            fluid
            label="繁殖对象"
            placeholder="对方标识"
            onChange={formChange("target")}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="grey" onClick={() => setOpen(false)}>
          取消
        </Button>
        <TxButton
          label="确认繁殖"
          type="SIGNED-TX"
          setStatus={setStatus}
          onClick={confirmAndClose}
          attrs={{
            palletRpc: "kittiesModule",
            callable: "breed",
            inputParams: [kitty.id, formValue.target],
            paramFields: [true, true],
          }}
        />
      </Modal.Actions>
    </Modal>
  );
};

// --- About Kitty Card ---

const KittyCard = (props) => {
  const { kitty, setStatus } = props;
  const { id = null, dna = null, owner = null } = kitty;
  const displayDna = dna && dna.join(", ");
  const displayId = id === null ? "" : id < 10 ? `0${id}` : id.toString();
  const { currentAccount } = useSubstrateState();

  return (
    <Card>
      <KittiesAvatar dna={dna.toU8a()} />
      <Card.Content>
        <Card.Header>标识: {displayId}</Card.Header>
        <Card.Meta style={{ overflowWrap: "break-word" }}>
          基因: <br />
          {displayDna}
        </Card.Meta>
        <Card.Description>
          <p style={{ overflowWrap: "break-word" }}>
            主人:
            <br />
            {owner}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra style={{ textAlign: "center" }}>
        {owner === currentAccount.address ? (
          <span>
            <TransferModal kitty={kitty} setStatus={setStatus} />,
            <BreedModal kitty={kitty} setStatus={setStatus} />
          </span>
        ) : (
          ""
        )}
      </Card.Content>
    </Card>
  );
};

const KittyCards = (props) => {
  const { kitties, accountPair, setStatus } = props;

  if (kitties.length === 0) {
    return (
      <Message info>
        <Message.Header>
          现在什么也没有，点击下面按钮手动创建！
        </Message.Header>
      </Message>
    );
  }

  return (
    <Grid columns={3}>
      {kitties.map((kitty, i) => (
        <Grid.Column key={`kitty-${i}`}>
          <KittyCard
            kitty={kitty}
            accountPair={accountPair}
            setStatus={setStatus}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default KittyCards;
