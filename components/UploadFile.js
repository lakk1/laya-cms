import {
  Box,
  Button,
  CloseButton,
  Flex,
  Grid,
  HStack,
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
          <Dropzone
            onDrop={(obj) => handleOnchange(obj, value, onChange)}
            accept="image/*"
          >
            {({ getRootProps, getInputProps }) => (
              <Box
                {...getRootProps({ className: "dropzone" })}
                border="2px dashed #ccc"
                p={8}
                cursor="pointer"
                maxH="200px"
              >
                <input {...getInputProps()} name={name} />
                <Grid
                  justifyItems="center"
                  fontSize="bold"
                  flexDir="row"
                  margin="0 auto"
                  gap={4}
                >
                  <BsUpload color="gray" size="32px" />
                  <Button>Add file</Button>
                  <Text>or drop files here</Text>
                </Grid>
              </Box>
            )}
          </Dropzone>
          <HStack flexWrap="wrap">
            {value &&
              value?.map((f, index) => (
                <Flex
                  alignItems="center"
                  key={index}
                  width="100px"
                  height="100px"
                  position="relative"
                  m={4}
                  border="1px solid #ccc"
                >
                  <img
                    src={f.imageURL ? f.imageURL : URL.createObjectURL(f)}
                    width="100%"
                    height="auto"
                    alt=""
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
          </HStack>
        </Grid>
      )}
    ></Controller>
  );
}

export default ImageUpload;
