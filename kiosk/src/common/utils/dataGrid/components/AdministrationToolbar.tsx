import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Box, Button, Grid, LinearProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import { QuickFilter } from "./quickFilter/QuickFilter";
import { CustomStack } from "./customStack/CustomStack";
import { datagridStyles } from "@/styles/styles";

const AdministrationToolbar = ({ onCreate, buttonLabel }) => {
  const { t } = useTranslation();
  return (
    <GridToolbarContainer>
      <Grid container>
        <Grid item>
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
        </Grid>
        <Grid item flexGrow={1}>
          <QuickFilter />
        </Grid>
        <Grid item xs={12} sm="auto">
          <Button
            color="primary"
            variant="contained"
            onClick={onCreate}
            size="small"
          >
            {buttonLabel || t("create")}
          </Button>
        </Grid>
      </Grid>
    </GridToolbarContainer>
  );
};

export const administrationToolbar = {
  toolbar: AdministrationToolbar,
  loadingOverlay: LinearProgress,
  noRowsOverlay: CustomStack,
  noResultsOverlay: CustomStack,
};

const SuggestionsToolbar = ({ onCreate, buttonLabel, title }) => {
  const { t } = useTranslation();
  return (
    <GridToolbarContainer sx={datagridStyles.cardHeader}>
      <Grid container>
        <Grid item flexGrow={1} sx={datagridStyles.cardTypographyWrapper}>
          <Box component="span" sx={datagridStyles.cardTypography}>
            {title}
          </Box>
        </Grid>
        <Grid item xs={12} sm="auto">
          <Button
            color="primary"
            variant="contained"
            onClick={onCreate}
            size="small"
          >
            {buttonLabel || t("create")}
          </Button>
        </Grid>
      </Grid>
    </GridToolbarContainer>
  );
};

export const suggestionsToolbar = {
  toolbar: SuggestionsToolbar,
};
