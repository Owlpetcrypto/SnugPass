import { Flex, Image, Link, Box, Button } from '@chakra-ui/react'
import React from 'react'
import SnugLogo from './assets/logo.svg'

const NavBar = ({ accounts, setAccounts }) => {
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
    <nav>
      <Flex gap="80px" justify="center" align="center">
        <div className="Logo">
          <Image boxSize={'75px'} src={SnugLogo} />
        </div>
        <Link className="nav-font" href="#portal">
          Portal
        </Link>
        <Link className="nav-font" href="#thehole">
          The Hole
        </Link>
        <Link className="nav-font" href="#gravityconnect">
          Socials
        </Link>

        {/* Connect */}
        {/* {isConnected ? (
          <Box margin="0 30px">Connect</Box>
        ) : (
          <Button className="connect-button" onClick={connectAccount}>
            Connect
          </Button>
        )} */}
      </Flex>
    </nav>
  )
}

export default NavBar
