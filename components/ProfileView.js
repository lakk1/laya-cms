import { Heading, Box, Center, Container, Text } from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const ProfileView = ({ auth }) => {
  const user = auth.user;
  console.group(user);
  return (
    <Box
      w="80%"
      m="auto"
      fontSize="20px"
      border="1px"
      borderColor="gray.200"
      p={4}
    >
      <Center>
        <Container>
          <Text fontSize="sm">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Profile Details</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Full Name</Td>
                  <Td>{user.name}</Td>
                </Tr>

                <Tr>
                  <Td>Mobile Number</Td>
                  <Td>7396678358</Td>
                </Tr>

                <Tr>
                  <Td>Email ID</Td>
                  <Td>{user.email}</Td>
                </Tr>

                <Tr>
                  <Td>Gender</Td>
                  <Td>Male</Td>
                </Tr>

                <Tr>
                  <Td>Date of Birth</Td>
                  <Td>02-05-1996</Td>
                </Tr>

                <Tr>
                  <Td>Location</Td>
                  <Td>Hyderabad</Td>
                </Tr>
                <Tr>
                  <Td>Alternate Mobile</Td>
                  <Td>NA</Td>
                </Tr>
              </Tbody>
            </Table>
          </Text>
        </Container>
      </Center>
    </Box>
  );
};

export default ProfileView;
