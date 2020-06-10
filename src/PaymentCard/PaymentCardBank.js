import React from 'react';
import AvalLogo from './aval-logo.png';
import {Box} from '@material-ui/core';

export const PaymentCardBank = () => {
  return (
    <Box style={{ width: '100%' }}>
      <Box display="flex" alignItems="center">
        <Box>
          <img src={AvalLogo} width={48} alt={'bank logo'} border={2} />
        </Box>
        <Box ml={1}>
          Raiffeisen BANK AVAL
        </Box>
      </Box>
    </Box>
  )
}
