import { useColorModeValue } from "@/components/ui/color-mode";
import { toaster, Toaster } from "@/components/ui/toaster";
import { useProductStore } from "@/store/product";
import { Container, Heading, VStack, Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });
    const {createProduct} = useProductStore();
    const handleAddProduct = async() => {
        const {success,message} = await createProduct(newProduct);
        if(!success){
            toaster.error({
                title: 'Error: Please fill in all fields!',
            })
        }
        else{
            toaster.success({
                title: 'Product Created!',
            })
        }
    setNewProduct({name: "", price:"", image:""});
    }
    

    return(
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create New Product</Heading>
                <Box 
                w={"full"} bg={useColorModeValue("white", "gray.800")}
                p={6}
                rounded={"lg"}
                shadow={"md"}
                >
                    <VStack spacing={4}>
                        <Input 
                        placeholder='Product Name' 
                        name="name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        />
                        <Input 
                        placeholder='Price' 
                        name="price"
                        type="number"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        />
                        <Input 
                        placeholder='Image URL' 
                        name="image"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                        />
                        <Button onClick={handleAddProduct}>Add Product</Button>
                    </VStack>
                </Box>
            </VStack>
            <Toaster />
        </Container>
        
    )
}

export default CreatePage;