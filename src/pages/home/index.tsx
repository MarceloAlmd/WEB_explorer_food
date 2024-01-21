import { useEffect, useState } from "react";
import { Category } from "../../components/category/category.comp";
import { Dishes } from "../../components/dishes/dishes.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import { useNavigate } from "react-router-dom";
import * as Styles from "./styles";

export function Home() {
  const [slidePerView, setSlidePerView] = useState(3);
  const navigate = useNavigate();
  const data = [
    {
      id: "1",
      title: "Salada Ravanello",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 47.99,
    },
    {
      id: "2",
      title: "Salada Batata",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 47.99,
    },
    {
      id: "3",
      title: "Queijo quente",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 47.99,
    },
    {
      id: "4",
      title: "Frango assado",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 47.99,
    },
  ];

  const handleDetails = (id: string) => {
    navigate(`/details/${id}`);
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
      <Header isSearch />

      <Styles.Banner>
        <img src="/banner.svg" />
      </Styles.Banner>

      <Styles.Content>
        <Category title="Pratos principais">
          <Styles.SwiperContainer
            pagination={{ clickable: true }}
            navigation
            slidesPerView={slidePerView}
            loop={true}
          >
            {data.map((item) => (
              <Styles.SwiperContent key={item.id}>
                <Dishes
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  onClick={() => handleDetails(item.id)}
                />
              </Styles.SwiperContent>
            ))}
          </Styles.SwiperContainer>
        </Category>

        <Category title="Sobremesas">
          <Styles.SwiperContainer
            pagination={{ clickable: true }}
            navigation
            slidesPerView={slidePerView}
            loop={true}
          >
            {data.map((item) => (
              <Styles.SwiperContent key={item.id}>
                <Dishes
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  onClick={() => handleDetails(item.id)}
                />
              </Styles.SwiperContent>
            ))}
          </Styles.SwiperContainer>
        </Category>

        <Category title="Sucos">
          <Styles.SwiperContainer
            pagination={{ clickable: true }}
            navigation
            slidesPerView={slidePerView}
            loop={true}
          >
            {data.map((item) => (
              <Styles.SwiperContent key={item.id}>
                <Dishes
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  onClick={() => handleDetails(item.id)}
                />
              </Styles.SwiperContent>
            ))}
          </Styles.SwiperContainer>
        </Category>
      </Styles.Content>

      <Footer />
    </Styles.Container>
  );
}
