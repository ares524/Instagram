import {
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FadeInDown } from "../../animations";
import Link from "next/link";

import { Nav, Links, Discord, Logo, MenuC } from "./Header.module";

const Navbar = () => {
  return (
    <Nav>
      <FadeInDown>
        <SimpleGrid columns={3}>
          <Link href="/" passHref>
            <Logo>
              <img src="./Logoinsta.png" alt="logo" />
            </Logo>
          </Link>
          <Input placeholder="&#xF002; Search" />
          <SimpleGrid columns={6} gap={3} >
            <Logo>
              <img src="./VectorHome.png" alt="logo" />
            </Logo>
            <Logo>
              <img src="./Vectormessage.png" alt="logo" />
            </Logo>
            <Logo>
              <img
                src="./more.png"
                alt="logo"
                style={{ width: 22, height: 22 }}
              />
            </Logo>
            <Logo>
              <img src="./Vectorcompass.png" alt="logo" />
            </Logo>
            <Logo>
              <img src="./Vectorheart.png" alt="logo" />
            </Logo>
            <Logo>
              <img
                src="./profile.png"
                alt="logo"
                style={{ width: 35, height: 35 }}
              />
            </Logo>
          </SimpleGrid>
        </SimpleGrid>
      </FadeInDown>
    </Nav>
  );
};

export default Navbar;
