import { Grid, Paper } from "@mui/material";
import { useDatagridData } from "./useDataGridData";
import { DataGrid } from "@mui/x-data-grid";
import { datagridStyles } from "@/styles/styles";
import { administrationToolbar } from "@/common/utils/dataGrid/components/AdministrationToolbar";

const Orders = () => {
  const { data } = useDatagridData();
  const createRow: any = null;
  return (
    <Grid>
      <Paper sx={datagridStyles.paperContent}>
        <DataGrid
          {...data}
          pagination
          sx={datagridStyles.grid}
          editMode="row"
          slots={administrationToolbar}
          slotProps={{
            toolbar: { onCreate: createRow },
          }}
          disableRowSelectionOnClick
        />
      </Paper>
    </Grid>
  );
};

export default Orders;
