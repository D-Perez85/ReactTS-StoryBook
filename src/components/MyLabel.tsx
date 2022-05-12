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
}

export const MyLabel = ({ label = "Sin valor",  size = "normal"}: MyLabelProps) => {
        return(
            <span className={`${size}`}>
                    {label}
            </span>
        )};
export default MyLabel;
