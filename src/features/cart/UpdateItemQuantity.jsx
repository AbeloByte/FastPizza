import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { DecreaseItemQuantity, IncreaseItemQuantity } from './cartSlice';

const UpdateItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(DecreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <Button
        type="round"
        onClick={() => dispatch(IncreaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
