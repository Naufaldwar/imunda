import { Inter } from "next/font/google";
import hero from "../assets/images/hero1.png";
import logo from "../assets/images/imundagamis.jpg";
import wa from "../assets/images/iconwa.png";
import { Container, Divider, Flex, Text } from "@mantine/core";
import Image from "next/image";

// const inter = Inter({ subsets: ["latin"] });
import { data1, data2, data3, data4, data5, data6 } from "../assets/data";
import { Card } from "@/components/Card";
import Link from "next/link";
export default function Home() {
  const productData = [data1, data2, data3, data4, data5, data6];

  return (
    <div>
      <Container size={"lg"} className="static">
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          gap={"md"}
          m={"md"}
        >
          <Image src={logo} alt="logo" className="w-60 md:w-80" />
          <Text size="24px" align="center">
            Fashion Muslimah Trenndi
          </Text>
          <Image src={hero} alt="hero" className="w-full md:w-1/2" />
        </Flex>
        <Divider my={"md"} />

        {/* Produk Lainnya */}
        <Flex justify={"center"} mt={"lg"}>
          <Text size="24px" fw={"bolder"} align="center">
            Our Product
          </Text>
        </Flex>
        <Flex
          mb={"lg"}
          wrap={"wrap"}
          gap={"md"}
          className="flex justify-center sm:justify-start items-center"
        >
          {productData.map((item, index) => (
            // <div key={index} onClick={() => handleClick(item)}>
            <Link key={item.id} href={`/detailproduct/${item.id - 1}`}>
              <Card data={item} />
            </Link>
            // </div>
          ))}
        </Flex>
        {/* <a href="https://wa.me/6281215998499" target="_blank" rel="noreferrer">
          <Flex justify={"center"} align={"center"} my={"lg"}>
            <Button
              h={60}
              variant="outline"
              color="white"
              className="rounded-full bg-green-500 hover:bg-green-600 text-white border-green-600"
            >
              <Image src={wa} alt="wa" className="w-10 m-5" />
              <Text size="20px">Order via Whatsapp</Text>
            </Button>
          </Flex>
        </a> */}
        <a
          href="https://web.facebook.com/people/Imunda-Gamis/100092712523557/"
          className="flex justify-center items-center hover:underline hover:text-blue-300 mb-10 text-center text-sm"
          target="_blank"
        >
          <Text>Lihat Produk Lainnya di Halaman Kami{">>"}</Text>
        </a>
      </Container>
      <Link href="/detailproduct">deetail</Link>
    </div>
  );
}
