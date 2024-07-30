import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./page/Home.tsx";
import { Login } from "./Login/Login.tsx";
import { Signup } from "./Signup/Signup.tsx";
import { Market } from "./component/Market.tsx";
import { Asset } from "./component/Asset.tsx";

import { SwapComp } from "./component/SwapComp.tsx";
import { PtoP } from "./component/PtoP.tsx";
import { OrderBook } from "./component/OrderBook.tsx";
import { Chart } from "./component/Chart.tsx";
import { Spot } from "./component/Spot.tsx";
import { GetStarted } from "./component/GetStarted.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/",
        element: <GetStarted />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/asset",
        element: <Asset />,
      },

      {
        path: "/swap",
        element: <SwapComp />,
      },
      {
        path: "/pp",
        element: <PtoP />,
      },
      {
        path: "/spot",
        element: <Spot />,
      },
      {
        path: "/orderbook",
        element: <OrderBook />,
      },
      {
        path: "/chart",
        element: <Chart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
