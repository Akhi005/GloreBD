import Button from '@mui/material/Button';

export default function Counter({ value = 1, onChange }) {
  const handleIncrement = () => onChange(value + 1);
  const handleDecrement = () => value > 1 && onChange(value - 1);

  return (
    <div className='flex  border-pink-300 font-bold border-2 rounded items-center'> 
      <Button onClick={handleDecrement} size="large" style={{ minWidth: '30px', padding: '1px' }}>-</Button>
      <p className='px-2 text-sm border-l-2 border-r-2 border-pink-300 h-full'>{value}</p> 
      <Button onClick={handleIncrement} size="large" style={{ minWidth: '30px', padding: '1px' }}>+</Button>
    </div>
  );
}