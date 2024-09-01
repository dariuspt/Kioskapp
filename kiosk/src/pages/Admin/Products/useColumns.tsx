import { getDatagridActions } from "@/common/utils/dataGrid/actions/getDatagridAction";
import { renderDataGridCellExpand } from "@/common/utils/dataGrid/helpers";
import { GridColDef, GridRowModes } from "@mui/x-data-grid";

export const useColumns = ({
  rowsStatus,
  rowModesModel,
  onSave,
  onCancel,
  onEdit,
  onDelete,
}): GridColDef[] => {
  const columns = [
    {
      field: "lbId",
      headerName: "lbid",
      flex: 1,
      minWidh: 120,
      ediable: false,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "name",
      headerName: "name",
      flex: 1,
      minWidh: 120,
      ediable: false,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "wpno",
      headerName: "wpno",
      flex: 1,
      minWidh: 320,
      ediable: false,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "highesCos",
      headerName: "highesCos",
      flex: 1,
      minWidh: 120,
      ediable: false,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "lowesCos",
      headerName: "lowesCos",
      flex: 1,
      minWidh: 120,
      ediable: false,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "averageCos",
      headerName: "averageCos",
      flex: 1,
      minWidh: 120,
      ediable: false,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "actions",
      type: "actions",
      headerName: ("actions"),
      width: 100,
      getActions: (props) => {
        const { id, row } = props;
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        return getDatagridActions({
          row,
          rowStatus: rowsStatus[id],
          isInEditMode,
          onSave,
          onCancel,
          onEdit,
          onDelete,
        });
      },
    },
  ];

  return columns as GridColDef[];
};
