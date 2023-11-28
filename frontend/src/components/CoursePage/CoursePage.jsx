import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from './../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'a3ur823',
      title: 'sample',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione officia optio vero tenetur fugiat odit iste culpa non ipsa deleniti, illo architecto quis, impedit nihil voluptatum commodi veniam unde! Blanditiis deleniti quae minima unde et voluptates animi quas. Consequuntur commodi iure earum eaque magni sed nobis veniam distinctio nostrum?',
      video: {
        url: 'aabfkjbc',
      },
    },
    {
      _id: 'a3ur823',
      title: 'sample2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione officia optio vero tenetur fugiat odit iste culpa non ipsa deleniti, illo architecto quis, impedit nihil voluptatum commodi veniam unde! Blanditiis deleniti quae minima unde et voluptates animi quas. Consequuntur commodi iure earum eaque magni sed nobis veniam distinctio nostrum?',
      video: {
        url: 'aabfkjbc',
      },
    },
    {
      _id: 'a3ur823',
      title: 'sample3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione officia optio vero tenetur fugiat odit iste culpa non ipsa deleniti, illo architecto quis, impedit nihil voluptatum commodi veniam unde! Blanditiis deleniti quae minima unde et voluptates animi quas. Consequuntur commodi iure earum eaque magni sed nobis veniam distinctio nostrum?',
      video: {
        url: 'aabfkjbc',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          src={introVideo}
          controlsList='nodownload  noremoteplayback'
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading m={'4'}>{`#${lectureNumber + 1} ${
          lectures[lectureNumber].title
        }`}</Heading>
        <Heading m={'4'}>Description</Heading>
        <Text>{lectures[lectureNumber].description}</Text>
      </Box>
      <VStack>
        {lectures.map((item, index) => {
          return (
            <button
            onClick={(e)=>setLectureNumber(index)}
              key={item._id}
              style={{
                width: '100%',
                padding: '1rem',
                textAlign: 'center',
                margin: '0',
                borderBottom: '1px solid rgba(0,0,0,2)',
              }}
            >
              <Text noOfLines={1}>{`#${index + 1} ${item.title}`}</Text>
            </button>
          );
        })}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
