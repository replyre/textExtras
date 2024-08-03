import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const About = () => {
  return (
    <div
      style={{
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton
              style={{
                backgroundColor: "rgba(255,255,255,0.4)",
                color: "var(--primary)",
              }}
            >
              What is TextExtras
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              It is a free website which provides in formation about the
              text/paras your enter, also allow to make some chnages. It
              provides quick information and has a limited use but fast and easy
              to use.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton
              style={{
                backgroundColor: "rgba(255,255,255,0.4)",
                color: "var(--primary)",
              }}
            >
              Is it free to use and safe?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes it is absolutely free to use, you can bookmark it and share
              with your friends. This website stores no cookies or asks for any
              user data so its is complelety safe as well.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton
              style={{
                backgroundColor: "rgba(255,255,255,0.4)",
                color: "var(--primary)",
              }}
            >
              How can I contribute more features?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              If you are developer, we are have to have your contribution, since
              it is open project available on github. you can start an new issue
              as feature in{" "}
              <a
                href="https://github.com/replyre/textExtras"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "var(--primary-color)",
                }}
              >
                TextExtras Repository.{" "}
              </a>
              We will be happy to assign you the task.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default About;
