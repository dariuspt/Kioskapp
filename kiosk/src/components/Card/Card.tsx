import {
  Card,
  CardContent,
  Grid,
  Box,
  SxProps,
  CardActionArea,
} from "@mui/material";
import CardHeader from "./CardHeader";
import { classes } from "./styles";

interface Props {
  sx?: SxProps;
  title: string;
  startIcon?: JSX.Element;
  children?: any;
  onClick?: () => any;
}

const StepperCard = ({
  sx = classes.card as SxProps,
  title,
  children,
  startIcon,
  onClick,
}: Props) => {
  return (
    <Box>
      <Card sx={sx}>
        <CardHeader title={title} startIcon={startIcon} />
        <CardActionArea onClick={onClick}>
          <CardContent>
            <Grid container spacing={2}>
              {children}
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
export default StepperCard;
