import {
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField,
  Text
} from "@chakra-ui/react";
import { RiUserFollowLine } from "react-icons/ri";
import { BiCalendar, BiCreditCard, BiLock } from "react-icons/bi";
import { GoCalendar } from "react-icons/go";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
`;

export function FormInput({ handleCardNo, handleCardName }) {
  const [value, setValue] = React.useState("");
  const [name, setName] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    handleCardNo(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
    handleCardName(event.target.value);
  };

  return (
    <>
      <Text mb="4px" fontSize="x-small" fontWeight="50">
        CARDHOLDER NAME
      </Text>
      <Div>
        <div
          style={{
            borderBottom: "2px solid tomato",
            paddingTop: "5px",
            paddingRight: "5px"
          }}
        >
          <RiUserFollowLine
            fontSize="large"
            color="tomato"
            borderBottom="2px"
          />
        </div>
        <Input
          variant="flushed"
          type="text"
          value={name}
          onChange={handleName}
          placeholder="enter cardholder name"
          size="sm"
          width="300px"
          color="red"
          borderBottomColor="tomato"
          borderBottom="2px"
          focusBorderColor="none"
        />
      </Div>
      <Text mt="30px" mb="4px" fontSize="x-small" fontWeight="50">
        CARD NUMBER
      </Text>
      <Div>
        <div
          style={{
            borderBottom: "2px solid tomato",
            paddingTop: "5px",
            paddingRight: "5px"
          }}
        >
          <BiCreditCard fontSize="large" color="tomato" borderBottom="2px" />
        </div>
        <Input
          variant="flushed"
          value={value}
          type="number"
          onChange={handleChange}
          placeholder="credit card number"
          size="sm"
          width="300px"
          color="red"
          borderBottomColor="tomato"
          borderBottom="2px"
          focusBorderColor="none"
        />
      </Div>

      <div
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div>
          <Text mt="30px" mb="4px" fontSize="x-small" fontWeight="50">
            EXPIRY MONTH
          </Text>
          <Div>
            <div
              style={{
                borderBottom: "2px solid tomato",
                paddingTop: "5px",
                paddingRight: "5px"
              }}
            >
              <GoCalendar fontSize="large" color="tomato" borderBottom="2px" />
            </div>
            <NumberInput
              size="sm"
              maxW={20}
              min={1}
              max={12}
              focusBorderColor="none"
            >
              <NumberInputField
                borderTop="white"
                borderRight="white"
                borderLeft="white"
                borderBottom="2px solid tomato"
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Div>
        </div>
        <div>
          <Text mt="30px" mb="4px" fontSize="x-small" fontWeight="50">
            EXPIRY YEAR
          </Text>
          <Div>
            <div
              style={{
                borderBottom: "2px solid tomato",
                paddingTop: "5px",
                paddingRight: "5px"
              }}
            >
              <BiCalendar fontSize="large" color="tomato" borderBottom="2px" />
            </div>
            <NumberInput
              size="sm"
              maxW={20}
              min={2020}
              max={2026}
              focusBorderColor="none"
            >
              <NumberInputField
                borderTop="white"
                borderRight="white"
                borderLeft="white"
                borderBottom="2px solid tomato"
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Div>
        </div>
        <div>
          <Text mt="30px" mb="4px" fontSize="x-small" fontWeight="50">
            CVC
          </Text>
          <Div>
            <div
              style={{
                borderBottom: "2px solid tomato",
                paddingTop: "5px",
                paddingRight: "5px"
              }}
            >
              <BiLock fontSize="large" color="tomato" borderBottom="2px" />
            </div>
            <NumberInput
              size="sm"
              maxW={20}
              min={100}
              max={999}
              focusBorderColor="none"
            >
              <NumberInputField
                borderTop="white"
                borderRight="white"
                borderLeft="white"
                borderBottom="2px solid tomato"
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Div>
        </div>
      </div>
    </>
  );
}
