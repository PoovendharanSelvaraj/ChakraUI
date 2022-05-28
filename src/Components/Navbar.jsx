import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

export const Navbar = () => {
  return (
    <NavContainer>
      <div
        style={{ display: "flex", flex: "2", justifyContent: "space-between" }}
      >
        <Heading
          fontSize="large"
          size="lg"
          fontWeight="750"
          textAlign="center"
          margin="10px 20px 0px 10px"
        >
          Logo
        </Heading>
        <Menu margin="10px 20px 0px 10px">
          <MenuButton _focus={{ boxShadow: "outline" }}>Inspiration</MenuButton>
          <Portal>
            <MenuList>
              <MenuItem
                _hover={{ bg: "red.100" }}
                command={<ChevronRightIcon color="red.400" />}
              >
                Menu 1
              </MenuItem>
              <MenuItem
                _hover={{ bg: "red.100" }}
                command={<ChevronRightIcon color="red.400" />}
              >
                New Window
              </MenuItem>
              <MenuItem
                _hover={{ bg: "red.100" }}
                command={<ChevronRightIcon color="red.400" />}
              >
                Open Closed Tab
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
        <Menu>
          <MenuButton _focus={{ boxShadow: "outline" }}>Find work</MenuButton>
          <Portal>
            <MenuList>
              <MenuItem
                _hover={{ bg: "red.100" }}
                command={<ChevronRightIcon color="red.400" />}
              >
                Menu 1
              </MenuItem>
              <MenuItem
                _hover={{ bg: "red.100" }}
                command={<ChevronRightIcon color="red.400" />}
              >
                New Window
              </MenuItem>
              <MenuItem
                _hover={{ bg: "red.100" }}
                command={<ChevronRightIcon color="red.400" />}
              >
                Open Closed Tab
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
        <Menu>
          <MenuButton _focus={{ boxShadow: "outline" }}>
            Learn Designs
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton _focus={{ boxShadow: "outline" }}>
            Hire Designers
          </MenuButton>
        </Menu>
      </div>
      <div style={{ flex: "3", textAlign: "right", padding: "0 20px" }}>
        <Link mr="10px">sign in </Link>
        <Button _hover={{ backgroundColor: "gray" }} color="white" bg="tomato">
          Sign up
        </Button>
      </div>
    </NavContainer>
  );
};
