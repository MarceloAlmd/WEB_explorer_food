import { InputImageProps } from "./InputImage";
import { MdOutlineFileUpload } from "react-icons/md";
import * as Styles from "./inputImage.styles";

export function InputImage({ label }: InputImageProps) {
  return (
    <Styles.Container>
      {label}
      <input type="file" />

      <p>
        <MdOutlineFileUpload />
        Selecione imagem
      </p>
    </Styles.Container>
  );
}
