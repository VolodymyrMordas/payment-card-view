import React from 'react';
import {
  useParams
} from "react-router-dom";
import logo from './aval.png';

import {makeStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import {PaymentCardNumber} from './PaymentCardNumber';
import {PaymentCardBank} from "./PaymentCardBank";
import {PaymentCardChip} from "./PaymentCardChip";
import {PaymentCardExpire} from "./PaymentCardExpire";
import {PaymentCardHolder} from "./PaymentCardHolder";

const useStyles = makeStyles(theme => ({
  card: {
    // backgroundImage: `url(${logo})`,
    backgroundColor: 'gold',
    backgroundSize: 600,
    borderRadius: 20,
    fontFamily: 'ZCOOL QingKe HuangYou, cursive',
    color: 'black'
  }
}));

export const PaymentCard = () => {
  const {
    cardNumber = 'xxxx_xxxx_xxxx_xxxx',
    expM = 'xx',
    expY = 'yy',
    cardHolder = 'xxxx_yyyy'
  } = useParams();
  
  const classes = useStyles();
  
  return (
    <Box
      className={classes.card}
      border={1}
    >
      <Box m={4}>
        <PaymentCardBank/>
        <PaymentCardChip/>
        <PaymentCardNumber cardNumber={cardNumber}/>
        <PaymentCardExpire expireData={`${expM} / ${expY}`}/>
        <PaymentCardHolder cardHolder={cardHolder}/>
      </Box>
    </Box>
  )
};
