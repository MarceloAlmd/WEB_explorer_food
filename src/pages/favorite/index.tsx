import { useEffect, useState } from "react";
import { Dishes } from "../../components/dishes/dishes.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import * as Styles from "./styles";
import { Category } from "../../components/category/category.comp";
import { api } from "../../api/axios";
import { DishesDataTypes } from "../home/home";
import { EmptyFavorites } from "./components/empty/empty.comp";
import { Slider } from "../../components/slider/slider.comp";
import { SwiperProps, SwiperSlide } from "swiper/react";

export function Favorite() {
  const [slidePerView, setSlidePerView] = useState(3);
  const settings: SwiperProps = {
    slidesPerView: slidePerView,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  const [dishes, setDishes] = useState([]);
  const [data, setData] = useState<DishesDataTypes[]>([]);

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
        setSlidePerView(1);
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
      <Styles.Content>
        {data.length === 0 ? (
          <EmptyFavorites />
        ) : (
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
        )}
      </Styles.Content>
      <Footer />
    </Styles.Container>
  );
}
