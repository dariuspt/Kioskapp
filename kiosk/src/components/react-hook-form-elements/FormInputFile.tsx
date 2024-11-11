import { Button, Grid} from "@mui/material";
import { Box } from "@mui/system";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  useForm,
} from "react-hook-form";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import { useState } from "react";
import { bytesToMegaBytes } from "@/common/utils/bytesToMegaBytes";
import { useTranslation } from "react-i18next";
import { classes } from "./styles";

// This type defines a set of common MIME types using a union type. we can add or remove types as needed, depending on the specific requirements of the application
type AcceptableFileTypes =
  | "image/*"
  | "image/png"
  | "image/jpeg"
  | "image/gif"
  | "application/pdf"
  | "video/*"
  | "video/mp4"
  | "audio/*"
  | "audio/mpeg"
  | "text/plain"
  | "application/msword"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export type Props<T extends FieldValues> = {
  name: keyof T;
  control: Control<T>;
  required?: boolean;
  label?: string;
  defaultSelectedFile?: File;
  rules?: RegisterOptions;
  accept?: AcceptableFileTypes;
};

export default function FormInputFile<T extends FieldValues>({
  control,
  defaultSelectedFile,
  name,
  accept = "application/pdf",
}: Props<T>) {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File>(
    defaultSelectedFile || null
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Grid container alignItems="center" spacing={2} sx={{display: 'flex', justifyContent: 'center', justifyItems: 'center',}}>
          <Grid item>
            <Button variant="outlined" component="label">
              {t("uploadFile")}
              <input
                type="file"
                hidden
                accept={accept}
                onChange={(e) => {
                  const file = e.target.files[0];
                  field.onChange(file);
                  setSelectedFile(file);
                }}
              />
            </Button>
          </Grid>
          <Grid item>
            {selectedFile && (
              <span>{selectedFile.name}</span>
            )}
          </Grid>
        </Grid>
      )}
    />
  );
}
