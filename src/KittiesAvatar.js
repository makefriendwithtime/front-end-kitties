import React from 'react'

const IMAGES = {
  accessory: [
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_1.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_2.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_3.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_4.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_5.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_6.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_7.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_8.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_9.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_10.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_11.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_12.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_13.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_14.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_15.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_16.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_17.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_18.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_19.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/accessorie_20.png`
  ],
  body: [
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_1.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_2.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_3.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_4.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_5.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_6.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_7.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_8.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_9.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_10.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_11.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_12.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_13.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_14.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/body_15.png`
  ],
  eyes: [
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_1.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_2.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_3.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_4.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_5.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_6.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_7.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_8.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_9.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_10.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_11.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_12.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_13.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_14.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/eyes_15.png`
  ],
  mouth: [
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/mouth_1.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/mouth_2.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/mouth_3.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/mouth_4.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/mouth_5.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/mouth_6.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/mouth_7.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/mouth_8.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/mouth_9.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/mouth_10.png`
  ],
  fur: [
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/fur_1.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/fur_2.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/fur_3.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/fur_4.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/fur_5.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/fur_6.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/fur_7.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/fur_8.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/fur_9.png`,
    `${process.env.PUBLIC_URL}/assets/KittiesAvatar/fur_10.png`
  ]
}

const dnaToAttributes = dna => {
  const attribute = (index, type) => IMAGES[type][dna[index] % IMAGES[type].length]

  return {
    body: attribute(0, 'body'),
    eyes: attribute(1, 'eyes'),
    accessory: attribute(2, 'accessory'),
    fur: attribute(3, 'fur'),
    mouth: attribute(4, 'mouth')
  }
}

const KittiesAvatar = props => {
  const outerStyle = { height: '160px', position: 'relative', width: '50%' }
  const innerStyle = { height: '150px', position: 'absolute', top: '3%', left: '50%' }
  const { dna } = props

  if (!dna) return null

  const cat = dnaToAttributes(dna)
  return (
    <div style={outerStyle}>
      <img alt='body' src={cat.body} style={innerStyle} />
      <img alt='fur' src={cat.fur} style={innerStyle} />
      <img alt='mouth' src={cat.mouth} style={innerStyle} />
      <img alt='eyes' src={cat.eyes} style={innerStyle} />
      <img alt='accessory' src={cat.accessory} style={innerStyle} />
    </div>
    )
  }

export default KittiesAvatar
