import { Column, Image, ImageContainer, Text } from "@app/styled";
import React, { useState, useEffect } from "react";
import { AiFillPicture } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Number, RemoveButton } from "../IngredientItem/styled";
import { Button, Icon, ImagesWrapper } from "./styled";

function UploadInput(props: { handleSetImages: (images: File[]) => void }) {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  useEffect(() => {
    props.handleSetImages(files);
  }, [files]);

  return (
    <Column w="100%">
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
            const files = Array.from(e.target.files);
            setFiles((prevState) => prevState.concat(files));
          }
        }}
      />
      <ImagesWrapper>
        {files.map((file, i) => (
          <ImageContainer key={i} borderRadius="15px" w="100%">
            <RemoveButton onClick={() => setFiles(files.filter((e) => e !== file))}>
              <Number pointer>
                <RxCross2 size={15} />
              </Number>
            </RemoveButton>
            <Image src={URL.createObjectURL(file)} alt="" fill objectFit="cover" />
          </ImageContainer>
        ))}
      </ImagesWrapper>
    </Column>
  );
}

export default UploadInput;
