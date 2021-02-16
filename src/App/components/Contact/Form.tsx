// react
import { useState } from 'react';

// material components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// components
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailService } from './emailService';

// styles
import { useStyles } from './styles';

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// validation schema
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

function Form() {
  const { handleSubmit, register, errors, reset } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const classes = useStyles();

  const onSubmit = handleSubmit(data => {
    emailService(data, setIsSubmitting, reset);
  });

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <TextField
        inputRef={register}
        className={classes.textField}
        variant="filled"
        label="Name"
        name="name"
        placeholder="Enter your name"
        error={errors.name && true}
        inputProps={{
          'aria-placeholder': 'enter your name',
          'aria-label': 'name',
        }}
      />
      <Typography variant="body2" className={classes.helperText}>
        {errors.name?.message ?? ''}
      </Typography>
      <TextField
        inputRef={register}
        className={classes.textField}
        variant="filled"
        label="Email"
        name="email"
        placeholder="Enter your email"
        error={errors.email && true}
        inputProps={{
          'aria-placeholder': 'example@gmail.com',
          'aria-label': 'email',
        }}
      />
      <Typography variant="body2" className={classes.helperText}>
        {errors.email?.message ?? ''}
      </Typography>
      <TextField
        inputRef={register}
        className={classes.textField}
        variant="filled"
        label="Subject"
        name="subject"
        placeholder="What does this project involve?"
        error={errors.subject && true}
        inputProps={{
          'aria-placeholder': 'What does this project involve?',
          'aria-label': 'subject',
        }}
      />
      <Typography variant="body2" className={classes.helperText}>
        {errors.subject?.message ?? ''}
      </Typography>
      <TextField
        inputRef={register}
        className={classes.textField}
        variant="filled"
        label="Message"
        name="message"
        placeholder="Please give detailed description of the project"
        error={errors.message && true}
        multiline={true}
        rows={5}
        inputProps={{
          'aria-placeholder': 'Please give detailed description of the project',
          'aria-label': 'message',
        }}
      />
      <Typography variant="body2" className={classes.helperText}>
        {errors.message?.message ?? ''}
      </Typography>
      <Button
        type="submit"
        variant="contained"
        size="large"
        color="secondary"
        className={classes.button}
        disabled={isSubmitting}
      >
        Send Message
      </Button>
    </form>
  );
}

export { Form };
