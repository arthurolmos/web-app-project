import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CreateIcon from "@material-ui/icons/Create";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormularioCadastro({ error, onSubmit, noError }) {
  const classes = useStyles();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit({ login, password });
          }}
        >
          <TextField
            value={login}
            onChange={(event) => {
              setLogin(event.target.value);
            }}
            id="login"
            label="Login"
            variant="outlined"
            fullWidth
            margin="normal"
            error={error.validation}
            onBlur={noError}
            required
          />
          <TextField
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            error={error.validation}
            onBlur={noError}
            helperText={error.message}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link href="/" variant="body2">
                {"Do you already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}