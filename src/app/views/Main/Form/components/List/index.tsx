import { Column, Text } from "@app/styled";
import React, { useState, useEffect, useRef } from "react";
import { InputWrapper } from "../Input/styled";
import { IoIosArrowDown } from "react-icons/io";
import { Arrow, ListItem, ListItems } from "./styled";
import PepperRating from "@components/PepperRating";

function List(props: {
  title?: string;
  p?: React.CSSProperties["padding"];
  listItems: string[];
  w?: React.CSSProperties["width"];
  maxW?: React.CSSProperties["maxWidth"];
  onClick: (value: string) => void;
  value: string;
  pepperList?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function useOutsideAlerter(ref: React.MutableRefObject<any>) {
    useEffect(() => {
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <Column w={props.w ? props.w : "100%"} p={props.p} maxW={props.maxW}>
      {props.title && <Text p="0 0 8px 0">{props.title}</Text>}
      <InputWrapper ref={wrapperRef} alignItems={"center"} p="0 20px" justifyContent="space-between" onClick={() => setIsOpen(!isOpen)} clickable>
        <Text fontSize="16px" color="third" fontWeight="400">
          {props.pepperList ? <PepperRating rating={+props.value} w="25px" /> : props.value}
        </Text>
        <Arrow isOpen={isOpen}>
          <IoIosArrowDown size={25} />
        </Arrow>
        {isOpen && (
          <ListItems isOpen={isOpen}>
            {props.pepperList ? (
              <>
                {[...Array(5)].map((x, i) => {
                  return (
                    i + 1 != +props.value && (
                      <ListItem p="10px 20px" color="third" key={i} onClick={() => props.onClick((i + 1).toString())}>
                        <PepperRating rating={i + 1} w="25px" />
                      </ListItem>
                    )
                  );
                })}
              </>
            ) : (
              <>
                {props.listItems.map((item) => {
                  return (
                    item != props.value && (
                      <ListItem p="10px 20px" color="third" key={item} onClick={() => props.onClick(item)}>
                        {item}
                      </ListItem>
                    )
                  );
                })}
              </>
            )}
          </ListItems>
        )}
      </InputWrapper>
    </Column>
  );
}

export default List;
