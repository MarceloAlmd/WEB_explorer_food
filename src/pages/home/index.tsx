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
import { A11y, Navigation, Pagination } from "swiper/modules";
import "../../components/slider/slider.css";
import { Swiper, SwiperSlide } from "swiper/react";

export function Home() {
  const [slidePerView, setSlidePerView] = useState(3);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const navigate = useNavigate();

  const [data, setData] = useState<DishesDataTypes[]>([]);

  const [name, setName] = useState<string>("");

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
    async function fetchAllDishes() {
      const response = await api.get(`/dishes?name=${name}`);
      setData(response.data);
    }

    fetchAllDishes();
  }, [name]);

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
      <Header isSearch searchDishes={setName} />

      <Styles.Banner>
        <img src="/banner.svg" />
      </Styles.Banner>

      <Styles.Content>
        <Category title="Pratos principais">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            pagination={{ clickable: true }}
            navigation
            slidesPerView={name ? 1 : slidePerView}
          >
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
          </Swiper>
        </Category>
        <Category title="Sobremesas">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            pagination={{ clickable: true }}
            navigation
            slidesPerView={name ? 1 : slidePerView}
          >
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
          </Swiper>
        </Category>

        <Category title="Bebidas">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            pagination={{ clickable: true }}
            navigation
            slidesPerView={name ? 1 : slidePerView}
          >
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
          </Swiper>
        </Category>
        {showAlert && <Alert message="O prato foi adicionado aos favoritos" />}
        <h1>New build 2</h1>
      </Styles.Content>

      <Footer />
    </Styles.Container>
  );
}
