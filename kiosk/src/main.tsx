import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider} from 'notistack'
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SnackbarProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SnackbarProvider>
);
