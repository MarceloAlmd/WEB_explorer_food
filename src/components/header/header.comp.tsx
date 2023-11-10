import { useState, useEffect } from "react";
import { Button } from "../button/button.comp";
import { ButtonLink } from "../buttonLink/buttonLink.comp";
import { Search } from "../search/search.comp";
import * as Styles from "./header.comp.styles";
import { PiNewspaperClipping } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HeaderProps } from "./header";

export function Header({ isSearch = true }: HeaderProps) {
  const [myRequests] = useState(6);
  const [desktop, setDesktop] = useState(true);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 868) {
        setMobile(true);
        setDesktop(false);
      } else {
        setMobile(false);
        setDesktop(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Styles.Container>
      <a href="/">
        <Styles.Logo src="/logo_explorer.svg" />
      </a>
      {desktop && <ButtonLink title="Meus Favoritos" />}
      {mobile && (
        <Styles.IconButton>
          <AiOutlineHeart />
          <span></span>
        </Styles.IconButton>
      )}
      {isSearch && <Search />}

      {desktop && (
        <Button
          icon={PiNewspaperClipping}
          width="10%"
          type="button"
          title={`Meu Pedido (${myRequests})`}
        />
      )}

      {mobile && (
        <Styles.IconButton>
          <PiNewspaperClipping />
          <span></span>
        </Styles.IconButton>
      )}

      <Styles.SignOut>
        <FiLogOut />
      </Styles.SignOut>
    </Styles.Container>
  );
}
