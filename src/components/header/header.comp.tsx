import { useState } from "react";
import { Button } from "../button/button.comp";
import { ButtonLink } from "../buttonLink/buttonLink.comp";
import { Search } from "../search/search.comp";
import * as Styles from "./header.comp.styles";
import { PiNewspaperClipping } from "react-icons/pi";

export function Header() {
  const [myRequests] = useState(6);

  return (
    <Styles.Container>
      <Styles.Logo src="/logo_explorer.svg" />

      <ButtonLink title="Meus Favoritos" />

      <Search />

      <Button
        icon={PiNewspaperClipping}
        width="10%"
        type="button"
        title={`Meu Pedido (${myRequests})`}
      />

      <Styles.SignOut>
        <img src="/signOut.svg" />
      </Styles.SignOut>
    </Styles.Container>
  );
}
