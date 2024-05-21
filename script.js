const textboxChecker = (textBox) => {
    if (isNaN(textBox) || textBox <= 0) {
        alert('Please enter a valid number greater than 0');
        return;
    }
}



document.getElementById('addButton').addEventListener('click', function () {
    // Get the number of text boxes from the input field
    const numTextboxes = parseInt(document.getElementById('numTextboxes').value);

    // Get the container where text boxes will be added
    const container = document.getElementById('textboxContainer');

    // Clear the container before adding new text boxes
    container.innerHTML = '';

    // Check if the input is a valid number and greater than 0
    textboxChecker(numTextboxes);

    // create all check button
    const allCheckButton = document.createElement('button');
    allCheckButton.id = 'selectAll';
    allCheckButton.className='select-all';
    allCheckButton.textContent = 'All Check';
    container.appendChild(allCheckButton);

    // Loop to create textboxes and checkboxes
    for (let i = 0; i < numTextboxes; i++) {
        // Create a div to hold each textbox and checkbox
        const textboxContainer = document.createElement('div');
        textboxContainer.className = 'textbox-container';

        // Create a textbox
        const textbox = document.createElement('input');
        textbox.type = 'number';
        textbox.className='stepOneTextBoxes'
        textbox.placeholder = `Textbox ${i + 1}`;

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id ='checkbox'
        checkbox.className = 'checkbox';

        // Append the textbox and check box to the container div
        textboxContainer.appendChild(textbox);
        textboxContainer.appendChild(checkbox);

        // Append the container div to the main container
        container.appendChild(textboxContainer);
    }
    // select all check box function
    function selectAllCheckboxes() {
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    }
    allCheckButton.addEventListener('click', selectAllCheckboxes);
});

document.getElementById('')


document.getElementById('calculateButton').addEventListener('click', function () {


    // Get all text boxes and checkboxes
    const textboxes = document.querySelectorAll('#textboxContainer input[type="number"]');
    const checkboxes = document.querySelectorAll('#textboxContainer input[type="checkbox"]');

    let selectedCount = 0;
    let totalSum = 0;
    // let i = [];

    // Loop through the checkboxes and sum up the values of checked text boxes
    checkboxes.forEach((checkbox, index) => {

        if (checkbox.checked) {
            selectedCount++;
            // i.push(index + 1)
            totalSum += parseFloat(textboxes[index].value) || 0;
        }
    });


    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Output is: Selected positions: ${selectedCount} <br> Total number: ${totalSum}`;

    // Send the result to the server
    fetch('http://localhost:3000/save-total-task-1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ selectedCount, totalSum})
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});



/**************************************step-2*******************************/ 
document.getElementById('addButtonTwo').addEventListener('click', function () {
    // Get the number of text boxes from the input field
    const numTextboxesTwo = parseInt(document.getElementById('numTextboxesTwo').value);

    // Get the container where text boxes will be added
    const containerTwo = document.getElementById('textboxContainerTwo');

    // Clear the container before adding new text boxes
    containerTwo.innerHTML = '';

    textboxChecker(numTextboxesTwo);

    // create all check button
    const allCheckButtonTwo = document.createElement('button');
    allCheckButtonTwo.id = 'selectAllTwo';
    allCheckButtonTwo.className='select_all_two'
    allCheckButtonTwo.textContent = 'All Check';
    containerTwo.appendChild(allCheckButtonTwo);


    // Loop to create textboxes and checkboxes
    for (let i = 0; i < numTextboxesTwo; i++) {
        // Create a div to hold each textbox and checkbox
        const textboxContainerTwo = document.createElement('div');
        textboxContainerTwo.className = 'textbox-container-two';

        // Create a textbox
        const textboxTwo = document.createElement('input');
        textboxTwo.type = 'number';
        textboxTwo.className ='stepTwoTextBoxes';
        textboxTwo.placeholder = `Textbox ${i + 1}`;

        // Create a checkbox
        const checkboxTwo = document.createElement('input');
        checkboxTwo.type = 'checkbox';
        checkboxTwo.className = 'checkbox';

        // Append the textbox and check box to the container div
        textboxContainerTwo.appendChild(textboxTwo);
        textboxContainerTwo.appendChild(checkboxTwo);

        // Append the container div to the main container
        containerTwo.appendChild(textboxContainerTwo);
    }
    // select all check box function
    function selectAllCheckboxesTwo() {
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    }
    selectAllTwo.addEventListener('click', selectAllCheckboxesTwo);
})

document.getElementById('')


document.getElementById('calculateButtonTwo').addEventListener('click', function () {


    // Get all text boxes and checkboxes
    const textboxesTwo = document.querySelectorAll('#textboxContainerTwo input[type="number"]');
    const checkboxesTwo = document.querySelectorAll('#textboxContainerTwo input[type="checkbox"]');

    let selectedCountTwo = 0;
    let totalSumTwo = 0;
    let i = [];

    // Loop through the checkboxes and sum up the values of checked text boxes
    checkboxesTwo.forEach((checkbox, index) => {

        if (checkbox.checked) {
            selectedCountTwo++;
            i.push(index + 1)
            totalSumTwo += parseFloat(textboxesTwo[index].value) || 0;
        }
    });


    // Display the result
    const resultDivTwo = document.getElementById('resultTwo');
    resultDivTwo.innerHTML = `Selected positions: ${selectedCountTwo} <br> there position: ${i} <br> Total number: ${totalSumTwo}`;

    // Send the result to the server
    fetch('http://localhost:3000/save-total-task-2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ selectedCountTwo, totalSumTwo, i })  
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
