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

interface cartItemsTypes {
  amount: number;
  img: string;
  price: string | number;
  title: string;
}

export function Cart() {
  const [isPixActive, setIsPixActive] = useState(true);
  const [isCreditActive, setIsCreditActive] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showMyRequest, setShowMyRequest] = useState(true);
  const [input, setInput] = useState("");
  const [validity, setValidity] = useState("");
  const [cvc, setCvc] = useState("");
  const [cartItems, setCartItems] = useState<cartItemsTypes[]>([]);
  console.log(cartItems);
  const disabled = input.length < 16 || validity.length < 5 || cvc.length < 3;
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
  };

  function removeFromCart(itemIndex: any) {
    const cartAtStorage = localStorage.getItem("@explore-food:cart");
    if (!cartAtStorage) return;

    const cartItems = JSON.parse(cartAtStorage);

    cartItems.splice(itemIndex, 1);

    localStorage.setItem("@explore-food:cart", JSON.stringify(cartItems));

    setCartItems(cartItems);
  }

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
                          type="text"
                          label="Número do Cartao"
                          placeholder="0000 0000 0000 0000"
                          onChange={(e) => setInput(e.target.value)}
                        />
                        <div className="validityAndCVC">
                          <Input
                            type="text"
                            label="Validade"
                            placeholder="04/25"
                            onChange={(e) => setValidity(e.target.value)}
                          />
                          <Input
                            type="text"
                            label="CVC"
                            placeholder="777"
                            onChange={(e) => setCvc(e.target.value)}
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
    </Styles.Container>
  );
}
