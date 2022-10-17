import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Text,
  UnstyledButton,
  MediaQuery,
  Menu,
  Avatar,
} from "@mantine/core";
import LogoImg from "../assets/logo.svg";
import { FaUserAlt, BiLogOutCircle, FiChevronDown } from "react-icons/all";
import { useMediaQuery } from "@mantine/hooks";

type Props = {};

const Header = (props: Props) => {
  const [dateState, setDateState] = useState(new Date());
  const IsMatchWidth = useMediaQuery("(max-width: 500px)");
  useEffect(() => {
    const interval = setInterval(() => setDateState(new Date()), 20000);

    return () => clearInterval(interval);
  }, [dateState]);

  return (
    <Box
      sx={{ width: "100%", backgroundColor: "#00154D", color: "#fff" }}
      p={16}
    >
      <Container size="xl">
        <Grid justify={"space-between"} align="center">
          <Grid.Col span={3} sm={6} p={IsMatchWidth ? 0 : 8}>
            <Group spacing={48} align="center">
              <Group spacing={8}>
                <Center
                  sx={{
                    width: IsMatchWidth ? 30 : 35,
                    height: IsMatchWidth ? 30 : 35,
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                  }}
                >
                  <Image
                    src={LogoImg}
                    width={IsMatchWidth ? 20 : 25}
                    fit="contain"
                    title="logo"
                  />
                </Center>
                <Text size={IsMatchWidth ? "xs" : "md"}> POS</Text>
              </Group>
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Text>
                  {dateState.toLocaleDateString("en-GB", { weekday: "short" })}
                  {", "}

                  {dateState.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                  {", "}
                  {dateState.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </Text>
              </MediaQuery>
            </Group>
          </Grid.Col>
          <Grid.Col span={9} sm={6} p={IsMatchWidth ? 0 : 8}>
            <MediaQuery largerThan="lg" styles={{ display: "none" }}>
              <Group align="center" position="right">
                <Menu
                  openDelay={100}
                  closeDelay={5000}
                  width="200px"
                  shadow="md"
                >
                  <Menu.Target>
                    <UnstyledButton>
                      <Group spacing={0}>
                        <Avatar
                          size={IsMatchWidth ? 30 : 40}
                          radius="xl"
                          variant="filled"
                          color="brand.3"
                        ></Avatar>
                        <Text
                          color="white"
                          mr={IsMatchWidth ? 8 : 16}
                          sx={{ fontSize: IsMatchWidth ? 14 : 16 }}
                        >
                          Mahmoud Ahmed
                        </Text>
                        <FiChevronDown
                          color="#fff"
                          size={IsMatchWidth ? 20 : 25}
                        />
                      </Group>
                    </UnstyledButton>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item
                      color="red"
                      icon={<BiLogOutCircle color="inherit" size={25} />}
                    >
                      Logout
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </MediaQuery>
            <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
              <Group align="center" position="right" spacing={48}>
                <Group align="center" spacing={8}>
                  <FaUserAlt size={20} />
                  <Text size={"lg"}>Mahmoud Ahmed</Text>
                </Group>
                <UnstyledButton>
                  <Group align="center" spacing={8} sx={{ color: "white" }}>
                    <BiLogOutCircle size={24} />
                    <Text size={"lg"}>logout</Text>
                  </Group>
                </UnstyledButton>
              </Group>
            </MediaQuery>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
