import { useEffect, useState } from "react";
import { Dishes } from "../../components/dishes/dishes.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import * as Styles from "./styles";
import { Category } from "../../components/category/category.comp";
import { api } from "../../api/axios";
import { DishesDataTypes } from "../home/home";
import { Slider } from "../../components/slider/slider.comp";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { ButtonLink } from "../../components/buttonLink/buttonLink.comp";
import { IoIosArrowBack } from "react-icons/io";

export function Favorite() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [dishes, setDishes] = useState([]);
  const [data, setData] = useState<DishesDataTypes[]>([]);

  const length = data.length;

  const settings: SwiperProps = {
    slidesPerView: length > 3 ? 3 : length,
    spaceBetween: 10,
    navigation: true,
  };

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get("/favorites");

      setData(response.data);
    }

    fetchFavorites();
  }, [dishes]);

  const handleToggleFavorite = async (id: number, isFavorite: boolean) => {
    const response = await api.patch(`/favorites/favorites/${id}`, {
      isFavorite: isFavorite ? 1 : 0,
    });

    setDishes(response.data);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Styles.Container>
      <Header />

      {isMobile ? (
        <Styles.Content>
          <ButtonLink
            to="/"
            title="Voltar"
            fontSize="1.5rem"
            icon={IoIosArrowBack}
          />
          <Category title="Meus Favoritos">
            {data.map((item) => (
              <Dishes
                key={item.id}
                title={item.name}
                description={item.description}
                price={item.price}
                img={item.image}
                removeFavorite={() => handleToggleFavorite(item.id, false)}
              />
            ))}
          </Category>
        </Styles.Content>
      ) : (
        <Styles.Content>
          <Category title="Meus Favoritos">
            <Slider settings={settings}>
              {data.map((item) => (
                <SwiperSlide
                  key={String(item.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Dishes
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    img={item.image}
                    removeFavorite={() => handleToggleFavorite(item.id, false)}
                  />
                </SwiperSlide>
              ))}
            </Slider>
          </Category>
        </Styles.Content>
      )}

      <Footer />
    </Styles.Container>
  );
}
