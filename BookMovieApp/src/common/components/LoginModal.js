import AppBar from "@material-ui/core/AppBar";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  red: {
    color: "red",
  },
  tabBar: {
    backgroundColor: theme.palette.background.paper,
    color: "black",
    boxShadow: "none",
  },
  form: {
    textAlign: "center",
  },
}));

export default function LoginModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [contact, setContact] = useState("");
  const [reqFirstName, setReqFirstName] = useState("dispNone");
  const [reqLastName, setReqLastName] = useState("dispNone");
  const [reqEmail, setReqEmail] = useState("dispNone");
  const [reqPassword, setReqPassword] = useState("dispNone");
  const [reqContact, setReqContact] = useState("dispNone");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValue(0);
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginClickHandler = (event) => {
    console.log(username + " " + password);
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const regPasswordChangeHandler = (event) => {
    setRegPassword(event.target.value);
  };
  const contactChangeHandler = (event) => {
    setContact(event.target.value);
  };

  const registerClickHandler = () => {
    firstName === ""
      ? setReqFirstName("dispBlock")
      : setReqFirstName("dispNone");
    lastName === "" ? setReqLastName("dispBlock") : setReqLastName("dispNone");
    email === "" ? setReqEmail("dispBlock") : setReqEmail("dispNone");
    regPassword === ""
      ? setReqPassword("dispBlock")
      : setReqPassword("dispNone");
    contact === "" ? setReqContact("dispBlock") : setReqContact("dispNone");
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <AppBar position="static" className={classes.tabBar}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form className={classes.form}>
          <FormControl required>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              value={username}
              onChange={usernameChangeHandler}
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={passwordChangeHandler}
            />
          </FormControl>
          <br />
          <br />
          <Button
            variant="contained"
            type="button"
            color="primary"
            onClick={loginClickHandler}
          >
            Login
          </Button>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form className={classes.form}>
          <FormControl required>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input
              id="firstName"
              value={firstName}
              type="text"
              onChange={firstNameChangeHandler}
            />
            <FormHelperText className={reqFirstName}>
              <span className={classes.red}>Required</span>
            </FormHelperText>
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input
              id="lastName"
              value={lastName}
              type="text"
              onChange={lastNameChangeHandler}
            />
            <FormHelperText className={reqLastName}>
              <span className={classes.red}>Required</span>
            </FormHelperText>
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              value={email}
              type="email"
              onChange={emailChangeHandler}
            />
            <FormHelperText className={reqEmail}>
              <span className={classes.red}>Required</span>
            </FormHelperText>
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="regPassword">Password</InputLabel>
            <Input
              id="regPassword"
              value={regPassword}
              type="password"
              onChange={regPasswordChangeHandler}
            />
            <FormHelperText className={reqPassword}>
              <span className={classes.red}>Required</span>
            </FormHelperText>
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="contact">Contact No</InputLabel>
            <Input
              id="contact"
              value={contact}
              type="contact"
              onChange={contactChangeHandler}
            />
            <FormHelperText className={reqContact}>
              <span className={classes.red}>Required</span>
            </FormHelperText>
          </FormControl>
          <br />
          <br />
          <Button
            variant="contained"
            type="button"
            color="primary"
            onClick={registerClickHandler}
          >
            Register
          </Button>
        </form>
      </TabPanel>
    </div>
  );

  return (
    <div>
      <Button
        className="nav-btn"
        variant="contained"
        color="default"
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="login-register-modal"
        aria-describedby="enter-username-password-to-login"
      >
        {body}
      </Modal>
    </div>
  );
}
