import { useState } from 'react'
import { Box, Flex, Link, Image } from '@chakra-ui/react'
import TwitterLogo from './assets/twitter.svg'
import DiscordLogo from './assets/discord.svg'
import PortalLogo from './assets/portal.jpeg'
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

      <Flex padding="0px 12px" flexDirection="column">
        <div className="snugpassbox">
          <div>
            <p>
              A Web3 infrastructure ecosystem, a technology based project,
              implementing NFT tech (digital ownership verficiation) in Web2
              company systems
            </p>
            <br></br>
            <p>
              Launching an easy-to-use product for building services without BIG
              developers
            </p>
            <p>
              Snug Pass growth will become increasingly likely for web2
              companies to make the transition.
            </p>
          </div>
        </div>

        <Mint />

        <div>
          <hr color="#00ffff" width="80%" marginTop="5rem"></hr>
        </div>

        <Box fontSize="x-large" marginTop="4rem">
          <h1 className="headingglow" id="thehole">
            PLAN OF TRAJECTORY
          </h1>
        </Box>

        <div className="grid">
          <BorderedBox subtitle="Phase 1">
            <p>- Launch 2000 collection passes with Lifetime access</p>
            <p>- Highlight importance of NFT Tech</p>
            <p>- Reveal in-depth plans with sneak peeks of product testings</p>
          </BorderedBox>

          <BorderedBox subtitle="Phase 2">
            <p>
              - Launch 5 main products: Web3 shopify, Connect-to-Wallet
              software, Web2.5 payment gateways, Smart escrow and Custom
              Contract Generator
            </p>
            <p>
              - Utilise mint funds to expand the development of the products.
              Additionally, public beta testers can enjoy a complimentary 7-day
              trial.
            </p>
          </BorderedBox>

          <BorderedBox subtitle="Phase 3">
            <p>
              - Apply monthly subscription for non-holders; The money raised is
              reinvested in developing the product ecosystem and expanding the
              brand
            </p>
            <p>- Schedule IRL events to promote SnugPass NFT innovations</p>
          </BorderedBox>

          <BorderedBox subtitle="ECOSYSTEM">
            <p>
              - NFT Tech: Our products provide equivalent services to the web2
              version, but they rely entirely on blockchain technology,
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
        <BorderedBox>
          <div>
            <p>1. What is the total supply of Snug Pass?</p>
            <p className="answers">- 2000 lifetime passes</p>
            <p>2. What is the mint price?</p>
            <p className="answers">
              - Snug List: 0.1 ETH | Public (any remains): 0.1 ETH
            </p>
            <p>3. How many Snug Passes can I mint?</p>
            <p className="answers">- Up to 2 passes</p>
            <p>4. What utilities does Snug Pass provide?</p>
            <p className="answers">
              - By obtaining a Snug Pass, you will gain exclusive, lifetime
              access to our products and technologies ahead of everyone else.
              Rather than paying a recurring monthly fee, this pass allows you
              to join our collaborative and exclusive community to contribute to
              our ecosystem. As a result, you'll become one of the pioneers of
              Snug Pass technology.
            </p>
            <p>5. What is the benefit of holding 2 passes?</p>
            <p className="answers">
              - While having just one pass grants you full access to the Snug
              ecosystem, holding two passes offers additional benefits,
              including future rewards and perks. These may include owning a
              share in the company and receiving a percentage of its profits.
              Essentially, having two passes is superior to having just one.
            </p>
          </div>
        </BorderedBox>
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
