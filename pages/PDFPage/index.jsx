import React, { useEffect, useState } from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// Define the PDF document component
const MyDocument = () => (
  <Document>
    <Page>
      <View style={styles.section}>
        <Text>PDF Example</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PDFPage = () => {
  const [isComponentAvailable, setComponentAvailability] = useState(false);

  useEffect(() => {
    setComponentAvailability(true);
  }, []);

  return (
    <div>
      <h1>PDF Example</h1>
      {isComponentAvailable && (
        <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default PDFPage;
