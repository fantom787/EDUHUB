import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from './../../assets/videos/intro.mp4';
import termsAndConditions from './../../assets/docs/termsAndConditions';
import { RiSecurePaymentFill } from 'react-icons/ri';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'16'}>
    <VStack>
      <Avatar
        boxSize={['40', '48']}
        src='https://media.licdn.com/dms/image/D4D03AQGpM3dDOawD5g/profile-displayphoto-shrink_400_400/0/1685465159354?e=1706745600&v=beta&t=4-9WQ5Ws9jZqLruf_9l472nU5gYR2xHeXsMf-Rtzu7o'
      />
      <Text children='Co-Founder' opacity={'0.7'} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children='Ambuj Kumar' size={['md', 'xl']} />
      <Text children='Hi I am A Full Stack Developer and a Competetive Programmer. Our Mission is to provide quality Content At Reasonable Price' />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      controls
      src={introVideo}
      controlsList='nodownload nofullscreen noremoteplayback'
      disablePictureInPicture
      disableRemotePlayback
    ></video>
  </Box>
);

const TandC = ({ termsAndConditions }) => (
  <Box>
    <Heading
      size={'md'}
      children='Terms & Conditions'
      textAlign={['center', 'left']}
      my={'4'}
    />
    <Box h={'sm'} p={'4'} overflowY={"scroll"} >
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
      >
        {termsAndConditions}
      </Text>
      <Heading
        my={'4'}
        size={'xs'}
        children='Refund Only applicable for cancellation within 7 days'
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children='About Us' textAlign={['center', 'left']} />
      <Founder />
      <Stack m='8' direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m='8' textAlign={['center', 'left']}>
          We are a Video Streaming Platform with some Premium Courses Available
          only for Premium User.
        </Text>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme='yellow'>
            Checkout Our Plans
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndConditions={termsAndConditions} />
      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          children='Payment is Secured By Razor Pay'
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
        />
      </HStack>
    </Container>
  );
};

export default About;
