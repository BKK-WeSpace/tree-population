import React from "react";
import { useForm, FormProvider as FormP } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
const FormProvider = ({
  children,
  onSubmit,
  defaultValues,
  validationSchema,
}) => {
  const schema = Joi.object(validationSchema);
  const methods = useForm({
    resolver: joiResolver(schema),
    defaultValues,
  });

  return (
    <FormP {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormP>
  );
};

export default FormProvider;
