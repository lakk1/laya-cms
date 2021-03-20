import { Box, Text, useToast } from "@chakra-ui/react";
import Router from "next/router";
import _kebabCase from "lodash/kebabCase";
import { uploadImages } from "@/lib/storage";
import { createProduct } from "@/lib/db";
import ProductForm from "@/components/ProductForm";
import AdminLayout from "@/components/AdminLayout";

const AddProduct = () => {
  const toast = useToast();

  const handleSave = async ({ media, ...data }) => {
    uploadImages(media).then((images) => {
      createProduct({
        ...data,
        media: [...images],
        slug: _kebabCase(data.title),
      }).then((x) => {
        toast({
          title: "Product added succesfully",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
        Router.push("/admin/products");
      });
    });
  };

  return (
    <AdminLayout>
      <Box p={4}>
        <Text fontSize="4xl">Add Product</Text>
        <Box m={4}>
          <ProductForm onSave={handleSave} />
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default AddProduct;
