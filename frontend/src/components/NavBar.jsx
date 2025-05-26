import { Container, Flex, Text, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorMode, useColorModeValue } from "./ui/color-mode";


const NavBar = () => {

    const {colorMode, toggleColorMode} = useColorMode();

    return(
        <>
        <Container maxW={"1140px"} px={4}>
            <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm: "row"
            }}
            >
                <Text
                fontSize={32}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                >
                    <Link to={"/"}>Product Store</Link>
                </Text>
                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}><Button>+</Button></Link>
                    <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? "🌙" : "☀️"}
                    </Button>
                </HStack>
            </Flex>
        </Container>
        </>
    )
}

export default NavBar;