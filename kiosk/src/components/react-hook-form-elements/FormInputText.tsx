import {
  Grid,
  InputLabel,
  TextField,
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { DEFAULT_VALIDATION_RULE } from "../../common/form-validation/rules";
import { classes } from "./styles";

type ConditionalLabel =
  | {
      label?: string | React.ReactNode;
      blockLabel?: never;
    }
  | {
      label?: never;
      blockLabel?: {
        label: string | React.ReactNode;
        endAdornment?: React.ReactNode;
        startAdornment?: React.ReactNode;
      };
    };

export type Props<T> = {
  name: Path<T>;
  control: Control<T>;
  variant?: TextFieldVariants;
  rules?: RegisterOptions;
  gridWidth?: string;
  readOnly?: boolean;
  maxLength?: number;
  type?: string;
  required?: boolean;
  startAdornment?: JSX.Element;
} & ConditionalLabel &
  TextFieldProps;

export default function FormInputText<T extends FieldValues>({
  name,
  control,
  rules = DEFAULT_VALIDATION_RULE,
  readOnly,
  label,
  blockLabel,
  maxLength = null,
  type = "text",
  required = true,
  variant = "outlined",
  gridWidth = "100%",
  startAdornment = null,
  ...textFieldProps
}: Props<T>) {
  return (
    <Grid item width={gridWidth}>
      <Controller
        name={name as Path<T>}
        control={control as Control<FieldValues>}
        rules={required ? rules : { validate: () => true }}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => (
          <>
            {Boolean(blockLabel) && (
              <InputLabel sx={classes.inputLabel}>
                {blockLabel.startAdornment}
                {blockLabel.label}
                {blockLabel.endAdornment}
              </InputLabel>
            )}
            <TextField
              {...textFieldProps}
              autoComplete="off"
              helperText={error ? error.message : null}
              error={!!error}
              onChange={(e) => {
                if (type === "number") {
                  const maxLengthCondition = e.target.value.length > maxLength;
                  if (maxLength && maxLengthCondition) return;

                  if (value === "") {
                    onChange(0);
                  }

                  onChange(+e.target.value);
                } else onChange(e);
              }}
              defaultValue={type === "number" ? 0 : ""}
              value={value}
              label={label}
              type={type}
              variant={variant}
              required={required}
              InputProps={{
                readOnly,
                startAdornment,
              }}
              fullWidth
              inputRef={ref}
            />
          </>
        )}
      />
    </Grid>
  );
}
