import {
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FadeInDown } from "../../animations";
import Link from "next/link";

import {
  Nav,
  Links,
  Discord,
  Logo,
  MenuC
} from "./Header.module";

const Navbar = () => {
 
  return (
    <Nav>
      <FadeInDown>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }}>
          <Link href="/" passHref>
            <Logo>
              <strong>
                <code>LOGO</code>
              </strong>
            </Logo>
          </Link>
          <Links className="text-2">
            <SimpleGrid columns={3} spacing={10}>
              <Link
                href="/"
              >
                Home
              </Link>
              <Link
                href="/"
              >
                About
              </Link>
            </SimpleGrid>
          </Links>
          <Discord
            href="https://discord.gg/xBq4QSmjMp"
            target="_blank"
            rel="noreferrer"
            className="text-2"
          >
            Discord
          </Discord>
          <MenuC>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon w={6} h={6} />}
              />

              <MenuList className="text-2">
                <Link href="/" passHref>
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link href="/about" passHref>
                  <MenuItem>About Us</MenuItem>
                </Link>
                <Link href="/ctf" passHref>
                  <MenuItem>CTFs</MenuItem>
                </Link>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hackarmour"
                >
                  <MenuItem icon={<ExternalLinkIcon />}>Github</MenuItem>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/xBq4QSmjMp"
                >
                  <MenuItem icon={<ExternalLinkIcon />}>Discord</MenuItem>
                </a>
              </MenuList>
            </Menu>
          </MenuC>
        </SimpleGrid>
      </FadeInDown>
    </Nav>
  );
};

export default Navbar;
