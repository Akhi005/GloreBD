import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export default function PriceSlider({ value, onChange }) { 
  const marks = [
    { value: 0, label: '0' },
    { value: 1000, label: '1000' },
  ];

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value} 
        onChange={onChange} 
        getAriaValueText={valuetext}
        disableSwap
        marks={marks}
        min={0}
        max={1000}
      />
    </Box>
  );
}