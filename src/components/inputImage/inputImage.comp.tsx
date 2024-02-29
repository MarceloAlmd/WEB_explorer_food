import { InputImageProps } from "./InputImage";
import { MdOutlineFileUpload } from "react-icons/md";
import * as Styles from "./inputImage.styles";

export function InputImage({ label, onChange }: InputImageProps) {
  return (
    <Styles.Container>
      {label}
      <input type="file" onChange={onChange} />

      <p>
        <MdOutlineFileUpload />
        Selecione imagem
      </p>
    </Styles.Container>
  );
}
