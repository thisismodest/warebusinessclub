"use server"

import Input from '@/app/ui/input/input';
import styles from './form-modal.module.css';
import Button from '@/app/ui/button/button';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export interface FormFields {
  inputId: string;
  inputName?: string;
  inputValue?: string | number | undefined | null;
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
          defaultValue={inputValue || undefined}
          placeholder={inputPlaceholder}
        />
      </>
    )
  });
};


export default async function FormModal({ formFields, formAction, ctaText }: { formFields: FormFields[], formAction(data: Record<string, any>): void, ctaText?: string }) {

  const handleFormAction = async (formData: FormData) => {
    "use server";
    const data: Record<string, any> = {};

    for (const pair of formData.entries()) {
      if (!pair[1] || pair[0].indexOf("$ACTION_") !== -1) continue;

      const cleanedValue = pair[1].toString().trim();
      if (cleanedValue.length < 1) continue;

      data[pair[0]] = cleanedValue;
    }

    return formAction(data);
  }

  return (
    <form action={handleFormAction} className={styles.form}>
      <FormFields fields={formFields} />
      <Button type="submit" size='medium'>{ctaText || "Submit"}</Button>
    </form>
  )
}