import { Box, Grid, Group, Text, Image, Stack } from "@mantine/core";
import React from "react";

type Props = {
  data: {
    id: number;
    name: string;
    type: string;
    price: number;
    code: string;
    image: string;
  };
};

const Product = ({ data }: Props) => {
  return (
    <Grid.Col xs={12} sm={6} md={4} lg={3} >
      <Box
        sx={{
          boxShadow: "0 3px 10px rgb(0 , 0 ,0,0.1)",
          borderRadius: 8,
          height: "100%",
          maxHeight:200
        }}
        p={16}
      >
        <Stack justify={"space-between"} sx={{height:"100%"}}>
          <div>
            <Text size={"sm"} color="brand.3">
              {data.name}
            </Text>
            <Text size={"xs"} color="brand.1" mt={8}>
              Item code. {data.code}
            </Text>
          </div>
          <Group align={"flex-end"} position="apart" mt={8}>
            <Text mb={8}>50 EGP</Text>
            <Image src={data.image} width={70} height={70} fit="contain" />
          </Group>
        </Stack>
      </Box>
    </Grid.Col>
  );
};

export default Product;
