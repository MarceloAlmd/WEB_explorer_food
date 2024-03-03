import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { PiNewspaperClipping } from "react-icons/pi";
import { useEffect, useState } from "react";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import * as Styles from "./styles";
import { Button } from "../../components/button/button.comp";
import { DishesImg } from "./components/dishesImg/dishesImg.comp";
import { IngredientsImg } from "./components/ingredientsImg/ingredientsImg.comp";
import { useParams } from "react-router-dom";
import { api } from "../../api/axios";
import { ButtonLink } from "../../components/buttonLink/buttonLink.comp";
import { IoIosArrowBack } from "react-icons/io";
import { useAuth } from "../../context/auth.context";
import { Alert } from "../../components/alert/alert.comp";

interface ingredientsTypes {
  created_at: string;
  dishes_id: number;
  id: number;
  image: string;
  name: string;
  updated_at: string;
  user_id: number;
}
interface DetailsTypes {
  category: string;
  created_at: string;
  description: string;
  id: number;
  image: string;
  ingredient: ingredientsTypes[];
  isFavorite: boolean;
  name: string;
  price: string;
  updated_at: string;
  user_id: number;
}

export function Details() {
  const { user } = useAuth();

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [counter, setCounter] = useState(1);
  const [dishDetails, setDishDetails] = useState<DetailsTypes>();

  const dishUrlImg = `${api.defaults.baseURL}/files/dish/${dishDetails?.image}`;

  const params = useParams();

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
    title: string | undefined,
    price: number | string | undefined
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

  function formattedPrice(price: string | number | undefined) {
    const priceString = String(price);
    const priceFloat = parseFloat(priceString);
    const aroundPrice = priceFloat.toFixed(2);
    const finallyPrice = aroundPrice.replace(".", ",");

    return finallyPrice;
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsDesktop(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    async function fetchDetailsDishes() {
      const response = await api.get(`/dishes/${params.id}`);
      setDishDetails(response.data);
    }

    fetchDetailsDishes();
  }, []);
  return (
    <Styles.Container>
      <Header isSearch={false} />
      <Styles.Content>
        {isDesktop && (
          <ButtonLink
            to="/"
            title="Voltar"
            fontSize="1.5rem"
            icon={IoIosArrowBack}
            marginLeft="500px"
          />
        )}

        {isMobile && (
          <ButtonLink
            to="/"
            title="Voltar"
            fontSize="1.5rem"
            icon={IoIosArrowBack}
            marginLeft="50px"
          />
        )}

        <Styles.ContentMain>
          <DishesImg src={dishUrlImg} />

          <Styles.Details>
            <h1>{dishDetails?.name}</h1>
            <p>{dishDetails?.description}</p>

            <Styles.IngredientsContent>
              {dishDetails?.ingredient.map((ingredient, index) => (
                <IngredientsImg
                  key={String(index)}
                  src={ingredient.image}
                  name={ingredient.name}
                />
              ))}
            </Styles.IngredientsContent>

            <Styles.Counter>
              <h2>
                <span>R$</span>
                {formattedPrice(dishDetails?.price)}
              </h2>

              {user.role === "customer" && (
                <>
                  <button
                    className="btn-plus-minus"
                    onClick={addedMinusCounter}
                  >
                    <AiOutlineMinus />
                  </button>
                  {formattedCounter}
                  <button className="btn-plus-minus" onClick={addedMoreCounter}>
                    <AiOutlinePlus />
                  </button>

                  <Button
                    type="button"
                    title="incluir"
                    icon={PiNewspaperClipping}
                    onClick={() =>
                      handleAddCart(
                        dishDetails?.image,
                        counter,
                        dishDetails?.name,
                        dishDetails?.price
                      )
                    }
                  />
                </>
              )}
            </Styles.Counter>
          </Styles.Details>
        </Styles.ContentMain>
        {showAlert && <Alert message="Adicionado ao carrinho" />}
      </Styles.Content>
      <Footer />
    </Styles.Container>
  );
}
