import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { DishesProps } from "./dishes";
import * as Styles from "./dishes.comp.styles";
import { CiEdit } from "react-icons/ci";
import { Button } from "../button/button.comp";
import { api } from "../../api/axios";
import { useAuth } from "../../context/auth.context";
import { useLocation } from "react-router-dom";
import { Alert } from "../alert/alert.comp";

export function Dishes({
  title,
  description,
  price,
  showDetails,
  onEdit,
  img,
  addFavorite,
  removeFavorite,
  ...rest
}: DishesProps) {
  const { user } = useAuth();
  const [counter, setCounter] = useState<number>(1);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const location = useLocation();

  const urlImg = `${api.defaults.baseURL}/files/${img}`;

  function addedMoreCounter() {
    if (counter < 10) {
      setCounter((prevState) => prevState + 1);
    }
  }

  function addedMinusCounter() {
    if (counter > 1) {
      setCounter((prevState) => prevState - 1);
    }
  }
  const formattedCounter = counter.toString().padStart(2, "0");

  const handleShowAlert = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  function handleAddCart(
    img: string | undefined,
    amount: number,
    title: string,
    price: number | string
  ) {
    const existingCartItems = localStorage.getItem("@explore-food:cart");
    let cartItems = [];

    if (existingCartItems) {
      cartItems = JSON.parse(existingCartItems);
    }

    const newItemAtCart = {
      img,
      amount,
      price,
      title,
    };

    cartItems.push(newItemAtCart);

    localStorage.setItem("@explore-food:cart", JSON.stringify(cartItems));
    handleShowAlert();
  }
  return (
    <Styles.Container {...rest}>
      {user.role === "customer" && (
        <>
          {location.pathname === "/favorite" ? (
            <Styles.AddFavoriteOrRemoveFavorite onClick={removeFavorite}>
              <MdFavorite style={{ color: "#92000E" }} />
            </Styles.AddFavoriteOrRemoveFavorite>
          ) : (
            <Styles.AddFavoriteOrRemoveFavorite onClick={addFavorite}>
              <MdFavoriteBorder style={{ color: "#7C7C8A" }} />
            </Styles.AddFavoriteOrRemoveFavorite>
          )}
        </>
      )}

      {user.role === "admin" && (
        <Styles.EditDish onClick={onEdit}>
          <CiEdit />
        </Styles.EditDish>
      )}

      <Styles.ShowDetailsCard onClick={showDetails}>
        <Styles.DishImg src={urlImg} />

        <Styles.Info>
          <h2>{title}</h2>
          <span>{description}</span>
          <h3>{`R$ ${price}`}</h3>
        </Styles.Info>
      </Styles.ShowDetailsCard>

      {user.role === "customer" ? (
        <Styles.Counter>
          <button onClick={addedMinusCounter}>
            <AiOutlineMinus />
          </button>
          {formattedCounter}
          <button onClick={addedMoreCounter}>
            <AiOutlinePlus />
          </button>

          <Button
            width="5.75rem"
            type="button"
            title="incluir"
            onClick={() => handleAddCart(img, counter, title, price)}
          />
        </Styles.Counter>
      ) : (
        <Styles.Counter></Styles.Counter>
      )}

      {showAlert && <Alert message="adicionado ao carrinho" />}
    </Styles.Container>
  );
}
