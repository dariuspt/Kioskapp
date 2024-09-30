import { getDatagridActions } from "@/common/utils/dataGrid/actions/getDatagridAction";
import { renderDataGridCellExpand } from "@/common/utils/dataGrid/helpers";
import GridFormInputText from "@/components/react-hook-form-elements/GridFormInputText";
import { GridColDef, GridRowModes } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";


const GridTextField = ({ field, id }) => {
  const { control, trigger } = useFormContext();
  const name = `${id}.${field}`;

  useEffect(() => {
    trigger();
  }, []);

  return <GridFormInputText name={name} key={name} control={control}/>;
};

const renderTextfieldCell = (params) => {
  const { field, id } = params;

  return <GridTextField field={field} id={id} />;
};

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
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 120,
      editable: true,
      renderEditCell: renderTextfieldCell,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "producer",
      headerName: "producer",
      flex: 1,
      minWidth: 320,
      editable: true,
      renderEditCell: renderTextfieldCell,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      minWidth: 120,
      editable: true,
      renderEditCell: renderTextfieldCell,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      minWidth: 120,
      editable: true,
      renderEditCell: renderTextfieldCell,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
      minWidth: 120,
      editable: true,
      renderEditCell: renderTextfieldCell,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 120,
      editable: true,
      renderEditCell: renderTextfieldCell,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "subcategory",
      headerName: "Subcategory",
      flex: 1,
      editable: true,
      minWidth: 100,
      renderEditCell: renderTextfieldCell,
      renderCell: renderDataGridCellExpand,
    },
    // {
    //   field: "image_url",
    //   headerName: "Image",
    //   flex: 1,
    //   editable: true,
    //   minWidth: 150,
    //   renderCell: (params) => {
    //     return (
    //       <input
    //         type="file"
    //         accept="image/*"
    //         onChange={async (e) => {
    //           const file = e.target.files[0];
    //           const imageUrl = await uploadImage(file); // Function to handle image upload
    //           if (imageUrl) {
    //             params.row.image_url = imageUrl; // Update the product image URL
    //           }
    //         }}
    //       />
    //     );
    //   },
    // },
    {
      field: 'actions',
      type: 'actions',
      headerName: ('actions'),
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

  // const partialColumns = columns.filter(
  //   (column) => !hiddenColumns.includes(column.field)
  // );

  return columns as GridColDef[];
};
