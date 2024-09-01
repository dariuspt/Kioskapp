import { Drawer, MenuItem, Typography, SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  width?: number;
  children?: React.ReactNode;
  sx?: SxProps;
}

const Sidebar = ({ children, sx }: SidebarProps) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    if (id === "orders") {
      navigate("/orders");
    } else {
      navigate("/products");
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          ...sx,
        },
        position: "relative", // Set position to relative
      }}
    >
      {!children ? (
        <>
          <MenuItem
            id="products"
            sx={{ marginTop: 5, marginBottom: 5 }}
            onClick={() => handleClick("products")}
          >
            <Typography variant="h5">Products</Typography>
          </MenuItem>
          <MenuItem id="orders" onClick={() => handleClick("orders")}>
            <Typography variant="h5">Orders</Typography>
          </MenuItem>
        </>
      ) : (
        children
      )}
    </Drawer>
  );
};

export default Sidebar;
