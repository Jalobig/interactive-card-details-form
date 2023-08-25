# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![Desktop design](desktop-design.jpg)
![Mobile design](mobile-design.jpg)

### Links

- Live Site URL: [Live site here](https://Jalobig.github.io/interactive-card-details-form/)

## My process

### Built with

- Sass custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

It was really fun to use mask for the input. You can use it pretty much the same way you use a regular input. The only differences are the mask and the maskChar attributes. The mask attribute helps you for example with a credit card information. The user won't get lost while writing the information. The maskChar attribute shows a character (default '\_') where the information would go.
Below is an example of a use case in the project

```js
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
```

### Continued development

I need to get better with customs hooks. it will help create clean code and make additions easier to implement.

### Useful resources

- [Building a custom React media query hook for more responsive apps](https://www.netlify.com/blog/2020/12/05/building-a-custom-react-media-query-hook-for-more-responsive-apps/) - This article is helpful to create a custom hook for the media query.
- [React Input Mask Package](https://www.npmjs.com/package/react-input-mask) - This is an amazing package if you want an easy way to implement a mask on your input. And it is very easy to use.

## Author

- Frontend Mentor - [@Jalobig](https://www.frontendmentor.io/profile/Jalobig)
- Github - [@Jalobig](https://www.github.com/Jalobig)

## Acknowledgments

I wanted to give a shout out to a project that gave me inspiration. below is the project in codepen. Very amazing!

- The project that inspired me - [Credit Card Payment Form](https://codepen.io/quinlo/pen/YONMEa)
