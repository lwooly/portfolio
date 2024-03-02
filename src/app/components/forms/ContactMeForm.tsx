import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { sendEmail } from "../../lib/api-functions/client";
import ArrowButton from "../ArrowButton";
import SubmitButton from "../SubmitButton";

export interface EmailValues {
  name: string;
  email: string;
  message: string;
}

const ContactMeForm = () => {
  const [isSent, setIsSent] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);
  const [isSendingError, setIsSendingError] = React.useState(false);
  const theme = useTheme();
  const schema = yup
    .object({
      name: yup.string().required().max(30),
      email: yup.string().email().required().max(50),
      message: yup.string().required().max(500),
    })
    .required();

  const defaults = {
    name: "",
    email: "",
    message: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: defaults,
  });

  const submitFn = async (formData: EmailValues) => {
    setIsSendingError(false);
    setIsSending(true);
    console.log(formData);
    const emailIsSent = await sendEmail(formData);
    if (emailIsSent) {
      setIsSent(true);
      reset(defaults);
    } else {
      setIsSendingError(true);
    }
    setIsSending(false);
  };

  //Reset sent value if user adds to form again after sending
  useEffect(() => {
    if (isDirty) {
      setIsSent(false);
    }
  }, [isDirty]);

  return (
    <form
      onSubmit={handleSubmit(submitFn)}
      style={{
        marginTop: "2rem",
        maxWidth: "550px",
        width: "100%",
        margin: "auto",
      }}
    >
      <Stack direction={"column"} gap={"1rem"}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Name"
              fullWidth
              autoComplete="off"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Email"
              fullWidth
              autoComplete="off"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Message"
              fullWidth
              multiline
              rows={4}
              autoComplete="off"
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          )}
        />
        <Stack direction={"column"} sx={{ minHeight: "5rem" }} gap={1}>
          <SubmitButton
            isSending={isSending}
            isSent={isSent}
            isSendingError={isSendingError}
            type="submit"
            disabled={isSubmitting}
            sx={{
              margin:'auto',
              backgroundColor: theme.palette.primary.main,
              border: "1px solid",
              borderColor: theme.palette.primary.main,
              "&:hover": {
                border: "1px solid black",
              },
            }}
          />
        </Stack>
      </Stack>
    </form>
  );
};

export default ContactMeForm;
