import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import vg from './../../assets/images/bg.png';
import introVideo from './../../assets/videos/intro.mp4';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';

const Home = () => {
  /**
   *
   * stack --- this is diplay flex at the end of the day
   *         direction --> this take the values coloumn / row means that the flex will be col / row
   *          and other properties are also same
   *      the array represents the [display when veiw in phone , otherwise]
   *
   */
  return (
    <div>
      <section className='home'>
        <div className='container'>
          <Stack
            direction={['column', 'row']}
            height='100%'
            justifyContent={['center', 'space-between']}
            alignItems={'center'}
            spacing={['16', '56']}
          >
            <VStack
              width={'full'}
              alignItems={['center', 'flex-end']}
              spacing={'8'}
            >
              <Heading children='LEARN FROM THE EXPERTS' size={'2xl'} />
              <Text
                textAlign={['center', 'left']}
                fontSize={"2xl"}
                fontFamily={"cursive"}
                children='Find Valuable Content At Reasonable Price'
              />
              <Link to={'/courses'}>
                <Button size={'lg'} colorScheme='yellow'>
                  Explore Now
                </Button>
              </Link>
            </VStack>
            <Image
              className='vector-graphics'
              boxSize={'md'}
              src={vg}
              objectFit={'contain'}
            />
          </Stack>
        </div>
        <Box padding={'8'} bg={'blackAlpha.800'}>
          <Heading
            children='OUR BRANDS'
            textAlign={'center'}
            fontFamily={'body'}
            color={'yellow.400'}
          />
          <HStack
            className='brandsBanner'
            justifyContent={'space-evenly'}
            marginTop={'4'}
          >
            <CgGoogle />
            <CgYoutube />
            <SiCoursera />
            <SiUdemy />
            <DiAws />
          </HStack>
        </Box>
        <div className='container2'>
          <video
            // autoPlay
            controls
            src={introVideo}
            controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
          ></video>
        </div>
      </section>
    </div>
  );
};

export default Home;
