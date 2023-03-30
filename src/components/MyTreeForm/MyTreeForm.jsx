import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Joi from "joi";
import FormProvider from "../Form/FormProvider/FormProvider";
import TextFieldWithForm from "../Form/TextFieldWithForm/TextFieldWithForm";
import SubmitButton from "../Form/SubmitButton/SubmitButton";
const useStyles = makeStyles((theme) => {
  return {
    fullWidth: {
      width: "100%",
    },
    input: {
      color: theme.palette.text.main,
    },
  };
});
function MyTreeForm() {
  const classes = useStyles();
  const schema = {
    firstName: Joi.string().required().messages({
      "string.empty": "First name is required",
    }),
  };

  return (
    <div className={classes.fullWidth}>
      <FormProvider
        validationSchema={schema}
        onSubmit={(data) => {
          console.log("Form submitted with data:", data);
        }}>
        <TextFieldWithForm
          name="firstName"
          label="FirstName"
          rules={{
            required: "First name is required",
          }}
        />
        <SubmitButton>ตกลง</SubmitButton>
      </FormProvider>
    </div>
  );
}

MyTreeForm.propTypes = {};

export default MyTreeForm;
