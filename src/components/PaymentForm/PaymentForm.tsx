import styles from './PaymentForm.module.scss';
import { ArrowLeftIcon, InfoIcon } from '@/assets';
import { ApplePayButton, FormField, PayButton } from '@/components';
import { useAlert, useFormFieldChange } from '@/hooks';
import { processPayment } from '@/services/paymentService';
import { CardDetails, Order } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Tooltip } from 'react-tooltip';

interface Props {
  orderInfo: Pick<Order, 'trial' | 'price' | 'afterTrial'>;
}

const PaymentForm = ({ orderInfo }: Props) => {
  const { trial, price, afterTrial } = orderInfo;
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm<CardDetails>({
    defaultValues: {
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const { handleCardNumberChange, handleCvcChange, handleExpiryChange } =
    useFormFieldChange({ setValue, clearErrors });

  const { addAlert } = useAlert();

  const onSubmit: SubmitHandler<CardDetails> = async (data) => {
    setIsLoading(true);

    try {
      const result = await processPayment(data);

      addAlert(result.success ? 'success' : 'error', result.message);
    } catch (error) {
      addAlert('error', `${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplePay = () => {
    addAlert('error', 'This service is currently down');
  };

  return (
    <AnimatePresence mode="wait">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.paymentForm}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.paymentFormCheckoutBox}>
          <button
            className={styles.paymentFormCheckoutBoxButton}
            type="button"
            onClick={() => addAlert('error', `Checkout doesn't work yet`)}
          >
            <ArrowLeftIcon />
            Checkout
          </button>
        </div>

        <div className={styles.paymentFormTrialBox}>
          <h2 className={styles.paymentFormTrialBoxTrial}>{trial}</h2>
          <p className={styles.paymentFormAfterTrial}>{afterTrial}</p>
        </div>

        <div className={styles.paymentFormAppleButton}>
          <ApplePayButton onClick={handleApplePay} />
        </div>

        <div className={styles.paymentFormDivider}>or pay with card</div>

        <div className={styles.paymentFormFields}>
          <FormField
            label="Card Number"
            id="cardNumber"
            placeholder="1234 1234 1234 1234"
            {...register('cardNumber', {
              required: 'Card number is required',
              pattern: {
                value: /^\d{4} \d{4} \d{4} \d{4}$/,
                message:
                  'The card number must be in the format 1234 1234 1234 1234',
              },
            })}
            onChange={handleCardNumberChange}
            maxLength={19}
            error={errors.cardNumber?.message}
          />

          <div className={styles.paymentFormRow}>
            <FormField
              label="Expiration Date"
              id="expiryDate"
              placeholder="MM/YY"
              {...register('expiryDate', {
                required: 'Expiry date is required',
                pattern: {
                  value: /^\d{2}\/\d{2}$/,
                  message: 'The date must be in MM/YY format',
                },
              })}
              onChange={handleExpiryChange}
              maxLength={5}
              error={errors.expiryDate?.message}
            />

            <FormField
              label="CVC"
              id="cvc"
              placeholder="•••"
              type="password"
              {...register('cvc', {
                required: 'CVC is required',
                pattern: {
                  value: /^\d{3}$/,
                  message: 'CVC must consist of 3 digits',
                },
              })}
              onChange={handleCvcChange}
              maxLength={3}
              error={errors.cvc?.message}
            >
              <InfoIcon
                data-tooltip-id="my-tooltip"
                data-tooltip-content="The 3-digit code on the back of your card."
                className={styles.paymentFormInfoIcon}
              />
            </FormField>
          </div>
        </div>

        <div className={styles.paymentFormPayButtonContainer}>
          <PayButton
            price={price}
            isLoading={isLoading}
            type="submit"
            disabled={isLoading}
          />
        </div>

        <p className={styles.paymentFormDescription}>
          You'll have your{' '}
          <span className={styles.paymentFormDescriptionStrong}>
            Plan Pro during 1 year
          </span>
          . After this period of time, your plan will be{' '}
          <span className={styles.paymentFormDescriptionStrong}>
            automatically renewed
          </span>{' '}
          with its original price without any discounts applied.
        </p>

        <Tooltip id="my-tooltip" />
      </motion.form>
    </AnimatePresence>
  );
};

export default PaymentForm;
