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


const Main = () => {
    //Mask the Credit Card Number Input
    const [name, setName]= useState('')
    const [number, setNumber]= useState('')
    const [month, setMonth]= useState('')
    const [year, setYear]= useState('')
    const [cvc, setCVC]= useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const cardnumber_mask = new IMask(number, {
    //     mask: [
    //         {
    //             mask: '0000 000000 00000',
    //             regex: '^3[47]\\d{0,13}',
    //             cardtype: 'american express'
    //         },
    //         {
    //             mask: '0000 000000 0000',
    //             regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
    //             cardtype: 'diners'
    //         },
    //         {
    //             mask: '0000 0000 0000 0000',
    //             regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
    //             cardtype: 'mastercard'
    //         },
    //         {
    //             mask: '0000 000000 00000',
    //             regex: '^(?:2131|1800)\\d{0,11}',
    //             cardtype: 'jcb15'
    //         },
    //         {
    //             mask: '0000 0000 0000 0000',
    //             cardtype: 'Unknown'
    //         }
    //     ],
    //     dispatch: function (appended, dynamicMasked) {
    //         var number = (dynamicMasked.value + appended).replace(/\D/g, '');
    
    //         for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
    //             let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
    //             if (number.match(re) != null) {
    //                 return dynamicMasked.compiledMasks[i];
    //             }
    //         }
    //     }
    // });
    const submitHandler = () => {
    setIsSubmitted((prevState) => !prevState);
  };
  const nameOnChangeHandler = (e) => {
    setName(e.target.value)
  }
  const numberOnChangeHandler = (e) => {
    setNumber(e.target.value)
  }
  const monthOnChangeHandler = (e) => {
    setMonth(e.target.value)
  }
  const yearOnChangeHandler = (e) => {
    setYear(e.target.value)
  }
  const cvcOnChangeHandler = (e) => {
    setCVC(e.target.value)
  }
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
            {number === ""? '0000 0000 0000 0000': number}
          </h1>
          <div className={classes["credit-card__front--row"]}>
            <p className={classes["credit-card__front--info"]}>
              {name === ''?'Jane Appleseed': name}
            </p>
            <p className={classes["credit-card__front--info"]}>00/00</p>
          </div>
        </div>
        <div className={classes["credit-card__back"]}>
          <img
            src={BGCardBack}
            alt="Back of the Credit Card"
            className={classes["credit-card__back--img"]}
          />
          <p className={classes["credit-card__back--cvc"]}>000</p>
        </div>
      </div>
      {isSubmitted? <Submitted onClick={submitHandler}/> :<form className={classes.form}>
        <label className={classes.form__label}>Cardholder Name</label>
        <input
          className={classes["form__input--full"]}
          placeholder="e.g. Jane Appleseed"
          onChange={nameOnChangeHandler}
        />
        <label className={classes.form__label}>Card Number</label>
        <input
          className={`${classes["form__input--full"]} ${classes.form__mask}`}
          placeholder="e.g. 1234 5678 9123 0000"
          type="text"
          maxLength={16}
          onChange={numberOnChangeHandler}
        />
        <div className={classes.form__group}>
          <div>
            <label className={classes.form__label}>Exp. Date (MM/YY)</label>
            <input className={classes["form__input"]} placeholder="MM" />
            <input className={classes["form__input"]} placeholder="YY" />
          </div>
          <div>
            <label className={classes.form__label}>CVC</label>
            <input
              className={classes["form__input--half"]}
              placeholder="e.g. 123"
            />
          </div>
        </div>
        <Button onClick={submitHandler}>Confirm</Button>
      </form>}
    </main>
  );
};

export default Main;
