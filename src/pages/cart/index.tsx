import { ButtonPayment } from "../../components/buttonPayment/buttonPayment.comp";
import { DishInCart } from "../../components/dishInCart/dishInCart.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import { PiNewspaperClipping } from "react-icons/pi";
import { MdPix } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import * as Styles from "./styles";
import { useEffect, useState } from "react";
import { Input } from "../../components/input/input.comp";
import { Button } from "../../components/button/button.comp";
import { ButtonLink } from "../../components/buttonLink/buttonLink.comp";
import { api } from "../../api/axios";
import { EmptyCart } from "./components/emptyCart/emptyCart.comp";
import { Alert } from "../../components/alert/alert.comp";
import { maskCardNumber, maskCvc, maskValidity } from "./utils/maskForm";

interface cartItemsTypes {
  amount: number;
  img: string;
  price: string | number;
  title: string;
}

export function Cart() {
  const [isPixActive, setIsPixActive] = useState<boolean>(true);
  const [isCreditActive, setIsCreditActive] = useState<boolean>(false);
  const [showPayment, setShowPayment] = useState<boolean>(false);
  const [showMyRequest, setShowMyRequest] = useState<boolean>(true);

  const [cartItems, setCartItems] = useState<cartItemsTypes[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const [cardNumber, setCardNumber] = useState<string>("");
  const [validity, setValidity] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");

  const disabled =
    cardNumber.length < 16 || validity.length < 5 || cvc.length < 3;
  const detailing = cartItems
    .map((item) => `${item.amount}x ${item.title}`)
    .join(", ");

  const totalPrice = cartItems.reduce((total, currentItem) => {
    const price =
      typeof currentItem.price === "string"
        ? parseFloat(currentItem.price.replace(",", "."))
        : currentItem.price;

    return total + price * currentItem.amount;
  }, 0);

  const formattedPrice = totalPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handlePixButtonClick = () => {
    setIsPixActive(true);
    setIsCreditActive(false);
  };

  const handleCreditButtonClick = () => {
    setIsCreditActive(true);
    setIsPixActive(false);
  };

  function handleShowAlert() {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3500);
  }

  function handlePayment() {
    setShowPayment(true);
    setShowMyRequest(false);
  }

  function handleShowMyRequest() {
    setShowPayment(false);
    setShowMyRequest(true);
  }

  const paymentItems = () => {
    api.post("/order", { detailing });

    localStorage.removeItem("@explore-food:cart");
    setCartItems([]);

    handleShowAlert();
  };

  function removeFromCart(itemIndex: any) {
    const cartAtStorage = localStorage.getItem("@explore-food:cart");
    if (!cartAtStorage) return;

    const cartItems = JSON.parse(cartAtStorage);

    cartItems.splice(itemIndex, 1);

    localStorage.setItem("@explore-food:cart", JSON.stringify(cartItems));

    setCartItems(cartItems);
  }

  const applyMask = (
    input: string,
    maskFunction: (input: string) => string
  ): void => {
    input = maskFunction(input);
    setCardNumber(input);
  };

  useEffect(() => {
    const cartAtStorage = localStorage.getItem("@explore-food:cart");

    if (cartAtStorage) {
      setCartItems(JSON.parse(cartAtStorage));
    }
  }, []);

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
          <Styles.MyRequests data-show-myrequest={showMyRequest}>
            <Styles.Header>Meu Pedido</Styles.Header>

            <Styles.ContentMyRequest>
              {cartItems.length === 0 && <EmptyCart />}
              {cartItems.map((item) => {
                const urlImg = `${api.defaults.baseURL}/files/${item.img}`;
                return (
                  <DishInCart
                    key={item.img}
                    src={urlImg}
                    amount={item.amount}
                    dish={item.title}
                    value={item.price}
                    onClick={() => removeFromCart(item.title)}
                  />
                );
              })}
            </Styles.ContentMyRequest>

            <Styles.FooterMyRequest>
              {cartItems.length === 0 ? (
                <h2>Total: R$ 0,00</h2>
              ) : (
                <h2>Total: R$ {formattedPrice}</h2>
              )}

              <Button
                type="button"
                title="Pagar"
                icon={PiNewspaperClipping}
                onClick={handlePayment}
              />
            </Styles.FooterMyRequest>
          </Styles.MyRequests>

          {cartItems.length === 0 ? (
            <div className="emptyCart"></div>
          ) : (
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
                  {isPixActive && <img src="./QRcodePix.svg" />}

                  {isCreditActive && (
                    <>
                      <div className="inputContainer ">
                        <Input
                          type="string"
                          label="Número do Cartao"
                          value={cardNumber}
                          placeholder="0000 0000 0000 0000"
                          onChange={(e) =>
                            applyMask(e.target.value, maskCardNumber)
                          }
                        />
                        <div className="validityAndCVC">
                          <Input
                            type="text"
                            label="Validade"
                            value={validity}
                            placeholder="04/25"
                            onChange={(e) =>
                              setValidity(maskValidity(e.target.value))
                            }
                          />
                          <Input
                            type="text"
                            label="CVC"
                            value={cvc}
                            placeholder="777"
                            onChange={(e) => setCvc(maskCvc(e.target.value))}
                          />
                        </div>

                        <Button
                          disabled={disabled}
                          icon={PiNewspaperClipping}
                          type="button"
                          title="Finalizar pagamento"
                          onClick={paymentItems}
                        />
                      </div>
                    </>
                  )}
                </Styles.PaymentMethod>
              </Styles.PaymentContent>
            </Styles.Payment>
          )}
        </Styles.Wrapper>
      </Styles.Content>
      <Footer />

      {showAlert && (
        <Alert message="Pedido feito com sucesso, aguarde aprovação do restaurante" />
      )}
    </Styles.Container>
  );
}
