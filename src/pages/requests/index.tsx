import { IoIosArrowBack } from "react-icons/io";
import { ButtonLink } from "../../components/buttonLink/buttonLink.comp";
import { Category } from "../../components/category/category.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import { Select } from "../../components/select/select.comp";
import * as Styles from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../api/axios";

interface RequestsTypes {
  code: string;
  created_at: string;
  detailing: string;
  id: number;
  status: string;
  updated_at: string;
  user_id: number;
}

export function Requests() {
  const [requests, setRequests] = useState<RequestsTypes[]>([]);

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/order");
      setRequests(response.data);
    }

    fetchRequests();
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
          marginLeft="-0.8rem"
        />
        <Category title="Pedidos">
          <Styles.Table>
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Código</th>
                  <th>Detalhamento</th>
                  <th>Data e hora</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => {
                  const date = new Date(request.created_at);

                  date.setHours(date.getHours() - 3);

                  return (
                    <tr key={request.id}>
                      <td>
                        <Select status={request.status} id={request.id} />
                      </td>
                      <td>{request.code}</td>
                      <td>{request.detailing}</td>
                      <td>{date.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Styles.Table>
        </Category>
      </Styles.Content>
      <Footer />
    </Styles.Container>
  );
}
