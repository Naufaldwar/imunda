// import { Container, Table } from "@mantine/core";
// import axios from "axios";
// import { useEffect, useState } from "react";
// export default function Dashboard() {
//   //get data with axios
//   const [data, setData] = useState([]); //useState is a hook that allows you to have state variables in functional components
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_ENDPOINT}/list`
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Container size={"xl"}>
//       <Table>
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>City ID</th>
//             <th>Address</th>
//             <th>Shipping</th>
//             <th>Size</th>
//             <th>Variant</th>
//             <th>Payment Methode</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map((item, index) => (
//             <tr key={item._id}>
//               <td>{index + 1}</td>
//               <td>{item.name}</td>
//               <td>{item.phone}</td>
//               <td>{item.city}</td>
//               <td>{item.address}</td>
//               <td>{item.name_product}</td>
//               <td>{item.size}</td>
//               <td>{item.variant}</td>
//               <td>{item.payment}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// }
