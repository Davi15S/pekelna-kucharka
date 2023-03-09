import React from "react";
import { Circle, SentConfirmationWrapper } from "./styled";
import { AiOutlineCheck } from "react-icons/ai";
import { Column, Text } from "@app/styled";
import Button from "@components/Button";

function SentConfirmation(props: { onClick: () => void }) {
  return (
    <SentConfirmationWrapper>
      <Column h="min-content" alignItems="center">
        <Circle>
          <AiOutlineCheck size={60} />
        </Circle>
        <Text fontSize="25px" fontWeight="20px" p="30px 0 20px 0">
          Recept úspěšně odeslán!
        </Text>
        <Button text="Moje recepty" h="45px" maxW="180px" onClick={props.onClick} />
      </Column>
    </SentConfirmationWrapper>
  );
}

export default SentConfirmation;
