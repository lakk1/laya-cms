import { Box, Center, Spinner, Text, useToast } from "@chakra-ui/react";
import Router from "next/router";
import _kebabCase from "lodash/kebabCase";
import { uploadImages } from "@/lib/storage";
import { createProduct, getProduct } from "@/lib/db";
import ProductForm from "@/components/ProductForm";
import AdminLayout from "@/components/AdminLayout";
import { useState, useEffect } from "react";

const EditProduct = ({ pid }) => {
  const toast = useToast();
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (pid) {
      getProduct(pid).then((item) => {
        setProduct({ ...item });
      });
    }
  }, []);

  const handleSave = async ({ media, ...data }) => {
    console.log({ media, data });
    const addedImages = media.filter((file) => file instanceof File);
    const oldImages = media.filter((file) => !(file instanceof File));

    uploadImages(addedImages).then((images) => {
      createProduct(
        {
          ...data,
          media: [...oldImages, ...images],
          slug: _kebabCase(data.title),
        },
        pid
      ).then((x) => {
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
  if (!product.id) {
    return (
      <Center alignItems="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }
  const isLoading = !product?.id;
  console.log({ isLoading, product });
  return (
    <AdminLayout>
      <Box p={4}>
        <Text fontSize="4xl">Edit Product</Text>
        <Box m="4px auto" width="800px">
          {isLoading ? (
            <Center alignItems="center">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          ) : (
            <ProductForm onSave={handleSave} defaultValues={product} />
          )}
        </Box>
      </Box>
    </AdminLayout>
  );
};

EditProduct.getInitialProps = async ({ query }) => {
  const { pid } = query;
  return { pid };
};

export default EditProduct;
