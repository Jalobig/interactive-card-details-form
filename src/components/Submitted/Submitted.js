import React from 'react'
import classes from './Submitted.module.scss'
import IconComplete from '../../images/icon-complete.svg'
import Button from '../Button/Button';
const Submitted = (props) => {
  return (
    <div className={classes.submit}>
        <img src={IconComplete} alt='Icon for completion'  className={classes.submit__icon} />
        <h1 className={classes.submit__heading}>Thank you!</h1>
        <p className={classes.submit__text}>We've added your card details</p>
        <Button onClick={props.onClick}>Continue</Button>
    </div>
  )
}

export default Submitted