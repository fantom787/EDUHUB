import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {
  const courses = [
    {
      _id: '093u923',
      title: 'React Course',
      category: 'Web Development',
      views: 8332,
      poster: {
        url: 'https://media.licdn.com/dms/image/D4D03AQGpM3dDOawD5g/profile-displayphoto-shrink_400_400/0/1685465159354?e=1706745600&v=beta&t=4-9WQ5Ws9jZqLruf_9l472nU5gYR2xHeXsMf-Rtzu7o',
      },
      createdBy: 'Ambuj Kumar',
      numOfVideos: 12,
    },
  ];
  const { isOpen, onClose, onOpen } = useDisclosure();
  const courseDetailsHandler = id => {
    console.log(id);
    onOpen();
  };
  const deleteCourseHandler = id => {
    console.log(id);
  };
  const deleteLectureHandler = (courseId, lectureId) => {
    console.log(courseId, lectureId);
  };
  const addLectureHandler = (event, courseId, title, description, video) => {
    event.preventDefault();
    console.log('addLectureHandler');
  };
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '8']} overflow={'auto'}>
        <Heading
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        >
          All Courses
        </Heading>
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available Courses In The Database</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Actions</Th>
              </Tr>
              {courses.map((e, index) => (
                <Row
                  key={e._id}
                  item={e}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteCourseHandler={deleteCourseHandler}
                />
              ))}
            </Thead>
            <Tbody></Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          deleteLectureHandler={deleteLectureHandler}
          addLectureHandler={addLectureHandler}
          courseTitle={'sampleCourseTitle'}
          id={courses[0]._id}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

const Row = ({ item, courseDetailsHandler, deleteCourseHandler }) => {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td>{item.role}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'purple.500'}
            onClick={() => courseDetailsHandler(item._id)}
          >
            View Lectures
          </Button>
          <Button
            color={'purple.600'}
            onClick={() => deleteCourseHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};
