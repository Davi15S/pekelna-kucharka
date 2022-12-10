import { Column, Text } from "@app/styled";
import styled from "@emotion/styled";
import usePageTitle from "@hooks/usePageTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";
import { Theme } from "@styles/theme";
import { MainTitle } from "@views/Main/Landing/components/Hero/styled";

export default function Custom404() {
  usePageTitle("404");

  return (
    <PageWrapper>
      <Column justifyContent="center" h="100%" alignItems="center">
        <Title mobileFontSize="60px" fontSize="128px">
          404
        </Title>
        <SubTitle>Jejda, to nevyšlo...</SubTitle>
        <Text textAlign="center" color="third">
          Je nám líto, ale požadovaná stránka v naší kuchařce bohužel neexistuje :(
        </Text>
        <Text textAlign="center" color="third">
          Vraťte se prosím zpět
        </Text>
      </Column>
    </PageWrapper>
  );
}

const Title = styled(MainTitle)<{ theme?: Theme }>`
  position: relative;

  ::before {
    content: "404";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    font-size: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.background.secondary};
    z-index: -1;

    @media only screen and (max-width: 768px) {
      font-size: 200px;
    }
  }
`;

const PageWrapper = styled(PageContent)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SubTitle = styled.h2<{ theme?: Theme }>`
  color: ${({ theme }) => theme.button.red};
  font-size: 44px;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
