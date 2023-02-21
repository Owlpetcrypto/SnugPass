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
            <p>THE FUTURE OF WEB3 WITH OUR GAME-CHANGING PROJECT:</p>
            <p>
              A WEB3 INFRASTRUCTURE ECOSYSTEM THAT USES NFT TECHNOLOGY TO VERIFY
              DIGITAL OWNERSHIP IN WEB2 COMPANY SYSTEMS, AN EASY-TO-USE PRODUCT
              FOR BUILDING SERVICES WITHOUT <em>BIG</em> DEVELOPERS
            </p>
            <br></br>
            <p>
              SNUG PASS WILL PAVE THE WAY FOR WEB2 COMPANIES TO MAKE THE
              TRANSITION
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
            <p>&#9670; LAUNCH 2000 COLLECTION PASSES WITH LIFETIME ACCESS</p>
            <p>&#9670; HIGHLIGHT THE IMPORTANCE OF NFT TECHNOLOGIES</p>
            <p>
              &#9670; AN EXCLUSIVE LOOK AT OUR IN-DEPTH TRAJECTORY WITH SNEAK
              PEEKS OF PRODUCT TESTINGS
            </p>
          </BorderedBox>

          <BorderedBox subtitle="Phase 2">
            <p>
              &#9670; LAUNCH 5 CORE PRODUCTS: WEB3 SHOPIFY, CONNECT-TO-WALLET
              SOFTWARE, WEB2.5 PAYMENT GATEWAYS, SMART ESCROW AND CUSTOM
              CONTRACT GENERATOR
            </p>
            <p>
              &#9670; UTILISE MINT FUNDS TO EXPAND PRODUCT DEVELOPMENT. PUBLIC
              BETA TESTERS CAN ENJOY A FREE 7-DAY TRIAL
            </p>
          </BorderedBox>

          <BorderedBox subtitle="Phase 3">
            <p>
              &#9670; APPLY MONTHLY SUBSCRIPTION FOR NON-HOLDERS; THE MONEY
              RAISED IS REINVESTED INTO THE PRODUCT ECOSYSTEM AND EXPANDING THE
              BRAND
            </p>
            <p>
              &#9670; SCHEDULE IRL EVENTS TO PROMOTE SNUG PASS NFT INNOVATIONS
            </p>
          </BorderedBox>

          <BorderedBox subtitle="ECOSYSTEM">
            <p>
              &#9670; NFT TECHNOLOGY: OUR PRODUCTS PROVIDE EQUIVALENT SERVICES
              TO WEB2, BUT THEY RELY ENTIRELY ON BLOCKCHAIN TECHNOLOGY,
              UTILIZING DYANMIC SMART CONTRACTS, TOKENIZATION, AND TRACKING
              SYSTEMS. THIS WILL ENHANCE DECENTRALIZATION, TRANSPARENCY, AND
              SECURITY
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
          <summary>&#9670; WHAT IS THE TOTAL SUPPLY OF SNUG PASS?</summary>
          <p className="answers">&#9671; 2000 LIFETIME PASSES</p>
        </details>
        <details>
          <summary>
            &#9670; WHAT IS THE SNUG LIST AND PUBLIC MINT PRICE?
          </summary>
          <p className="answers">&#9671; 0.049 ETH AND 0.059 ETH</p>
        </details>
        <details>
          <summary>&#9670; HOW MANY SNUG PASSES CAN I MINT?</summary>
          <p className="answers">&#9671; UP TO 3 PASSES</p>
        </details>
        <details>
          <summary>&#9670; WHAT UTILITIES DOES SNUG PASS PROVIDE?</summary>
          <p className="answers">
            &#9671; BY OBTAINING A SNUG PASS, YOU WILL GAIN EXCLUSIVE, LIFETIME
            ACCESS TO OUR PRODUCTS AND TECHNOLOGIES AHEAD OF EVERYONE ELSE.
            RATHER THAN PAYING A RECURRING MONTHLY FEE, THIS PASS ALLOWS YOU TO
            JOIN OUR COLLABORATIVE AND EXCLUSIVE COMMUNITY AND BECOME ONE OF THE
            PIONEERS OF SNUG PASS TECHNOLOGY
          </p>
        </details>
        <details>
          <summary>
            &#9670; WHAT IS THE BENEFIT OF HOLDING 2 OR MORE PASSES?
          </summary>
          <p className="answers">
            &#9671; WHILE HAVING ONE PASS GRANTS YOU FULL ACCESS TO THE SNUG
            ECOSYSTEM, HOLDING TWO OR MORE PASSES OFFERS ADDITIONAL BENEFITS,
            INCLUDING FUTURE REWARDS AND PERKS. THESE MAY INCLUDE OWNING A SHARE
            IN THE COMPANY AND RECEIVING A PERCENTAGE OF ITS PROFITS.
            ESSENTIALLY, HAVING TWO PASSES IS SUPERIOR TO HAVING ONE
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

      <footer id="contact">
        <ul className="footer__nav">
          <li>
            <a href="#portal"> PORTAL</a>
          </li>
          <li>
            <a href="#plan"> PLAN OF TRAJECTORY</a>
          </li>
          <li>
            <a href="#faq"> FAQ</a>
          </li>
          <li>
            <a href="#gravityconnect"> GRAVITY CONNECT</a>
          </li>
        </ul>
        <div className="footer__copyright">
          <small>&copy; 2022 Snug Pass x Snug Labs. ALL RIGHTS RESERVED</small>
        </div>
      </footer>
    </Box>
  )
}

export default Main
