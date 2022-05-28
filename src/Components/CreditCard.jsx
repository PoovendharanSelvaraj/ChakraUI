import { Box, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import { FormInput } from "./Input";

const Container = styled.div`
  width: 70%;
  height: 500px;
  margin: auto;
  display: flex;
`;
const Boxs = styled.div`
  width: 50%;
  height: 95%;
  border: 1px solid black;
  text-align: left;
  padding: 10px 30px;
`;

export const CreditCard = () => {
  const [cardNo, setCardNo] = useState("");
  const [cardName, setCardName] = useState("");
  const handleCardNo = (no) => {
    setCardNo(no);
  };
  const handleCardName = (no) => {
    setCardName(no);
  };
  return (
    <Container>
      <Boxs>
        <Box
          as="button"
          borderRadius="md"
          bg="tomato"
          color="white"
          width="400px"
          height="200px"
        >
          <p>{cardNo}</p>
          <div>
            <div>
              <h5>Cardholder Name</h5>
              <p>{cardName}</p>
            </div>
          </div>
        </Box>
      </Boxs>
      <Boxs>
        <Heading
          fontSize="x-large"
          size="lg"
          fontWeight="400"
          marginBottom="30px"
        >
          Payment Details
        </Heading>
        <form action="">
          <FormInput
            handleCardNo={handleCardNo}
            handleCardName={handleCardName}
          />
          <Heading
            fontSize="large"
            size="lg"
            fontWeight="400"
            margin="30px 0 0 50px"
          >
            Payment amount: <span style={{ color: "tomato" }}>₹1330</span>
          </Heading>
          <Button
            colorScheme="red"
            margin="20px 0 0 70px"
            padding="0 50px 0 50px"
          >
            Pay
          </Button>
        </form>
      </Boxs>
    </Container>
  );
};
