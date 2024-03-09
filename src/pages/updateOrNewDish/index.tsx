import { ChangeEvent, useState } from "react";
import { ButtonLink } from "../../components/buttonLink/buttonLink.comp";
import { useLocation, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import { Input } from "../../components/input/input.comp";
import * as Styles from "./styles";
import { IoCloseCircleOutline } from "react-icons/io5";
import { InputImage } from "../../components/inputImage/inputImage.comp";
import { Ingredients } from "../../components/ingredients/ingredients.comp";
import { FormError } from "../../components/formError/formError.comp";
import { Alert } from "../../components/alert/alert.comp";
import { api } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

export function UpdateOrNewDish() {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("principal ");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState<string>("");
  const [price, setPrice] = useState<string | number>("");
  const [description, setDescription] = useState<string>("");
  const [imageDish, setImageDish] = useState<File | null>(null);
  const [selectedImageIngredient, setSelectedImageIngredients] =
    useState<File | null>(null);
  const [imagesIngredients, setImagesIngredients] = useState<File[]>([]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [newIngredientError, setNewIngredientError] = useState<boolean>(false);

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const title = location.pathname === "/create" ? "Novo Prato" : "Editar prato";

  const isUpdate = location.pathname !== "/create" && true;

  function handleAddModal() {
    setShowModal(true);
  }

  function handleSelectImageDish(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];

      setImageDish(file);
    }
  }

  function selectImageIngredient(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedImageIngredients(file);
      setImageError(false);
    }
  }

  function handleAddImage() {
    if (!newIngredient) {
      return setNewIngredientError(true);
    }
    if (!selectedImageIngredient) {
      return setImageError(true);
    }

    if (selectedImageIngredient) {
      setImagesIngredients((prevState) => [
        ...prevState,
        selectedImageIngredient,
      ]);
      setSelectedImageIngredients(null);
      addNewIngredient();
    }
  }

  const addNewIngredient = () => {
    if (newIngredient.trim() === "" || !newIngredient) {
      return setNewIngredientError(true);
    }

    if (newIngredient.trim() !== "") {
      setIngredients((prevState) => [...prevState, newIngredient]);
    }

    setShowModal(false);
  };

  const removeIngredient = (name: string) => {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== name)
    );
  };

  function showAlertError() {
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
    }, 3000);
  }
  function showSuccessAlert() {
    setShowAlertSuccess(true);

    setTimeout(() => {
      setShowAlertSuccess(false);
      navigate("/");
    }, 3000);
  }

  async function handleDishAction(action: "create" | "update") {
    if (!imageDish || !name || !price || ingredients.length === 0) {
      return showAlertError();
    }

    const apiMethod = action === "create" ? api.postForm : api.putForm;
    const apiEndpoint =
      action === "create" ? "/dishes" : `/dishes/${params.id}`;
    const ingredientIdKey =
      action === "create" ? "ingredientIds" : "ingredientsIdUpdate";

    try {
      setLoading(true);
      const response = await apiMethod(apiEndpoint, {
        image_dish: imageDish,
        name,
        category,
        price,
        description,
        ingredients,
      });

      const ingredientIds = response.data[ingredientIdKey].map(
        (ingredient: { id: number }) => ingredient.id
      );

      if (imagesIngredients.length > 0) {
        const uploadPromises = ingredientIds.map(
          async (ingredientId: number, index: number) => {
            const imageIngredient = imagesIngredients[index];
            if (imageIngredient) {
              const formData = new FormData();
              formData.append("image_ingredient", imageIngredient);

              try {
                await api.patch(`/ingredients/${ingredientId}`, formData);
              } catch (error) {
                console.error(error);
              }
            }
          }
        );

        await Promise.all(uploadPromises);
      }
      setLoading(false);
      showSuccessAlert();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreateNewDish() {
    await handleDishAction("create");
  }

  async function handleEditDish() {
    await handleDishAction("update");
  }
  return (
    <Styles.Container>
      <Header />
      {showModal && (
        <Styles.Modal>
          <Styles.ContentModal>
            <button onClick={() => setShowModal(false)} className="closeModal">
              <IoCloseCircleOutline />
            </button>
            <div className="fullInput">
              <Input
                type="text"
                label="Ingrediente"
                placeholder="Ex: Maracuja"
                onChange={(e) => {
                  setNewIngredient(e.target.value);
                  setNewIngredientError(false);
                }}
              />

              {newIngredientError && (
                <FormError message="Adicione um ingrediente" />
              )}
              <Styles.InputImgAndLabel>
                <label>Adicionar Imagem</label>
                <InputImage onChange={selectImageIngredient} />
              </Styles.InputImgAndLabel>
              {imageError && (
                <FormError message="Selecione a imagem desejada" />
              )}
            </div>

            <div className="contentButton">
              <button
                className="addWithoutImage"
                onClick={() => addNewIngredient()}
              >
                Cadastrar sem imagem
              </button>
              <button className="addWithImage" onClick={handleAddImage}>
                Cadastrar com imagem
              </button>
            </div>
          </Styles.ContentModal>
        </Styles.Modal>
      )}

      <Styles.Content>
        <ButtonLink
          to="/"
          title="Voltar"
          fontSize="1.5rem"
          icon={IoIosArrowBack}
        />

        <Styles.Title>{title}</Styles.Title>

        <Styles.FirstWrapper>
          <InputImage
            label="Imagem do prato"
            onChange={handleSelectImageDish}
          />
          <Input
            type="text"
            label="Nome"
            placeholder="Ex: Salada Ceasar"
            onChange={(e) => setName(e.target.value)}
          />

          <div className="selectGroup">
            <label>Categoria</label>
            <select value={category} onChange={handleChangeCategory}>
              <option value="principal ">Prato principal</option>
              <option value="Sobremesas">Sobremesa</option>
              <option value="Bebidas ">Bebida</option>
            </select>
          </div>
        </Styles.FirstWrapper>
        <Styles.Wrapper>
          <Styles.SecondWrapper>
            <label>Ingredientes</label>
            <div>
              <Ingredients isNew onClick={handleAddModal} />
              {ingredients.map((ingredient) => (
                <Ingredients
                  key={ingredient}
                  value={ingredient}
                  onClick={() => removeIngredient(ingredient)}
                />
              ))}
            </div>
          </Styles.SecondWrapper>
          <Styles.Third>
            <label>Preço</label>

            <Input
              type="number"
              placeholder="R$ 00,00"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Styles.Third>
        </Styles.Wrapper>
        <label>
          Descrição
          <textarea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        {isUpdate ? (
          <button
            className="ButtonRequestAndUpdate"
            type="button"
            onClick={handleEditDish}
          >
            {loading ? (
              <PacmanLoader
                color="#92000E"
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Atualizar Prato"
            )}
          </button>
        ) : (
          <button
            className="ButtonRequestAndUpdate"
            type="button"
            onClick={handleCreateNewDish}
          >
            {loading ? (
              <PacmanLoader
                color="#92000E"
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Adicionar Pedido"
            )}
          </button>
        )}
      </Styles.Content>

      <Footer />

      {showError && <Alert bgColorRed message="Preencha todos os campos" />}
      {showAlertSuccess && (
        <Alert
          message={
            isUpdate
              ? "Prato atualizado com sucesso"
              : "Prato cadastrado com sucesso"
          }
        />
      )}
    </Styles.Container>
  );
}
