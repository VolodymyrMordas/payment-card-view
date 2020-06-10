import React from "react";
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => (
  {
    cardNumber: {
      fontFamily: 'ZCOOL QingKe HuangYou, cursive',
      fontSize: 40
    }
  }
));

export const PaymentCardNumber = ({cardNumber}) => {
  const classes = useStyles();
  
  return (
    <Box display="flex" flexDirection="row" mt={1}>
      {cardNumber.split('_').map( v => (
        <Box ml={3} letterSpacing={8} className={classes.cardNumber}>
          {v}
        </Box>
      ))}
    </Box>
  )
};
