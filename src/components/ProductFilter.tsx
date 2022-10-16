import { Box, Button, Group, Tabs, TabsProps } from "@mantine/core";
import React from "react";
import ProductsList from "./ProductsList";

type Props = {};

function StyledTabs(props: TabsProps) {
    return (
      <Tabs
        unstyled
        styles={(theme) => ({
          tab: {
            ...theme.fn.focusStyles(),
            backgroundColor:  theme.colors.brand[2],
            color: '#fff',
            border: `1px solid ${theme.colors.brand[2]}`,
            padding: `${theme.spacing.lg}px ${theme.spacing.md}px`,
            cursor: 'pointer',
            fontSize: 18,
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            width:"100%",
            position: 'relative',
            transition:"0.2s  ease",
  
            '&:disabled': {
              opacity: 0.5,
              cursor: 'not-allowed',
            },
  
            '&:not(:first-of-type)': {
              borderLeft: 0,
            },
  
            '&:first-of-type': {
              borderTopLeftRadius: theme.radius.xs,
            },
  
            '&:last-of-type': {
              borderTopRightRadius: theme.radius.xs,
            },
  
            '&[data-active]:after': {
                content: "''",
                border:"unset",
              backgroundColor: "#fff",
              height: 8,
              width:'25%',
              borderRadius:"50px",
              position: "absolute",
              bottom:-2,
              transitionDelay:'0.5s',
              transition:"0.2s  ease",
            },
          },
  
          tabIcon: {
            marginRight: theme.spacing.xs,
            display: 'flex',
            alignItems: 'center',
          },
  
          tabsList: {
            display: 'flex',
          },
        })}
        {...props}
      />
    );
  }
  
const ProductFilter = (props: Props) => {
  return (
    <Box mt={24} sx={{backgroundColor:""}}>
      <StyledTabs>
        <Tabs.List grow position="center">
          <Tabs.Tab value="All">All Item</Tabs.Tab>
          <Tabs.Tab value="Food">Food</Tabs.Tab>
          <Tabs.Tab value="Cold drinks">Cold drinks</Tabs.Tab>
          <Tabs.Tab value="Hot drinks">Hot drinks</Tabs.Tab>
        </Tabs.List>
      </StyledTabs>
      <ProductsList/>
    </Box>
  );
};

export default ProductFilter;
