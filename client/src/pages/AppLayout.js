import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import usePlanets from "../hooks/usePlanets";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Launch from "./Launch";
import History from "./History";
import Upcoming from "./Upcoming";
import { Box, Card } from "@chakra-ui/react";

const AppLayout = (props) => {
  useNavigate();

  const planets = usePlanets();

  return (
    <>
      <Card
        w="60%"
        bg="green.100"
        // boxShadow="dark-lg"
        marginX="auto"
      >
        <Box bg="red.100" align="space-between">
          <Header />
        </Box>
        <Card
          padding={10}
          margin={10}
          w="80%"
          bg="yellow.100"
          // boxShadow="dark-lg"
          marginX="auto"
        >
          <Routes>
            <Route
              exact
              path="/"
              element={<Launch planets={planets} />}
            ></Route>
            <Route
              exact
              path="/launch"
              element={<Launch planets={planets} />}
            ></Route>
            <Route exact path="/upcoming" element={<Upcoming />}></Route>
            <Route exact path="/history" element={<History />}></Route>
          </Routes>
        </Card>
        <Footer />
      </Card>
    </>
  );
};

export default AppLayout;
