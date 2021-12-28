import {
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { HamburgerIcon, ExternalLinkIcon, SearchIcon } from '@chakra-ui/icons'
import { FadeInDown } from '../../animations'
import Link from 'next/link'

import HomeIcon from '../Icons/HomeIcon'
import LightIcon from '../Icons/LightIcon'

import { Nav, Links, Icons, Logo, MobileCollapseMenu } from './Header.module'
import PlusIcon from '../Icons/PlusIcon'
import CompassIcon from '../Icons/CompassIcon'
import HeartIcon from '../Icons/HeartIcon'
import AvatarIcon from '../Icons/AvatarIcon'

const Navbar = () => {
  return (
    <Nav>
      <Container maxW="container.xl">
        <FadeInDown>
          <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }}>
            <Link href="/" passHref>
              <Logo>
                <img src="/images/Logo.png" alt="LOGO" />
              </Logo>
            </Link>
            <Links className="text-2">
              <SimpleGrid spacing={10}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                  />
                  <Input placeholder="Search" isFullWidth size="md" />
                </InputGroup>
              </SimpleGrid>
            </Links>
            <Icons>
              <HomeIcon />
              <LightIcon />
              <PlusIcon />
              <CompassIcon />
              <HeartIcon />
              <AvatarIcon />
            </Icons>
            <MobileCollapseMenu>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon w={6} h={6} />}
                />

                <MenuList className="text-2 mobile-menu-icon">
                  <HomeIcon />
                  <LightIcon />
                  <PlusIcon />
                  <CompassIcon />
                  <HeartIcon />
                </MenuList>
              </Menu>
            </MobileCollapseMenu>
          </SimpleGrid>
        </FadeInDown>
      </Container>
    </Nav>
  )
}

export default Navbar
