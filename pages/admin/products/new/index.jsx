import AdminLayout from "@/components/AdminLayout";
import ProductForm from "@/components/ProductForm";
import { createProduct } from "@/lib/db";
import { uploadImages } from "@/lib/storage";
import { Box, Text, useToast } from "@chakra-ui/react";
import _kebabCase from "lodash/kebabCase";
import Router from "next/router";

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
        <Box m="4px auto" width="800px">
          <ProductForm onSave={handleSave} />
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default AddProduct;
