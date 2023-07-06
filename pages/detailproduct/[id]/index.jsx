import { Card } from "@/components/Card";
import {
  Badge,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Input,
  Modal,
  Radio,
  Select,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  PDFDownloadLink,
  Page,
  Text as PDFText,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { data1, data2, data3, data4, data5, data6 } from "@/assets/data";

export default function DetailProduct() {
  const router = useRouter();
  const productData = [data1, data2, data3, data4, data5, data6];
  const [opened, setOpened] = useState(false);
  const [image, setImage] = useState();
  const [product, setProduct] = useState();
  const [variantChoice, setVariantChoice] = useState([]);
  const [payment, setPayment] = useState("");
  const [openedSuccess, setOpenedSuccess] = useState(false);
  const [inputNameValue, setInputNameValue] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [dataCity, setDataCity] = useState([]);
  const [cost, setCost] = useState(0);
  //520f9b99617a9af001a9b4a2d4c31717 , ce8b738b8260f386ae528dcff159a7b0 , fe047a35d0d76e5e2f7769ad88be93f6
  const key = "520f9b99617a9af001a9b4a2d4c31717";

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
          key: key,
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

  const data = dataCity?.map((item) => {
    return {
      key: item.city_id,
      value: item.city_id,
      label: item.type + " " + item.city_name,
    };
  });
  const handleInputNameChange = (event) => {
    setInputNameValue(event.currentTarget.value);
    setTimeout(() => {
      setName(inputNameValue);
    }, 5000);
    console.log(name);
  };
  // console.log(name);
  // console.log(inputNameValue);
  const [inputAddressValue, setInputAddressValue] = useState("");

  const handleInputAddressChange = (event) => {
    setInputAddressValue(event.currentTarget.value);
  };
  const [inputPhoneValue, setInputPhoneValue] = useState("");
  const handleInputPhoneChange = (event) => {
    setInputPhoneValue(event.currentTarget.value);
  };

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    setImage(productData[id].image);
    setProduct(productData[id]);
    setVariantChoice(productData[id].variant);
  }, [router.isReady]);
  const [size, setSize] = useState(null);
  const [cekVariant, setCekVariant] = useState(null);
  const handleVariant = (item) => {
    setCekVariant(item);
  };
  const handlePrice = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const handleDetail = (index) => {
    setImage(productData[index].image);
    setVariantChoice(productData[index].variant);
    setProduct(productData[index]);
  };
  const handleImage = (item) => {
    setImage(item);
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
          name_product: product?.name,
          size: size,
          variant: cekVariant,
          total_cost: cost + product?.price,
        }
      );
      console.log(response);
      setOpened(false);
      setOpenedSuccess(true);
    } catch (error) {
      console.error(error);
    }
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
    <>
      <Container size={"lg"} my={"xl"}>
        <Grid>
          <Grid.Col sm={5} span={12} className="flex flex-col gap-2">
            {image && (
              <Flex justify={"center"} align={"center"}>
                <Image src={image} className="object-contain" alt="imunda" />
              </Flex>
            )}
            <Flex gap={"sm"} className="overflow-x-scroll">
              {product?.image && (
                <Image
                  onClick={() => handleImage(product?.image)}
                  src={product?.image}
                  alt="imunda"
                  className="object-contain w-20 h-20"
                />
              )}
              {product?.variant.map((item, index) => (
                <Image
                  key={index}
                  onClick={() => handleImage(item.image)}
                  alt="imunda"
                  src={item.image}
                  className="object-contain h-20 w-20"
                />
              ))}
            </Flex>
          </Grid.Col>
          <Grid.Col sm={7} span={12}>
            <Text fz={"24px"}>
              {product?.name != null ? product.name : "...loading"}
            </Text>
            <Text fz={"16px"} mt={"lg"} className="line-through text-red-300">
              {product?.pricetrought != null
                ? handlePrice(product.pricetrought)
                : "...loading"}
            </Text>
            <Text fz={"24px"} fw={"bolder"}>
              {product?.price != null
                ? handlePrice(product.price)
                : "...loading"}
            </Text>
            <Grid align={"center"} mt={"lg"} gap={"md"}>
              <Grid.Col span={2}>
                <Text fz={"md"}>Ukuran</Text>
              </Grid.Col>
              <Grid.Col span={10}>
                <Radio.Group
                  value={size}
                  onChange={setSize}
                  className="flex gap-3"
                >
                  <Radio color="red" label="s" value={"s"} />
                  <Radio color="red" label="as" value={"as"} />
                  <Radio color="red" label="xl" value={"xl"} />
                </Radio.Group>
              </Grid.Col>
            </Grid>
            <Grid gap={"md"} align={"start"} mt={"sm"}>
              <Grid.Col span={2}>
                <Text fz={"md"}>Varian</Text>
              </Grid.Col>
              <Grid.Col span={10}>
                <Flex wrap={"wrap"} gap={"xs"}>
                  {variantChoice.map((item) => (
                    <Badge
                      key={item.id}
                      color={cekVariant == item.name ? "red" : "gray"}
                      onClick={() => handleVariant(item.name)}
                      variant="filled"
                      className="hover:cursor-pointer hover:bg-gray-300"
                    >
                      {item.name}
                    </Badge>
                  ))}
                </Flex>
              </Grid.Col>
            </Grid>

            <Button
              className="bg-red-400 hover:bg-red-500"
              disabled={size != null && cekVariant != null ? false : true}
              onClick={() => setOpened(true)}
            >
              Checkout
            </Button>
          </Grid.Col>
        </Grid>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title={
            <Text fw={"bolder"} fz={"lg"}>
              Konfirmasi Pesanan
            </Text>
          }
        >
          <Flex className="flex flex-col gap-4">
            <Text>Nama Produk : {product?.name}</Text>
            <Text>Ukuran : {size}</Text>
            <Text>Varian : {cekVariant}</Text>
            <Text>Harga : {handlePrice(product?.price)}</Text>
            <Select
              value={city}
              onChange={setCity}
              data={data}
              label="Pilih Kota"
              withAsterisk
              searchable
              placeholder="pilih kota anda"
            />
            <Input.Wrapper label="Nama Lengkap" withAsterisk>
              <Input
                id="input-name"
                value={inputNameValue}
                onChange={handleInputNameChange}
                placeholder="masukan nama anda"
              />
            </Input.Wrapper>
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
              {city && handleCost()}

              {city && <Text>Ongkir : {handlePrice(cost)} </Text>}
              {city && (
                <Text>Total : {handlePrice(product?.price + cost)} </Text>
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
                    cost={handlePrice(cost + product?.price)}
                    name_product={product?.name}
                    size={size}
                    variant={cekVariant}
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
        <Text my={"md"} fw={"500"}>
          Deskripsi Produk
        </Text>
        <Text>
          {product?.description != null ? product.description : "...loading"}
        </Text>
        <Text></Text>
        <Divider my={"lg"} />
        <Text fz={"lg"} fw={"bolder"}>
          Produk Lainnya
        </Text>
        <Flex
          mb={"lg"}
          wrap={"wrap"}
          gap={"md"}
          className="flex justify-center sm:justify-evenly items-center"
        >
          {productData.map((item, index) => (
            <div onClick={() => handleDetail(index)} key={item.id}>
              <Card data={item} />
            </div>
          ))}
        </Flex>
      </Container>
    </>
  );
}
