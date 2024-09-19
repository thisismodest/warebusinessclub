import styles from '@/app/ui/input/input.module.css';

interface InputProps {
  id: string;
  name?: string;
  labelName?: string;
  defaultValue?: string | number;
  type?: string;
  [prop: string]: any;
}
export default function Input(props: InputProps) {
  const { id, labelName, name, defaultValue, type, ...rest } = props;

  return (
    <>
      {labelName && <label className={styles['label-name']} htmlFor={id}>{labelName}</label >}
      {type === 'textarea' ?
        <textarea className={styles.input} id={id} name={name || id} defaultValue={defaultValue} {...rest} />
        : <input className={styles.input} type={type || 'text'} id={id} name={name || id} defaultValue={defaultValue} {...rest} />}
    </>
  )
}