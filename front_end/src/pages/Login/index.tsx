import { Box, VStack, Img, Input, Text, Button, Link } from "@chakra-ui/react"
import logoEmpresa from "../../assets/LogoEmpresa.png"

function Login() {
  return (
    <Box
      height={"100vh"}
      width={"100vw"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width="100%"
        maxW={"560px"}
        height="640px"
        backgroundColor="blue.800"
        display="flex"
        flexDirection={"column"}
        padding="50px 100px"
        gap="50px"
        borderRadius="10px"
      >
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
        >
          <Text fontSize="3xl" fontWeight="bold">Sign In</Text>
          <Box backgroundColor="white" borderRadius="10px" marginTop="5px">
            <Img src={logoEmpresa} />
          </Box>
        </Box>
        <Box textAlign="left">
          <form>
            <VStack align="stretch">
              <label htmlFor="email">
                <Text
                  fontSize="1xl"
                  fontWeight="bold"
                >Email Address</Text>
              </label>
              <Input
                id="email"
                type='email'
                placeholder="ExampleEmail@hotmail.com"
                backgroundColor="blue.900"
                variant='filled'
                _hover={{ backgroundColor: "blue.500" }}
              />
            </VStack>
            <VStack align="stretch" marginTop="30px">
              <label htmlFor="password">
                <Text
                  fontSize="1xl"
                  fontWeight="bold"
                >Password</Text>
              </label>
              <Input
                id="password"
                type='password'
                placeholder="**********"
                backgroundColor="blue.900"
                variant='filled'
                _hover={{ backgroundColor: "blue.500" }}
              />
            </VStack>
          </form>
        </Box>
        <Box
          display="flex"
          flexDirection="column" gap="20px"
          alignItems="center"
        >
          <Button
            width="100%"
            backgroundColor="blue.500"
            _hover={{ backgroundColor: "blue.600" }}
          >Sign in</Button>
          <Link fontSize="0.9rem">Forgot your password?</Link>
        </Box>
      </Box>
    </Box >
  )
}

export { Login }