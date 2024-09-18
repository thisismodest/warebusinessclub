"use server"

import Input from '@/app/ui/input/input';
import styles from './form-modal.module.css';
import Button from '@/app/ui/button/button';

interface FormFields {
  inputId: string;
  inputName?: string;
  inputValue?: string | number;
  inputLabel?: string;
  inputPlaceholder?: string;
  inputType?: string;
}

const FormFields = ({ fields }: { fields: FormFields[] }) => {
  return fields.map(field => {
    console.log({ field });
    const { inputId, inputLabel, inputName, inputValue, inputPlaceholder, inputType } = field;

    return (
      <>
        <Input
          id={inputId}
          labelName={inputLabel}
          name={inputName || inputId}
          type={inputType}
          defaultValue={inputValue}
          placeholder={inputPlaceholder}
        />
      </>
    )
  });
}

export default async function FormModal({ formFields, formAction }: { formFields: FormFields[], formAction(): any }) {


  return (
    <form action={formAction()}>
      <FormFields fields={formFields} />
      <Button type="submit" size='medium'>Edit Invoice</Button>
    </form>
  )
}