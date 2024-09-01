import Sidebar from "@/pages/Admin/Dashboard/SideBar";
import { Grid, MenuItem, Typography } from "@mui/material";
import { dummyData } from "../Categories/dummyData";
import { useNavigate } from "react-router-dom";

const UserSidebar = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  };
  return (
    <Grid>
      <Grid item>
        <Sidebar>
          <Grid item>
            {dummyData.map((item) => (
              <MenuItem
                key={item.id}
                sx={{ marginTop: 6, display: "flex", justifyContent: "center" }}
                onClick={() => handleClick(item.label)}
              >
                <Typography variant="h6">{item.label}</Typography>
              </MenuItem>
            ))}
          </Grid>
        </Sidebar>
      </Grid>
    </Grid>
  );
};

export default UserSidebar;
