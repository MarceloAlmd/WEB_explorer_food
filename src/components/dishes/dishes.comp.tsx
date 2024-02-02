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
  const [counter, setCounter] = useState(1);

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

          <Button width="5.75rem" type="button" title="incluir" />
        </Styles.Counter>
      ) : (
        <Styles.Counter></Styles.Counter>
      )}
    </Styles.Container>
  );
}
