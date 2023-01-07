import { useState } from 'react'
import { Box, Flex, Link, Image } from '@chakra-ui/react'
import TwitterLogo from './assets/twitter.svg'
import DiscordLogo from './assets/discord.svg'
import PortalLogo from './assets/portal.jpeg'
import BorderOutline from './assets/box1.svg'

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
    <Box>
      <Flex justify="center" align="center">
        <Box fontSize="x-large" marginBottom="80px">
          <h1 className="headingglow">SNUG PASS</h1>
        </Box>
      </Flex>
      <Flex flexDirection="column">
        <Image src={BorderOutline} />
        <div className="snugpassbox">
          <div>
            <p>
              Snug Pass is about raising awareness of Web3 & NFT technology.
            </p>
            <p>
              Built into a cozy hole, far in the space to secure the warmth for
              a collaborative & innovative environment!
            </p>
          </div>
          <br></br>
          <div>
            <p>
              Snug Pass Group was built to highlight the big opportunities that
              exist in web3, and to benefit their members with numerous
              opportunities
            </p>
          </div>
        </div>

        <Link
          className="check-the-pitch-deck-button"
          href="https://pitch.com/public/813c6880-78b1-4b9d-b695-27814b4c27ff"
        >
          CHECK THE PITCH DECK
        </Link>

        <div>
          <hr color="#00ffff" width="80%"></hr>
        </div>

        {/* second section */}
        <Box>
          <h1 className="headingglow" id="portal">
            Portal
          </h1>
        </Box>

        <div>
          <Image className="portal-logo" src={PortalLogo} />
        </div>

        <Link className="enter-button" href="https://snugpass.club/">
          ENTER
        </Link>

        <div>
          <hr color="#00ffff" width="80%"></hr>
        </div>

        {/* third section */}

        <Box fontSize="x-large" marginTop="1.9%">
          <h1 className="headingglow" id="thehole">
            THE HOLE
          </h1>
        </Box>

        <div className="grid">
          <BorderedBox
            title="WIDE SPACE OF KNOWLEDGE"
            subtitle="EDUCATIONAL CONTENT:"
          >
            <p>- The blockchain technology</p>
            <p>- The revolutionary ownership verification technology</p>
            <p>
              - Raise awareness about how to benefit from that 1 opportunity in
              our lives
            </p>
          </BorderedBox>

          <BorderedBox
            title="MONEY MAKING OPPORTUNITIES"
            subtitle="COLLABORATIVE EXCLUSIVE COMMUNITY LEADS TO:"
          >
            <p>- Web3 jobs spread</p>
            <p>- Instructions for founders/builders</p>
            <p>- Leak tons of connections through the spacetime</p>
          </BorderedBox>

          <BorderedBox
            title="ADOPTION OF IDEAS AND RAISING INNOVATIONS"
            subtitle="INNOVATIVE MEMBERS CHOSEN THROUGH A COMPETITIVE SPACESHIP APPLICATION SYSTEM LEADS TO:"
          >
            <p>- The wave of innovative ideas</p>
            <p>
              - Raising these ideas to make helpful products that will benefit
              companies and individuals
            </p>
          </BorderedBox>

          <BorderedBox
            title="CONTRIBUTE TO SNUG LABS ECOSYSTEM"
            subtitle="A DIFFERENT STORY BUT IT'S THE FOUNDATION..."
          >
            <p>- Split share</p>
          </BorderedBox>
        </div>
      </Flex>

      {/* fourth section */}

      <div>
        <hr color="#00ffff" width="80%"></hr>
      </div>

      <Box fontSize="x-large" marginTop="5%" marginBottom="80px">
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
