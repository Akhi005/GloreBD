export default function FormatBDtaka(amount) {

  if (typeof amount !== 'number' && typeof amount !== 'string') {
    console.error("Invalid amount provided. Must be a number or a string that can be converted to a number.");
    return ''; 
  }

  const numericAmount = parseFloat(amount); 

  if (isNaN(numericAmount)) {
    console.error("Invalid amount provided. Cannot be converted to a number.");
    return '';
  }

  const formatter = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0, 
  });

  return formatter.format(numericAmount);
}