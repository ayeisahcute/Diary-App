// Reference elements
const diaryEntryInput = document.getElementById('diary-entry');
const addEntryButton = document.getElementById('add-entry');
const entryList = document.getElementById('entry-list');

// Function to add a diary entry
addEntryButton.addEventListener('click', () => {
    const entryText = diaryEntryInput.value.trim();
    if (entryText) {
        const listItem = document.createElement('li');
        listItem.textContent = entryText;
        entryList.appendChild(listItem);

        // Clear the input field after adding
        diaryEntryInput.value = '';
    } else {
        alert('Please write something before adding!');
    }
});
