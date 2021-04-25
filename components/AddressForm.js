import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";

const AddressForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} variant="outline" colorScheme="pink">
        Add Address
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Mobile Number</FormLabel>
              <Input placeholder="Mobile number" type="tel" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Pincode</FormLabel>
              <Input placeholder="Pincode" type="number" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input placeholder="House No, Building, Street, Area" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Locality / Town</FormLabel>
              <Input placeholder="Locality / Town" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>City / District</FormLabel>
              <Input placeholder="City / District" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>State</FormLabel>
              <Input placeholder="State" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddressForm;
