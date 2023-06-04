import { Inter } from "next/font/google";
import hero from "../assets/hero1.png";
import logo from "../assets/imundagamis.jpg";
import shadira from "../assets/shadira.png";
import variant1 from "../assets/varian1.png";
import variant2 from "../assets/varian2.png";
import variant3 from "../assets/variant3.png";
import variant4 from "../assets/variant4.png";
import variant5 from "../assets/variant5.png";
import ukuran from "../assets/ukuran.jpg";
import wa from "../assets/iconwa.png";
import { Button, Container, Divider, Flex, Text } from "@mantine/core";
import Image from "next/image";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <Text size="24px">Fashion Muslimah Trendi</Text>
          <Image src={hero} alt="hero" className="w-[700px]" />
        </Flex>
        <Divider my={"md"} />

        {/* Content Product */}
        <Flex justify={"center"}>
          <Text size="24px" fw={"bolder"} align="center">
            🌸🌸 Shadira Dress 🌸🌸
          </Text>
        </Flex>
        <Flex
          my={"32px"}
          // justify={"space-evenly"}
          className="flex flex-col md:flex-row justify-center items-center md:justify-evenly"
        >
          <Image src={shadira} alt="shadira" className="md:h-full w-40" />
          <Flex
            className="md:w-[500px] w-80 text-center md:text-justify"
            direction={"column"}
            gap={"lg"}
          >
            <Text style={{ fontSize: "20px" }}>
              Shadira dress hadir dengan desain dress 2 in 1 yang terdiri dari
              dress dan vest motif tartan (kotak-kotak). Gamis dalam terbuat
              dari bahan cey airflow dan vest bagian luar berbahan royal tartan.
            </Text>
            <Text style={{ fontSize: "20px" }}>
              Bahan cey airflow merupakan bahan yang memiliki karakteristik
              tekstur crinkle, bahan yang jatuh, ironless, stretch, dan halus.
              Sedangkan vest bermotif kotak-kotak menggunakan bahan royal tartan
              yang lembut, jatuh, adem.
            </Text>
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
          <Flex
            my={"md"}
            direction={"column"}
            justify={"center"}
            align={"center"}
          >
            <Image src={variant1} alt="shadira" height={400} />
            <Text>Variant Beige</Text>
          </Flex>
          <Flex
            my={"md"}
            direction={"column"}
            justify={"center"}
            align={"center"}
          >
            <Image src={variant2} alt="shadira" height={400} />
            <Text>Variant Black</Text>
          </Flex>
          <Flex
            my={"md"}
            direction={"column"}
            justify={"center"}
            align={"center"}
          >
            <Image src={variant3} alt="shadira" height={400} />
            <Text>Variant Deep Pink</Text>
          </Flex>
          <Flex
            my={"md"}
            direction={"column"}
            justify={"center"}
            align={"center"}
          >
            <Image src={variant4} alt="shadira" height={400} />
            <Text>Variant Mint</Text>
          </Flex>
          <Flex
            my={"md"}
            direction={"column"}
            justify={"center"}
            align={"center"}
          >
            <Image src={variant5} alt="shadira" height={400} />
            <Text>Variant Smoke Grey</Text>
          </Flex>
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
            src={ukuran}
            alt="ukuran"
            className="md:w-[800px] w-80 rounded-xl md:rounded-3xl"
          />
        </Flex>

        {/* <Divider my={"md"} /> */}

        {/* Produk Lainnya */}
        {/* <Flex justify={"center"} mt={"lg"}>
      <Text size="24px" fw={"bolder"} align="center">
        Produk Lainnya
      </Text>
    </Flex> */}
        {/* <Flex
      mb={"lg"}
      wrap={"wrap"}
      gap={"md"}
      justify={"center"}
      align={"center"}
    >
      <Flex className="border w-80 h-80 flex-col rounded-xl p-3 justify-center items-center gap-2">
        <Image src={shadira} alt="shadira" className="h-60 object-contain" />
        <Text fz={"md"} fw={"bolder"}>
          Shadira Dress 2in1
        </Text>
      </Flex>
      <Flex className="border w-80 h-80 flex-col rounded-xl p-3 justify-center items-center gap-2">
        <Image src={shadira} alt="shadira" className="h-60 object-contain" />
        <Text fz={"md"} fw={"bolder"}>
          Shadira Dress 2in1
        </Text>
      </Flex>
      <Flex className="border w-80 h-80 flex-col rounded-xl p-3 justify-center items-center gap-2">
        <Image src={shadira} alt="shadira" className="h-60 object-contain" />
        <Text fz={"md"} fw={"bolder"}>
          Shadira Dress 2in1
        </Text>
      </Flex>
    </Flex> */}
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
