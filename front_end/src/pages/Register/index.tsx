import { Box, VStack, Img, Input, Text, Button, Link } from "@chakra-ui/react"
import { Link as ReachLink } from "react-router-dom"
import { ChevronLeftIcon } from '@chakra-ui/icons'

function Register() {
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
        height="600px"
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
          <Box
            borderRadius="10px"
            marginTop="5px"
            display="flex"
            alignItems="center"
            justifyContent="left"
            width="100%"
          >
            <Link
              as={ReachLink}
              to="/login"
              style={{ textDecoration: "none" }}
            >
              <Button
                backgroundColor="blue.500"
                _hover={{ backgroundColor: "blue.600" }}
              >
                <ChevronLeftIcon />
                Voltar
              </Button>
            </Link>
          </Box>
        </Box>
        <Box textAlign="left">
          <form>
            <VStack align="stretch">
              <label htmlFor="email">
                <Text
                  fontSize="1xl"
                  fontWeight="bold"
                >Nome</Text>
              </label>
              <Input
                id="name"
                type='text'
                placeholder="Seu nome"
                backgroundColor="blue.900"
                variant='filled'
                _hover={{ backgroundColor: "blue.500" }}
              />
            </VStack>
            <VStack align="stretch" marginTop="30px">
              <label htmlFor="email">
                <Text
                  fontSize="1xl"
                  fontWeight="bold"
                >Email</Text>
              </label>
              <Input
                id="email"
                type='email'
                placeholder="exemplo@hotmail.com"
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
                >Senha</Text>
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
          >
            REGISTRAR
          </Button>
        </Box>
      </Box>
    </Box >
  )
}

export { Register }