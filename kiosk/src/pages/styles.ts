import { SxPropsElementsInterface } from "@/common/interfaces/mui";

export const classes: SxPropsElementsInterface = {
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    marginTop: 0,
    overflow: "hidden",
  },
  buttonArea: {
    width: "40%",
    height: "10%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  button: {
    height: "100%",
    backgroundColor: "blueviolet",
    "&:hover": {
      backgroundColor: "purple",
  },
  borderRadius: 30,
  border: "1px black solid",
  fontSize: "35px",
  color: "white",
  fontWeight: "bold",
},
  image: {
    height: "30%",
    width: "50px",
  },
  textArea: {
    width: "100%",
    display: "flex",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    color: 'black'
  },
  setupGrid: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 8,
    overflow: "hidden",
  },
  avatar: {
    margin: 2,
    backgroundColor: 'secondary.main',
  }
};
