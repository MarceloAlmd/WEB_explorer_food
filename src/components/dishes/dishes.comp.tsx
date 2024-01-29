import { useState, useEffect } from "react";
import { DishesProps } from "./dishes";
import * as Styles from "./dishes.comp.styles";
import { AiFillHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { Button } from "../button/button.comp";
import { api } from "../../api/axios";
import { useAuth } from "../../context/auth.context";

export function Dishes({
  title,
  description,
  price,
  showDetails,
  onEdit,
  favorite,
  img,
  ...rest
}: DishesProps) {
  const { user } = useAuth();
  const [counter, setCounter] = useState(1);
  const [isFavorite, setIsFavorite] = useState(favorite);

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
  function toggleFavorite() {
    setIsFavorite((prevState) => !prevState);
  }

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(title)) {
      setIsFavorite(true);
    }
  }, [title]);

  useEffect(() => {
    if (isFavorite) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      if (!favorites.includes(title)) {
        favorites.push(title);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    } else {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const index = favorites.indexOf(title);
      if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    }
  }, [isFavorite, title]);
  return (
    <Styles.Container {...rest}>
      {user.role === "customer" && (
        <Styles.Favorite onClick={toggleFavorite}>
          <AiFillHeart style={{ color: isFavorite ? "#92000E" : "#7C7C8A" }} />
        </Styles.Favorite>
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

          <Button width="5.75rem" type="button" title="incluir" />
        </Styles.Counter>
      ) : (
        <Styles.Counter></Styles.Counter>
      )}
    </Styles.Container>
  );
}
