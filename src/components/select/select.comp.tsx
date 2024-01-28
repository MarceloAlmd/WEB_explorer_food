import { useState } from "react";
import * as Styles from "./select.styles";
import { useAuth } from "../../context/auth.context";

export function Select() {
  const { user } = useAuth();
  const [selectedOption, setSelectedOption] = useState("pending");

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Styles.Container>
      <span className={selectedOption === "pending" ? "red" : "hidden"}></span>
      <span
        className={selectedOption === "preparing" ? "orange" : "hidden"}
      ></span>
      <span
        className={selectedOption === "delivered" ? "green" : "hidden"}
      ></span>

      <select
        onChange={handleSelectChange}
        value={selectedOption}
        disabled={user.role === "customer"}
      >
        <option value="pending">Pendente</option>
        <option value="preparing">Preparando</option>
        <option value="delivered">Entregue</option>
      </select>
    </Styles.Container>
  );
}
