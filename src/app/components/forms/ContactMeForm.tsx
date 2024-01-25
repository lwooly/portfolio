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
import { Email } from "@mui/icons-material";

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
              variant="filled"
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
              variant="filled"
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
              variant="filled"
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
          {!isSending && !isSent && (
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
              sx={{
                maxWidth: "15rem",
                height: "2.5rem",
                backgroundColor: "hsl(143.9deg 75.46% 31.96%)",
                color: theme.palette.common.white,
                alignSelf: "center",
                "&:hover": {
                  backgroundColor: "hsl(143.9deg 75.46% 25%)",
                  borderShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                },
              }}
            >
              Submit
            </Button>
          )}
          {isSending && !isSent && !isSendingError && (
            <Typography variant="body2" sx={{textAlign:'center'}}>Sending...</Typography>
          )}
          {isSent && !isSending && !isSendingError && (
            <Typography variant="body2" sx={{textAlign:'center'}}>Message Sent!</Typography>
          )}
          {!isSent && !isSending && isSendingError && (
            <Typography variant="body2" sx={{textAlign:'center'}}>
              Message not sent! Please try again!
            </Typography>
          )}
        </Stack>
      </Stack>
    </form>
  );
};

export default ContactMeForm;
