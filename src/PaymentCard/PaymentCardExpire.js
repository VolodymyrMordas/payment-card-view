import React from "react";
import {Box} from "@material-ui/core";

export const PaymentCardExpire = ({ expireData }) => (
  <Box style={{ width: '100%' }}>
    <Box display="flex" justifyContent="center" mt={4}>
      <Box fontSize={28}>{expireData}</Box>
    </Box>
  </Box>
);
