 function filterList() {
            // Get the user's input and convert it to lowercase for case-insensitive matching
            const searchInput = document.getElementById('searchBar').value.toLowerCase();
            // Select all individual list item elements
            const listItems = document.querySelectorAll('#itemList .item');

            // Loop through each item in the list
            listItems.forEach(item => {
                // Get the text inside the item and convert it to lowercase
                const text = item.textContent.toLowerCase();

                // Check if the item's text includes the search string
                if (text.includes(searchInput)) {
                    item.classList.remove('hidden'); // Show item
                } else {
                    item.classList.add('hidden');    // Hide item
                }
            });
        }
