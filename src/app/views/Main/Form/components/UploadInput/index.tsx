import { Text } from "@app/styled";
import React, { useEffect, useState } from "react";
import { AiFillPicture } from "react-icons/ai";
import { Button, Icon } from "./styled";

function UploadInput(props: { handleClick: (images: string[]) => void }) {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  useEffect(() => {
    props.handleClick(images);
  }, [images]);

  return (
    <>
      <Button onClick={handleClick} type="button">
        <Icon>
          <AiFillPicture color="#ED4040" size={30} />
        </Icon>
        <Text color="third" p="0 0 0 30px">
          Vyber prosím fotky, které chceš přidat k receptu
        </Text>
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        hidden
        accept="image/png, image/jpeg"
        onChange={(e) => {
          if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setImages((prevImages) => prevImages.concat(filesArray));
          }
        }}
      />
    </>
  );
}

export default UploadInput;
