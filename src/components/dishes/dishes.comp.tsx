import { useState, useEffect } from "react";
import { DishesProps } from "./dishes";
import * as Styles from "./dishes.comp.styles";
import { AiFillHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Button } from "../button/button.comp";
import { api } from "../../api/axios";

export function Dishes({
  title,
  description,
  price,
  onClick,
  favorite,
  img,
  ...rest
}: DishesProps) {
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
    <Styles.Container onClick={onClick} {...rest}>
      <Styles.Favorite onClick={toggleFavorite}>
        <AiFillHeart style={{ color: isFavorite ? "#92000E" : "#7C7C8A" }} />
      </Styles.Favorite>

      <Styles.DishImg src={urlImg} />

      <Styles.Info>
        <h2>{title}</h2>
        <span>{description}</span>
        <h3>{`R$ ${price}`}</h3>
      </Styles.Info>

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
    </Styles.Container>
  );
}
