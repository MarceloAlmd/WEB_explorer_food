import { useState } from "react";
import { Button } from "../button/button.comp";
import { ButtonLink } from "../buttonLink/buttonLink.comp";
import { Search } from "../search/search.comp";
import * as Styles from "./header.comp.styles";

export function Header() {
  const [myRequests, setMyRequest] = useState(0);

  return (
    <Styles.Container>
      <Styles.Logo src="/logo_explorer.svg" />

      <ButtonLink title="Meus Favoritos" />

      <Search />

      <Button
        src="/my_requests.svg"
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
