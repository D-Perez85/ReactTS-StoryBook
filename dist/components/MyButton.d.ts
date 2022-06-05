/// <reference types="react" />
import "./mybutton.css";
export interface MyButtonProps {
    /**
      * Basic colors of the bg-boton
    */
    backgroundColor?: 'string';
    /**
      * Basic colors of the boton
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
      * Button legend
    */
    label: string;
    /**
      * How large should the button be?
    */
    size?: 'small' | 'medium' | 'large';
}
export declare const MyButton: ({ backgroundColor, label, color, size }: MyButtonProps) => JSX.Element;
export default MyButton;
