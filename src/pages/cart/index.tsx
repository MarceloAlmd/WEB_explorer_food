import { ButtonPayment } from "../../components/buttonPayment/buttonPayment.comp";
import { DishInCart } from "../../components/dishInCart/dishInCart.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import { PiNewspaperClipping } from "react-icons/pi";
import { MdPix } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";

import * as Styles from "./styles";
import { useState } from "react";
import { Input } from "../../components/input/input.comp";
import { Button } from "../../components/button/button.comp";

export function Cart() {
  const [isPixActive, setIsPixActive] = useState(true);
  const [isCreditActive, setIsCreditActive] = useState(false);

  const handlePixButtonClick = () => {
    setIsPixActive(true);
    setIsCreditActive(false);
  };

  const handleCreditButtonClick = () => {
    setIsCreditActive(true);
    setIsPixActive(false);
  };

  return (
    <Styles.Container>
      <Header isSearch />
      <Styles.Content>
        <Styles.MyRequests>
          <Styles.Header>Meu Pedido</Styles.Header>

          <Styles.ContentMyRequest>
            <DishInCart
              src="https://www.southernliving.com/thmb/pKa7sB3W1hp0r9ElK4NUYLOCXCw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-27338_Green_Chile_Mac_And_Cheese_With_Chicken_303-7416f067f07f4bf3b6b8aaeddff4542b.jpg"
              amount="1"
              dish="Salad Radish"
              value={24.98}
            />
            <DishInCart
              src="https://www.southernliving.com/thmb/pKa7sB3W1hp0r9ElK4NUYLOCXCw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-27338_Green_Chile_Mac_And_Cheese_With_Chicken_303-7416f067f07f4bf3b6b8aaeddff4542b.jpg"
              amount="1"
              dish="Salad Radish"
              value={24.98}
            />
            <DishInCart
              src="https://www.southernliving.com/thmb/pKa7sB3W1hp0r9ElK4NUYLOCXCw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-27338_Green_Chile_Mac_And_Cheese_With_Chicken_303-7416f067f07f4bf3b6b8aaeddff4542b.jpg"
              amount="1"
              dish="Salad Radish"
              value={24.98}
            />
            <DishInCart
              src="https://www.southernliving.com/thmb/pKa7sB3W1hp0r9ElK4NUYLOCXCw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-27338_Green_Chile_Mac_And_Cheese_With_Chicken_303-7416f067f07f4bf3b6b8aaeddff4542b.jpg"
              amount="1"
              dish="Salad Radish"
              value={24.98}
            />
            <DishInCart
              src="https://www.southernliving.com/thmb/pKa7sB3W1hp0r9ElK4NUYLOCXCw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-27338_Green_Chile_Mac_And_Cheese_With_Chicken_303-7416f067f07f4bf3b6b8aaeddff4542b.jpg"
              amount="1"
              dish="Salad Radish"
              value={24.98}
            />
          </Styles.ContentMyRequest>

          <Styles.FooterMyRequest>Total: R$ 103,88</Styles.FooterMyRequest>
        </Styles.MyRequests>
        <Styles.Payment>
          <Styles.Header>Pagamento</Styles.Header>
          <Styles.PaymentContent>
            <header>
              <ButtonPayment
                icon={MdPix}
                title="Pix"
                checked={isPixActive}
                handleButtonClick={handlePixButtonClick}
              />
              <ButtonPayment
                icon={FaRegCreditCard}
                title="Crédito"
                checked={isCreditActive}
                handleButtonClick={handleCreditButtonClick}
              />
            </header>

            <Styles.PaymentMethod>
              {isPixActive && <img src="./QRcodePix.svg" />}

              {isCreditActive && (
                <>
                  <div className="inputContainer ">
                    <Input
                      type="text"
                      label="Número do Cartao"
                      placeholder="0000 0000 0000 0000"
                    />
                    <div className="validityAndCVC">
                      <Input type="text" label="Validade" placeholder="04/25" />
                      <Input type="text" label="CVC" placeholder="777" />
                    </div>

                    <Button
                      icon={PiNewspaperClipping}
                      type="button"
                      title="Finalizar pagamento"
                    />
                  </div>
                </>
              )}
            </Styles.PaymentMethod>
          </Styles.PaymentContent>
        </Styles.Payment>
      </Styles.Content>
      <Footer />
    </Styles.Container>
  );
}
