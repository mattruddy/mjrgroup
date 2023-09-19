import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface ContactFormProps {
  onSubmit: (
    message: string,
    name: string,
    email: string,
    phoneNumber: string
  ) => void;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <VStack>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Phone Number</FormLabel>
        <Input
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </FormControl>
      <Button
        mt="20px"
        onClick={() => onSubmit(message, name, email, phoneNumber)}
      >
        Submit
      </Button>
    </VStack>
  );
};
