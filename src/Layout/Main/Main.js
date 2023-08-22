import React from "react";
import classes from "./Main.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
import BGMainDesktop from "../../images/bg-main-desktop.png";
import BGMainMobile from "../../images/bg-main-mobile.png";
import BGCardFront from "../../images/bg-card-front.png";
import BGCardBack from "../../images/bg-card-back.png";
import CardLogo from "../../images//card-logo.svg";
import Button from "../../components/Button/Button";

const Main = () => {
  const media = useMediaQuery("only screen and (max-width:500px)");
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
            0000 0000 0000 0000
          </h1>
          <div className={classes["credit-card__front--row"]}>
            <p className={classes["credit-card__front--info"]}>
              Jane Appleseed
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
      <form className={classes.form}>
        <label className={classes.form__label}>Cardholder Name</label>
        <input
          className={classes["form__input--full"]}
          placeholder="e.g. Jane Appleseed"
        />
        <label className={classes.form__label}>Card Number</label>
        <input
          className={classes["form__input--full"]}
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div className={classes.form__group}>
          <div>
            <label className={classes.form__label}>Exp. Date (MM/YY)</label>
            <input className={classes["form__input"]} placeholder="MM"/>
            <input className={classes["form__input"]} placeholder="YY"/>
          </div>
          <div>
            <label className={classes.form__label}>CVC</label>
            <input className={classes["form__input--half"]} placeholder="e.g. 123" />
          </div>
        </div>
        <Button>Confirm</Button>
      </form>
    </main>
  );
};

export default Main;
