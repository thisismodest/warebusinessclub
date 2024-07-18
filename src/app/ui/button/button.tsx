"use client"
import styles from "@/app/ui/button/button.module.css";

interface ButtonProps {
  children: any;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  goToUrl?: string;
  size?: string;
  className?: string;
  invertColor?: boolean;
}
export default function Button(props: ButtonProps) {
  const { onClick, goToUrl, children, invertColor } = props;
  let size = props.size || "medium";

  return (
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
        onClick={onClick}>
        {children}
      </button>
  );
}