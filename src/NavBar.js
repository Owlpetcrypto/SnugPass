import {
  Flex,
  Image,
  Link,
  Box,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import SnugLogo from "./assets/logo.svg";

function NavBar() {

  return (
    <header>
      <nav>
        <div className="top-menu">
          <div className="Logo">
            <Image boxSize={"75px"} src={SnugLogo} />
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
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
