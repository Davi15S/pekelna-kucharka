import React from "react";
import LinkComponent from "../Link";
import { HoverItemContainer, HoverItemWrapper } from "./styled";
import { clearStorage } from "@app/utils";

function HoverItem() {
  const handleLogout = () => {
    clearStorage();
    window.location.reload();
  };

  return (
    <HoverItemContainer>
      <HoverItemWrapper justifyContent="center" alignItems="center">
        <LinkComponent text="Upravit" link="" m="7px 0" />
        <LinkComponent text="Moje recepty" link="/recipes/my" m="7px 0" />
        <LinkComponent text="Odhlásit se" link="" m="7px 0" color="red" onClick={handleLogout} />
      </HoverItemWrapper>
    </HoverItemContainer>
  );
}

export default HoverItem;
