import { Box } from "@chakra-ui/react"
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom"
import { useColorModeValue } from "./components/ui/color-mode"

function App() {


  return (
    <>
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/create" element={<CreatePage />}/>
      </Routes>
    </Box>
    </>
  )
}

export default App
