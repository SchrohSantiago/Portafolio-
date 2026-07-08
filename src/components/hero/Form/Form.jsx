import React, { useState } from "react";
import styled from "styled-components";
import { useInput } from "../../../hooks/useInput";
import swal from "sweetalert";

export const Form = () => {
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_KEY,
          name: enteredName,
          email: enteredEmail,
          message: enteredTextArea,
          subject: `Portfolio — Mensaje de ${enteredName}`,
        }),
      });
      const data = await res.json();

      if (data.success) {
        swal({
          title: "¡Mensaje enviado!",
          text: "En breve estaremos en contacto. ¡Gracias y que tengas un lindo día!",
          icon: "success",
          timer: "3000",
          buttons: ["Aceptar"],
        });
        resetNameInput();
        resetEmailInput();
        resetTextArea();
      } else {
        throw new Error(data.message);
      }
    } catch {
      swal({
        title: "Error al enviar",
        text: "Hubo un problema. Escribime directo a schrohsanti@gmail.com",
        icon: "error",
        buttons: ["Cerrar"],
      });
    } finally {
      setSending(false);
    }
  };

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;

  const regexName =
    /^(([A-Za-z]+[-']?)*([A-Za-z]+)?\s)+([A-Za-z]+[-']?)*([A-Za-z]+)?$/;

  const regexTextArea = /[A-Za-z0-9\s@.+-]/;

  const {
    value: enteredName,
    valueIsValid: nameValueIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => regexName.test(value.trim()));

  const {
    value: enteredEmail,
    valueIsValid: emailValueIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => regexEmail.test(value.trim()));

  const {
    value: enteredTextArea,
    valueIsValid: textAreaValueIsValid,
    hasError: textAreaInputHasError,
    valueChangeHandler: textAreaChangedHandler,
    inputBlurHandler: textAreaBlurHandler,
    reset: resetTextArea,
  } = useInput((value) => regexTextArea.test(value.trim()));

  const formIsValid = nameValueIsValid && emailValueIsValid && textAreaValueIsValid;

  return (
    <Wrapper>
      <div className="title">
        <h1 id="contactme">¡Hablemos!</h1>
        <h4>
          ¿Tenés un proyecto, una propuesta o simplemente querés charlar?
          Escribime y te respondo a la brevedad.
        </h4>
        <div className="formBiggestContainer">
          <form className="formContainer" onSubmit={sendEmail}>
            <div className="positionContainer">
              <div className={nameInputHasError ? "inputCont invalid" : "inputCont"}>
                <label>
                  Tu nombre
                  <input
                    placeholder="Nombre completo"
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                  />
                  {nameInputHasError && (
                    <div className="error-text">Ingresá tu nombre completo</div>
                  )}
                </label>
              </div>

              <div className={emailInputHasError ? "inputCont invalid" : "inputCont"}>
                <label>
                  Tu e-mail
                  <input
                    placeholder="ejemplo@mail.com"
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                  />
                  {emailInputHasError && (
                    <div className="error-text">Ingresá un e-mail válido</div>
                  )}
                </label>
              </div>

              <div className={textAreaInputHasError ? "inputCont invalid" : "inputCont"}>
                <label>
                  Tu mensaje
                  <textarea
                    placeholder="Hola Santiago!..."
                    className="yourMensajeInput"
                    id="message"
                    name="message"
                    onChange={textAreaChangedHandler}
                    onBlur={textAreaBlurHandler}
                    value={enteredTextArea}
                  />
                  {textAreaInputHasError && (
                    <div className="error-text">Escribí tu mensaje</div>
                  )}
                </label>
              </div>

              <div className="buttonContainer">
                <button disabled={!formIsValid || sending} className="formButton">
                  <h3>{sending ? "Enviando..." : "Enviar mensaje"}</h3>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 100px;

  h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 35px;
    letter-spacing: 0.25px;
  }
  h3 {
    font-size: 16px;
    text-align: center;
    margin: 0;
  }
  h4 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1px;
    color: rgba(255, 255, 255, 0.65);
  }
  label {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 85%;
    margin-top: 16px;
    margin-bottom: 4px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.65);
  }
  input {
    padding: 13px 16px;
    color: white;
    width: 82%;
    height: 25px;
    background-color: #1c1e22;
    border: 1px solid rgba(160, 160, 161, 0.4);
    border-radius: 8px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.3px;
    margin-top: 8px;
    transition: border-color 200ms ease;
  }
  input:focus {
    outline: none;
    border-color: rgba(var(--accent-rgb), 0.5);
  }
  textarea {
    padding: 13px 16px;
    color: white;
    width: 82%;
    height: 110px;
    background-color: #1c1e22;
    border: 1px solid rgba(160, 160, 161, 0.4);
    border-radius: 8px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.3px;
    margin-top: 8px;
    resize: vertical;
    transition: border-color 200ms ease;
  }
  textarea:focus {
    outline: none;
    border-color: rgba(var(--accent-rgb), 0.5);
  }
  input::placeholder,
  textarea::placeholder {
    color: rgba(191, 191, 192, 0.5);
    font-family: "DM Sans";
    font-size: 14px;
  }

  .title {
    width: 90%;
  }
  .formContainer {
    background: #26292d;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  .inputCont {
    display: flex;
    justify-content: center;
  }
  .formButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 46px;
    background: var(--accent);
    border-radius: 8px;
    border-color: transparent;
    margin-top: 12px;
    margin-bottom: 12px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    color: #0c0c0c;
    transition: background 200ms ease, transform 150ms ease;
  }
  .formButton:hover:not(:disabled) {
    background: #00d4c8;
    transform: translateY(-1px);
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
  .yourMensajeInput {
    display: flex;
    align-items: flex-start;
  }
  .error-text {
    color: #e05050;
    font-size: 12px;
    margin-top: 4px;
  }
  .invalid input,
  .invalid textarea {
    border: 1px solid rgba(180, 14, 14, 0.6);
    background-color: rgba(180, 14, 14, 0.06);
  }
  .invalid input:focus,
  .invalid textarea:focus {
    border-color: rgba(255, 136, 0, 0.6);
  }

  button:disabled {
    background-color: rgba(204, 204, 204, 0.3);
    color: rgba(117, 115, 115, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 150px;

    input {
      width: 92%;
    }
    label {
      width: 100%;
      font-size: 14px;
    }
    textarea {
      width: 92%;
    }
    h1 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 71px;
    }
    h4 {
      font-size: 17px;
      line-height: 26px;
    }
    .formBiggestContainer {
      display: flex;
      justify-content: center;
      margin-bottom: 170px;
      margin-top: 50px;
    }
    .formContainer {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 620px;
    }
    .formButton {
      width: 100%;
      height: 50px;
    }
    .positionContainer {
      display: flex;
      flex-direction: column;
      width: 90%;
    }
    .buttonContainer {
      margin-top: 8px;
      margin-bottom: 16px;
    }
  }
`;
