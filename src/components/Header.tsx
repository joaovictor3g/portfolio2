import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsMoon, BsSun } from 'react-icons/bs';

interface HeaderProps {
    children: ReactNode;
}

export function Header({ children }: HeaderProps) {
    const { toggleColorMode, colorMode } = useColorMode();
    
    const bg = useColorModeValue("gray.200", "#1A202C");
    const color = useColorModeValue("white", "gray.800");

    return(
        <Box  
          display="flex"
          w="100%" 
          h="50px"
          alignItems="center"
          pl="10px"
          bg={bg}
          color={color}
        >
          <Button bg="transparent" onClick={toggleColorMode} alignItems="center">
            { colorMode==='dark' ? <BsMoon size={24} color="#999"/> : <BsSun size={24} color="#999"/> }
          </Button>
        </Box>
    );
}