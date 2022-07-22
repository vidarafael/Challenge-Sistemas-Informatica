import {
  Box,
  Link,
  Text,
} from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { Link as ReachLink } from "react-router-dom"
import { TableFavorites } from "./TableFavorites"


function Favorites() {
  return (
    <>
      <Header />
      <Box
        width="100%"
        maxW="1280px"
        margin="50px auto"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize="3xl" fontWeight="bold">
            Meus favoritos
          </Text>

          <Link
            as={ReachLink}
            fontSize="1.25rem"
            fontWeight="bold"
            to="/"
          >
            Ver produtos{' >'}
          </Link>
        </Box>
        <Box
          maxW="1280px"
          marginTop="50px"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap="100px"
        >
          <TableFavorites />
        </Box>
      </Box>
    </>
  )
}

export { Favorites }