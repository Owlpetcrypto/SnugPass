import { useState } from 'react'
import { Box, Flex, Link, Image } from '@chakra-ui/react'
import TwitterLogo from './assets/twitter.svg'
import DiscordLogo from './assets/discord.svg'
import Mint from './mint'

function BorderedBox({ title, subtitle, children }) {
  return (
    <div className="bordered-box">
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </div>
  )
}

const Main = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0])

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setAccounts(accounts)
    }
  }

  return (
    <Box id="portal">
      <Flex justify="center" align="center">
        <Box fontSize="x-large">
          <h1 className="headingglow">SNUG PASS</h1>
          <p className="mission-statement"></p>
        </Box>
      </Flex>

      <Mint />

      <Flex padding="0px 12px" flexDirection="column">
        <div className="snugpassbox">
          <div>
            <p>The future of Web3 with our game-changing project:</p>
            <p>
              A Web3 infrastructure ecosystem that uses NFT tech to verify
              digital ownership in Web2 company systems, an easy-to-use product
              for building services without <em>BIG</em> developers.
            </p>
            <br></br>
            <p>
              Snug Pass will pave the way for Web2 companies to make the
              transition
            </p>
          </div>
        </div>

        <div>
          <hr color="#00ffff" width="80%" marginTop="5rem"></hr>
        </div>

        <Box fontSize="x-large" marginTop="4rem">
          <h1 className="headingglow" id="plan">
            PLAN OF TRAJECTORY
          </h1>
        </Box>

        <div className="grid">
          <BorderedBox subtitle="Phase 1">
            <p>&#9670; Launch 2000 collection passes with Lifetime access</p>
            <p>&#9670; Highlight importance of NFT Tech</p>
            <p>
              &#9670; An exclusive look at our in-depth plans with sneak peeks
              of product testing
            </p>
          </BorderedBox>

          <BorderedBox subtitle="Phase 2">
            <p>
              &#9670; Launch 5 main products: Web3 shopify, Connect-to-Wallet
              software, Web2.5 payment gateways, Smart escrow and Custom
              Contract Generator
            </p>
            <p>
              &#9670; Utilise mint funds to expand the development of the
              products. Additionally, public beta testers can enjoy a FREE 7-day
              trial.
            </p>
          </BorderedBox>

          <BorderedBox subtitle="Phase 3">
            <p>
              &#9670; Apply monthly subscription for non-holders; The money
              raised is reinvested in developing the product ecosystem and
              expanding the brand
            </p>
            <p>
              &#9670; Schedule IRL events to promote SnugPass NFT innovations
            </p>
          </BorderedBox>

          <BorderedBox subtitle="ECOSYSTEM">
            <p>
              &#9670; NFT Tech: Our products provide equivalent services to the
              web2 version, but they rely entirely on blockchain technology,
              utilizing dynamic smart contracts, tokenization, and tracking
              systems. This enhances decentralization, transparency, and
              security
            </p>
          </BorderedBox>
        </div>
      </Flex>

      <div>
        <hr
          color="#00ffff"
          width="80%"
          marginTop="5rem"
          marginBottom="80px"
        ></hr>
      </div>

      <Box fontSize="x-large" marginTop="6rem">
        <h1 className="headingglow" id="faq">
          FAQ
        </h1>
      </Box>
      <div className="faq-section">
        <details>
          <summary>&#9670; What is the total supply of Snug Pass?</summary>
          <p className="answers">&#9671; 2000 lifetime passes</p>
        </details>
        <details>
          <summary>
            &#9670; What is the Snug List and Public mint price?
          </summary>
          <p className="answers">&#9671; 0.1 ETH</p>
        </details>
        <details>
          <summary>&#9670; How many Snug Passes can I mint?</summary>
          <p className="answers">&#9671; Up to 3 passes</p>
        </details>
        <details>
          <summary>&#9670; What utilities does Snug Pass provide?</summary>
          <p className="answers">
            &#9671; By obtaining a Snug Pass, you will gain exclusive, lifetime
            access to our products and technologies ahead of everyone else.
            Rather than paying a recurring monthly fee, this pass allows you to
            join our collaborative and exclusive community to contribute to our
            ecosystem. As a result, you'll become one of the pioneers of Snug
            Pass technology.
          </p>
        </details>
        <details>
          <summary>&#9670; What is the benefit of holding 2 passes?</summary>
          <p className="answers">
            &#9671; While having one pass grants you full access to the Snug
            ecosystem, holding two passes offers additional benefits, including
            future rewards and perks. These may include owning a share in the
            company and receiving a percentage of its profits. Essentially,
            having two passes is superior to having one.
          </p>
        </details>
      </div>

      <div>
        <hr color="#00ffff" width="80%" marginTop="5rem"></hr>
      </div>

      <Box fontSize="x-large" marginTop="7rem" marginBottom="80px">
        <h1 className="headingglow" id="gravityconnect">
          GRAVITY CONNECT
        </h1>
      </Box>

      <Box>
        <Flex justify="center" align="center">
          <Box className="logos">
            <Link href="https://twitter.com/Snugpass">
              <Image boxSize={'120px'} src={TwitterLogo} />
            </Link>
          </Box>

          <Box className="logos">
            <Link href="https://discord.gg/YFF5eASHkM">
              <Image boxSize={'120px'} src={DiscordLogo} />
            </Link>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Flex justify="center" align="center">
          <Flex
            justify="center"
            align="center"
            padding="50px 6%"
            justifyContent={'space-between'}
          >
            <Box className="snugtitles">
              <h1>SNUG PASS</h1>
            </Box>
            <Box className="snugtitles">
              <h1>SNUG LABS</h1>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box>
        <p>&copy; 2022 Snug Pass x Snug Labs. ALL RIGHTS RESERVED</p>
      </Box>
    </Box>
  )
}

export default Main
