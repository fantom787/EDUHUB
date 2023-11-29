import React from 'react';
import { ColorModeSwitcher } from './../../../ColorModeSwitcher.js';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const ButtonComponent = ({ url = '/', text = 'Home', onClose }) => {
  return (
    <Link onClick={onClose} to={url}>
      <Button variant={'ghost'}>{text}</Button>
    </Link>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };
  const LogoutHandler = () => {
    console.log('Logout');
    onClose();
  };

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme='yellow'
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
        zIndex={'overlay'}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>EDUHUB</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <ButtonComponent url='/' text='Home' onClose={onClose} />
              <ButtonComponent
                url='/courses'
                text='Browse All Courses'
                onClose={onClose}
              />
              <ButtonComponent
                url='/request'
                text='Request a Course'
                onClose={onClose}
              />
              <ButtonComponent
                url='/contact'
                text='Contact Us'
                onClose={onClose}
              />
              <ButtonComponent url='/about' text='About' onClose={onClose} />
              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to='/profile'>
                          <Button colorScheme='yellow' variant={'ghost'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={LogoutHandler}>
                          <RiLogoutBoxLine /> Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link onClick={onClose} to={'/admin/dashboard'}>
                          <Button colorScheme='purple' variant={'ghost'}>
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to='/login'>
                      <Button colorScheme='yellow'>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to='/register'>
                      <Button colorScheme='yellow'>SignUp</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
