import { useEffect, useState } from "react";
import { Dishes } from "../../components/dishes/dishes.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import * as Styles from "./styles";
import { Category } from "../../components/category/category.comp";
import { api } from "../../api/axios";
import { DishesDataTypes } from "../home/home";
import { EmptyFavorites } from "./components/empty/empty.comp";

export function Favorite() {
  const [slidePerView, setSlidePerView] = useState(3);
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
            <Styles.SwiperContainer
              pagination={{ clickable: true }}
              navigation
              slidesPerView={data.length === 1 ? 1 : slidePerView}
              loop={true}
            >
              {data.map((item) => (
                <Styles.SwiperContent key={String(item.id)}>
                  <Dishes
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    img={item.image}
                    removeFavorite={() => handleToggleFavorite(item.id, false)}
                  />
                </Styles.SwiperContent>
              ))}
            </Styles.SwiperContainer>
          </Category>
        )}
      </Styles.Content>
      <Footer />
    </Styles.Container>
  );
}
