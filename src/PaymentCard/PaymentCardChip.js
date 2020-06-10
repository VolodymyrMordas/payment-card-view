import React from 'react';
import {Box} from '@material-ui/core';
import Chip from './chip.png'

export const PaymentCardChip = () => {
  return (
    <Box display="flex" flexDirection="row" mt={5}>
      <Box style={{width: '100%'}}>
        <Box display="flex" alignItems="center">
          <Box ml={5} flexGrow={1} display="flex" justifyContent="flex-start">
            <img alt={"chip"} src={Chip} width={66}/>
          </Box>
          <Box mr={1}>
            Visa GOLD
          </Box>
        </Box>
      </Box>
    </Box>
  
  )
};
