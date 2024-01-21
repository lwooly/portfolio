import { Button, Stack, TextField, useTheme } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const ContactMeForm = () => {
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

  const submitFn = (formData) => {
    console.log(formData);
    reset(defaults);
  };

  return (
    <form onSubmit={handleSubmit(submitFn)}>
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
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting || !isDirty || (!isDirty && !isValid)}
          sx={{
            maxWidth: "10rem",
            backgroundColor: "hsl(143.9deg 75.46% 31.96%)",
            color: theme.palette.common.white,
          }}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default ContactMeForm;
