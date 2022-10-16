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
} from "@mantine/core";
import LogoImg from "../assets/logo.svg";
import { FaUserAlt ,BiLogOutCircle } from "react-icons/all";

type Props = {};

const Header = (props: Props) => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <Box
      sx={{ width: "100%", backgroundColor: "#00154D", color: "#fff" }}
      p={16}
    >
      <Container size="xl">
        <Grid justify={"space-between"} align="center">
          <Grid.Col xs={6}>
            <Group spacing={48} align="center">
              <Group spacing={8}>
                <Center
                  sx={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                  }}
                >
                  <Image src={LogoImg} width={25} fit="contain" title="logo" />
                </Center>
                <Text size={"md"}> POS</Text>
              </Group>
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
                  second: "numeric",
                  hour12: true,
                })}
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col xs={6}>
              <Group  align="center" position="right" spacing={48}>
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
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
