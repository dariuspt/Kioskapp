import { getDatagridActions } from "@/common/utils/dataGrid/actions/getDatagridAction";
import { renderDataGridCellExpand } from "@/common/utils/dataGrid/helpers";
import FormInputFile from "@/components/react-hook-form-elements/FormInputFile";
import FormSelect from "@/components/react-hook-form-elements/FormSelect";
import {
  BasicRenderOption,
  CheckboxOption,
} from "@/components/react-hook-form-elements/formSelect/RenderOption";
import GridCheckboxInput from "@/components/react-hook-form-elements/GridCheckboxInput";
import GridFormInputText from "@/components/react-hook-form-elements/GridFormInputText";
import { Box, Typography } from "@mui/material";
import { GridColDef, GridRowModes } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { CategoryService } from "@/resources/adminCategories";
import { fetchCastedCategories } from "../Products/useColumns";
import { useSubcategories } from "./utils";

const GridTextField = ({ field, id }) => {
  const { control, trigger } = useFormContext();
  const name = `${id}.${field}`;

  useEffect(() => {
    trigger();
  }, []);

  return <GridFormInputText name={name} key={name} control={control} />;
};

const renderTextfieldCell = (params) => {
  const { field, id } = params;

  return <GridTextField field={field} id={id} />;
};

export const GridFileInput = ({ field, id }) => {
  const { control, trigger } = useFormContext();
  const name = `${id}.${field}`;

  useEffect(() => {
    // Optionally trigger validation when the component mounts
    trigger(name);
  }, [name, trigger]);

  return <FormInputFile name={name} control={control} accept="image/*" />;
};

const GridCheckbox = ({ field, id }) => {
  const { control } = useFormContext();
  const name = `${id}.${field}`;

  return <GridCheckboxInput name={name} key={name} control={control} />;
};

const renderCheckboxCell = (params) => {
  const { field, id } = params;

  return <GridCheckbox field={field} id={id} />;
};

const GridDropdown = ({ field, id, multiple, categoryId }) => {
  const { control } = useFormContext();
  const name = `${id}.${field}`;
  const { subcategories, loading } = useSubcategories(categoryId);
  return (
    <FormSelect
      options={subcategories}
      label=""
      name={name}
      multiple={multiple}
      key={name}
      control={control}
      disableCloseOnSelect={multiple}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderOption={(props, option, { selected }) =>
        multiple ? (
          <CheckboxOption
            props={props}
            option={option.name}
            selected={selected}
          />
        ) : (
          <BasicRenderOption
            props={props}
            value={option?.name}
            key={option.id}
          />
        )
      }
    />
  );
};

const renderDropdownCell = (params) => {
  const { field, id } = params;
  const categoryId = params.row.id;
  console.log('categoryId')

  return (
    <GridDropdown
      field={field}
      id={id}
      multiple={false}
      categoryId={categoryId}
    />
  );
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
      field: "description",
      headerName: "Description",
      flex: 1,
      minWidth: 120,
      editable: true,
      renderEditCell: renderTextfieldCell,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      editable: true,
      minWidth: 150,
      renderEditCell: (params) => {
        const { id, field } = params;
        return <GridFileInput id={id} field={field} />;
      },
      renderCell: (params) => {
        const imageUrl = params.row.image_url;
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Product"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  textAlign: "center",
                }}
              >
                No Image
              </Typography>
            )}
          </Box>
        );
      },
    },
    {
      field: "subcategory",
      headerName: "Subcategory",
      flex: 1,
      editable: true,
      minWidth: 100,
      renderEditCell: renderDropdownCell,
      renderCell: renderDataGridCellExpand,
    },
    {
      field: "is_top_category",
      headerName: "Top Categorie",
      flex: 1,
      editable: true,
      type: "boolean",
      minWidth: 100,
      renderEditCell: renderCheckboxCell,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "actions",
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
