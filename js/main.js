// Save the reference to text-field into a variable. | <input type="text">
const textField = document.querySelector('input[type="text"]');
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
const button = document.querySelector('button');
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
const list = document.querySelector('ul');
// Save the reference to paragraph for feedback | <p class="feedback"></p>
const feedback = document.querySelector('p');

// Start function addItem.
function addItem() {
    // Create list-item and store output in a variable.
    const listItem = document.createElement('li');
    // Check if user entered the value in input text-field.
    // If so:
    if (textField.value.trim() !== '') {
       // Use textContent property on created list-item
       listItem.textContent = textField.value;
       // and assign it with the value of the text written in the text-field
       // Append list item to unordered list.
       list.appendChild(listItem);
       // Clear a feedback-message.
       feedback.textContent = '';
       // Clear the text-field.
       textField.value = '';
       // Put the cursor back to text-field  
       textField.focus();
    // End if. 
    }
    // Otherwise:
    else {
       // Print the message nothing entered in the paragraph "feedback"
       feedback.textContent = 'nothing entered';
    }
    // End otherwise.
}
// End function addItem.
// Register your function addItem for click event on button.
button.addEventListener('click', addItem);