import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Users = () => {
  const users = [
    {
      _id: '093u923',
      name: 'Ambuj',
      email: 'ambuj14sept@gmail.com',
      role: 'Admin',
      subscription: {
        status: 'active',
      },
    },
  ];
  const updateHandler = id => {
    console.log(id);
  };
  const deleteUserHandler = id => {
    console.log(id);
  };
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '16']} overflow={'auto'}>
        <Heading
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        >
          All Users
        </Heading>
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available Users In The Database</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name </Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
              {users.map((e, index) => (
                <Row
                  key={e._id}
                  item={e}
                  updateHandler={updateHandler}
                  deleteUserHandler={deleteUserHandler}
                />
              ))}
            </Thead>
            <Tbody></Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

const Row = ({ item, updateHandler, deleteUserHandler }) => {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'purple.500'}
            onClick={() => updateHandler(item._id)}
          >
            Change Role
          </Button>
          <Button
            color={'purple.600'}
            onClick={() => deleteUserHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};
