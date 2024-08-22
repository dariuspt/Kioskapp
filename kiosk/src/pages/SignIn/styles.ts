import { SxPropsElementsInterface } from "@/common/interfaces/mui";

export const classes: SxPropsElementsInterface = {
  grid: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 8,
    overflow: "hidden",
  },
  avatar: {
    margin: 2,
    backgroundColor: 'secondary.main',
  },
  button: {
    marginTop: 3,
    marginBottom: 2,
  },
  item: {
    marginTop: 2,
    width: "20%",
  }
};