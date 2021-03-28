import { useEffect, useState } from "react";
import ProfileView from "@/components/ProfileView";
import UserLayout from "@/components/UserLayout";
import { Heading, Box, Container, Center, Text } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import { MdCheckCircle, FaTwitter, FaYoutube } from "react-icons/md";

const CartPage = () => {
  return (
    <UserLayout>
      <Box
        w="80%"
        m="auto"
        fontSize="20px"
        border="1px"
        borderColor="gray.200"
        p={10}
      >
        <Center flexDirection="column">
          <Heading fontSize="sm">Collection Of Personal Information:</Heading>

          <Text fontSize="sm" as="p">
            We may collect the following information:
            <br />
            - Name and Date of birth
            <br />
            - Contact information including email address
            <br />
            - Other information relevant to customer surveys and/or offers
            <br />
          </Text>
          <Heading fontSize="sm">
            What we do with the information we gather
          </Heading>

          <Text fontSize="sm" as="p">
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:{" "}
            <br />
            Administer your account Send you requested product or service <br />
            information Internal record keeping.
            <br />
            We may use the information to improve our products and services.{" "}
            <br />
            Customize your experience, including targeting our services and
            offerings to you,
            <br />
            We may periodically send promotional emails about new products,
            special offers or other information which we think you may find
            interesting using the email address which you have provided.
          </Text>

          <Heading fontSize="sm">Cancellation Policy</Heading>
          <Text fontSize="sm" as="p">
            There is no cancellation for item and please make sure you read
            through product page carefully before you make orders.
          </Text>

          <Heading fontSize="sm">Refund Policy</Heading>
          <Text fontSize="sm" as="p">
            Currently we are unable to providing refund service, we will try
            bring refund service as soon as possible.
          </Text>

          <Heading fontSize="sm">How we use cookies </Heading>
          <Text fontSize="sm" as="p">
            Cookies are small files placed on your hard drive that assist us in
            providing our services. <br />
            We use cookies to allow you to enter your password less frequently
            during a session. Cookies can also help us provide information that
            is targeted to your interests. <br />
            We use cookies to allow you to enter your password less frequently
            during a session. Cookies can also help us provide information that
            is targeted to your interests.
          </Text>
        </Center>
      </Box>
    </UserLayout>
  );
};

export default CartPage;
