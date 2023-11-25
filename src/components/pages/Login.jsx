import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { ParagraphText, SubtitleText } from "../UI/Typography";
import { BsChevronCompactDown } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import { Formik, Field, ErrorMessage, Form } from "formik"; 
import * as Yup from "yup";
import { SecondaryButton } from "../../components/UI/Button";
import rifik from "../../assets/rafiki.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const toat = () => toast("Successfuly login!");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = (values) => {
    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex w-[90%] h-screen items-center py-32 justify-center mx-auto">
      <div className="flex w-[40%] flex-col">
        <img src={Logo} alt="" width={60} />
        <p className="text-[#22A2FF] py-4 font-bold"> Servike </p>
        <ParagraphText> Welcome Back!</ParagraphText>
        <SubtitleText>Please Login to your Account.</SubtitleText>
        <SubtitleText className={"mt-4 text-black"}>
          E-Mail Address
        </SubtitleText>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Email must be a valid email")
              .required("Email is required"),
            password: Yup.string()
              .required("This field is required")
              .min(8, "Password must be 8 or more characters")
              .matches(
                /(?=.*[a-z])(?=.*[A-Z])\w+/,
                "Password should contain at least one uppercase and lowercase character"
              )
              .matches(/\d/, "Password should contain at least one number")
              .matches(
                /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
                "Password should contain at least one special character"
              ),
          })}
          onSubmit={handleSignIn}
        >
          {() => (
            <Form>
              <div className="flex items-center">
                <Field
                  type="email"
                  name="email"
                  className="p-4 text-[13px] w-[80%] border rounded-lg border-blue-500"
                  placeholder="Email Address"
                />
                <BsChevronCompactDown className="bg-blue-500 rounded-md text-white ml-[-20px]" />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-[13px]"
              />
              <SubtitleText className={"text-black"}>Password</SubtitleText>
              <div className="flex items-center">
                <Field
                  type="password"
                  name="password"
                  className="p-4 w-[80%] text-[13px] border rounded-lg hover-border-blue-500"
                  placeholder="Password"
                />
                <HiOutlineEye className="rounded-md text-[#8B8B8B] ml-[-20px]" />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-[13px]"
              />

              <SecondaryButton
                type="submit"
                onClick={toat}
                className="text-white w-[80%] cursor-pointer py-3 mt-8"
                isActive={true}
              >
                <Link to='/'>Log in</Link>
              </SecondaryButton>
              <ToastContainer />
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-[45%] bg-white h-screen py-32">
        <img src={rifik} alt="" />
      </div>
    </div>
  );
}
