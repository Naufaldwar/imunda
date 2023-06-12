import { Checkbox, Container, Modal, Table } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Dashboard() {
  //get data with axios
  const [openedDelete, setOpenedDelete] = useState(0); //useState is a hook that allows you to have state variables in functional components
  const [data, setData] = useState([]); //useState is a hook that allows you to have state variables in functional components
  const [checked, setChecked] = useState(false); //useState is a hook that allows you to have state variables in functional components
  const [openedCheck, setOpenedCheck] = useState(0); //useState is a hook that allows you to have state variables in functional components
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/list`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const dateFormatter = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };
  const handleDelete = () => async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/list/${openedDelete}`
      );
      console.log(response);
      const newData = data.filter((data) => data._id !== openedDelete);
      setData(newData);
      setOpenedDelete(0);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePrice = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const handleCheck = () => async () => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/list/${openedCheck}`,
        {
          checked: true,
        }
      );
      console.log(response);
      const newData = data.map((item) => {
        if (item._id === response.data._id) {
          return {
            ...response.data,
          };
        } else {
          return item;
        }
      });
      console.log(newData);
      setOpenedCheck(0);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data);
  return (
    <Container size={"xl"}>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Name</th>
            <th>Phone</th>
            <th>City ID</th>
            <th>Address</th>
            <th>Shipping</th>
            <th>Size</th>
            <th>Variant</th>
            <th>Payment Methode</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{dateFormatter(item.date)}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.city}</td>
              <td>{item.address}</td>
              <td>{item.name_product}</td>
              <td>{item.size}</td>
              <td>{item.variant}</td>
              <td>{item.payment}</td>
              <td>{handlePrice(item.total_cost)}</td>
              <td className="flex  justify-center items-center">
                <IconTrash
                  className=" text-red-400 hover:cursor-pointer"
                  onClick={() => setOpenedDelete(item._id)}
                />
                <Checkbox
                  checked={item.checked}
                  onChange={() => setOpenedCheck(item._id)}
                  disabled={item.checked == true}
                />
                <Modal
                  opened={openedDelete == item._id}
                  onClose={() => setOpenedDelete(0)}
                >
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <h1>Are you sure want to delete this data?</h1>
                    <p>{item.name}</p>
                    <div className="flex gap-2 justify-center items-center">
                      <button
                        className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={handleDelete()}
                      >
                        Yes
                      </button>
                      <button
                        className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={() => setOpenedDelete(0)}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </Modal>
                <Modal
                  opened={openedCheck == item._id}
                  onClose={() => setOpenedCheck(0)}
                >
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <h1>Are you sure want to check this data?</h1>
                    <div className="flex gap-2 justify-center items-center">
                      <button
                        className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={handleCheck()}
                      >
                        Yes
                      </button>
                      <button
                        className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={() => setOpenedCheck(0)}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
