import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommonButton from "../../components/CommonButton";
import InputField from "../../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { auth, login } from "../../action/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core";
//for translation
import { useTranslation } from "react-i18next";
import { handleChangeLanguage } from "../../action/movie";

const useStyles = makeStyles((theme) => ({
  inputFieldErr: {
    color: "red",
    marginTop: "-8px",
    marginLeft: "10px",
  },
  login__button: {
    textAlign: "center",
    marginLeft: "15px",
  },
  login__main: {
    width: "380px",
    margin: "auto",
    marginTop: "40px",
    boxSizing: "border-box",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    height: "320px",
    backgroundColor: "#F0FFFF",
    [theme.breakpoints.down("xs")]: {
      width: "320px",
    },
  },
  validation__text: {
    color: "red",
    textAlign: "center",
  },
  login__box: {
    padding: "10px",
  },
  login__header: {
    textAlign: "center",
    marginTop: "12px",
  },
  login__label: {
    marginRight: "20px",
  },
  btnColorStyle: {
    backgroundColor: "red",
  },
}));

function Login() {
  const classes = useStyles();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loginDetail = useSelector((state)=> state.Auth.loginDetail)
  const token = useSelector((state)=> state.Auth.token)
  console.log("isAuthenticated login => ", token)
  const dispatch = useDispatch();
  const [err, setErr] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      if (
        values.email !== "" &&
        values.password !== ""
      ) {
        const loginDetails = {
          email:values.email,
          password:values.password
        }
        // dispatch(auth(loginDetails));
        dispatch(login(loginDetails));
      } else {
        setErr(true);
      }
    },
  });

  // const tokenValue = process.env.REACT_APP_TOKEN
  // console.log("the token => ", tokenValue )

  //for translation
  const { t, i18n } = useTranslation();

  if (token) return <Navigate to="/movieList" />;
  return (
    <div data-test="loginContainer">
      <div className={classes.login__main}>
        <div className={classes.login__box}>
          <div className={classes.login__header}>
            <Typography variant="h5">{t("login")}</Typography>
          </div>
          <div className={classes.login__label}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <InputField
                label={t("email")}
                type="text"
                error={
                  formik.touched.email && formik.errors.email ? true : null
                }
                id="email"
                name="email"
                value={formik.values.email}
                onChange={(e) => {
                  setErr(false);
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                helperText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null
                }
              />
              <InputField
                label={t("password")}
                type="password"
                error={
                  formik.touched.password && formik.errors.password
                    ? true
                    : null
                }
                id="password"
                name="password"
                value={formik.values.password}
                onChange={(e) => {
                  setErr(false);
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                helperText={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : null
                }
              />
              <div className={classes.login__button}>
                <span className={classes.btnColorStyle}>
                  <CommonButton
                    type="submit"
                    buttonName={t("login")}
                    // fullWidth
                    color="success"
                  />
                </span>
                <hr />
                <CommonButton
                  buttonName={t("newAccount")}
                  color="primary"
                  // variant="error"
                />
              </div>
              <div className={classes.validation__text}>
                {err ? <p>Invalid Email or Password</p> : null}
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
