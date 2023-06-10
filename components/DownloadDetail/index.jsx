import React from "react";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

// const MyPDF = () => (

// );

export const DownloadDetail = () => {
  return (
    <div>
      <h1>Contoh PDF</h1>
      <PDFDownloadLink
        document={
          <Document>
            <Page>
              <Text>Hello, world!</Text>
            </Page>
          </Document>
        }
        fileName="example.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Sedang memuat dokumen..." : "Unduh PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};
