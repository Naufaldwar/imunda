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
import {
  Button,
  Container,
  Divider,
  Flex,
  Input,
  Modal,
  Radio,
  Select,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IconBookmarkFilled } from "@tabler/icons-react";
import axios from "axios";
import {
  PDFDownloadLink,
  Page,
  Text as PDFText,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// Define the PDF document component

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data1 = {
    id: "1",
    name: "Shadira Dress",
    description:
      "Shadira dress hadir dengan desain dress 2 in 1 yang terdiri dari dress dan vest motif tartan (kotak-kotak). Gamis dalam terbuat dari bahan cey airflow dan vest bagian luar berbahan royal tartan. Bahan cey airflow merupakan bahan yang memiliki karakteristik tekstur crinkle, bahan yang jatuh, ironless, stretch, dan halus.Sedangkan vest bermotif kotak-kotak menggunakan bahan royal tartan yang lembut, jatuh, adem.",
    pricetrought: 350000,
    discount: "16%",
    price: 294000,
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
    pricetrought: 340000,
    discount: "12%",
    price: 299200,
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
    price: 297500,
    pricetrought: 350000,
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
  const [variant, setVariant] = useState("");
  const [size, setSize] = useState("");
  const [payment, setPayment] = useState("");
  const [dataProduk, setDataProduk] = useState(data1);
  const [opened, setOpened] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [openedSuccess, setOpenedSuccess] = useState(false);
  const [dataCity, setDataCity] = useState(null);
  const [city, setCity] = useState(null);
  const [cost, setCost] = useState(null);
  const [inputNameValue, setInputNameValue] = useState("");
  const handleInputNameChange = (event) => {
    setInputNameValue(event.currentTarget.value);
  };

  const [inputAddressValue, setInputAddressValue] = useState("");
  const handleInputAddressChange = (event) => {
    setInputAddressValue(event.currentTarget.value);
  };
  const [inputPhoneValue, setInputPhoneValue] = useState("");
  const handleInputPhoneChange = (event) => {
    setInputPhoneValue(event.currentTarget.value);
  };

  const handleClick1 = () => {
    setDataProduk(data2);
    setOpened(true);
  };
  const handleClick2 = () => {
    setDataProduk(data1);
    setOpened(true);
  };
  const handleClick3 = () => {
    setDataProduk(data3);
    setOpened(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ongkir/city`
        );
        setDataCity(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const fetchCost = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ongkir/cost`,
        {
          key: "d64e10d757bd8868de50234fd1df0d00",
          origin: 419,
          destination: city,
          weight: 600,
          courier: "jne",
        }
      );
      setCost(response.data[0]?.costs[0]?.cost[0]?.value);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCost = () => {
    fetchCost();
  };
  const handleConfirm = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/list`,
        {
          name: inputNameValue,
          city: city,
          address: inputAddressValue,
          phone: inputPhoneValue,
          payment: payment,
          name_product: dataProduk.name,
          size: size,
          variant: variant,
          total_cost: cost + dataProduk.price,
        }
      );
      console.log(response);
      setOpened(false);
      setOpened2(false);
      setOpenedSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  const data = dataCity?.map((item) => {
    return {
      value: item.city_id,
      label: item.type + " " + item.city_name,
    };
  });

  const handlePrice = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const [isComponentAvailable, setComponentAvailability] = useState(false);

  useEffect(() => {
    setComponentAvailability(true);
  }, []);

  const MyDocument = ({
    name,
    address,
    city,
    phone,
    name_product,
    size,
    variant,
    payment,
    cost,
  }) => (
    <Document>
      <Page>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <PDFText style={{ fontSize: "24px", textDecoration: "underline" }}>
            Invoice
          </PDFText>
          <PDFText>Nama Pemesan : {name}</PDFText>
          <PDFText>Alamat : {address}</PDFText>
          <PDFText>Kota : {city}</PDFText>
          <PDFText>No. HP : {phone}</PDFText>
          <PDFText>Nama Produk : {name_product}</PDFText>
          <PDFText>Ukuran : {size}</PDFText>
          <PDFText>Varian : {variant}</PDFText>
          <PDFText>Pembayaran : {payment}</PDFText>
          <PDFText>Total Harga : {cost}</PDFText>
        </View>
      </Page>
    </Document>
  );

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
          <Image src={hero} alt="hero" className="w-full md:w-1/2" />
        </Flex>
        <Divider my={"md"} />

        {/* Content Product */}
        <Modal
          opened={opened}
          onClose={() => {
            setOpened(false);
          }}
          size={"xl"}
        >
          <Flex justify={"center"}>
            <Text size="24px" fw={"bolder"} align="center">
              🌸🌸 {dataProduk.name} 🌸🌸
            </Text>
          </Flex>
          <Flex
            my={"32px"}
            className="flex flex-col md:flex-row justify-center items-center md:justify-evenly"
          >
            <div className="relative flex flex-col justify-center items-center">
              <Flex gap={"md"} align={"start"}>
                <p className="font-semibold">{handlePrice(dataProduk.price)}</p>
                <p className="line-through text-red-400">
                  {handlePrice(dataProduk.pricetrought)}
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
          <Text>Pilih Variant : </Text>
          <Radio.Group
            value={variant}
            onChange={setVariant}
            gap={"md"}
            className="md:justify-evenly flex-col md:flex-row md:flex"
          >
            {dataProduk.variant.map((item) => (
              <Radio
                key={item.name}
                color="red"
                value={item.name}
                label={
                  <Flex
                    my={"md"}
                    direction={"column"}
                    justify={"center"}
                    align={"center"}
                    key={item.name}
                    className="hover:cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt="shadira"
                      height={"auto"}
                      className="hover:scale-110"
                    />
                    <Text fz="10px">Variant {item.name}</Text>
                  </Flex>
                }
              />
            ))}
          </Radio.Group>
          <Text className="text-slate-500" fz={"10px"} w={300}>
            *Warna yang tampil di foto mungkin berbeda dengan warna asli karena
            efek cahaya atau pengaturan tampilan monitor atau hp yang digunakan
            oleh pembeli
          </Text>
          <Flex justify={"center"} mt={"lg"}>
            <Text
              size="24px"
              align="center"
              className="underline-offset-auto underline"
            >
              Ukuran
            </Text>
          </Flex>
          <Text>Pilih Ukuran : </Text>
          <Radio.Group value={size} onChange={setSize} className="flex gap-4">
            <Radio
              value="S"
              label={<Text className="hover:cursor-pointer">S</Text>}
              color="red"
            />
            <Radio
              value="AS"
              label={<Text className="hover:cursor-pointer">AS</Text>}
              color="red"
            />
            <Radio
              value="XL"
              label={<Text className="hover:cursor-pointer">XL</Text>}
              color="red"
            />
          </Radio.Group>
          <Flex justify={"center"} mt={"lg"}>
            <Image
              src={dataProduk.ukuran}
              alt="ukuran"
              className="md:w-[800px] w-80 rounded-xl md:rounded-3xl"
            />
          </Flex>

          <Flex className="bg-white py-4 sticky bottom-0 justify-end gap-4 items-end">
            {size == "" || variant == "" ? (
              <Text fz={"xs"} color="grey">
                <span className="text-red-900">*</span>Silahkan pilih ukuran dan
                variant terlebih dahulu
              </Text>
            ) : (
              ""
            )}
            <Button
              className="bg-red-400 hover:bg-red-500"
              disabled={size != "" && variant != "" ? false : true}
              onClick={() => {
                setOpened(false);
                setOpened2(true);
              }}
            >
              Checkout
            </Button>
          </Flex>
        </Modal>
        <Modal
          opened={opened2}
          onClose={() => {
            setOpened2(false);
            setOpened(true);
          }}
          title={
            <Text fw={"bolder"} fz={"lg"}>
              Konfirmasi Pesanan
            </Text>
          }
        >
          <Flex className="flex flex-col gap-4">
            <Text>Nama Produk : {dataProduk.name}</Text>
            <Text>Harga : {handlePrice(dataProduk.price)}</Text>
            <Text>Ukuran : {size}</Text>
            <Text>Variant : {variant}</Text>
            <Input.Wrapper label="Nama Lengkap" withAsterisk>
              <Input
                id="input-name"
                value={inputNameValue}
                onChange={handleInputNameChange}
                placeholder="masukan nama anda"
              />
            </Input.Wrapper>
            {!city && (
              <Select
                value={city}
                onChange={setCity}
                data={data}
                label="Pilih Kota"
                withAsterisk
                searchable
                placeholder="pilih kota anda"
              />
            )}
            <Input.Wrapper label="Alamat Lengkap" withAsterisk>
              <Input
                id="input-address"
                value={inputAddressValue}
                onChange={handleInputAddressChange}
                placeholder="masukan alamat lengkap anda"
              />
            </Input.Wrapper>
            <Input.Wrapper label="No.Whatsapp" withAsterisk>
              <Input
                id="input-number"
                value={inputPhoneValue}
                onChange={handleInputPhoneChange}
                placeholder="masukan nomor yang terhubung dengan whatsapp"
              />
            </Input.Wrapper>
            <Radio.Group
              withAsterisk
              value={payment}
              onChange={setPayment}
              label="Pilih Metode Pembayaran"
              className="flex flex-col gap-2"
            >
              <Radio value="transfer" label="Transfer" color="red" />
              <Radio value="cod" label="COD" color="red" />
            </Radio.Group>

            <Flex className="bg-white sticky bottom-1 p-3" direction={"column"}>
              {city != null ? handleCost() : null}

              {city != null ? <Text>Ongkir : {handlePrice(cost)} </Text> : null}
              {city != null ? (
                <Text>Total : {handlePrice(dataProduk.price + cost)} </Text>
              ) : (
                "-"
              )}

              <Button
                disabled={
                  inputNameValue == "" ||
                  inputAddressValue == "" ||
                  inputPhoneValue == "" ||
                  city == null ||
                  payment == ""
                    ? true
                    : false
                }
                onClick={handleConfirm}
                className="bg-red-400 hover:bg-red-500 w-full"
              >
                Konfirmasi
              </Button>
              {}
              <Text fz={"xs"} className="text-red-900">
                *Pastikan data yang anda masukan sudah benar
              </Text>
            </Flex>
          </Flex>
        </Modal>
        <Modal
          opened={openedSuccess}
          onClose={() => {
            setOpenedSuccess(false);
          }}
          centered
        >
          {/* make modal success */}
          <Flex className="flex flex-col gap-4 text-center">
            <Text className="text-green-500 text-center text-2xl">
              Pesanan Berhasil!!
            </Text>
            <Text>
              Selamat pesanan anda berhasil dibuat, kami akan memproses
              pengiriman secepatnya, pihak kami akan menghubungi terkait
              pembayaran dan pengiriman nomor resi, Terimakasih{" "}
            </Text>
            {isComponentAvailable && (
              <PDFDownloadLink
                document={
                  <MyDocument
                    name={inputNameValue}
                    address={inputAddressValue}
                    city={city}
                    phone={inputPhoneValue}
                    payment={payment}
                    cost={handlePrice(cost + dataProduk.price)}
                    name_product={dataProduk.name}
                    size={size}
                    variant={variant}
                  />
                }
                fileName="example.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? (
                    "Loading document..."
                  ) : (
                    <Text
                      className="underline underline-offset-1 text-red-300 hover:cursor-pointer hover:text-slate-400"
                      fz={"xs"}
                    >
                      Download detail pesanan
                    </Text>
                  )
                }
              </PDFDownloadLink>
            )}
            {/* <a href="/PDFPage">
              <Text
                className="underline underline-offset-1 text-red-300 hover:cursor-pointer hover:text-slate-400"
                fz={"xs"}
              >
                Download detail pesanan
              </Text>
            </a> */}
          </Flex>
        </Modal>

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
              className="w-auto h-48 object-contain"
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
              className="w-auto h-48 object-contain"
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
              className="w-auto h-48 fit-contain"
            />
            <Text fz={"md"} fw={"bolder"}>
              {data3.name}
            </Text>
          </Flex>
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
          className="flex justify-center items-center hover:underline hover:text-blue-300 mb-10"
          target="_blank"
        >
          <Text>Lihat Produk Lainnya di Halaman Kami{">>"}</Text>
        </a>
      </Container>
    </div>
  );
}
