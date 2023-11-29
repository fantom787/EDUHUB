import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadStyle } from './../Auth/Register';
const Profile = () => {
  const user = {
    name: 'Ambuj',
    email: 'ambuj14sept@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'admin`',
    subscription: {
      status: 'active',
    },
    playList: [
      {
        course: 'kjafjke',
        poster: 'url',
      },
    ],
  };
  const removeFromPlaylistHandler = id => {
    console.log('course Removed: ', id);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();
  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
  };
  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading m={'9'} textTransform={'uppercase'}>
        Profile
      </Heading>
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'}></Avatar>
          <Button onClick={onOpen} colorScheme='yellow' variant={'ghost'}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text fontWeight={'bold'}>Name: </Text>
            <Text>{user.name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>Email: </Text>
            <Text>{user.email}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>CreatedAt: </Text>
            <Text>{user.createdAt.split('T')[0]}</Text>
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text fontWeight={'bold'}>Subscription </Text>
              {user.subscription.status === 'active' ? (
                <Button color='yellow.500' variant={'unstyled'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme='yellow'>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button>Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading size={'md'} my={'8'}>
        Playlist
      </Heading>
      {user.playList.length && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          padding={'4'}
        >
          {user.playList.map(element => {
            return (
              <VStack w={'48'} m='2' key={element.course}>
                <Image
                  boxSize='full'
                  objectFit={'contain'}
                  src={element.poster}
                />
                <HStack>
                  <Link to={`/course/${element.course}`}>
                    <Button variant={'ghost'} colorScheme='yellow'>
                      Watch Now
                    </Button>
                  </Link>
                  <Button
                    onClick={() => removeFromPlaylistHandler(element.course)}
                  >
                    <RiDeleteBin7Fill />
                  </Button>
                </HStack>
              </VStack>
            );
          })}
        </Stack>
      )}
      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
};

const ChangePhotoBox = ({ isOpen, onClose, changeImageSubmitHandler }) => {
  const [image, setImage] = useState();
  const [imagePrev, setImagePrev] = useState();
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    console.log('cancel');
    onClose();
    setImagePrev('');
    setImage('');
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar boxSize={'48'} src={imagePrev} />}

                <Input
                  type='file'
                  css={fileUploadStyle}
                  onChange={changeImageHandler}
                />
                <Button w={'full'} colorScheme='yellow' type='submit'>
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr={'3'} onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Profile;
