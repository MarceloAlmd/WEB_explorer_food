import { useEffect, useState } from "react";
import { Category } from "../../components/category/category.comp";
import { Dishes } from "../../components/dishes/dishes.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import { useNavigate } from "react-router-dom";
import * as Styles from "./styles";
import { api } from "../../api/axios";
import { DishesDataTypes } from "./home";
import { Alert } from "../../components/alert/alert.comp";

import { SwiperProps, SwiperSlide } from "swiper/react";
import { Slider } from "../../components/slider/slider.comp";

export function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const navigate = useNavigate();

  const [data, setData] = useState<DishesDataTypes[]>([]);

  const [name, setName] = useState<string>("");
  const [slidesPerView, setSlidesPerView] = useState<number>(3);

  const settings: SwiperProps = {
    slidesPerView,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  const handleDetails = (id: number) => {
    navigate(`/details/${id}`);
  };

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  const handleToggleFavorite = async (id: number, isFavorite: boolean) => {
    await api.patch(`/favorites/favorites/${id}`, {
      isFavorite: isFavorite ? 1 : 0,
    });

    if (isFavorite === true) {
      setShowAlert(true);
      setInterval(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (name.trim() !== "") {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(3);
    }
  }, [name]);

  useEffect(() => {
    async function fetchAllDishes() {
      const response = await api.get(`/dishes?name=${name}`);
      setData(response.data);
    }

    fetchAllDishes();
  }, [name]);

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
      <Header isSearch searchDishes={setName} />

      <Styles.Banner>
        <img src="/banner.svg" />
      </Styles.Banner>

      {isMobile ? (
        <Styles.Content>
          <Category title="Pratos principais">
            {data.map((item) => {
              if (item.category === "principal ") {
                return (
                  <Dishes
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    showDetails={() => handleDetails(item.id)}
                    onEdit={() => handleEdit(item.id)}
                    img={item.image}
                    addFavorite={() => handleToggleFavorite(item.id, true)}
                    removeFavorite={() => handleToggleFavorite(item.id, false)}
                  />
                );
              }
            })}
          </Category>

          <Category title="Sobremesas">
            {data.map((item) => {
              if (item.category === "Sobremesas") {
                return (
                  <Dishes
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    showDetails={() => handleDetails(item.id)}
                    onEdit={() => handleEdit(item.id)}
                    img={item.image}
                    addFavorite={() => handleToggleFavorite(item.id, true)}
                    removeFavorite={() => handleToggleFavorite(item.id, false)}
                  />
                );
              }
            })}
          </Category>

          <Category title="Bebidas">
            {data.map((item) => {
              if (item.category === "Bebidas ") {
                return (
                  <Dishes
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    showDetails={() => handleDetails(item.id)}
                    onEdit={() => handleEdit(item.id)}
                    img={item.image}
                    addFavorite={() => handleToggleFavorite(item.id, true)}
                    removeFavorite={() => handleToggleFavorite(item.id, false)}
                  />
                );
              }
            })}
          </Category>
        </Styles.Content>
      ) : (
        <Styles.Content>
          <Category title="Pratos principais">
            <Slider settings={settings}>
              {data.map((item) => {
                if (item.category === "principal ") {
                  return (
                    <SwiperSlide key={item.id}>
                      <Dishes
                        title={item.name}
                        description={item.description}
                        price={item.price}
                        showDetails={() => handleDetails(item.id)}
                        onEdit={() => handleEdit(item.id)}
                        img={item.image}
                        addFavorite={() => handleToggleFavorite(item.id, true)}
                        removeFavorite={() =>
                          handleToggleFavorite(item.id, false)
                        }
                      />
                    </SwiperSlide>
                  );
                }
              })}
            </Slider>
          </Category>
          <Category title="Sobremesas">
            <Slider settings={settings}>
              {data.map((item) => {
                if (item.category === "Sobremesas") {
                  return (
                    <SwiperSlide key={item.id}>
                      <Dishes
                        title={item.name}
                        description={item.description}
                        price={item.price}
                        showDetails={() => handleDetails(item.id)}
                        onEdit={() => handleEdit(item.id)}
                        img={item.image}
                        addFavorite={() => handleToggleFavorite(item.id, true)}
                        removeFavorite={() =>
                          handleToggleFavorite(item.id, false)
                        }
                      />
                    </SwiperSlide>
                  );
                }
              })}
            </Slider>
          </Category>

          <Category title="Bebidas">
            <Slider settings={settings}>
              {data.map((item) => {
                if (item.category === "Bebidas ") {
                  return (
                    <SwiperSlide key={item.id}>
                      <Dishes
                        title={item.name}
                        description={item.description}
                        price={item.price}
                        showDetails={() => handleDetails(item.id)}
                        onEdit={() => handleEdit(item.id)}
                        img={item.image}
                        addFavorite={() => handleToggleFavorite(item.id, true)}
                        removeFavorite={() =>
                          handleToggleFavorite(item.id, false)
                        }
                      />
                    </SwiperSlide>
                  );
                }
              })}
            </Slider>
          </Category>
          {showAlert && (
            <Alert message="O prato foi adicionado aos favoritos" />
          )}
        </Styles.Content>
      )}

      <Footer />
    </Styles.Container>
  );
}
