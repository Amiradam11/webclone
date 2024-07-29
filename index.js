// script.js

const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', function () {
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function (event) {
    if (!event.target.matches('#menuBtn')) {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        }
    }
});



































// script.js

const optionsData = {
    popular: [
        { text: ' Conmore ', description: 'Condo rentals' },
        { text: 'Benalmádena', description: 'Vacation rentals' },
        { text: 'Marbella', description: 'House rentals' },
        { text: 'Mijas', description: 'House rentals' },
        { text: 'Prescott', description: 'Cabin rentals' },
        { text: 'Scottsdale', description: 'Rentals with pools' },
        { text: 'Tucson', description: 'Condo rentals' },
        { text: 'Jasper', description: 'Vacation rentals' },
        { text: 'Mountain view', description: 'Vacation rentals' },
        { text: 'Devonport', description: 'Cottage rentals' },
        { text: 'Mallacoota', description: 'Pet-friendly rentals' },
        { text: 'Ibiza', description: 'Apartment rentals' },
        { text: 'Anaheim', description: 'Vacation rentals' },
        { text: 'Monterey', description: 'House rentals' },
        { text: 'Paso Robles', description: 'House rentals' },
        { text: 'Santa Barbara', description: 'Cottage rentals' },
        { text: 'Sonoma', description: 'Beach house rentals' }
    ],


    'art-culture': [
        { text: 'Mallacoota', description: 'Pet-friendly rentals' },
        { text: 'Ibiza', description: 'Apartment rentals' },
        { text: 'Anaheim', description: 'Vacation rentals' },
        { text: 'Monterey', description: 'House rentals' },
        { text: 'Paso Robles', description: 'House rentals' },
        { text: 'Santa Barbara', description: 'Cottage rentals' },
        { text: 'Sonoma', description: 'Beach house rentals' },
        { text: ' Conmore ', description: 'Condo rentals' },
        { text: 'Benalmádena', description: 'Vacation rentals' },
        { text: 'Marbella', description: 'House rentals' },
        { text: 'Mijas', description: 'House rentals' },
        { text: 'Prescott', description: 'Cabin rentals' },
        { text: 'Scottsdale', description: 'Rentals with pools' },
        { text: 'Tucson', description: 'Condo rentals' },
        { text: 'Jasper', description: 'Vacation rentals' },
        { text: 'Mountain view', description: 'Vacation rentals' },
        { text: 'Devonport', description: 'Cottage rentals' }
    ],

    outdoors: [
        { text: 'Mountain view', description: 'Vacation rentals' },
        { text: 'Devonport', description: 'Cottage rentals' },
        { text: 'Mallacoota', description: 'Pet-friendly rentals' },
        { text: 'Ibiza', description: 'Apartment rentals' },
        { text: 'Anaheim', description: 'Vacation rentals' },
        { text: 'Monterey', description: 'House rentals' },
        { text: ' Conmore ', description: 'Condo rentals' },
        { text: 'Benalmádena', description: 'Vacation rentals' },
        { text: 'Marbella', description: 'House rentals' },
        { text: 'Mijas', description: 'House rentals' },
        { text: 'Prescott', description: 'Cabin rentals' },
        { text: 'Scottsdale', description: 'Rentals with pools' },
        { text: 'Tucson', description: 'Condo rentals' },
        { text: 'Jasper', description: 'Vacation rentals' },
        { text: 'Paso Robles', description: 'House rentals' },
        { text: 'Santa Barbara', description: 'Cottage rentals' },
        { text: 'Sonoma', description: 'Beach house rentals' }
    ],

    mountains: [
        { text: 'Paso Robles', description: 'House rentals' },
        { text: 'Santa Barbara', description: 'Cottage rentals' },
        { text: 'Sonoma', description: 'Beach house rentals' },
        { text: ' Conmore ', description: 'Condo rentals' },
        { text: 'Benalmádena', description: 'Vacation rentals' },
        { text: 'Marbella', description: 'House rentals' },
        { text: 'Mijas', description: 'House rentals' },
        { text: 'Prescott', description: 'Cabin rentals' },
        { text: 'Scottsdale', description: 'Rentals with pools' },
        { text: 'Tucson', description: 'Condo rentals' },
        { text: 'Jasper', description: 'Vacation rentals' },
        { text: 'Mountain view', description: 'Vacation rentals' },
        { text: 'Devonport', description: 'Cottage rentals' },
        { text: 'Mallacoota', description: 'Pet-friendly rentals' },
        { text: 'Ibiza', description: 'Apartment rentals' },
        { text: 'Anaheim', description: 'Vacation rentals' },
        { text: 'Monterey', description: 'House rentals' }
    ],

    beach: [
        { text: 'Mijas', description: 'House rentals' },
        { text: 'Prescott', description: 'Cabin rentals' },
        { text: ' Conmore ', description: 'Condo rentals' },
        { text: 'Benalmádena', description: 'Vacation rentals' },
        { text: 'Marbella', description: 'House rentals' },
        { text: 'Scottsdale', description: 'Rentals with pools' },
        { text: 'Tucson', description: 'Condo rentals' },
        { text: 'Jasper', description: 'Vacation rentals' },
        { text: 'Mountain view', description: 'Vacation rentals' },
        { text: 'Devonport', description: 'Cottage rentals' },
        { text: 'Mallacoota', description: 'Pet-friendly rentals' },
        { text: 'Ibiza', description: 'Apartment rentals' },
        { text: 'Anaheim', description: 'Vacation rentals' },
        { text: 'Monterey', description: 'House rentals' },
        { text: 'Paso Robles', description: 'House rentals' },
        { text: 'Santa Barbara', description: 'Cottage rentals' },
        { text: 'Sonoma', description: 'Beach house rentals' }
    ],

    'unique stays': [
        { text: 'Devonport', description: 'Cottage rentals' },
        { text: 'Mallacoota', description: 'Pet-friendly rentals' },
        { text: ' Conmore ', description: 'Condo rentals' },
        { text: 'Benalmádena', description: 'Vacation rentals' },
        { text: 'Marbella', description: 'House rentals' },
        { text: 'Mijas', description: 'House rentals' },
        { text: 'Prescott', description: 'Cabin rentals' },
        { text: 'Scottsdale', description: 'Rentals with pools' },
        { text: 'Tucson', description: 'Condo rentals' },
        { text: 'Jasper', description: 'Vacation rentals' },
        { text: 'Mountain view', description: 'Vacation rentals' },
        { text: 'Ibiza', description: 'Apartment rentals' },
        { text: 'Anaheim', description: 'Vacation rentals' },
        { text: 'Monterey', description: 'House rentals' },
        { text: 'Paso Robles', description: 'House rentals' },
        { text: 'Santa Barbara', description: 'Cottage rentals' },
        { text: 'Sonoma', description: 'Beach house rentals' }
    ],

    categories: [
        { text: 'Mallacoota', description: 'Pet-friendly rentals' },
        { text: 'Ibiza', description: 'Apartment rentals' },
        { text: 'Anaheim', description: 'Vacation rentals' },
        { text: 'Monterey', description: 'House rentals' },
        { text: 'Paso Robles', description: 'House rentals' },
        { text: 'Santa Barbara', description: 'Cottage rentals' },
        { text: 'Sonoma', description: 'Beach house rentals' },
        { text: ' Conmore ', description: 'Condo rentals' },
        { text: 'Benalmádena', description: 'Vacation rentals' },
        { text: 'Marbella', description: 'House rentals' },
        { text: 'Mijas', description: 'House rentals' },
        { text: 'Prescott', description: 'Cabin rentals' },
        { text: 'Scottsdale', description: 'Rentals with pools' },
        { text: 'Tucson', description: 'Condo rentals' },
        { text: 'Jasper', description: 'Vacation rentals' },
        { text: 'Mountain view', description: 'Vacation rentals' },
        { text: 'Devonport', description: 'Cottage rentals' }
    ],

    'things to do': [
        { text: 'Mountain view', description: 'Vacation rentals' },
        { text: 'Devonport', description: 'Cottage rentals' },
        { text: 'Mallacoota', description: 'Pet-friendly rentals' },
        { text: 'Ibiza', description: 'Apartment rentals' },
        { text: 'Anaheim', description: 'Vacation rentals' },
        { text: 'Monterey', description: 'House rentals' },
        { text: ' Conmore ', description: 'Condo rentals' },
        { text: 'Benalmádena', description: 'Vacation rentals' },
        { text: 'Marbella', description: 'House rentals' },
        { text: 'Mijas', description: 'House rentals' },
        { text: 'Prescott', description: 'Cabin rentals' },
        { text: 'Scottsdale', description: 'Rentals with pools' },
        { text: 'Tucson', description: 'Condo rentals' },
        { text: 'Jasper', description: 'Vacation rentals' },
        { text: 'Paso Robles', description: 'House rentals' },
        { text: 'Santa Barbara', description: 'Cottage rentals' },
        { text: 'Sonoma', description: 'Beach house rentals' }
    ],

    'travel tips & inspiration': [
        { text: 'Paso Robles', description: 'House rentals' },
        { text: 'Santa Barbara', description: 'Cottage rentals' },
        { text: 'Sonoma', description: 'Beach house rentals' },
        { text: ' Conmore ', description: 'Condo rentals' },
        { text: 'Benalmádena', description: 'Vacation rentals' },
        { text: 'Marbella', description: 'House rentals' },
        { text: 'Mijas', description: 'House rentals' },
        { text: 'Prescott', description: 'Cabin rentals' },
        { text: 'Scottsdale', description: 'Rentals with pools' },
        { text: 'Tucson', description: 'Condo rentals' },
        { text: 'Jasper', description: 'Vacation rentals' },
        { text: 'Mountain view', description: 'Vacation rentals' },
        { text: 'Devonport', description: 'Cottage rentals' },
        { text: 'Mallacoota', description: 'Pet-friendly rentals' },
        { text: 'Ibiza', description: 'Apartment rentals' },
        { text: 'Anaheim', description: 'Vacation rentals' },
        { text: 'Monterey', description: 'House rentals' }
    ],

    'airbnb-friendly apartments': [
        { text: 'Mijas', description: 'House rentals' },
        { text: 'Prescott', description: 'Cabin rentals' },
        { text: ' Conmore ', description: 'Condo rentals' },
        { text: 'Benalmádena', description: 'Vacation rentals' },
        { text: 'Marbella', description: 'House rentals' },
        { text: 'Scottsdale', description: 'Rentals with pools' },
        { text: 'Tucson', description: 'Condo rentals' },
        { text: 'Jasper', description: 'Vacation rentals' },
        { text: 'Mountain view', description: 'Vacation rentals' },
        { text: 'Devonport', description: 'Cottage rentals' },
        { text: 'Mallacoota', description: 'Pet-friendly rentals' },
        { text: 'Ibiza', description: 'Apartment rentals' },
        { text: 'Anaheim', description: 'Vacation rentals' },
        { text: 'Monterey', description: 'House rentals' },
        { text: 'Paso Robles', description: 'House rentals' },
        { text: 'Santa Barbara', description: 'Cottage rentals' },
        { text: 'Sonoma', description: 'Beach house rentals' }
    ]


};

const optionsGrid = document.getElementById('optionsGrid');
const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Remove the "active" class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add the "active" class to the clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        updateOptionsGrid(category);
    });
});

function updateOptionsGrid(category) {
    optionsGrid.innerHTML = '';
    const options = optionsData[category];
    options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');

        const mainText = document.createElement('div');
        mainText.classList.add('main-text');
        mainText.textContent = option.text;

        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = option.description;

        optionDiv.appendChild(mainText);
        optionDiv.appendChild(description);
        optionsGrid.appendChild(optionDiv);


    });
}

// Initialize with the 'popular' category
updateOptionsGrid('popular');








// script.js

// script.js

// Get the modal
const modal = document.getElementById("loginPopup");

// Get the button that opens the modal
const btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }
function loginModal() {
    console.log("I am called!")
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }