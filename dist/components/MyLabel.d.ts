/// <reference types="react" />
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
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Set of Background-Color
     */
    colorFuente?: string;
    /**
     * Background Color CustomFont
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, colorFuente, backgroundColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
