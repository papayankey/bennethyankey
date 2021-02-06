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
    textField: {
      '& .MuiFilledInput-root:hover, & .MuiFilledInput-root.Mui-focused': {
        backgroundColor: '#e4f9ee',
      },
      '& .MuiFilledInput-underline::before': {
        borderBottom: `1px solid rgba(0,0,0,0.12)`,
      },
    },
  })
);

function Form() {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <TextField
        className={classes.textField}
        variant="filled"
        hiddenLabel
        type="text"
        name="name"
        placeholder="Your Name"
        inputProps={{ 'aria-placeholder': 'Your Name', 'aria-label': 'name' }}
      />
      <TextField
        className={classes.textField}
        variant="filled"
        hiddenLabel
        type="email"
        name="email"
        placeholder="Email Address"
        inputProps={{
          'aria-placeholder': 'Email Address',
          'aria-label': 'email',
        }}
      />
      <TextField
        className={classes.textField}
        variant="filled"
        hiddenLabel
        type="text"
        name="subject"
        placeholder="Subject"
        inputProps={{ 'aria-placeholder': 'Subject', 'aria-label': 'subject' }}
      />
      <TextField
        className={classes.textField}
        variant="filled"
        hiddenLabel
        type="text"
        name="message"
        placeholder="Message"
        multiline={true}
        rows={3}
        inputProps={{ 'aria-placeholder': 'Message', 'aria-label': 'message' }}
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
