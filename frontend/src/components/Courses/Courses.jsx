import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <>
      <VStack className='course' alignItems={['center', 'flex-start']}>
        <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
        <Heading
          textAlign={['center', 'left']}
          maxW={'200px'}
          fontFamily={'sans-serif'}
          noOfLines={3}
          size={'sm'}
          children={title}
        />
        <Text children={description} noOfLines={2} />
        <HStack>
          <Text
            noOfLines={2}
            children={'Createor'}
            fontWeight={'bold'}
            textTransform={'uppercase'}
          />
          <Text
            noOfLines={2}
            children={creator}
            fontFamily={'body'}
            textTransform={'uppercase'}
          />
        </HStack>
        <Heading
          textAlign={'center'}
          size={'xs'}
          children={`Lectures - ${lectureCount}`}
          textTransform={'uppercase'}
        />
        <Heading
          textAlign={'center'}
          size={'xs'}
          children={`Views - ${views}`}
          textTransform={'uppercase'}
        />
        <Stack direction={['column', 'row']} alignItems={'center'}>
          <Link to={`/course/${id}`}>
            <Button colorScheme='yellow'>Watch Now</Button>
          </Link>
          <Button
            variant={'ghost'}
            colorScheme='yellow'
            onClick={() => addToPlaylistHandler(id)}
          >
            Add To Playlist
          </Button>
        </Stack>
      </VStack>
    </>
  );
};

export const categories = [
  'Web Develeopment',
  'Artificial Intellegence',
  'Data Structures and Algorithms',
  'Data Science',
  'App Develeopment',
  'Game Develeopment',
];

const Courses = () => {
  const [keyword, setKeyword] = useState();
  const [category, setCategory] = useState();
  const addToPlaylistHandler = id => {
    console.log(id);
  };

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children='All Courses' m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder='Search A Course ..'
        type='text'
        focusBorderColor='yellow.500'
      />
      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((e, index) => {
          return (
            <Button key={index} onClick={() => setCategory(e)} minW={'60'}>
              <Text children={e} />
            </Button>
          );
        })}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <CourseCard
          title={'Sample'}
          description={'Sample'}
          views={23}
          imageSrc={'Sample'}
          id={'Sample'}
          creator={'SamplBoy'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
