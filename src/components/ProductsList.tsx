import React from "react";
import Product from "./Product";
import { productsData } from "../testData";
import { Box, Grid, Group, Pagination ,Text } from "@mantine/core";

type Props = {};

const ProductsList = (props: Props) => {
  return (
    <Box my={16}>
      <Grid gutter={16}>
        {productsData.map((value) => (
          <Product data={value} key={value.id} />
        ))}
      </Grid>
      <Group position="apart" align="baseline">
      <Pagination total={4} mt={48} siblings={3} initialPage={1}  radius="xs"  color="brand.2"/>
      <Text color="brand.1">1 of 4</Text>
      </Group>
    </Box>
  );
};

export default ProductsList;
