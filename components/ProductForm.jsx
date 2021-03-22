import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  FormHelperText,
  Text,
  Textarea,
  InputLeftElement,
  InputGroup,
  Flex,
  Select,
} from "@chakra-ui/react";
import ImageUpload from "./UploadFile";

const defaultValues2 = {
  title: "Kanchipuram semi silk saree",
  description:
    "Grand kanchipuram semi silk sarees.. \n\nEmbossed design all over the sarees...\n\nJari design in between the embossed sarees ..\n\nGrand jari border...\n\nContrast pallu...\n\nContrast embossed design blouse...",
  media: [],
  price: "1250",
  comparePrice: "1500",
  discount: "",
  sku: "M3S1",
  quantity: "10",
  brand: "Kanchipuram",
  categories: "featured, Silk ,new collection, featured",
  keywords: "Trending Saree,",
};

const ProductForm = ({ onSave, defaultValues }) => {
  const { handleSubmit, errors, register, formState, control, reset } = useForm(
    {
      defaultValues: defaultValues || {},
    }
  );

  const onSubmit = (values) => {
    onSave(values);
    reset({});
  };

  return (
    <Box maxW="600px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box boxShadow="base" p="6" rounded="md" bg="white">
          <FormControl mb="4">
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              placeholder="Title"
              ref={register({ required: true })}
              isInvalid={errors.title}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Description"
              name="description"
              ref={register({ required: true })}
            />
          </FormControl>
          <Box>
            <Text fontSize="lg" mb={2}>
              Media
            </Text>

            <Box mb="4" p={4}>
              <ImageUpload control={control} name={"media"} />
            </Box>
          </Box>
          <FormControl
            mb="4"
            display="inline-flex"
            maxW="260px"
            flexDir="column"
            mr="4"
          >
            <FormLabel>Price</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={"₹"} />
              <Input
                type="number"
                placeholder="0.00"
                name="price"
                ref={register}
              />
            </InputGroup>
          </FormControl>
          <FormControl
            mb="4"
            display="inline-flex"
            maxW="260px"
            flexDir="column"
          >
            <FormLabel>Compare price</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={"₹"} />
              <Input
                type="number"
                placeholder="0.00"
                name="comparePrice"
                ref={register}
              />
            </InputGroup>
          </FormControl>
          <FormControl mb="4" maxW="200px">
            <FormLabel>Discount</FormLabel>
            <Input
              type="text"
              placeholder="Discount"
              name="discount"
              ref={register}
            />
          </FormControl>
          <FormControl
            mb="4"
            display="inline-flex"
            maxW="260px"
            flexDir="column"
            mr="4"
          >
            <FormLabel>SKU (Stock keeping Unit)</FormLabel>
            <Input
              type="text"
              placeholder="Product code (M0S1)"
              name="sku"
              ref={register}
            />
          </FormControl>
          <FormControl
            mb="4"
            display="inline-flex"
            maxW="200px"
            flexDir="column"
          >
            <FormLabel>Quantity</FormLabel>
            <Input
              type="number"
              placeholder="0"
              name="quantity"
              ref={register}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Brand</FormLabel>
            <Input
              type="text"
              placeholder="Brand"
              name="brand"
              ref={register}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Categories</FormLabel>
            <Input
              type="text"
              placeholder="categories"
              name="categories"
              ref={register}
            />
            <FormHelperText>Separate categories with comma (,) </FormHelperText>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Keywords</FormLabel>
            <Input
              type="text"
              placeholder="keywords"
              name="keywords"
              ref={register}
            />
            <FormHelperText>Separate keywords with comma (,) </FormHelperText>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Product Status</FormLabel>
            <Select
              placeholder="Product status"
              ref={register}
              defaultValue="DRAFT"
              name="status"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISH">Publish</option>
            </Select>
          </FormControl>
        </Box>

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ProductForm;
