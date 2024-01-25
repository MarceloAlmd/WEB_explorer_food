import { useState, useEffect } from "react";
import { Button } from "../button/button.comp";
import { ButtonLink } from "../buttonLink/buttonLink.comp";
import { IoCartOutline } from "react-icons/io5";
import { Search } from "../search/search.comp";
import * as Styles from "./header.comp.styles";
import { PiNewspaperClipping } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HeaderProps } from "./header";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";
import { Modal } from "../modal/modal.comp";

export function Header({ isSearch = false, searchDishes }: HeaderProps) {
  const { logout } = useAuth();

  const [myRequests] = useState(6);
  const [desktop, setDesktop] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleNavigateToRequests = () => {
    navigate("/requests");
  };

  function handleLogout() {
    navigate("/");
    logout();
  }

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
      {desktop && (
        <>
          <ButtonLink title="Meus Favoritos" to="/favorite" />
          <Link className="buttonCart" to="/cart">
            <IoCartOutline />
          </Link>
        </>
      )}
      {mobile && (
        <Styles.IconButton>
          <AiOutlineHeart />
          <span></span>
        </Styles.IconButton>
      )}
      {isSearch && <Search searchDishes={searchDishes} />}

      {desktop && (
        <Button
          icon={PiNewspaperClipping}
          width="10%"
          type="button"
          title={`Meu Pedido (${myRequests})`}
          onClick={handleNavigateToRequests}
        />
      )}

      {mobile && (
        <Styles.IconButton>
          <PiNewspaperClipping />
          <span></span>
        </Styles.IconButton>
      )}

      <Styles.SignOut
        onClick={() => {
          setShowModal(true);
        }}
      >
        <FiLogOut />
      </Styles.SignOut>

      {showModal && (
        <Modal
          cancel={() => setShowModal(false)}
          onCLose={() => {
            setShowModal(false);
          }}
          confirm={handleLogout}
          message="deseja sair da aplicação ?"
        />
      )}
    </Styles.Container>
  );
}
