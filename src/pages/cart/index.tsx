import { ButtonPayment } from "../../components/buttonPayment/buttonPayment.comp";
import { DishInCart } from "../../components/dishInCart/dishInCart.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import { PiNewspaperClipping } from "react-icons/pi";
import { MdPix } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import * as Styles from "./styles";
import { useState } from "react";
import { Input } from "../../components/input/input.comp";
import { Button } from "../../components/button/button.comp";
import { ButtonLink } from "../../components/buttonLink/buttonLink.comp";

export function Cart() {
  const [isPixActive, setIsPixActive] = useState(true);
  const [isCreditActive, setIsCreditActive] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showMyRequest, setShowMyRequest] = useState(true);
  const [input, setInput] = useState("");
  const [validity, setValidity] = useState("");
  const [cvc, setCvc] = useState("");

  const disabled = input.length < 16 || validity.length < 5 || cvc.length < 3;

  const handlePixButtonClick = () => {
    setIsPixActive(true);
    setIsCreditActive(false);
  };

  const handleCreditButtonClick = () => {
    setIsCreditActive(true);
    setIsPixActive(false);
  };

  function handlePayment() {
    setShowPayment(true);
    setShowMyRequest(false);
  }

  function handleShowMyRequest() {
    setShowPayment(false);
    setShowMyRequest(true);
  }

  return (
    <Styles.Container>
      <Header />
      <Styles.Content>
        <ButtonLink
          to="/"
          title="Voltar"
          fontSize="1.5rem"
          icon={IoIosArrowBack}
        />

        <Styles.Wrapper>
          <Styles.MyRequests data-show-myRequest={showMyRequest}>
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

            <Styles.FooterMyRequest>
              <h2>Total: R$ 103,88</h2>
              <Button
                type="button"
                title="Pagar"
                icon={PiNewspaperClipping}
                onClick={handlePayment}
              />
            </Styles.FooterMyRequest>
          </Styles.MyRequests>

          <Styles.Payment data-show-payment={showPayment}>
            <Styles.HeaderPayment>
              <h2>Pagamento</h2>

              <ButtonLink
                title="Voltar"
                icon={IoIosArrowBack}
                onClick={handleShowMyRequest}
                to="/cart"
              />
            </Styles.HeaderPayment>
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
                {isPixActive && <img src="./delivered.svg" />}

                {isCreditActive && (
                  <>
                    <div className="inputContainer ">
                      <Input
                        type="text"
                        label="Número do Cartao"
                        placeholder="0000 0000 0000 0000"
                        onChange={(e: any) => setInput(e.target.value)}
                      />
                      <div className="validityAndCVC">
                        <Input
                          type="text"
                          label="Validade"
                          placeholder="04/25"
                          onChange={(e: any) => setValidity(e.target.value)}
                        />
                        <Input
                          type="text"
                          label="CVC"
                          placeholder="777"
                          onChange={(e: any) => setCvc(e.target.value)}
                        />
                      </div>

                      <Button
                        disabled={disabled}
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
        </Styles.Wrapper>
      </Styles.Content>
      <Footer />
    </Styles.Container>
  );
}
