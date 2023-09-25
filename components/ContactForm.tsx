import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Text,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const phoneRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export type SERVICE_TYPE =
  | "Tax Preparation"
  | "IRS Representation"
  | "Business Consultation"
  | "QuickBooks Training";

export const SERVICES: readonly SERVICE_TYPE[] = [
  "Tax Preparation",
  "IRS Representation",
  "Business Consultation",
  "QuickBooks Training",
];

const TAX_PREPARATION: readonly ("Individual Taxes" | "Business Taxes")[] = [
  "Individual Taxes",
  "Business Taxes",
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
  taxType: Yup.string().when("service", {
    is: "Tax Preparation",
    then: (schema) => schema.oneOf(TAX_PREPARATION).required("Tax is required"),
    otherwise: (schema) => schema,
  }),
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
          description: "Please send an email directly to info@mjrgroupllc.com",
          status: "error",
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl mb="20px" isInvalid={!!formik.errors.name}>
        <FormLabel>What is your full name?</FormLabel>
        <Input
          placeholder="Full name"
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
          placeholder="Email"
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
          placeholder="Phone number"
          onChange={formik.handleChange}
          name={"phoneNumber"}
          value={formik.values.phoneNumber}
        />
        <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
      </FormControl>
      <FormControl mb="20px" isInvalid={!!formik.errors.contact}>
        <FormLabel>What is your preferred way of contact?</FormLabel>
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
        <FormLabel>What service are you interested in?</FormLabel>
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
      {formik.values.service === "Tax Preparation" && (
        <FormControl mb="20px" isInvalid={!!formik.errors.taxType}>
          <FormLabel>What type of taxes?</FormLabel>
          <Select
            name="taxType"
            onChange={formik.handleChange}
            value={formik.values.taxType}
            placeholder="Select a tax type"
          >
            {TAX_PREPARATION.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{formik.errors.taxType}</FormErrorMessage>
        </FormControl>
      )}
      <Button isLoading={formik.isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};
