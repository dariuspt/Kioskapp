import { Avatar, Button, Grid, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { classes } from "./styles";
import {
  default as Email,
  default as Password,
} from "@/components/react-hook-form-elements/FormInputText";
import { SignInForm } from "@/common/forms/signInForm";
import { useFormContext } from "react-hook-form";

const Setup = () => {
  const { control} = useFormContext<SignInForm>();
  return (
    <Grid container sx={classes.grid} maxWidth="xs">
      <Avatar sx={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Grid item sx={classes.item}>

        <Email name="email" control={control} label="Email Address" fullWidth />
      </Grid>
      <Grid item sx={classes.item}>
        <Password name="password" control={control} label="Password"  fullWidth/>
        <Button type="submit" fullWidth sx={classes.button} variant="contained">
          Sign In
        </Button>
      </Grid>
    </Grid>
  );
};

export default Setup;
