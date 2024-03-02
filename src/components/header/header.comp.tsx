import { useState, useEffect } from "react";
import { CiSquarePlus } from "react-icons/ci";
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
import { api } from "../../api/axios";

type ItemStatusTypes = "pending" | "preparing" | "delivered";
interface Status {
  pending: string;
  preparing: string;
  delivered: string;
}

interface RequestsTypes {
  code: string;
  created_at: string;
  detailing: string;
  id: number;
  status: Status;
  updated_at: string;
  user_id: number;
}

export function Header({ isSearch = false, searchDishes }: HeaderProps) {
  const { logout, user } = useAuth();

  const [requestsPending, setRequestsPending] = useState<RequestsTypes[]>([]);
  const [desktop, setDesktop] = useState(true);
  const [cartNotification, setCartNotification] = useState<string[]>([]);
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
    async function fetchRequests() {
      const response = await api.get("/order");

      const status = response.data.map((items: RequestsTypes) => items.status);
      const pending = status.filter(
        (itemStatus: ItemStatusTypes) => itemStatus === "pending"
      );
      setRequestsPending(pending);
    }

    fetchRequests();
  }, []);

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

  useEffect(() => {
    const cartNotification = localStorage.getItem("@explore-food:cart");
    if (cartNotification) {
      setCartNotification(JSON.parse(cartNotification));
    }
  }, []);
  return (
    <Styles.Container>
      <a href="/">
        <Styles.Logo src="/logo_explorer.svg" />
      </a>
      {desktop && user.role === "customer" && (
        <ButtonLink title="Meus Favoritos" to="/favorite" />
      )}

      {user.role !== "admin" && (
        <Link className="buttonCart" to="/cart">
          <IoCartOutline className="cartSVG" />
          {cartNotification.length > 0 && (
            <span className="notification">{cartNotification.length}</span>
          )}
        </Link>
      )}

      {mobile && user.role === "customer" && (
        <Styles.IconButton to="/favorite">
          <AiOutlineHeart />
        </Styles.IconButton>
      )}
      {isSearch ? (
        <Search searchDishes={searchDishes} />
      ) : (
        <div className="lineBlock"></div>
      )}

      {user.role === "admin" && (
        <>
          <Styles.IconButton to="/create">
            <CiSquarePlus />
          </Styles.IconButton>
          {desktop && <span>Administrador</span>}
        </>
      )}

      {desktop && (
        <Button
          icon={PiNewspaperClipping}
          width="10%"
          type="button"
          title={`Meus Pedidos (${requestsPending.length})`}
          onClick={handleNavigateToRequests}
        />
      )}

      {mobile && (
        <Styles.IconButton to="/requests">
          <PiNewspaperClipping />
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
