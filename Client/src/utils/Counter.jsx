import { useState, useEffect } from 'react'; 
import Button from '@mui/material/Button';

export default function Counter({ initialValue = 1, onQuantityChange }) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    if (onQuantityChange) {
      onQuantityChange( newValue); 
    }
  };

  const handleDecrement = () => {
    if (value > 1) { 
      const newValue = value - 1;
      setValue(newValue);
      if (onQuantityChange) {
        onQuantityChange(newValue); 
      }
    }
  };

  return (
    <div className='flex border border-gray-300 rounded items-center'> 
      <Button onClick={handleDecrement} size="large" style={{ minWidth: '30px', padding: '1px' }}>-</Button>
      <p className='px-2 text-sm border-l border-r border-gray-300 h-full'>{value}</p> 
      <Button onClick={handleIncrement} size="large" style={{ minWidth: '30px', padding: '1px' }}>+</Button>
    </div>
  );
}