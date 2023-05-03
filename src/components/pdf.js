import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 17,
    textAlign: "justify",
  },
  text: {
    marginTop: 7,
    marginBottom: 12,
    marginLeft: 17,
    marginRight: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  centeredtext: {
    marginTop: 7,
    marginBottom: 5,
    marginLeft: 17,
    marginRight: 12,
    fontSize: 14,
    textAlign: "center",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const Pdf = (formation) => {
    function extractContent(s) {
        var span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    };

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title} fixed>{formation.formation.name}</Text>
        <Text style={styles.centeredtext} fixed>{formation.formation.formateur}</Text>
        <Image style={styles.image} src={require(`../images/${formation.formation.image ? formation.formation.image : "logo_tucnospro.png"}`)} />
        <Text style={styles.centeredtext} fixed>Date: {formation.formation.date}    Durée: {formation.formation.duration}    Prix: {formation.formation.price} TND</Text>
        <Text style={styles.subtitle}>
          Description:
        </Text>
        <Text style={styles.text}>
          {formation.formation.long_description ? extractContent(formation.formation.long_description) : ""}
        </Text>
        <Text style={styles.subtitle}>
          Program:
        </Text>
        <Text style={styles.text}>
          {formation.formation.program ? extractContent(formation.formation.program) : ""}
        </Text>
        <Text style={styles.subtitle}>
            Requirements:
        </Text>
        <Text style={styles.text}>
          {formation.formation.requirements ? extractContent(formation.formation.requirements) : ""}
        </Text>
        <Text style={styles.subtitle}>
            Objectif:
        </Text>
        <Text style={styles.text}>
          {formation.formation.objectif ? extractContent(formation.formation.objectif) : ""}
        </Text>
        <Text style={styles.subtitle}>
            Plan:
        </Text>
        <Text style={styles.text}>
          {formation.formation.plan ? extractContent(formation.formation.plan) : ""}
        </Text>
        <Text style={styles.subtitle}>
            Tools:
        </Text>
        <Text style={styles.text}>
          {formation.formation.tools ? extractContent(formation.formation.tools) : ""}
        </Text>
        <Text style={styles.subtitle}>
            Target:
        </Text>
        <Text style={styles.text}>
          {formation.formation.target ? extractContent(formation.formation.target) : ""}
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default Pdf;