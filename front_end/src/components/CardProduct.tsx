import { Box, Button, Img, Text } from "@chakra-ui/react"

interface ICardProductProps {
  image?: string;
  title: string;
  description: string;
  price?: number;
}

function CardProduct({
  image,
  title,
  description,
  price
}: ICardProductProps) {
  return (
    <Box
      width="300px"
      minHeight="480px"
      backgroundColor="gray.700"
      borderRadius="10px"
    >
      <Img
        src={image || "https://static.netshoes.com.br/produtos/tenis-adidas-streetcheck-feminino/12/3ZP-5017-112/3ZP-5017-112_zoom3.jpg?ts=1643206328&ims=544x"}
        height="300px"
        width="100%"
        objectFit="cover"
        borderTopRadius="10px"
      />
      <Box
        padding="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text
          fontSize="1.2rem"
          textAlign="center"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text color="gray.400" marginTop="10px">
          {description}
        </Text>
        <Text color="gray.200" marginTop="10px" textAlign="center" >
          R$ {price}
        </Text>
        <Button
          marginTop="15px"
          backgroundColor="black"
          _hover={{ backgroundColor: "yellow.500" }}
        >
          Adicionar aos favoritos
        </Button>
      </Box>
    </Box>
  )
}

export { CardProduct }