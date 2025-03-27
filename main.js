// Mock data for donors
const mockDonors = [
    {
        id: 1,
        name: "John Doe",
        organ: "kidney",
        location: "New York",
        bloodType: "A+",
        age: 35,
        distance: "5 miles"
    },
    {
        id: 2,
        name: "Jane Smith",
        organ: "liver",
        location: "Los Angeles",
        bloodType: "O-",
        age: 42,
        distance: "8 miles"
    },
    // Add more mock donors as needed
];

// Modal handling
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Form handling
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    
    // Here you would typically handle authentication
    console.log('Login attempt:', { email, userType });
    alert('Login functionality would be implemented here');
});

// Donor search functionality
function searchDonors() {
    const organType = document.getElementById('organType').value;
    const location = document.getElementById('location').value;
    
    // Filter mock donors based on search criteria
    const filteredDonors = mockDonors.filter(donor => {
        return (!organType || donor.organ === organType.toLowerCase()) &&
               (!location || donor.location.toLowerCase().includes(location.toLowerCase()));
    });
    
    displaySearchResults(filteredDonors);
}

function displaySearchResults(donors) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';
    
    if (donors.length === 0) {
        resultsContainer.innerHTML = '<p>No donors found matching your criteria.</p>';
        return;
    }
    
    donors.forEach(donor => {
        const donorCard = document.createElement('div');
        donorCard.className = 'donor-card';
        donorCard.innerHTML = `
            <h3>${donor.name}</h3>
            <p><strong>Organ:</strong> ${donor.organ}</p>
            <p><strong>Location:</strong> ${donor.location}</p>
            <p><strong>Blood Type:</strong> ${donor.bloodType}</p>
            <p><strong>Age:</strong> ${donor.age}</p>
            <p><strong>Distance:</strong> ${donor.distance}</p>
            <button onclick="contactDonor(${donor.id})" class="contact-btn">Contact Donor</button>
        `;
        resultsContainer.appendChild(donorCard);
    });
}

function contactDonor(donorId) {
    // This would typically open a contact form or messaging system
    alert(`Contact functionality for donor ${donorId} would be implemented here`);
}

function showDonorRegistration() {
    alert('Donor registration form would be implemented here');
}

function showRecipientRegistration() {
    alert('Recipient registration form would be implemented here');
}

// Initialize the page with all donors
window.addEventListener('load', () => {
    displaySearchResults(mockDonors);
});