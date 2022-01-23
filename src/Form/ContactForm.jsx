import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { deleteAllFlowers } from "../redux/shoppingCart";
import "../styles/main.scss";
import MyInput from "./MyInput";

function ContactForm() {
  const order = useSelector(({shoppingCart}) => shoppingCart.cart);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="contactForm">
      <div className="blackLine"></div>
      <div className="contactForm__container _container">
        <div className="contactForm__form">
          <div className="contactForm__title">
            Оставьте ваши контактные данные
          </div>
          <Formik
            initialValues={{ firstName: "", phone: "", email: "" }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(30, "Должно быть меньше 30 символов")
                .required("Заполните это поле"),
              phone: Yup.number()
                .typeError("Должны быть только цифры")
                .required("Заполните это поле"),
              email: Yup.string()
                .email("Неправильный email")
                .required("Заполните это поле"),
            })}
            onSubmit={(values) => {
              console.log({...values, ...order})
              alert("Ваш заказ оформлен!");
              dispatch(deleteAllFlowers());
              navigate('/')
            }}
          >
            <Form>
              <MyInput name="firstName" type="text" placeholder="Ваше имя" />
              <MyInput name="phone" type="tel" placeholder="Телефон" />
              <MyInput name="email" type="email" placeholder="E-mail" />
              <div className="contactForm__text">
                По указанному номеру позвонит менеджер магазина, чтобы
                подтвердить заказ. Статус и подтверждение заказа будут
                отправлены по почте и смс.
              </div>
              <button
                type="submit"
                className="contactForm__button button buttons--black"
              >
                Отправить
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
