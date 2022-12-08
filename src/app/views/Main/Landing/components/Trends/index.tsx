import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import React from "react";
import TrendItem from "./components/TrendItem";
import { ButtonWrapper, ItemsWrapper, SubTitle } from "./styled";
import trend from "@assets/trends/trend.jpg";
import Button from "@components/Button";

function Trends() {
  return (
    <Column w="100%" p="200px 0 150px 0">
      <BgTitle title="Trendy" subTitle="Trendy" />
      <Column alignItems="center" w="100%" p="80px 0 0 0">
        <SubTitle textAlign="center">
          Phasellus vitae purus vel lorem ac est, viverra cursus. At aliquam, arcu rutrum suspendisse molestie turpis egestas. Lectus dolor nam gravida quis
          enim sem ac. Lectus facilisi diam sapien, semper nunc.
        </SubTitle>
        <ItemsWrapper>
          <TrendItem
            image={trend}
            title="Název receptu"
            subTitle="Dictumst sed aliquam faucibus adipiscing aliquam. Morbi duis tincidunt facilisis in. Lorem morbi amet, semper nunc eu platea at tristique nunc. Dictumst sed aliquam faucibus adipiscing aliquam. Morbi duis tincidunt facilisis in. Lorem morbi amet, semper nunc eu platea at tristique nunc"
          />
          <TrendItem
            image={trend}
            title="Název receptu"
            subTitle="Dictumst sed aliquam faucibus adipiscing aliquam. Morbi duis tincidunt facilisis in. Lorem morbi amet, semper nunc eu platea at tristique nunc. Sollicitudin eu porta..."
          />
          <TrendItem
            image={trend}
            title="Název receptu"
            subTitle="Dictumst sed aliquam faucibus adipiscing aliquam. Morbi duis tincidunt facilisis in. Lorem morbi amet, semper nunc eu platea at tristique nunc. Sollicitudin eu porta..."
          />
          <TrendItem
            image={trend}
            title="Název receptu"
            subTitle="Dictumst sed aliquam faucibus adipiscing aliquam. Morbi duis tincidunt facilisis in. Lorem morbi amet, semper nunc eu platea at tristique nunc. Sollicitudin eu porta..."
          />
          <TrendItem
            image={trend}
            title="Název receptu"
            subTitle="Dictumst sed aliquam faucibus adipiscing aliquam. Morbi duis tincidunt facilisis in. Lorem morbi amet, semper nunc eu platea at tristique nunc. Sollicitudin eu porta..."
          />
          <TrendItem
            image={trend}
            title="Název receptu"
            subTitle="Dictumst sed aliquam faucibus adipiscing aliquam. Morbi duis tincidunt facilisis in. Lorem morbi amet, semper nunc eu platea at tristique nunc. Sollicitudin eu porta..."
          />
        </ItemsWrapper>
        <ButtonWrapper p="40px 0 0 0" justifyContent="center">
          <Button text="Zobrazit další" color="red" maxW="220px" h="45px" />
        </ButtonWrapper>
      </Column>
    </Column>
  );
}

export default Trends;
