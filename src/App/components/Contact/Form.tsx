// material components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// material utils
import { makeStyles, createStyles, Theme } from '@material-ui/core';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      textAlign: 'left',
    },
    button: {
      marginTop: theme.spacing(4),
    },
  })
);

function Form() {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <TextField type="text" name="name" label="Your Name" />
      <TextField type="email" name="email" label="Email Address" />
      <TextField type="text" name="subject" label="Subject" />
      <TextField
        type="text"
        name="message"
        label="Message"
        multiline={true}
        rows={3}
      />
      <Button variant="outlined" size="large" className={classes.button}>
        Send Message
      </Button>
    </form>
  );
}

export { Form };
