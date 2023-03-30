import React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@material-ui/core";

const SubmitButton = ({ children, ...rest }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      {...rest}
      type="submit"
      variant="contained"
      color="primary"
      disabled={isSubmitting}>
      {isSubmitting ? "ตกลง" : children}
    </Button>
  );
};

export default SubmitButton;
