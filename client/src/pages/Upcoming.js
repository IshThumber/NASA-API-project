import { useMemo } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Upcoming = (props) => {
  const { launches, abortLaunch } = props;

  const tableBody = useMemo(() => {
    return launches
      ?.filter((launch) => launch.upcoming)
      .map((launch) => {
        return (
          <Tr key={String(launch.flightNumber)}>
            <Td>
              <Link onClick={() => abortLaunch(launch.flightNumber)}>✖</Link>
            </Td>
            <Td>{launch.flightNumber}</Td>
            <Td>{new Date(launch.launchDate).toDateString()}</Td>
            <Td>{launch.mission}</Td>
            <Td>{launch.rocket}</Td>
            <Td>{launch.target}</Td>
          </Tr>
        );
      });

    // return (
    //   <Tr>
    //     <Td>✖</Td>
    //     <Td>1</Td>
    //     <Td>2021-08-30</Td>
    //     <Td>Starlink-20</Td>
    //     <Td>Falcon 9</Td>
    //     <Td>LEO</Td>
    //   </Tr>
    // );
  });

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th style={{ width: "3rem" }}></Th>
              <Th style={{ width: "3rem" }}>No.</Th>
              <Th style={{ width: "10rem" }}>Date</Th>
              <Th style={{ width: "11rem" }}>Mission</Th>
              <Th style={{ width: "11rem" }}>Rocket</Th>
              <Th>Destination</Th>
            </Tr>
          </Thead>
          <Tbody>{tableBody}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Upcoming;
