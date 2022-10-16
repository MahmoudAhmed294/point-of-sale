import {
  Button,
  Grid,
  Loader,
  TextInput,
  Image,
  Group,
  Text,
} from "@mantine/core";
import logoW from "../assets/logoW.svg";
import { BsSearch } from "react-icons/bs";
import { IoBarcodeOutline } from "react-icons/all";

type Props = {
  card?: boolean;
};

const ScanCard = ({ card }: Props) => {
  return (
    <Grid align="center" >
      <Grid.Col md={10}>
        <TextInput
          size="lg"
          placeholder={card ? "1234 **** **** ****" : "Enter Item code"}
          icon={!card && <BsSearch size={20} />}
          rightSection={
            <Loader size="xs" color={ "brand.3"} />
          }
        />
      </Grid.Col>
      <Grid.Col md={2}>
        <Button
          size="lg"
          color={card ? "brand.3" : "brand.2"}
          leftIcon={
            card ? <Image src={logoW} /> : <IoBarcodeOutline size={30} />
          }
          sx={{ fontWeight: 400 }}
          fullWidth
        >
          Scan
        </Button>
      </Grid.Col>
      {card && (
        <Grid.Col xs={12} px={8} pt={16}>
          <Group sx={{color:"#00154D"}}  position="apart" align={"center"} >

          <Group   spacing={8}>
            <Text weight={600}>Student Name:</Text>
            <Text >Mahmoud Ahmed</Text>
          </Group>
          <Group   spacing={8}>
            <Text weight={600}>Balance::</Text>
            <Text >500 EGP</Text>
          </Group>
          </Group>
        </Grid.Col>
      )}
    </Grid>
  );
};

export default ScanCard;
