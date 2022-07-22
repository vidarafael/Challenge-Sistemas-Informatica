import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  Img
} from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'

function TableFavorites() {
  const productsFavorites = [
    {
      id: 'asdfoasdkfo1',
      title: 'Tênis Adidas',
      description: 'tênis casual e moderno',
      imageUrl: 'https://i.zst.com.br/thumbs/12/10/33/1952322327.jpg',
      price: 500
    },
    {
      id: 'asdfoasdkfo1',
      title: 'Tênis Adidas',
      description: 'tênis casual e moderno',
      imageUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1790130ab31944ddbb90aa4300cd10a9_9366/Tenis_Grand_Court_Base_Branco_EE7904_01_standard.jpg',
      price: 600
    }
  ]
  return (
    <>
      <TableContainer
        width="100%"
        maxWidth="1280px"
        borderRadius="10px"
      >
        <Table >
          <Thead backgroundColor="gray.700">
            <Tr>
              <Th color="white" borderColor="gray.700" fontSize="1xl">
                Imagem
              </Th>
              <Th color="white" borderColor="gray.700" fontSize="1xl">
                Título
              </Th>
              <Th color="white" borderColor="gray.700" fontSize="1xl">
                Descrição
              </Th>
              <Th color="white" borderColor="gray.700" fontSize="1xl">
                Preço
              </Th>
              <Th color="white" borderColor="gray.700" fontSize="1xl">

              </Th>
            </Tr>
          </Thead>
          <Tbody backgroundColor="gray.700" textColor="white">
            {productsFavorites.map((product, i) => {
              return (
                <Tr key={product.id} transition={'0.3s'}>
                  <Td
                    fontWeight="bold"
                    borderColor="gray.600"
                  >
                    <Img src={product.imageUrl}
                      borderRadius="50%"
                      width="100px"
                      height="100px"
                      objectFit="cover"
                    />
                  </Td>
                  <Td color="gray.300" borderColor="gray.600">
                    {product.title}
                  </Td>
                  <Td borderColor="gray.600">
                    {product.description}
                  </Td>
                  <Td fontSize="14px" color="gray.300" borderColor="gray.600">
                    {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL', currencyDisplay: 'narrowSymbol' }).format(product.price)}
                  </Td>
                  <Td fontSize="14px" color="gray.300" borderColor="gray.600">
                    <Button backgroundColor="red">
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Box
        bgColor="gray.700"
        borderBottomRadius="5px"
        height="50px"
        color="white"
      ></Box>
    </>
  )
}

export { TableFavorites }