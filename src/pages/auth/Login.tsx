import {
  Image,
  Grid,
  Title,
  Container,
  Box,
  Stack,
  PasswordInput,
  TextInput,
  Button,
  Center,
  Group,
} from "@mantine/core";
import loginImg from "../../assets/loginbg.jpg";
import { MdPointOfSale } from "react-icons/md";
import { useAppDispatch } from "../../utils/hooks/useStore";
import { login } from "../../store/loginSlice";
import loginLogo from "../../assets/loginLogo.png";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const Navigate = useNavigate();
  return (
    <Grid p={0}>
      <Grid.Col
        xs={0}
        md={6}
        p={0}
        sx={(theme) => ({
          img: {
            maxHeight: "101vh",
          },
        })}
      >
        <Image
          src={loginImg}
          withPlaceholder
          fit="cover"
          height={"100vh"}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              zIndex: -1,
              "::after":{
                content:"''",
                width: "100%",
                height: "100%",
                backgroundColor: "#333333",
                opacity:0.5,
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            
              }
            },
          })}
        />
      </Grid.Col>
      <Grid.Col xs={12} md={6}>
        <Container size="sm" sx={{ height: "100%" }}>
          <Stack justify={"flex-start"} sx={{ height: "inherit" }}>
            <Group color="brand.3" position="apart" mt={24} mb={100}>
              <Image src={loginLogo} width={80} height={80} color="#00154D" />
              <Button color="brand.3" variant="outline" size="lg">
                العربيه
              </Button>
            </Group>
            <Title order={5} color="brand.3" 
            sx={theme=>({
              [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                color: '#fff'
              }
            })}>
              Enter your ID number associated with <br /> your account
            </Title>

            <Box component="form" sx={{ width: "100%" }}>
              <TextInput
                placeholder="Your name"
                size="lg"
                my={24}
                radius="xs"
              />

              <PasswordInput
                placeholder="Password"
                size="lg"
                mb={8}
                radius="xs"
              />

              <Button
                variant="filled"
                size="lg"
                fullWidth
                color="brand.3"
                mt={40}
                radius="xs"
                onClick={() => Navigate("/")}
              >
                Login
              </Button>
            </Box>
          </Stack>
        </Container>
      </Grid.Col>
    </Grid>
  );
};

export default Login;
