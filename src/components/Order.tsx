import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Image,
  NumberInput,
  Stack,
  Text,
} from "@mantine/core";
import { useCounter } from "@mantine/hooks";

import React from "react";
import { BiMinus, AiOutlinePlus, MdDelete } from "react-icons/all";
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

const Order = ({ data }: Props) => {
  const [count, handlers] = useCounter(1, { min: 1 });

  return (
    <Grid.Col xs={12} p={0} pr={16} >
      <Group align={"center"} position="apart">
        <Image
          src={data.image}
          alt={data.name}
          fit="contain"
          width={63}
          height={58}
        />
        <Box sx={{ width: "70%" }}>
          <Group align={"baseline"} position="apart">
            <Text
              size={"md"}
              sx={{ maxWidth: "60%" }}
              color="brand.3"
              lineClamp={1}
            >
              {data.name}
            </Text>
            <Text size={"md"} color="brand.3">
              {data.price} EGP
            </Text>
          </Group>
          <Text size={"md"} color="brand.1">
            Item code. {data.code}
          </Text>
          <Group position="left" mt={12}>
            <ActionIcon
              sx={(theme) =>({ backgroundColor: count !== 1 ?  "#E2E2E2" : theme.colors.red[2]  })}
              variant="light"
              color={count !== 1 ? "brand.3" : "red.6"}
              onClick={handlers.decrement}
              size={"lg"}
            >
              {count !== 1 ? <BiMinus size={24} /> : <MdDelete size={24} />}
            </ActionIcon>

            <NumberInput
              defaultValue={1}
              value={count}
              hideControls
              sx={{
                input: {
                  width: 36,
                  textAlign: "center",
                  border: "2px solid #00154D",
                },
              }}
            />

            <ActionIcon
              sx={{ backgroundColor: "#E2E2E2" }}
              variant="light"
              color="brand.3"
              onClick={handlers.increment}
              size={"lg"}
            >
              <AiOutlinePlus size={24} />
            </ActionIcon>
          </Group>
        </Box>
      </Group>
      <Divider my={12} />
    </Grid.Col>
  );
};

export default Order;
