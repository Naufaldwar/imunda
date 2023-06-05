import { Inter } from "next/font/google";
import hero from "../assets/hero1.png";
import logo from "../assets/imundagamis.jpg";
import shadira from "../assets/shadira.png";
import variant1 from "../assets/varian1.png";
import variant2 from "../assets/varian2.png";
import variant3 from "../assets/variant3.png";
import variant4 from "../assets/variant4.png";
import variant5 from "../assets/variant5.png";
import variant6 from "../assets/variant6.png";
import variant7 from "../assets/variant7.png";
import variant8 from "../assets/variant8.png";
import variant9 from "../assets/variant9.png";
import variant10 from "../assets/variant10.png";
import variant11 from "../assets/11.png";
import variant12 from "../assets/12.png";
import variant13 from "../assets/13.png";
import variant14 from "../assets/14.png";
import variant15 from "../assets/15.png";
import ukuran1 from "../assets/ukuran.jpg";
import ukuran2 from "../assets/ukuran2.jpg";
import ukuran3 from "../assets/ukuran3.jpg";
import ziya from "../assets/ziya.png";
import alula from "../assets/alula.png";
import wa from "../assets/iconwa.png";
import { Button, Container, Divider, Flex, Text } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { data } from "autoprefixer";
import { IconBookmarkFilled } from "@tabler/icons-react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data1 = {
    id: "1",
    name: "Shadira Dress",
    description:
      "Shadira dress hadir dengan desain dress 2 in 1 yang terdiri dari dress dan vest motif tartan (kotak-kotak). Gamis dalam terbuat dari bahan cey airflow dan vest bagian luar berbahan royal tartan. Bahan cey airflow merupakan bahan yang memiliki karakteristik tekstur crinkle, bahan yang jatuh, ironless, stretch, dan halus.Sedangkan vest bermotif kotak-kotak menggunakan bahan royal tartan yang lembut, jatuh, adem.",
    pricetrought: "Rp. 350.000",
    discount: "16%",
    price: "Rp. 294.000",
    image: shadira,
    variant: [
      {
        id: "1",
        name: "Beige",
        image: variant1,
      },

      {
        id: "2",
        name: "Black",
        image: variant2,
      },
      {
        id: "3",
        name: "Deep Pink",
        image: variant3,
      },
      {
        id: "4",
        name: "Mint",
        image: variant4,
      },
      {
        id: "5",
        name: "Smoke Grey",
        image: variant5,
      },
    ],
    ukuran: ukuran1,
  };
  const data2 = {
    id: "2",
    name: "Ziya Simple Dress",
    description:
      "Ziya Dress menggunakan bahan Shakila, memiliki karakter adem, lembut, ringan, stretchy, jatuh, serat diagonal sehingga nyaman untuk aktifitas. Looknya cantik tapi tetap sederhana dan nyaman digunakan kemanapun",
    pricetrought: "Rp. 340.000",
    discount: "12%",
    price: "Rp. 299.200",
    image: ziya,
    variant: [
      {
        id: "1",
        name: "Black",
        image: variant6,
      },

      {
        id: "2",
        name: "Dusty Cream",
        image: variant7,
      },
      {
        id: "3",
        name: "Mint",
        image: variant8,
      },
      {
        id: "4",
        name: "Mocca",
        image: variant9,
      },
      {
        id: "5",
        name: "Rose Brown",
        image: variant10,
      },
    ],
    ukuran: ukuran2,
  };
  const data3 = {
    id: "3",
    name: "Alula 3in1 Dress Korean dress with vest",
    description:
      "Alula 3in1 Dress Korean dress with vest menggunakan bahan Shakila, memiliki karakter adem, lembut, ringan, stretchy, jatuh, serat diagonal sehingga nyaman untuk aktifitas. Looknya cantik tapi tetap sederhana dan nyaman digunakan kemanapun",
    price: "Rp. 297.500",
    pricetrought: "Rp. 350.000",
    discount: "15%",
    image: alula,
    variant: [
      {
        id: "1",
        name: "Ginger Bread",
        image: variant11,
      },
      {
        id: "2",
        name: "Soft Purple",
        image: variant12,
      },
      {
        id: "3",
        name: "Rose Brown",
        image: variant13,
      },
      {
        id: "4",
        name: "Maroon",
        image: variant14,
      },
      {
        id: "5",
        name: "Army",
        image: variant15,
      },
    ],
    ukuran: ukuran3,
  };

  const [dataProduk, setDataProduk] = useState(data1);
  const handleClick1 = () => {
    setDataProduk(data2);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const handleClick2 = () => {
    setDataProduk(data1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const handleClick3 = () => {
    setDataProduk(data3);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

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
          <Text size="24px">Fashion Muslimah Trenndi</Text>
          <Image src={hero} alt="hero" className="w-[700px]" />
        </Flex>
        <Divider my={"md"} />

        {/* Content Product */}
        <Flex justify={"center"}>
          <Text size="24px" fw={"bolder"} align="center">
            🌸🌸 {dataProduk.name} 🌸🌸
          </Text>
        </Flex>
        <Flex
          my={"32px"}
          // justify={"space-evenly"}
          className="flex flex-col md:flex-row justify-center items-center md:justify-evenly"
        >
          <div className="relative">
            <Flex gap={"md"} align={"start"}>
              <p className="font-semibold">{dataProduk.price}</p>
              <p className="line-through text-red-400">
                {dataProduk.pricetrought}
              </p>
              <IconBookmarkFilled
                size={90}
                textAnchor="asdas"
                className="text-red-600"
              />
              <p className="absolute right-7 top-7 text-white font-semibold">
                -{dataProduk.discount}
              </p>
            </Flex>
            <Image
              src={dataProduk.image}
              alt="shadira"
              className="md:h-full w-40"
              // width={400}
              // height={100}
            />
          </div>
          <Flex
            className="md:w-[500px] w-80 text-center md:text-justify"
            direction={"column"}
            gap={"lg"}
          >
            <Text style={{ fontSize: "20px" }}>{dataProduk.description}</Text>
          </Flex>
        </Flex>
        <Flex justify={"center"}>
          <Text
            size="24px"
            align="center"
            className="underline-offset-auto underline"
          >
            Variant
          </Text>
        </Flex>
        <Flex gap={"md"} className="md:justify-evenly flex-col md:flex-row">
          {dataProduk.variant.map((item) => (
            <>
              <Flex
                my={"md"}
                direction={"column"}
                justify={"center"}
                align={"center"}
                key={item.id}
              >
                <Image
                  src={item.image}
                  alt="shadira"
                  height={300}
                  className="hover:scale-110"
                />
                <Text>Variant {item.name}</Text>
              </Flex>
            </>
          ))}
        </Flex>
        <Flex justify={"center"} mt={"lg"}>
          <Text
            size="24px"
            align="center"
            className="underline-offset-auto underline"
          >
            Ukuran
          </Text>
        </Flex>
        <Flex justify={"center"} mt={"lg"}>
          <Image
            src={dataProduk.ukuran}
            alt="ukuran"
            className="md:w-[800px] w-80 rounded-xl md:rounded-3xl"
          />
        </Flex>

        <Divider my={"md"} />

        {/* Produk Lainnya */}
        <Flex justify={"center"} mt={"lg"}>
          <Text size="24px" fw={"bolder"} align="center">
            Best Seller
          </Text>
        </Flex>
        <Flex
          mb={"lg"}
          wrap={"wrap"}
          gap={"md"}
          justify={"center"}
          align={"center"}
        >
          <Flex
            onClick={handleClick1}
            className="relative shadow-lg border w-80 h-80 flex-col rounded-xl p-3 justify-center items-center gap-2 hover:cursor-pointer hover:scale-105"
          >
            <IconBookmarkFilled
              size={90}
              className="text-red-600 absolute top-0 right-0"
            />
            <p className="absolute right-7 top-7 text-white font-semibold">
              -{data2.discount}
            </p>
            <Image
              src={data2.image}
              alt="shadira"
              className="h-60 object-contain"
            />
            <Text fz={"md"} fw={"bolder"}>
              {data2.name}
            </Text>
          </Flex>
          <Flex
            onClick={handleClick2}
            className="relative shadow-lg border w-80 h-80 flex-col rounded-xl p-3 justify-center items-center gap-2 hover:cursor-pointer hover:scale-105"
          >
            <IconBookmarkFilled
              size={90}
              className="text-red-600 absolute top-0 right-0"
            />
            <p className="absolute right-7 top-7 text-white font-semibold">
              -{data1.discount}
            </p>
            <Image
              src={data1.image}
              alt="shadira"
              className="h-60 object-contain"
            />
            <Text fz={"md"} fw={"bolder"}>
              {data1.name}
            </Text>
          </Flex>
          <Flex
            onClick={handleClick3}
            className="relative shadow-lg border w-80 h-80 flex-col rounded-xl p-3 justify-center items-center gap-2 hover:cursor-pointer hover:scale-105"
          >
            <IconBookmarkFilled
              size={90}
              className="text-red-600 absolute top-0 right-0"
            />
            <p className="absolute right-7 top-7 text-white font-semibold">
              -{data3.discount}
            </p>
            <Image
              src={data3.image}
              alt="shadira"
              className="h-60 object-contain"
            />
            <Text fz={"md"} fw={"bolder"}>
              {data3.name}
            </Text>
          </Flex>
        </Flex>
        <a href="https://wa.me/6285246412783" target="_blank" rel="noreferrer">
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
        </a>
      </Container>
    </div>
  );
}
