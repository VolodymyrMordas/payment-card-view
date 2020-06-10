import React from "react";
import {Box} from "@material-ui/core";
import MasterCardLogo from "./mastercard.png";

export const PaymentCardHolder = ({ cardHolder }) => {
  const [ first, last ] = cardHolder.toUpperCase().split('_');
  return (
    <Box style={{ width: '100%' }}>
      <Box display="flex">
        <Box display="flex" flexGrow={1} ml={3} fontSize={28} justifyContent="flex-start">
          {`${first} ${last}`}
        </Box>
        <Box>
          <img src={MasterCardLogo} alt="mastercard-logo" width={60} />
        </Box>
      </Box>
    </Box>
  )
};
