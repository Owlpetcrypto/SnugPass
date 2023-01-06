import { Flex, Image, Link } from '@chakra-ui/react'
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
          <Image boxSize={'75px'} src={SnugLogo} border />
        </div>
        <Link fontSize="x-large">Portal</Link>
        <Link fontSize="x-large" href="#thehole">
          The Hole
        </Link>
        <Link fontSize="x-large" href="#gravityconnect">
          Socials
        </Link>

        {/* Connect */}
        {/* {isConnected ? (

                <Box margin="0 30px">Connect</Box>

            ) : (
                <Button 
                backgroundColor="#0E0D0B"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="inherit"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 30px"
                fontSize="23px"
                onClick={connectAccount}>Connect</Button>
            )} */}
      </Flex>
    </nav>
  )
}

export default NavBar
