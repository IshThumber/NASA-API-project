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

const History = (props) => {
  const tableBody = useMemo(() => {
    return props.launches
      ?.filter((launch) => !launch.upcoming)
      .map((launch) => {
        return (
          <Tr key={String(launch.flightNumber)}>
            <Td>
              <span style={{ color: launch.success ? "greenyellow" : "red" }}>
                █
              </span>
            </Td>
            <Td>{launch.flightNumber}</Td>
            <Td>{new Date(launch.launchDate).toDateString()}</Td>
            <Td>{launch.mission}</Td>
            <Td>{launch.rocket}</Td>
            <Td>{launch.customers?.join(", ")}</Td>
          </Tr>
        );
      });
  }, [props.launches]);

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th style={{ width: "2rem" }}></Th>
              <Th style={{ width: "3rem" }}>No.</Th>
              <Th style={{ width: "9rem" }}>Date</Th>
              <Th>Mission</Th>
              <Th style={{ width: "7rem" }}>Rocket</Th>
              <Th>Customers</Th>
            </Tr>
          </Thead>
          <Tbody>{tableBody}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default History;
