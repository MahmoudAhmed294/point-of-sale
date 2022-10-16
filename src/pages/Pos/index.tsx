import { Container, Divider, Grid } from "@mantine/core";
import React from "react";
import Header from "../../components/Header";
import OrderList from "../../components/OrderList";
import ProductFilter from "../../components/ProductFilter";
import ScanCard from "../../components/ScanCard";

type Props = {};

const Index = (props: Props) => {
  return (
    <div>
      <Header />
      <Container size="xl" mt={24}>
        <Grid gutter={40}>
          <Grid.Col xs={12}  md={8}>
        <ScanCard  card/>
        <Divider my={24} />
        <ScanCard  />
        <ProductFilter />
          </Grid.Col>
          <Grid.Col xs={12} md={4} >
          <OrderList />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Index;
