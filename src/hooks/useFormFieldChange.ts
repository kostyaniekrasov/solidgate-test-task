import { CardDetails } from '@/types';
import { ChangeEvent } from 'react';
import { UseFormClearErrors, UseFormSetValue } from 'react-hook-form';

interface Props {
  setValue: UseFormSetValue<CardDetails>;
  clearErrors: UseFormClearErrors<CardDetails>;
}

const useFormFieldChange = ({ setValue, clearErrors }: Props) => {
  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    setValue('cardNumber', value);
    clearErrors('cardNumber');
  };

  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      const month = parseInt(value.slice(0, 2), 10);
      if (month > 12) {
        value = `12${value.slice(2)}`;
      }
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    setValue('expiryDate', value);
    clearErrors('expiryDate');
  };

  const handleCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue('cvc', value);
    clearErrors('cvc');
  };

  return {
    handleCardNumberChange,
    handleExpiryChange,
    handleCvcChange,
  };
};

export default useFormFieldChange;
