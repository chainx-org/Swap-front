import { PriceWrapper } from './style';
import PriceField from './PriceField';
import NormalButton from '../../Button';
import React from 'react';


export const backPriceContent = (
  <PriceWrapper>
    {PriceFieldList.map(item =>
      <PriceField name={item.fieldName} content={item.fieldContent}/>)
    }
    <NormalButton className='confirmButton' label='Confirm Swap'/>
  </PriceWrapper>
)
