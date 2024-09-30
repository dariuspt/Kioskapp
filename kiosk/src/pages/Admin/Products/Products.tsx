import { Grid, Paper } from "@mui/material";
import { useDatagridData } from "./useDatagridData";
import { DataGrid } from "@mui/x-data-grid";
import { datagridStyles } from "@/styles/styles";
import { administrationToolbar } from "@/common/utils/dataGrid/components/AdministrationToolbar";
import { FormProvider, useForm } from "react-hook-form";
import { ProductsInterface as Produse } from "@/resources/adminProduct";
import { DevTool } from "@hookform/devtools";
import { useSnackbar } from "notistack";

const Products = () => {
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm<Produse>({ defaultValues: {}, mode: "all" });
  const { data, createRow } = useDatagridData({
    onFetchError: () => {
      enqueueSnackbar(("entryGetError"), { variant: "error" });
    },
    onCreateError: () => {
      enqueueSnackbar(("errorCreateLocation"), { variant: "error" });
    },
    onCreateSuccess: () => {
      enqueueSnackbar(("successCreateLocation"), { variant: "success" });
    },
    onUpdateError: () => {
      enqueueSnackbar(("errorUpdateLocation"), { variant: "error" });
    },
    onUpdateSuccess: () => {
      enqueueSnackbar(("successUpdateLocation"), { variant: "success" });
    },
    onDeleteError: () => {
      enqueueSnackbar(("errorDeleteLocation"), { variant: "error" });
    },
    onDeleteSuccess: () => {
      enqueueSnackbar(("successDeleteLocation"), { variant: "success" });
    },
    formMethods: methods,
  });
  return (
    <Paper sx={datagridStyles.paperContent}>
      <FormProvider {...methods}>
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
        <DevTool control={methods.control} />
      </FormProvider>
    </Paper>
  );
};

export default Products;
