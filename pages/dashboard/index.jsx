import { Table } from "@mantine/core";
import axios from "axios";
import { useEffect } from "react";
export default function Dashboard() {
  //get data with axios
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_ENDPOINT)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Element position</th>
            <th>Element name</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hydrogen</td>
            <td>H</td>
            <td>1.00794</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
