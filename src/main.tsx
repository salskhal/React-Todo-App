import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TodoContextProvider from "./contexts/TodoContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      // clientId={import.meta.env.REACT_APP_KINDE_CLIENT_ID!}
      // domain={import.meta.env.REACT_APP_KINDE_DOMAIN!}
      // redirectUri={import.meta.env.REACT_APP_KINDE_REDIRECT_URI!}
      // logoutUri={import.meta.env.REACT_APP_KINDE_LOGOUT_URI!}
      clientId="a0809cdaa39b496dbee1c99798bfa696"
      domain="https://salskhal.kinde.com"
      // redirectUri="http://localhost:5173"
      redirectUri={
        process.env.NODE_ENV === "production"
          ? "https://react-todo-app-ten-theta.vercel.app/"
          : "http://localhost:5173"
      }
      logoutUri={
        process.env.NODE_ENV === "production"
          ? "https://react-todo-app-ten-theta.vercel.app/"
          : "http://localhost:5173"
      }
    >
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
