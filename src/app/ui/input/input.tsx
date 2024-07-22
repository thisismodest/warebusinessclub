import styles from '@/app/ui/input/input.module.css';

interface InputProps {
  id: string;
  labelName?: string;
  [prop: string]: any;
}
export default function Input(props: InputProps) {
  const { id, labelName, ...rest } = props;

  return (
    <>
      {labelName && <label className={styles['label-name']} htmlFor={id}>{labelName}</label >}
      <input className={styles.input} id={id} name={id} {...rest}></input>
    </>
  )
}