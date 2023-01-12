import { Text } from "@app/styled";
import React from "react";
import { AiFillPicture } from "react-icons/ai";
import { Button, Icon } from "./styled";

function UploadInput() {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  return (
    <>
      <Button onClick={handleClick}>
        <Icon>
          <AiFillPicture color="#ED4040" size={30} />
        </Icon>
        <Text color="third" p="0 0 0 30px">
          Vyber prosím fotky, které chceš přidat k receptu
        </Text>
      </Button>
      <input type="file" ref={hiddenFileInput} hidden />
    </>
  );
}

export default UploadInput;
