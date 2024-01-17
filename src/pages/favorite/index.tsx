import { useEffect, useState } from "react";
import { Dishes } from "../../components/dishes/dishes.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import * as Styles from "./styles";
import { Category } from "../../components/category/category.comp";

export function Favorite() {
  const [slidePerView, setSlidePerView] = useState(3);

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
        <Category title="Meus Favoritos">
          <Styles.SwiperContainer
            pagination={{ clickable: true }}
            navigation
            slidesPerView={slidePerView}
            loop={true}
          >
            {data.map((item) => (
              <Styles.SwiperContent key={String(item.id)}>
                <Dishes
                  title={item.title}
                  description={item.description}
                  price={item.price}
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
