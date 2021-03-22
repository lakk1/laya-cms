import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

function PincodeInput(props) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md" maxW={240}>
      <Input pr="4.5rem" placeholder="Pincode" />
      <InputRightElement width="4.5rem">
        <Button
          h="1.75rem"
          size="sm"
          onClick={handleClick}
          colorScheme="green"
          variant="unstyled"
        >
          check
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PincodeInput;
