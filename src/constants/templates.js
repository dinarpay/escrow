import React from 'react'

import {
  BLOCKCHAIN_NON_TECHNICAL_MULTIPLE_ARBITRABLE_INDEX,
  GENERAL_MULTIPLE_ARBITRABLE_INDEX
} from '../constants/addresses'

import {
  ARBITRABLE_ADDRESSES,
  ARBITRABLE_TOKEN_ADDRESSES
} from '../bootstrap/dapp-api'


import CryptoTransactionLogo from '../assets/crypto-transaction.png'
import CryptoTransactionLogoWhite from '../assets/crypto-transaction-white.png'
import GeneralServiceLogo from '../assets/general-service.png'
import GeneralServiceLogoWhite from '../assets/general-service-white.png'

const templates = [
  {
    value: 'cryptocurrency-transaction',
    logo: CryptoTransactionLogo,
    logoWhite: CryptoTransactionLogoWhite,
    optionalInputs: {
      'Blockchain': {
        type: 'text',
        tip: 'Enter the blockchain that the asset to exchange originates from. E.g. Bitcoin'
      },
      'Address': {
        type: 'text',
        tip: 'The address where this asset should be sent. E.g. 1CK6KHY6MHgYvmRQ4PAafKYDrg1ejbH1cE'
      },
      'Cryptoasset Description': {
        type: 'text',
        tip: 'The amount or value of the asset being exchanged. E.g. 2.3 BTC'
      },
      'Due Date': {
        type: 'date',
        tip: 'The date by which the specified asset must be transfered to the given address.'
      }
    },
    label: 'Cryptocurrency Transaction',
    description: 'Escrow funds to facilitate a crypto transaction. This can be used to for a safe cross chain swap. One person escrows one side of the trade in an asset based on ETH, and the funds are released after the funds on another blockchain have been moved.',
    content:
      '[Blockchain] address [Address] should receive [Cryptoasset Description] from the sender before [Due Date].',
    tips: [<span>Disputes will be resolved in the <b>Blockchain Non Technical Court</b> in Kleros</span>],
    address: {
      eth: ARBITRABLE_ADDRESSES[BLOCKCHAIN_NON_TECHNICAL_MULTIPLE_ARBITRABLE_INDEX],
      token: ARBITRABLE_TOKEN_ADDRESSES[BLOCKCHAIN_NON_TECHNICAL_MULTIPLE_ARBITRABLE_INDEX]
    }
  },
  {
    value: 'general-transaction',
    logo: GeneralServiceLogo,
    logoWhite: GeneralServiceLogoWhite,
    label: 'General Service',
    optionalInputs: {
      'Contract Information': {
        type: 'text',
        tip: 'Enter your own terms here. For long contracts, you can use the Agreement Document field above or copy and paste it here.'
      }
    },
    description: 'Hiring an outside contractor? Use the general escrow to safeguard these transactions. Use this option to define your own terms for any agreement.',
    content:
      '[Contract Information]',
    tips: [<span>Disputes will be resolved in the <b>General Court</b> in Kleros</span>],
    address: {
      eth: ARBITRABLE_ADDRESSES[BLOCKCHAIN_NON_TECHNICAL_MULTIPLE_ARBITRABLE_INDEX],
      token: ARBITRABLE_TOKEN_ADDRESSES[BLOCKCHAIN_NON_TECHNICAL_MULTIPLE_ARBITRABLE_INDEX]
    }
  },
]

export default templates
