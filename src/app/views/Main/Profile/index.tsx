import { Column, Image, ImageContainer, Row, Text } from "@app/styled";
import Button from "@components/Button";
import { useAuth } from "@contexts/AuthContext";
import usePageBackground from "@hooks/usePageBackground";
import usePageTitle from "@hooks/usePageTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import Input from "../Auth/components/Input";
import { ProfileIcon } from "./styled";
import { TbCameraPlus } from "react-icons/tb";
import { StyledForm } from "../Form/styled";

function Profile() {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  usePageBackground(undefined);
  usePageTitle("Uživatelský účet");
  const { user } = useAuth();

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <PageContent topP>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <Column maxW="425px" p="80px 0" alignItems="center">
          <Text fontWeight="700" fontSize="44px" textAlign="center" p="0 0 30px 0">
            Uživatelský účet
          </Text>
          <Text color="third" textAlign="center">
            Nejsi spokojený se svým účtem? Zde si můžeš informace o sobě upravit.
          </Text>
          <Column p="60px 0 40px 0" w="100%" alignItems="center">
            <ProfileIcon onClick={handleClick}>
              {user?.image || file ? (
                <Image src={file ? URL.createObjectURL(file) : user?.image?.url ?? ""} alt="" fill objectFit="cover" />
              ) : (
                <TbCameraPlus size={50} />
              )}
              <input
                type="file"
                ref={hiddenFileInput}
                hidden
                accept="image/png, image/jpeg, image/webp"
                multiple
                onChange={(e) => {
                  if (e.target.files) {
                    const files = Array.from(e.target.files);
                    console.log(files[0]);
                    setFile(files[0]);
                  }
                }}
              />
            </ProfileIcon>
            <Input placeholder="Jméno" value={user?.username} required icon />
            <Input placeholder="Email" value={user?.email} required icon />
            <Input placeholder="Heslo" value={"********"} required icon />
            <Row p="20px 0 0 0" justifyContent="end">
              <FaStarOfLife size={10} color="#ED4040" />
              <Text fontSize="13px" p="0 0 0 5px" color="third">
                povinné údaje
              </Text>
            </Row>
          </Column>
          <Button text="Uložit údaje" type="submit" />
        </Column>
      </StyledForm>
    </PageContent>
  );
}

export default Profile;
