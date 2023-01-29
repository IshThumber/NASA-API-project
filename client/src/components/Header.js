import { Link } from "react-router-dom";
import Upcoming from "./../pages/Upcoming";
import History from "./../pages/History";
import { Heading } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <HStack>
        <Heading size="xl" alignSelf="flex-start">
          <Link to="/">
            <h1>NASA Mission Control</h1>
          </Link>
        </Heading>
        <HStack spacing={10}>
          <Link to="/launch">Launch</Link>
          <Link to="/upcoming">Upcoming</Link>
          <Link to="/history">History</Link>
        </HStack>
      </HStack>
    </>
  );
};

export default Header;
