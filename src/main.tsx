import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.ts";
import ReactGa from "react-ga";

const store = setupStore();
ReactGa.initialize(import.meta.env.VITE_GA_ID);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
