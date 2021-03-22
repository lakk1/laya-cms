import {
  Box,
  Button,
  CloseButton,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsUpload } from "react-icons/bs";
import { Controller } from "react-hook-form";
import Dropzone from "react-dropzone";

function ImageUpload({ control = {}, name = "media" }) {
  const handleOnchange = (data, value = [], callback) => {
    if (callback) {
      callback([...value, ...data]);
    }
  };
  return (
    <Controller
      control={control}
      name="media"
      render={({ onChange, onBlur, value }) => (
        <Grid>
          <Flex flexWrap="wrap">
            {value &&
              value?.map((f, index) => (
                <Flex
                  key={index}
                  width="120px"
                  height="120px"
                  position="relative"
                  m={2}
                  p={2}
                  border="1px solid #ccc"
                >
                  <Image
                    src={f.imageURL ? f.imageURL : URL.createObjectURL(f)}
                    alt=""
                    boxSize="100px"
                    objectFit="contain"
                  />

                  <CloseButton
                    size="sm"
                    bg="red"
                    color="white"
                    rounded
                    position="absolute"
                    top="-4px"
                    right="-4px"
                    onClick={() => {
                      onChange(value.filter((_, i) => i !== index));
                    }}
                  />
                </Flex>
              ))}
            <Dropzone
              onDrop={(obj) => handleOnchange(obj, value, onChange)}
              accept="image/*"
            >
              {({ getRootProps, getInputProps }) => (
                <Box
                  {...getRootProps({ className: "dropzone" })}
                  border="2px dashed #ccc"
                  p={2}
                  m={2}
                  cursor="pointer"
                  height="120px"
                  width="120px"
                >
                  <input {...getInputProps()} name={name} />
                  <Grid
                    justifyItems="center"
                    fontSize="bold"
                    flexDir="row"
                    margin="0 auto"
                    gap={2}
                  >
                    <BsUpload color="gray" size="28px" />
                    <Button>Add file</Button>
                    {/* <Text>or drop files here</Text> */}
                  </Grid>
                </Box>
              )}
            </Dropzone>
          </Flex>
        </Grid>
      )}
    ></Controller>
  );
}

export default ImageUpload;
