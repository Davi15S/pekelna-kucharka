import Icon from "@components/Icon";
import { Row } from "app/styled";
import LinkComponent from "./components/Link";
import { NavbarWrapper } from "./styled";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

function Navbar() {
  return (
    <NavbarWrapper>
      <Row>
        <LinkComponent text="Recepty" link="/recipes" />
        <LinkComponent text="Magazín" link="/magazine" />
      </Row>
      <Row justifyContent="flex-end" alignItems="center">
        <LinkComponent text="Přihlásit se" link="/login" />
        <Link href="">
          <Icon icon={<AiOutlineInstagram size={25} color={"white"} />} />
        </Link>
      </Row>
    </NavbarWrapper>
  );
}

export default Navbar;
