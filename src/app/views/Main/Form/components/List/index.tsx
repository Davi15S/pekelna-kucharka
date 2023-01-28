import { Column, Text } from "@app/styled";
import React, { useState } from "react";
import { InputWrapper } from "../Input/styled";
import { IoIosArrowDown } from "react-icons/io";
import { Arrow, ListItem, ListItems } from "./styled";

function List(props: { title?: string; p?: React.CSSProperties["padding"]; listItems: string[]; w?: React.CSSProperties["width"] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(props.listItems[0]);

  return (
    <Column w={props.w ? props.w : "100%"} p={props.p}>
      {props.title && <Text p="0 0 8px 0">{props.title}</Text>}
      <InputWrapper alignItems={"center"} p="0 20px" justifyContent="space-between" onClick={() => setIsOpen(!isOpen)} clickable>
        <Text fontSize="16px" color="third" fontWeight="400">
          {selectedItem}
        </Text>
        <Arrow isOpen={isOpen}>
          <IoIosArrowDown size={25} />
        </Arrow>
        {isOpen && (
          <ListItems isOpen={isOpen}>
            {props.listItems.map((item) => {
              return (
                item != selectedItem && (
                  <ListItem p="10px 20px" color="third" key={item} onClick={() => setSelectedItem(item)}>
                    {item}
                  </ListItem>
                )
              );
            })}
          </ListItems>
        )}
      </InputWrapper>
    </Column>
  );
}

export default List;
