import { useState } from "react";
import * as Styles from "./select.styles";
import { useAuth } from "../../context/auth.context";
import { api } from "../../api/axios";
import { SelectProps } from "./select";

export function Select({ status, id }: SelectProps) {
  const { user } = useAuth();
  const [selectedOption, setSelectedOption] = useState(status);

  const handleSelectChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStatus = event.target.value;
    setSelectedOption(newStatus);
    await updateStatus(id, newStatus);
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      await api.patch(`/order/${id}`, { status });
      return { status: "success" };
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      return { status: "error", error };
    }
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
