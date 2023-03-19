import React from "react";
import { Circle, SentConfirmationWrapper } from "./styled";
import { AiOutlineCheck } from "react-icons/ai";
import { Column, Text } from "@app/styled";
import Button from "@components/Button";
import Loading from "@components/Loading";
import { useRouter } from "next/router";
import { enableScroll } from "@app/utils";

function SentConfirmation(props: { sent: boolean }) {
  const router = useRouter();

  return (
    <SentConfirmationWrapper>
      <Column h="min-content" alignItems="center">
        {props.sent ? (
          <>
            <Circle>
              <AiOutlineCheck size={60} />
            </Circle>
            <Text fontSize="25px" fontWeight="20px" p="30px 0 20px 0">
              Recept úspěšně odeslán!
            </Text>
            <Button
              text="Moje recepty"
              h="45px"
              maxW="180px"
              onClick={() => {
                enableScroll();
                router.push("/");
              }}
            />
          </>
        ) : (
          <Loading />
        )}
      </Column>
    </SentConfirmationWrapper>
  );
}

export default SentConfirmation;
