// Adding an event listener to the calculateButton element to trigger the calculation function
document.getElementById('calculateButton').addEventListener('click', calculateTotalCost);

// Function to calculate the total cost of petrol
function calculateTotalCost() {
  // Getting the petrol cost per liter input value and converting it to a float
  const petrolCost = parseFloat(document.getElementById('petrolCost').value);
  // Getting the liters of petrol purchased input value and converting it to a float
  const liters = parseFloat(document.getElementById('liters').value);
  // Calculating the total cost by multiplying petrol cost per liter by liters purchased
  const totalCost = petrolCost * liters;
  // Displaying the total cost in the designated paragraph with proper formatting
  document.getElementById('totalCost').textContent = `Total cost: $${totalCost.toFixed(2)}`;
}
