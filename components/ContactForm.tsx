import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  FormErrorMessage,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const phoneRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  email: Yup.string().email().required("email is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "phone number is not valid")
    .required("phone number is required"),
  message: Yup.string().min(2).required("message is required"),
});

interface ContactFormProps {
  onSubmit: (
    message: string,
    name: string,
    email: string,
    phoneNumber: string
  ) => void;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: ContactFormSchema,
    onSubmit: async ({ email, message, phoneNumber, name }) => {
      const resp = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          message: message,
          name: name,
          phoneNumber: phoneNumber,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        toast({
          title: "Message Sent",
          description: "You will hear from us shortly",
          status: "success",
        });
        formik.resetForm();
      } else {
        toast({
          title: "Error Sending Message",
          description: "Please send an email directly to info@mjrgroupllc.com",
          status: "error",
        });
      }
      console.log({ email, message, phoneNumber, name });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl mb="20px" isInvalid={!!formik.errors.name}>
        <FormLabel>What is your full name?</FormLabel>
        <Input
          name={"name"}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
      </FormControl>
      <FormControl mb="20px" isInvalid={!!formik.errors.email}>
        <FormLabel>
          What is your <Text as="b">email address</Text>?
        </FormLabel>
        <Input
          name={"email"}
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl mb="20px" isInvalid={!!formik.errors.phoneNumber}>
        <FormLabel>
          What is your <Text as="b">phone number</Text>?
        </FormLabel>
        <Input
          onChange={formik.handleChange}
          name={"phoneNumber"}
          value={formik.values.phoneNumber}
        />
        <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
      </FormControl>
      <FormControl mb="20px" isInvalid={!!formik.errors.message}>
        <FormLabel>What do you need help with?</FormLabel>
        <Textarea
          onChange={formik.handleChange}
          name={"message"}
          value={formik.values.message}
          rows={7}
        />
        <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
      </FormControl>
      <Button isLoading={formik.isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};
