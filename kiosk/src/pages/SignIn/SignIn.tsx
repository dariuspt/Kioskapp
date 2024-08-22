import { SignInForm } from "@/common/forms/signInForm";
import { FormProvider, useForm } from "react-hook-form";
import Setup from "./Setup";
import { DevTool } from "@hookform/devtools";
import { Grid } from "@mui/material";

const SignIn = () => {
  const methods = useForm<SignInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <FormProvider {...methods}>
      <Grid container>
        <Setup />
      </Grid>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default SignIn;
