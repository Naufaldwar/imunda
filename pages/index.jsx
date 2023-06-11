import { Inter } from "next/font/google";
import hero from "../assets/hero1.png";
import logo from "../assets/imundagamis.jpg";
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

// const inter = Inter({ subsets: ["latin"] });
import { data1 } from "./data";
import { data2 } from "./data";
import { data3 } from "./data";
import { Card } from "@/components/Card";
export default function Home() {
  const productData = [data1, data2, data3];
  const [variant, setVariant] = useState("");
  const [size, setSize] = useState("");
  const [payment, setPayment] = useState("");
  const [dataProduk, setDataProduk] = useState(productData[0]);
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

  const handleClick = (item) => {
    console.log(item);
    setDataProduk(item);
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
          //520f9b99617a9af001a9b4a2d4c31717 , ce8b738b8260f386ae528dcff159a7b0
          key: "520f9b99617a9af001a9b4a2d4c31717",
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
          <Text size="24px" align="center">
            Fashion Muslimah Trenndi
          </Text>
          <Image src={hero} alt="hero" className="w-full md:w-1/2" />
        </Flex>
        <Divider my={"md"} />

        {/* Content Product */}
        {dataProduk && (
          <Modal
            opened={opened}
            onClose={() => {
              setOpened(false);
            }}
            size={"xl"}
          >
            <Flex justify={"center"}>
              <Text
                className="text-sm md:text-base"
                fw={"bolder"}
                align="center"
              >
                🌸🌸 {dataProduk.name} 🌸🌸
              </Text>
            </Flex>
            <Flex className="my-4 md:my-4 flex flex-col md:flex-row justify-center items-center md:justify-evenly">
              <div className="relative flex flex-col w-full justify-center items-center">
                <Flex gap={"md"} align={"start"}>
                  <p className="text-xs md:text-base font-semibold">
                    {handlePrice(dataProduk.price)}
                  </p>
                  <p className="text-xs md:text-base line-through text-red-400">
                    {handlePrice(dataProduk.pricetrought)}
                  </p>
                  <IconBookmarkFilled
                    textAnchor="asdas"
                    className="text-red-600 absolute top-0 right-0 md:w-[90px] md:h-[90px] h-14 w-14"
                  />
                  <p className="absolute md:right-7 md:top-7 right-4 top-4 text-[10px] md:text-base text-white font-semibold">
                    -{dataProduk.discount}
                  </p>
                </Flex>
                <Image
                  src={dataProduk.image}
                  alt="shadira"
                  className="md:h-full md:w-40 h-40 w-auto"
                />
              </div>
              <Flex
                className="md:w-[500px] w-full text-center md:text-justify"
                direction={"column"}
                gap={"lg"}
              >
                <Text className="md:text-lg text-xs">
                  {dataProduk.description}
                </Text>
              </Flex>
            </Flex>
            <Flex justify={"center"}>
              <Text
                align="center"
                className="underline-offset-auto underline text-sm md:text-base"
              >
                Variant
              </Text>
            </Flex>
            <Text my={"md"} className="text-xs md:text-base">
              Pilih Variant :{" "}
            </Text>
            <Radio.Group
              value={variant}
              onChange={setVariant}
              gap={"md"}
              className="md:justify-evenly justify-center items-center flex-col md:flex-row flex "
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
                        className="hover:scale-110 w-14 h-auto"
                      />
                      <Text fz="10px">Variant {item.name}</Text>
                    </Flex>
                  }
                />
              ))}
            </Radio.Group>
            <Text className="text-slate-500 md:w-[300px]" fz={"10px"}>
              *Warna yang tampil di foto mungkin berbeda dengan warna asli
              karena efek cahaya atau pengaturan tampilan monitor atau hp yang
              digunakan oleh pembeli
            </Text>
            <Flex justify={"center"} mt={"lg"}>
              <Text
                align="center"
                className="underline-offset-auto underline text-sm md:text-base "
              >
                Ukuran
              </Text>
            </Flex>
            <Text className="text-xs md:text-base my-2">Pilih Ukuran : </Text>
            <Radio.Group
              value={size}
              onChange={setSize}
              className="flex gap-4 text-xs"
              size=""
            >
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
                  <span className="text-red-900">*</span>Silahkan pilih ukuran
                  dan variant terlebih dahulu
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
        )}
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
            <Select
              value={city}
              onChange={setCity}
              data={data}
              label="Pilih Kota"
              withAsterisk
              searchable
              placeholder="pilih kota anda"
            />
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

            <Flex className="bg-white sticky bottom-0 p-3" direction={"column"}>
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
            <Text className="text-xs md:text-base">
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
                    <Text className="text-[10px] text-xs underline underline-offset-1 text-red-300 hover:cursor-pointer hover:text-slate-400">
                      Download detail pesanan
                    </Text>
                  )
                }
              </PDFDownloadLink>
            )}
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
          className="flex justify-start items-center"
        >
          {productData.map((item, index) => (
            <div key={index} onClick={() => handleClick(item)}>
              <Card data={item} />
            </div>
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
    </div>
  );
}
