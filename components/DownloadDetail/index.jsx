import React from "react";
import {
  PDFDownloadLink,
  Page,
  Text as PDFText,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { Text } from "@mantine/core";

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

export const DownloadDetail = (
  name,
  address,
  phone,
  payment,
  cost,
  name_product,
  size,
  variant
) => {
  return (
    <PDFDownloadLink
      document={
        <MyDocument
          name={name}
          address={address}
          phone={phone}
          payment={payment}
          cost={cost}
          name_product={name_product}
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
  );
};
