const form = document.getElementById('itemForm');
const itemList = document.getElementById('itemList');

// Load saved items on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedItems = JSON.parse(localStorage.getItem('items')) || [];
  savedItems.forEach(addItemToList);
});

// Listen for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('itemName').value;
  const desc = document.getElementById('itemDesc').value;

  const newItem = { name, desc };
  addItemToList(newItem);
  saveItemToStorage(newItem);

  form.reset();
});

// Add item to the page
function addItemToList(item) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<strong>${item.name}</strong><br>${item.desc}`;
  itemList.appendChild(listItem);
}

// Save to localStorage
function saveItemToStorage(item) {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
}
