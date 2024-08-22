import { Button, Grid, Typography } from "@mui/material";
import { classes } from "./styles";
import { useNavigate } from "react-router-dom";

const StartingPage = () => {
    /// de implementat ReactHookForm
    const navigate = useNavigate()
  return (
    <Grid container sx={classes.grid}>
        <Grid item sx={classes.textArea}>
            <Typography variant="h1" fontWeight='normal'>
                Incepe <span style={{color: 'blueviolet', fontWeight: 'bolder'}}>configurarea</span>
            </Typography>
        </Grid>
      <Grid item sx={classes.buttonArea}>
        <Button
        sx={classes.button}
          title="Welcome"
          variant="outlined"
          size="large"
          fullWidth
          onClick={() => navigate("/signin")}
        >
          Start
        </Button>
      </Grid>
    </Grid>
  );
};

export default StartingPage;
