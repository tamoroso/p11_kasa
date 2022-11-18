import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HousingContextProvider } from "./context/HousingContext";
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Error = lazy(() => import("./pages/Error/Error"));
const Housing = lazy(() => import("./pages/Housing/Housing"));
const About = lazy(() => import("./pages/About/About"));

const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <HousingContextProvider>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            ></Route>
            <Route
              exact
              path="/housing/:id"
              element={
                <Layout>
                  <Housing />
                </Layout>
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            ></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Router>
      </HousingContextProvider>
    </Suspense>
  );
};

export default AppRouter;
