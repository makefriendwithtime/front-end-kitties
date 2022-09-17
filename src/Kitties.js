import React, { useEffect, useState } from "react";
import { Form, Grid } from "semantic-ui-react";

import { useSubstrateState } from "./substrate-lib";
import { TxButton } from "./substrate-lib/components";

import KittyCards from "./KittyCards";

export default function Kitties(props) {
  const { api, keyring, currentAccount } = useSubstrateState();
  const [status, setStatus] = useState("");
  const [kitties, setKitties] = useState([]);
  const [kittyIds, setKittyIds] = useState([]);
  const [kittyDNAs, setKittyDNAs] = useState([]);
  // const currentAddress = keyring.encodeAddress('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY');
  const currentAddress = currentAccount?.address;

  const fetchKitties = () => {
    let unsubscribe;
    setKittyIds([]);
    setKittyDNAs([]);
    api.query.kittiesModule
      .ownerKitties(currentAddress,(listArray) => {
        if (listArray !== []) {
          setKittyIds(listArray);
          api.query.kittiesModule.kitties
            .multi(listArray, (kittyDna) => {
              setKittyDNAs(kittyDna);
            })
            .catch(console.error);
        }
      })
      .then((unsub) => {
        unsubscribe = unsub;
      })
      .catch(console.error);

    return () => unsubscribe && unsubscribe();
  };

  const wrapKitties = () => {
    const kitties = [];

    for (let i = 0; i < kittyDNAs.length; ++i) {
      const kitty = {};
      kitty.id = parseInt(kittyIds[i]);
      kitty.dna = kittyDNAs[i].unwrap();
      kitty.owner = currentAddress;
      kitties[i] = kitty;
    }
    setKitties(kitties);
  };

  useEffect(fetchKitties, [api, keyring, currentAddress]);
  useEffect(wrapKitties, [keyring, kittyIds, kittyDNAs, currentAddress]);

  return (
    <Grid.Column width={16}>
      <h1>我的Kitty</h1>
      <KittyCards kitties={kitties} setStatus={setStatus} />
      <Form style={{ margin: "1em 0" }}>
        <Form.Field style={{ textAlign: "center" }}>
          <TxButton
            label="创建Kitty"
            type="SIGNED-TX"
            setStatus={setStatus}
            attrs={{
              palletRpc: "kittiesModule",
              callable: "create",
              inputParams: [],
              paramFields: [],
            }}
          />
        </Form.Field>
      </Form>
      <div style={{ overflowWrap: "break-word" }}>{status}</div>
    </Grid.Column>
  );
}