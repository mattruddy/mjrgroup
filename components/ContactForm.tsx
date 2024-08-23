import { gaEvent } from "@/utils/ga";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const phoneRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export type SERVICE_TYPE =
  | "Individual Taxes"
  | "Business Taxes"
  | "IRS Representation"
  | "Business Consultation"
  | "Bookkeeping";

export const SERVICES: readonly SERVICE_TYPE[] = [
  "Individual Taxes",
  "Business Taxes",
  "IRS Representation",
  "Business Consultation",
  "Bookkeeping",
];

export const CONTACT_TYPES: readonly string[] = ["In Person", "Virtual (Zoom)"];

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  email: Yup.string().email().required("email is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "phone number is not valid")
    .required("phone number is required"),
  contact: Yup.string()
    .oneOf(CONTACT_TYPES)
    .required("contact type is required"),
  service: Yup.string().oneOf(SERVICES).required("service is required"),
});
interface ContactFormProps {
  defaultService?: SERVICE_TYPE;
}

export const ContactForm = ({ defaultService }: ContactFormProps) => {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      contact: "",
      service: defaultService ?? "",
      taxType: undefined,
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: ContactFormSchema,
    onSubmit: async ({
      email,
      contact,
      service,
      phoneNumber,
      name,
      taxType,
    }) => {
      gaEvent("consultation", {
        event_category: "consultation",
        event_label: "Consultation Booked",
      });
      const resp = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          contact: contact,
          service: service,
          name: name,
          phoneNumber: phoneNumber,
          taxType: taxType,
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
          description: "Please send an email directly to matt@mjrgroupllc.com",
          status: "error",
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl mb="20px" isInvalid={!!formik.errors.name}>
        <FormLabel>Full Name</FormLabel>
        <Input
          placeholder="Full name"
          name={"name"}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
      </FormControl>
      <FormControl mb="20px" isInvalid={!!formik.errors.email}>
        <FormLabel>Email Address</FormLabel>
        <Input
          placeholder="Email"
          name={"email"}
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl mb="20px" isInvalid={!!formik.errors.phoneNumber}>
        <FormLabel>Phone Number</FormLabel>
        <Input
          placeholder="Phone number"
          onChange={formik.handleChange}
          name={"phoneNumber"}
          value={formik.values.phoneNumber}
        />
        <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
      </FormControl>
      <FormControl mb="20px" isInvalid={!!formik.errors.contact}>
        <FormLabel>Contact Preference</FormLabel>
        <Select
          name="contact"
          onChange={formik.handleChange}
          value={formik.values.contact}
          placeholder="Select a type"
        >
          {CONTACT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        <FormErrorMessage>{formik.errors.contact}</FormErrorMessage>
      </FormControl>
      <FormControl mb="20px" isInvalid={!!formik.errors.service}>
        <FormLabel>Service Needed</FormLabel>
        <Select
          name="service"
          onChange={formik.handleChange}
          value={formik.values.service}
          placeholder="Select a service"
        >
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </Select>
        <FormErrorMessage>{formik.errors.service}</FormErrorMessage>
      </FormControl>
      <Button isLoading={formik.isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};
