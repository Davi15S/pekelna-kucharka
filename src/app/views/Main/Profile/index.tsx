import { Column, Text } from "@app/styled";
import Button from "@components/Button";
import { useAuth } from "@contexts/AuthContext";
import usePageBackground from "@hooks/usePageBackground";
import usePageTitle from "@hooks/usePageTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React from "react";
import Input from "../Auth/components/Input";

function Profile() {
  usePageBackground(undefined);
  usePageTitle("Uživatelský účet");
  const { user } = useAuth();

  return (
    <PageContent topP>
      <Column maxW="425px" p="100px 0" alignItems="center">
        <Text fontWeight="700" fontSize="44px" textAlign="center" p="0 0 30px 0">
          Uživatelský účet
        </Text>
        <Text color="third" textAlign="center">
          Nejsi spokojený se svým účtem? Zde si můžeš informace o sobě upravit.
        </Text>
        <Column p="20px 0 40px 0" w="100%">
          <Input placeholder="Jméno" value={user?.username} required />
          <Input placeholder="Email" value={user?.email} required />
          <Input placeholder="Heslo" value={"********"} required />
        </Column>
        <Button text="Uložit údaje" />
      </Column>
    </PageContent>
  );
}

export default Profile;
