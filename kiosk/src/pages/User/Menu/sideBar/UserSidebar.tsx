import Sidebar from "@/pages/Admin/Dashboard/SideBar";
import { Grid, MenuItem, Typography } from "@mui/material";
import { dummyData } from "../Categories/dummyData";
import { useNavigate } from "react-router-dom";
import { slugify } from "@/common/utils/urlCleaner";

const UserSidebar = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    const slug = slugify(id);
    navigate(`/${slug}`);
  };
  return (
    <Grid container sx={{ width: 160 }}>
      <Sidebar>
        {dummyData.map((item) => (
          <MenuItem
            key={item.id}
            sx={{ marginTop: 6, display: "flex", justifyContent: "center" }}
            onClick={() => handleClick(item.label)}
          >
            <Typography variant="h6">{item.label}</Typography>
          </MenuItem>
        ))}
      </Sidebar>
    </Grid>
  );
};

export default UserSidebar;
