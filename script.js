// Function to append value to the display
function appendToDisplay(value) {
    let display = document.getElementById('result');
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    let display = document.getElementById('result');
    display.value = '';
  }
  
  // Function to delete the last character
  function deleteLast() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
  }
  
  // Function to calculate the result
  function calculateResult() {
    let display = document.getElementById('result');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }