import { FormControl, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
function TextFieldWithForm({
  name,
  label,
  defaultValue = "",
  rules,
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        return (
          <FormControl variant="outlined" fullWidth>
            <TextField
              {...field}
              label={label}
              value={field.value || ""}
              defaultValue={defaultValue || ""}
              error={Boolean(errors?.[name])}
              helperText={errors?.[name]?.message}
              variant="outlined"
              color="text"
            />
          </FormControl>
        );
      }}
    />
  );
}

TextFieldWithForm.propTypes = {
  name: PropTypes.string.isRequired,
};
export default TextFieldWithForm;
