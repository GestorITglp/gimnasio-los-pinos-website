'use client';

import { FC, HTMLInputTypeAttribute, useState } from 'react';
import emailjs from '@emailjs/browser';

export interface FormField {
  id: string;
  label: string;
  placeholder: string;
  componentType: 'input' | 'dropdown';
  dataType?: HTMLInputTypeAttribute;
  options?: Array<string>;
}

interface Props {
  fields: Array<FormField>;
  sendButtonText: string;
  successMessage: string;
  errorMessage: string;
  closeAlertBtnText: string;
}

const AdmissionForm: FC<Props> = ({
  fields,
  sendButtonText,
  successMessage,
  errorMessage,
  closeAlertBtnText,
}) => {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const normalBtnClasses =
    'w-full sm:w-full btn btn-md btn-square text-white bg-dark-green-100 hover:bg-dark-green-200 border-0';
  let alertColor = '#00C600';
  if (message === errorMessage) {
    alertColor = 'red';
  }
  const isFormCompleted = Object.entries(responses).length === 6;
  const isButtonDisabled = isLoading || message !== '' || !isFormCompleted;

  const sendEmail = () => {
    setIsLoading(true);

    emailjs
      .send(
        'service_43v34g9',
        'template_z4u3ivc',
        responses,
        'NOVgk1YiAp5CA98gI'
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponses({});
          setMessage(successMessage);
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setMessage(errorMessage);
          setIsLoading(false);
        }
      );
  };

  const handleChangeOnField = (fieldKey: string, fieldValue: string) => {
    if (fieldValue === '') {
      const responsesCopy = { ...responses };
      delete responsesCopy[fieldKey];
      setResponses(responsesCopy);
    }

    setResponses((prevResponses) => {
      return {
        ...prevResponses,
        [fieldKey]: fieldValue,
      };
    });
  };

  const handleClickOnCloseAlert = () => {
    setMessage('');
    setResponses({});
  };

  return (
    <form className='flex flex-col justify-center items-stretch gap-10 z-[49]'>
      {fields.map((field) => {
        const component =
          field.componentType === 'input' ? (
            <div
              key={field.label}
              className='flex flex-col items-start gap-2'
            >
              <label
                htmlFor={field.label}
                className='text-white font-bold'
              >
                {field.label}
              </label>
              <input
                id={field.label}
                type={field.dataType}
                placeholder={field.placeholder}
                className='input input-bordered w-full'
                value={responses[field.id]}
                onChange={(e) => handleChangeOnField(field.id, e.target.value)}
              />
            </div>
          ) : (
            <div className='flex flex-col items-start gap-2'>
              <label
                htmlFor={field.label}
                className='text-white font-bold'
              >
                {field.label}
              </label>
              <select
                className='select select-bordered w-full '
                value={responses[field.id]}
              >
                <option
                  disabled
                  selected
                >
                  {field.placeholder}
                </option>
                {field.options !== undefined &&
                  field.options.map((opt) => {
                    return (
                      <option
                        key={opt}
                        onClick={() => handleChangeOnField(field.id, opt)}
                      >
                        {opt}
                      </option>
                    );
                  })}
              </select>
            </div>
          );

        return component;
      })}
      <button
        type='button'
        style={
          isButtonDisabled
            ? {
                backgroundColor: 'grey',
                opacity: 0.75,
              }
            : {}
        }
        disabled={isButtonDisabled}
        className={`${normalBtnClasses} flex justify-center items-center transition-all`}
        onClick={sendEmail}
      >
        {isLoading ? (
          <span className='loading loading-spinner loading-md'></span>
        ) : (
          sendButtonText
        )}
      </button>
      {message !== '' && (
        <div
          role='alert'
          style={{
            backgroundColor: alertColor,
          }}
          className='fixed left-auto sm:left-[20px] bottom-[20px] alert border-0 z-100 opacity-100 w-[270px]'
        >
          <span className='text-white'>{message}</span>
          <div>
            <button
              className='btn btn-sm font-bold'
              onClick={handleClickOnCloseAlert}
            >
              {closeAlertBtnText}
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default AdmissionForm;
