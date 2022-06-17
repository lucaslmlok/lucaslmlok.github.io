import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { send } from '@emailjs/browser';
import { FaAngleRight } from 'react-icons/fa';

import Button from './Button';
import { serviceId, templateId, userId } from '../helpers/email';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const sendEmail = async (data: Inputs) => {
    const emailData = {
      to_name: data.name,
      to_email: data.email,
      message: data.message,
    };
    try {
      await send(serviceId, templateId, emailData, userId);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await toast.promise(sendEmail(data), {
      pending: 'Sending Message...',
      success: 'Message is sent successfully!',
      error: 'There was an error sending the message.',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl w-full max-w-3xl text-left px-6 py-8 flex flex-col gap-y-8 lg:px-10 lg:py-10"
    >
      <div className="">
        <label htmlFor="name" className="block mb-1 font-medium text-lg">
          Name
          <input
            type="text"
            id="name"
            className="w-full rounded-xl border px-4 py-2.5 text-lg"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('name', {
              required: true,
            })}
          />
        </label>
      </div>
      <div className="">
        <label htmlFor="email" className="block mb-1 font-medium text-lg">
          Email
          <input
            type="email"
            id="email"
            className="w-full rounded-xl border px-4 py-2.5 text-lg"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('email', {
              required: true,
            })}
          />
        </label>
      </div>
      <div className="">
        <label htmlFor="message" className="block mb-1 font-medium text-lg">
          Message
          <textarea
            id="message"
            rows={5}
            className="w-full rounded-xl border px-4 py-2.5 text-lg"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('message', {
              required: true,
            })}
          />
        </label>
      </div>
      <Button
        isSubmit
        customClass="self-start mr-8 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 before:bg-gradient-to-r before:from-cyan-600/90 before:to-blue-600/90"
        onClick={() => handleSubmit(onSubmit)}
      >
        Send me a message
        <FaAngleRight size={18} className="button-icon" />
      </Button>
    </form>
  );
}

export default ContactForm;
