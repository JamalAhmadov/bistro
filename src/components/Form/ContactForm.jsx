import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import style from "./contactForm.module.css";
import Button from "../Button/Button";
import { sendFormData, resetFormState } from "../../Redux/formSlice";
import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z\s]*$/, "Please enter letters only")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { loading, error, success } = useSelector((state) => state.form);

  const onSubmit = (data) => {
    dispatch(sendFormData(data));
  };

  useEffect(() => {
    if (success) {
      toast.success("Form submitted successfully!");
      reset();
      dispatch(resetFormState());
    }
    if (error) {
      toast.error(`Form submission failed: ${error}`);
    }
  }, [success, error, dispatch, reset]);

  return (
    <>
      <form className={style.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.nameEmail}>
          <div className={style.lableInp}>
            <label htmlFor="name" className={style.inpLable}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className={style.nameInp}
              {...register("name")}
            />
            {errors.name && (
              <p className={style.error}>{errors.name.message}</p>
            )}
          </div>
          <div className={style.lableInp}>
            <label htmlFor="email" className={style.inpLable}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={style.emailInp}
              {...register("email")}
            />
            {errors.email && (
              <p className={style.error}>{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className={style.subject}>
          <label htmlFor="subject" className={style.inpLable}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject"
            className={style.subjectInp}
            {...register("subject")}
          />
          {errors.subject && (
            <p className={style.error}>{errors.subject.message}</p>
          )}
        </div>
        <div className={style.message}>
          <label htmlFor="message" className={style.inpLable}>
            Message
          </label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Write your message"
            className={style.messageInp}
            {...register("message")}
          />
          {errors.message && (
            <p className={style.error}>{errors.message.message}</p>
          )}
        </div>
        <Button
          text="Send"
          width="90%"
          height="48px"
          bgcolor="#AD343E"
          color="#fff"
          border="none"
        />
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
