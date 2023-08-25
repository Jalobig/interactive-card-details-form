import React, { useState } from "react";
import classes from "./Main.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
import BGMainDesktop from "../../images/bg-main-desktop.png";
import BGMainMobile from "../../images/bg-main-mobile.png";
import BGCardFront from "../../images/bg-card-front.png";
import BGCardBack from "../../images/bg-card-back.png";
import CardLogo from "../../images//card-logo.svg";
import Button from "../../components/Button/Button";
import Submitted from "../../components/Submitted/Submitted";
import InputMask from "react-input-mask";

const Main = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCVC] = useState("");
  const [nameHasError, setNameHasError] = useState(false);
  const [numberHasError, setNumberHasError] = useState(false);
  const [monthHasError, setMonthHasError] = useState(false);
  const [yearHasError, setYearHasError] = useState(false);
  const [cvcHasError, setCVCHasError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const yearNow = new Date();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name.length < 3 ||
      number.length !== 19 ||
      +month <= 0 ||
      +month >= 12 ||
      +("20" + year) < yearNow.getFullYear() ||
      cvc.length !== 3
    ) {
      if (name.length < 3) {
        setNameHasError(true);
      }
      if (number.length !== 19) {
        setNumberHasError(true);
      }
      if (+month < 1 || +month > 12) {
        setMonthHasError(true);
      }
      if (+("20" + year) < yearNow.getFullYear()) {
        setYearHasError(true);
      }
      if (cvc.length !== 3) {
        setCVCHasError(true);
      }
    } else if (
      !nameHasError &&
      !numberHasError &&
      !monthHasError &&
      !yearHasError &&
      !cvcHasError
    ) {
      setIsSubmitted((prevState) => !prevState);
    }
  };
  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
    if (e.target.value === "") {
      setNameHasError(true);
      return;
    }
    setNameHasError(false);
  };
  const numberOnChangeHandler = (e) => {
    setNumber(e.target.value);
    if (e.target.value === "") {
      setNumberHasError(true);
      return;
    }
    setNumberHasError(false);
  };
  const monthOnChangeHandler = (e) => {
    setMonth(e.target.value);
    if (e.target.value === "") {
      setMonthHasError(true);
      return;
    }
    setMonthHasError(false);
  };
  const yearOnChangeHandler = (e) => {
    setYear(e.target.value);
    if (e.target.value === "") {
      setYearHasError(true);
      return;
    }
    setYearHasError(false);
  };
  const cvcOnChangeHandler = (e) => {
    setCVC(e.target.value);
    if (e.target.value === "") {
      setCVCHasError(true);
      return;
    }
    setCVCHasError(false);
  };
  const media = useMediaQuery("only screen and (max-width:1300px)");
  return (
    <main className={classes.main}>
      {media ? (
        <img
          className={classes.bg__display}
          src={BGMainMobile}
          alt="background design"
        />
      ) : (
        <img
          className={classes.bg__display}
          src={BGMainDesktop}
          alt="background design"
        />
      )}
      <div className={classes["credit-card"]}>
        <div className={classes["credit-card__front"]}>
          <img
            src={BGCardFront}
            alt="Front of the Credit Card"
            className={classes["credit-card__front--img"]}
          />
          <img
            src={CardLogo}
            alt="Logo of the Credit Card"
            className={classes["credit-card__front--logo"]}
          />
          <h1 className={classes["credit-card__front--number"]}>
            {number === "" ? "0000 0000 0000 0000" : number}
          </h1>
          <div className={classes["credit-card__front--row"]}>
            <p className={classes["credit-card__front--info"]}>
              {name === "" ? "Jane Appleseed" : name}
            </p>
            <p className={classes["credit-card__front--info"]}>
              {month === "" ? "00" : month}/{year === "" ? "00" : year}
            </p>
          </div>
        </div>
        <div className={classes["credit-card__back"]}>
          <img
            src={BGCardBack}
            alt="Back of the Credit Card"
            className={classes["credit-card__back--img"]}
          />
          <p className={classes["credit-card__back--cvc"]}>
            {cvc === "" ? "000" : cvc}
          </p>
        </div>
      </div>
      {isSubmitted ? (
        <Submitted
          onClick={() => {
            setIsSubmitted((prevState) => !prevState);
          }}
        />
      ) : (
        <form className={classes.form} onSubmit={submitHandler}>
          <label className={classes.form__label}>Cardholder Name</label>
          <input
            className={`${classes["form__input--full"]} ${
              nameHasError ? classes.form__input__invalid : ""
            }`}
            placeholder="e.g. Jane Appleseed"
            onChange={nameOnChangeHandler}
            onBlur={nameOnChangeHandler}
          />
          {nameHasError && (
            <p className={classes["form__text-error"]}>
              Must have at least 3 characters
            </p>
          )}
          <label className={classes.form__label}>Card Number</label>
          <InputMask
            className={`${classes["form__input--full"]} ${
              numberHasError ? classes.form__input__invalid : ""
            }`}
            placeholder="e.g. 1234 5678 9123 0000"
            mask="9999 9999 9999 9999"
            maskChar={null}
            type="text"
            onChange={numberOnChangeHandler}
            onBlur={numberOnChangeHandler}
          />
          {numberHasError && (
            <p className={classes["form__text-error"]}>Must have 16 digits</p>
          )}
          <div className={classes.form__group}>
            <div>
              <label className={classes.form__label}>Exp. Date (MM/YY)</label>
              <InputMask
                mask="99"
                maskChar={null}
                type="text"
                onChange={monthOnChangeHandler}
                onBlur={monthOnChangeHandler}
                className={`${classes["form__input"]} ${
                  monthHasError ? classes.form__input__invalid : ""
                }`}
                placeholder="MM"
              />
              <InputMask
                mask="99"
                maskChar={null}
                type="text"
                onChange={yearOnChangeHandler}
                onBlur={yearOnChangeHandler}
                className={`${classes["form__input"]} ${
                  yearHasError ? classes.form__input__invalid : ""
                }`}
                placeholder="YY"
              />
              {monthHasError && (
                <p
                  className={`${classes["form__text-error"]} ${classes["form__text-error--min"]}`}
                >
                  Month must be between 1 and 12
                </p>
              )}
              {yearHasError && (
                <p className={classes["form__text-error"]}>
                  {year === "" ? "Can't be blank" : "Must be in the future"}
                </p>
              )}
            </div>
            <div>
              <label className={classes.form__label}>CVC</label>
              <InputMask
                mask="999"
                maskChar={null}
                className={`${classes["form__input--half"]} ${
                  cvcHasError ? classes.form__input__invalid : ""
                }`}
                placeholder="e.g. 123"
                onChange={cvcOnChangeHandler}
                onBlur={cvcOnChangeHandler}
              />
              {cvcHasError && (
                <p className={classes["form__text-error"]}>
                  {cvc === "" ? "Can't be blank" : "Must have 3 characters"}
                </p>
              )}
            </div>
          </div>
          <Button onClick={submitHandler}>Confirm</Button>
        </form>
      )}
    </main>
  );
};

export default Main;
