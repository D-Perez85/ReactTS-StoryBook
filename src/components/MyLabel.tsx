import "./mylabel.css";

export interface MyLabelProps {
  label: string; // Este es el mensaje a mostrar en la etiqueta
  size: "normal" | "h1" | "h2" | "h3"; // Tamaño de la etiquete
}

export const MyLabel = ({ label = "Sin valor",  size = "normal"}: MyLabelProps) => {
        return(
            <span className={`${size}`}>
                    {label}
            </span>
        )};
export default MyLabel;
