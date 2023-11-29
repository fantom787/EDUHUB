import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { categories } from '../../Courses/Courses';
export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: 'purple',
  backgroundColor: 'white',
};

export const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};
const InputBox = ({ name, fname, setFname }) => {
  return (
    <Input
      required
      id={name}
      value={fname}
      onChange={e => setFname(e.target.value)}
      placeholder={name}
      type='text'
      focusBorderColor='purple.300'
    />
  );
};
const CreateCourse = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [createdBy, setCreatedBy] = useState();
  const [category, setCategory] = useState();
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
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container py={'16'}>
        <form action=''>
          <Heading
            my={'16'}
            textAlign={['center', 'left']}
            textTransform={'uppercase'}
          >
            Create Course
          </Heading>
          <VStack margin={'auto'} spacing={'8'}>
            <InputBox name={'Title'} fname={title} setFname={setTitle} />
            <InputBox
              name={'Description'}
              fname={description}
              setFname={setDescription}
            />
            <InputBox
              name={'CreatedBy'}
              fname={createdBy}
              setFname={setCreatedBy}
            />
            <Select
              focusBorderColor='purple.300'
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value={'Options'}>options</option>
              {categories.map(e => (
                <option value={e}>{e}</option>
              ))}
            </Select>
            <Input
              accept='image/*'
              required
              type='file'
              focusBorderColor='purple.300'
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
            )}
            <Button width={'full'} colorScheme='purple' type='submit'>Create</Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};
export default CreateCourse;
