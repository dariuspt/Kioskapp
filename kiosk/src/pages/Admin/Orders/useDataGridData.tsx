import { useState } from "react";
import { useColumns } from "./useColumns";
import { GridRowModesModel } from "@mui/x-data-grid";
import { RowsStatusInterface } from "@/common/interfaces/rowsStatus";

const dummyData = [
  {
    id: 1,
    lbId: 234,
    name: "WP 1",
    wpno: 1,
    highestCost: 100,
    lowestCost: 50,
    averageCost: 75,
  },
  {
    id: 2,
    lbId: 254,
    name: "WP 2",
    wpno: 3,
    highestCost: 100,
    lowestCost: 50,
    averageCost: 75,
  },
  {
    id: 3,
    lbId: 244,
    name: "WP 3",
    wpno: 2,
    highestCost: 100,
    lowestCost: 50,
    averageCost: 75,
  },
];

export const useDatagridData = () => {
  const [rows] = useState(dummyData);
  const rowModesModel: GridRowModesModel = {};
  const rowsStatus: RowsStatusInterface = {};
  const columns = useColumns({
    rowsStatus,
    rowModesModel,
    onSave: handleSave,
    onCancel: handleCancel,
    onEdit: handleEdit,
    onDelete: handleDelete,
  });
  function handleSave() {}

  function handleCancel() {}

  function handleEdit() {}

  function handleDelete() {}
  const handleEditableCells = ({ id }) => {
    if (rowsStatus[id]?.saveDisabled || rowsStatus[id]?.deleteDisabled) {
      return false;
    }
    return true;
  };
  return {
    data: {
      rows,
      columns,
      rowModesModel,
      isCellEditable: handleEditableCells,
    },
  };
};
