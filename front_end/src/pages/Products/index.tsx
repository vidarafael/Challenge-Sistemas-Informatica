import { Box, Link, Text } from "@chakra-ui/react"
import { CardProduct } from "../../components/CardProduct"
import { Header } from "../../components/Header"
import { Link as ReachLink } from "react-router-dom"

function Products() {
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
            Produtos
          </Text>

          <Link
            as={ReachLink}
            fontSize="1.25rem"
            fontWeight="bold"
            to="/favorites"
          >
            Meus favoritos{' >'}
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
          <CardProduct title="Tênis Adidas" description="Tênis casual confortavel para todos os momentos." price={400} />
          <CardProduct title="Tênis Adidas" description="Tênis casual confortavel para todos os momentos." price={400} />
          <CardProduct title="Tênis Adidas" description="Tênis casual confortavel para todos os momentos." price={400} />
          <CardProduct title="Tênis Adidas" description="Tênis casual confortavel para todos os momentos." price={400} />
          <CardProduct title="Tênis Adidas" description="Tênis casual confortavel para todos os momentos." price={400} />
          <CardProduct title="Tênis Adidas" description="Tênis casual confortavel para todos os momentos." price={400} />
        </Box>
      </Box>
    </>
  )
}

export { Products }