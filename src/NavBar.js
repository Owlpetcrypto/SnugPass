import {
  Flex,
  Image,
  Link,
  Box,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'
import SnugLogo from './assets/logo.svg'

function NavBar() {
  return (
    <header>
      <nav>
        <div className="top-menu">
          <div className="Logo">
            <Image boxSize={'75px'} src={SnugLogo} />
          </div>
          <Link className="nav-font" href="#portal">
            Portal
          </Link>
          <Link className="nav-font" href="#plan">
            Plan of Trajectory
          </Link>
          <Link className="nav-font" href="#faq">
            FAQ
          </Link>
          <Link className="nav-font" href="#gravityconnect">
            Socials
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
