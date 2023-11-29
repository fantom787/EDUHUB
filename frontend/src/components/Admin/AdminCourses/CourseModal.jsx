import {
  Box,
  Button,
  Grid,
  Heading,
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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadStyle } from '../Create Course/CreateCourse';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteLectureHandler,
  addLectureHandler,
  courseTitle,
  lectures = [1, 2, 3, 4, 5],
}) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [video, setVideo] = useState();
  const [videoPrev, setVideoPrev] = useState();
  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };
  const handleClose = () => {
    setTitle('');
    setDescription('');
    setVideo('');
    setVideoPrev('');
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={handleClose}
      scrollBehavior='outside'
    >
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>{courseTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding={'16'}>
            <Grid templateColumns={['1fr', '3fr 1fr']}>
              <Box px={['0', '16']}>
                <Box my={'5'}>
                  <Heading>{courseTitle}</Heading>
                  <Heading size={'sm'} opacity={0.4}>{`#${id}`}</Heading>
                </Box>
                <Heading size={'lg'}>Lectures</Heading>
                {lectures.map((e, index) => (
                  <VideoCard
                    title={'React Intro'}
                    description={
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perferendis ipsum repellendus dolores esse? Quam molestiae dolor deserunt nulla eligendi placeat fugiat optio reprehenderit, et iure quidem natus est iste fuga? Doloremque, repellendus officia?'
                    }
                    num={1}
                    lectureId={'83r328'}
                    courseId={id}
                    deleteLectureHandler={deleteLectureHandler}
                    addLectureHandler={addLectureHandler}
                  />
                ))}
              </Box>
              <Box>
                <form
                  onSubmit={e =>
                    addLectureHandler(e, id, title, description, video)
                  }
                >
                  <VStack spacing={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                      Add Lecture
                    </Heading>
                    <Input
                      focusBorderColor='purple.300'
                      placeholder='Title'
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />
                    <Input
                      focusBorderColor='purple.300'
                      placeholder='Description'
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
                    <Input
                      accept='video/mp4'
                      required
                      type={'file'}
                      focusBorderColor='purple.300'
                      css={fileUploadStyle}
                      onChange={changeVideoHandler}
                    />
                    {videoPrev && <video controls src={videoPrev}></video>}
                    <Button w={'full'} colorScheme='purple' type='submit'>
                      Upload
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default CourseModal;

const VideoCard = ({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteLectureHandler,
  addLectureHandler,
}) => {
  return (
    <Stack
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      direction={['column', 'row']}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'}>{`#${num} ${title}`}</Heading>
        <Text>{description}</Text>
      </Box>
      <Button
        color={'purple.600'}
        onClick={() => deleteLectureHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
};
