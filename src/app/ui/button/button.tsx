"use client"
import styles from "@/app/ui/button/button.module.css";
import Input from "../input/input";

interface ButtonProps {
  children?: any;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  goToUrl?: string;
  size?: string;
  className?: string;
  invertColor?: boolean;
  type?: string;
  submitText?: string;
  [prop: string]: any;
}
export default function Button(props: ButtonProps) {
  const { onClick, goToUrl, children, invertColor, disabled, type, submitText, ...rest } = props;
  let size = props.size || "medium";

  return (
    (type === "submit") ? <Input id="submit" type="submit" value={submitText} className={`${styles.button} ${styles[size]} ${props.className}`}
      disabled={disabled} />
      :
      goToUrl ?
        <a
          className={`${styles.button} ${styles[size]} ${props.className} ${invertColor && styles["invert"]}`
          }
          href={props.goToUrl} >
          {children}
        </a >
        :
        <button
          className={`${styles.button} ${styles[size]} ${props.className}`}
          disabled={disabled}
          {...rest}
          onClick={onClick}>
          {children}
        </button>


  );
}