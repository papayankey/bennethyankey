// components
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { FormData } from './Form';

const randomNumber = Math.random() * 100000 || 0;

// emailjs service
async function emailService(
  { name, email, subject, message }: FormData,
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  reset: any
) {
  const templateParams = {
    subject,
    message,
    form_number: randomNumber,
    from_name: name,
    from_email: email,
  };

  let toastId;
  let response;
  try {
    toastId = toast.loading('sending mail...', {
      style: {
        minWidth: '15ch',
      },
    });
    setIsSubmitting(true);

    response = await emailjs.send(
      `${process.env.REACT_APP_SERVICE_ID}`,
      `${process.env.REACT_APP_TEMPLATE_ID}`,
      templateParams,
      `${process.env.REACT_APP_USER_ID}`
    );

    // service simulation
    // response = await new Promise<{ status: number; text: string }>(
    //   (resolve, reject) => {
    //     setTimeout(function () {
    //       resolve({ status: 200, text: 'OK' });
    //       // reject({ status: 400, text: 'Bad Request' });
    //     }, 5000);
    //   }
    // );

    if (response.status === 200) {
      toast.success('mail is sent!', {
        id: toastId,
      });
      setIsSubmitting(false);
      reset();
    }
  } catch (error: any) {
    toast.error('mail not sent!', {
      id: toastId,
    });
    setIsSubmitting(false);
  }
}

export { emailService };
