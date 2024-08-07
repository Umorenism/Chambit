// main.tsx
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
import { Navbar } from "./component/navbar/navbar/Navbar.tsx";
import { Footer } from "./component/footer/Footer.tsx";
import { SubHeaderComp } from "./component/navbar/navbar/SubHeaderComp.tsx";
import { AuthProvider } from "./context/AuthContext.tsx"; // Import the AuthProvider
import { DepositeCrypto } from "./component/DepositeCrypto.tsx";
import { DepositDetailPage } from "./component/DepositDetailPage.tsx";

import { DepositView } from "./component/DepositView.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <GetStarted />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/subHead",
        element: <SubHeaderComp />,
      },
      {
        path: "/signup",
        element: (
          <>
            <Signup />
            <Footer />
          </>
        ),
      },
      {
        path: "/home",
        element: (
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        ),
      },
      {
        path: "/market",
        element: (
          <>
            <Navbar />
            <Market />
            <Footer />
          </>
        ),
      },
      {
        path: "/asset",
        element: (
          <>
            <Navbar />
            <Asset />
            <Footer />
          </>
        ),
      },
      {
        path: "/swap",
        element: (
          <>
            <Navbar />
            <SwapComp />
            <Footer />
          </>
        ),
      },
      {
        path: "/pp",
        element: (
          <>
            <Navbar />
            <PtoP />
            <Footer />
          </>
        ),
      },
      {
        path: "/spot",
        element: (
          <>
            <Navbar />
            <Spot />
            <Footer />
          </>
        ),
      },
      {
        path: "/orderbook",
        element: (
          <>
            <Navbar />
            <OrderBook />
            <Footer />
          </>
        ),
      },
      {
        path: "/depositdetails",
        element: (
          <>
            <DepositeCrypto />
          </>
        ),
      },
      {
        path: "/depositcrypto",
        element: (
          <>
            <DepositDetailPage />
          </>
        ),
      },

      {
        path: "/depositview",
        element: (
          <>
            <DepositView />
          </>
        ),
      },
      {
        path: "/chart",
        element: (
          <>
            <Navbar />
            <Chart />
            <Footer />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    {" "}
    {/* Wrap the RouterProvider with AuthProvider */}
    <RouterProvider router={router} />
  </AuthProvider>
);
