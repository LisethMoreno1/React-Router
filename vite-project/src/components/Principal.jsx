import React from "react";
import { Image } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "../App.css";
export default function Principal() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}> Menu Principal</h1>
      <br />
      <Center h="100px" color="white">
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab className="button button4">
              <a href="/AdaLovelace" className="navList">
                Ada Lovelace
              </a>
            </Tab>
            <Tab className="button button4">
              <a href="/JamesGosling" className="navList">
                James Gosling
              </a>
            </Tab>
            <Tab className="button button4">
              <a href="/BillGates" className="navList">
                Bill Gates
              </a>
            </Tab>
            <Tab className="bbutton button4">
              <a href="/KenThompson" className="navList">
                Ken Thompson
              </a>
            </Tab>
            <Tab className="button button4">
              <a href="/NiklausWirth" className="navList">
                Niklaus Wirth
              </a>
            </Tab>
          </TabList>
         
        </Tabs>
      </Center>
    </>
  );
}
