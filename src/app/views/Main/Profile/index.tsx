import { Column, Image, ImageContainer, Row, Text } from "@app/styled";
import Button from "@components/Button";
import { useAuth } from "@contexts/AuthContext";
import usePageBackground from "@hooks/usePageBackground";
import usePageTitle from "@hooks/usePageTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import Input from "../Auth/components/Input";
import { ProfileIcon } from "./styled";
import { TbCameraPlus } from "react-icons/tb";

function Profile() {
  usePageBackground(undefined);
  usePageTitle("Uživatelský účet");
  const { user } = useAuth();

  return (
    <PageContent topP>
      <Column maxW="425px" p="80px 0" alignItems="center">
        <Text fontWeight="700" fontSize="44px" textAlign="center" p="0 0 30px 0">
          Uživatelský účet
        </Text>
        <Text color="third" textAlign="center">
          Nejsi spokojený se svým účtem? Zde si můžeš informace o sobě upravit.
        </Text>
        <Column p="60px 0 40px 0" w="100%" alignItems="center">
          <ProfileIcon>
            {user?.image ? (
              <Image
                src="https://media.vanityfair.com/photos/631a285245c8cf69f8c2ba82/master/w_2560%2Cc_limit/1203085755"
                alt="Eminem"
                fill
                objectFit="cover"
              />
            ) : (
              <TbCameraPlus size={50} />
            )}
          </ProfileIcon>
          <Input placeholder="Jméno" value={user?.username} required />
          <Input placeholder="Email" value={user?.email} required />
          <Input placeholder="Heslo" value={"********"} required />
          <Row p="20px 0 0 0" justifyContent="end">
            <FaStarOfLife size={10} color="#ED4040" />
            <Text fontSize="13px" p="0 0 0 5px" color="third">
              povinné údaje
            </Text>
          </Row>
        </Column>
        <Button text="Uložit údaje" />
      </Column>
    </PageContent>
  );
}

export default Profile;
