import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container h={'90vh'} p={'16'}>
      <Heading my={'8'} textAlign={'center'}>
        You Have Pro Pack
      </Heading>
      <VStack
        boxShadow={'lg'}
        pb={'16'}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box
          width={'full'}
          bgColor={'yellow.400'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color={'black'}>Payment Success</Text>
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text>
              Congratulations You are A Pro Member. You Have Access To Premium
              Content
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to={'/profile'}>
          <Button variant={'ghost'}>GO TO Profile</Button>
        </Link>
        <Heading size={"xs"}>Reference No : q89yrq8r3783y4838ry3y</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
