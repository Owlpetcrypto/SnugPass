import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  import { Link } from 'react-router-dom';
  import SnugLogo from './assets/Logo.jpg';
  
  export default function NavBar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('teal.200', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>

          <Flex  flex={{ base: 1 }} justify={{ base: 'center', md: 'space-between' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={'white'}
              fontWeight={600}
              fontSize={'large'}>
              <Link to="/"><Image boxSize={'55px'} objectFit={'cover'} borderRadius={'full'} src={SnugLogo} /> </Link>
            </Text>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={'white'}
              fontWeight={600}
              fontSize={'large'}>
              <Link to="/"> Portal </Link>
            </Text>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={'white'}
              fontWeight={600}
              fontSize={'large'}>
              <Link to="/"> The Hole </Link>
            </Text>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={'white'}
              fontWeight={600}
              fontSize={'large'}>
              <Link to="/"> Socials </Link>
            </Text>
  
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              display={{ md: 'inline-flex' }}
              fontSize={'large'}
              fontWeight={600}
              color={'white'}
              bg={'teal.500'}
              href={'#'}
              _hover={{
                bg: 'teal.300',
              }}>
              Connect Wallet
            </Button>
          </Stack>
        </Flex>
      </Box>
    );
  }
  
  
  const NAV_ITEMS= [

  ];