import { Box, Button, Group, Text, Stack, Grid, Divider } from "@mantine/core";
import React from "react";
import { productsData } from "../testData";
import Order from "./Order";

type Props = {};

const OrderList = (props: Props) => {
  return (
    <Box>
      <Group position="apart" align="center">
        <Text> Current order</Text>
        <Button variant="light" color={"red"}>
          Clear all
        </Button>
      </Group>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: "''",
            height: 60,
            backgroundImage:
              "linear-gradient(rgb(255 , 255 , 255 , 0.5), rgb(255 , 255 , 255 ))",
            display: "block",
            position: "absolute",
            bottom: 0,
            left: -10,
            right: 10,
          },
        }}
      >
        <Grid
          mt={24}
          p={0}
          sx={{
            maxHeight: "430px",
            overflowY: "scroll",
            width: "100%",
            position: "relative",
            " ::-webkit-scrollbar": {
              width: 2,
            },
            "::-webkit-scrollbar-track": {
              background: "#D3D3D3",
            },
            " ::-webkit-scrollbar-thumb": {
              background: "#00154D",
            },
          }}
        >
          {productsData.map((value) => (
            <Order data={value} />
          ))}
        </Grid>
      </Box>
      <Stack mt={24}>
        <Group position="apart" align="center">
          <Text color="brand.3">Quantity</Text>
          <Text color="brand.3">x 0</Text>
        </Group>
        <Group position="apart" align="center">
          <Text color="brand.2">Discount</Text>
          <Text color="brand.2">0.00</Text>
        </Group>
        <Group position="apart" align="center">
          <Text color="brand.3">Total</Text>
          <Text color="brand.3">0 EGP</Text>
        </Group>
      </Stack>
      <Divider my={16} />
      <Group position="apart" align="center" mt={16}  grow >
          <Button variant="filled" color="brand.2" size="lg" fullWidth>
            Card
          </Button>
          <Button variant="outline" color="brand.2" size="lg" fullWidth>
            Cash
          </Button>
      </Group>
        <Button variant="filled" color="brand.3" size="lg" fullWidth mt={16}>
          Pay 120 EGP
        </Button>
      <Group position="apart" align="center" mt={8}>
          <Text color="brand.3" size={"sm"}>Balance due</Text>
          <Text color="brand.3" size={"sm"}>150 EGP</Text>
        </Group>

    </Box>
  );
};

export default OrderList;
