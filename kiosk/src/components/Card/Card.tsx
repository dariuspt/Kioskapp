import {
  Card,
  CardContent,
  SxProps,
  Typography,
  CardMedia,
} from "@mui/material";
interface Props {
  sx?: SxProps;
  title: string;
  onClick?: () => any;
  images?: any;
}

const CardCategories = ({ sx, title, images, onClick }: Props) => {
  return (
    <Card sx={sx} elevation={5} onClick={onClick}>
      <CardMedia  sx={{ height: 240, width:320 }} image={images} title={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={sx}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardCategories;
