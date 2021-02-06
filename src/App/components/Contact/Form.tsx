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
      <TextField
        hiddenLabel
        type="text"
        name="name"
        label="Your Name"
        inputProps={{ 'aria-label': 'name' }}
      />
      <TextField
        hiddenLabel
        type="email"
        name="email"
        label="Email Address"
        inputProps={{ 'aria-label': 'email' }}
      />
      <TextField
        hiddenLabel
        type="text"
        name="subject"
        label="Subject"
        inputProps={{ 'aria-label': 'subject' }}
      />
      <TextField
        hiddenLabel
        type="text"
        name="message"
        label="Message"
        multiline={true}
        rows={3}
        inputProps={{ 'aria-label': 'message' }}
      />
      <Button
        variant="contained"
        size="large"
        color="secondary"
        className={classes.button}
      >
        Send Message
      </Button>
    </form>
  );
}

export { Form };
