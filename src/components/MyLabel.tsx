import "./mylabel.css";

export interface MyLabelProps {
  /**
    * This is the message of the Label
  */
  label: string;
  /**
    * This is the size of the label
  */
  size: "normal" | "h1" | "h2" | "h3";
  /**
    * State for capitalize string
  */
  allCaps?: boolean; 
  /**
    * Basic colors of the boton
  */
  color?: 'primary'|'secondary'|'tertiary';
  /**
   * Set of Background-Color
   */
   colorFuente?: string; 
}

export const MyLabel = ({     
    allCaps = false,
    color   = 'primary',
    label   = "Sin valor",  
    size    = "normal", 
    colorFuente, 
}: MyLabelProps) => {
        return(
            <span className={`label ${size} text-${ color } `} style={{ color:colorFuente }}>
                    { allCaps ? label.toUpperCase() : label }
            </span>
        )};
export default MyLabel;
