// Data for sustainability tips
const sustainabilityTips = [
    "Choose products with minimal packaging to reduce waste.",
    "Buy local produce to reduce transportation emissions.",
    "Look for products with eco-friendly certifications like USDA Organic or Fair Trade.",
    "Bring your own reusable bags when shopping.",
    "Opt for products made from recycled materials.",
    "Choose energy-efficient appliances when possible.",
    "Support brands that have transparent sustainability practices.",
    "Consider the product's lifecycle - how it's made, used, and disposed of.",
    "Buy in bulk to reduce packaging waste.",
    "Choose products with refillable options."
];

// Data for brand sustainability scores
const brandScores = [
    { name: "Patagonia", score: 92, rating: "High" },
    { name: "Eileen Fisher", score: 88, rating: "High" },
    { name: "Allbirds", score: 85, rating: "High" },
    { name: "Tentree", score: 82, rating: "High" },
    { name: "Levi's", score: 75, rating: "Medium" },
    { name: "H&M", score: 68, rating: "Medium" },
    { name: "Nike", score: 65, rating: "Medium" },
    { name: "Adidas", score: 62, rating: "Medium" },
    { name: "Zara", score: 45, rating: "Low" },
    { name: "Forever 21", score: 38, rating: "Low" }
];

// Data for eco-friendly stores
const ecoFriendlyStores = [
    { name: "Green Earth Market", address: "123 Eco Street, Greenville" },
    { name: "Sustainable Living", address: "456 Green Avenue, Eco City" },
    { name: "Earth Friendly Goods", address: "789 Nature Road, Sustainable Town" },
    { name: "Eco Essentials", address: "101 Green Lane, Eco Village" },
    { name: "Sustainable Solutions", address: "202 Earth Way, Green City" }
];

// Data for carbon footprint visualization
const carbonFootprintData = [
    { activity: "Conventional Shopping", value: 100 },
    { activity: "Online Shopping with Fast Delivery", value: 85 },
    { activity: "Bulk Shopping", value: 60 },
    { activity: "Local Farmers Market", value: 40 },
    { activity: "Second-hand Shopping", value: 20 }
];

// --- Carbon Footprint Calculator ---
const carbonData = {
    't-shirt': 2.5,
    'shoes': 10,
    'jeans': 7,
    'jacket': 12,
    'bag': 3.5
};
const carbonForm = document.getElementById('carbon-form');
const carbonResult = document.getElementById('carbon-result');
if (carbonForm) {
    carbonForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const type = document.getElementById('product-type').value;
        const value = carbonData[type];
        carbonResult.innerHTML = `<div class='carbon-calc-bar' style='width:${Math.min(value*20,200)}px'><span>${value} kg CO₂</span></div>`;
    });
}

// --- Interactive Map ---
const mapPins = document.querySelectorAll('.map-pin');
const mapTooltip = document.getElementById('map-tooltip');
const storeInfo = {
    'Green Earth Market': {
        address: '123 Eco Street, Greenville',
        rating: '5/5',
    },
    'Sustainable Living': {
        address: '456 Green Avenue, Eco City',
        rating: '4.5/5',
    },
    'Earth Friendly Goods': {
        address: '789 Nature Road, Sustainable Town',
        rating: '4/5',
    }
};
mapPins.forEach(pin => {
    pin.addEventListener('click', function(e) {
        const store = this.getAttribute('data-store');
        const info = storeInfo[store];
        mapTooltip.innerHTML = `<strong>${store}</strong><br>${info.address}<br>Rating: ${info.rating}`;
        mapTooltip.style.display = 'block';
        mapTooltip.style.top = (this.offsetTop + 30) + 'px';
        mapTooltip.style.left = (this.offsetLeft + 30) + 'px';
    });
});
document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('map-pin')) {
        mapTooltip.style.display = 'none';
    }
});

// --- Product Sustainability Scanner ---
const productData = [
    { name: 't-shirt', score: 8, rating: 'High', rec: 'Great choice! Low impact.' },
    { name: 'shoes', score: 5, rating: 'Medium', rec: 'Consider recycled materials.' },
    { name: 'jeans', score: 4, rating: 'Medium', rec: 'Look for organic cotton.' },
    { name: 'jacket', score: 3, rating: 'Low', rec: 'Try second-hand or eco brands.' },
    { name: 'bag', score: 7, rating: 'High', rec: 'Reusable bags are best.' },
    { name: 'levis', score: 6, rating: 'Medium', rec: 'Levi\'s is improving sustainability. Prefer their Water<Less or Wellthread lines.' },
    { name: 'adidas', score: 7, rating: 'High', rec: 'Adidas uses recycled materials and has eco-friendly lines.' },
    { name: 'nike', score: 5, rating: 'Medium', rec: 'Nike is making progress, but look for their sustainable collections.' },
    { name: 'patagonia', score: 9, rating: 'High', rec: 'Patagonia is a leader in sustainable outdoor wear.' },
    { name: 'h&m', score: 4, rating: 'Medium', rec: 'H&M has a Conscious line, but fast fashion is less sustainable.' },
    { name: 'zara', score: 3, rating: 'Low', rec: 'Zara is working on sustainability, but fast fashion is less eco-friendly.' },
    { name: 'allbirds', score: 8, rating: 'High', rec: 'Allbirds uses natural and recycled materials.' },
    { name: 'tentree', score: 9, rating: 'High', rec: 'Tentree plants trees for every purchase and uses eco materials.' },
    { name: 'eileen fisher', score: 8, rating: 'High', rec: 'Eileen Fisher is known for ethical and sustainable practices.' },
    { name: 'forever 21', score: 2, rating: 'Low', rec: 'Fast fashion, not recommended for sustainability.' }
];
// Render suggestions
const scannerSuggestions = document.getElementById('scanner-suggestions');
if (scannerSuggestions) {
    scannerSuggestions.innerHTML = '<strong>Try searching:</strong> ' + productData.map(p => p.name.charAt(0).toUpperCase() + p.name.slice(1)).join(', ');
}
const scannerForm = document.getElementById('scanner-form');
const scannerResult = document.getElementById('scanner-result');
if (scannerForm) {
    scannerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const val = document.getElementById('scanner-input').value.trim().toLowerCase();
        const found = productData.find(p => p.name === val);
        if (found) {
            scannerResult.innerHTML = `<div class='scanner-score score-${found.rating.toLowerCase()}'>${found.rating} (${found.score}/10)</div><div>${found.rec}</div>`;
        } else {
            scannerResult.innerHTML = '<div class="scanner-score score-low">Not found</div><div>Try another product or check spelling.</div>';
        }
    });
}

// --- Gamified Tips Tracker ---
const tipsForm = document.getElementById('tips-form');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const tipsKey = 'greencart-tips';
function updateTipsProgress() {
    const checkboxes = tipsForm.querySelectorAll('input[type=checkbox]');
    let checked = 0;
    checkboxes.forEach(cb => { if (cb.checked) checked++; });
    const percent = Math.round((checked / checkboxes.length) * 100);
    progressBar.style.width = percent + '%';
    progressBar.textContent = percent + '%';
    progressText.textContent = checked === checkboxes.length ? 'All tips completed! 🌱' : `${checked} of ${checkboxes.length} tips completed`;
    // Save state
    const state = Array.from(checkboxes).map(cb => cb.checked);
    localStorage.setItem(tipsKey, JSON.stringify(state));
}
if (tipsForm) {
    // Restore state
    const checkboxes = tipsForm.querySelectorAll('input[type=checkbox]');
    const saved = JSON.parse(localStorage.getItem(tipsKey) || '[]');
    checkboxes.forEach((cb, i) => { if (saved[i]) cb.checked = true; });
    updateTipsProgress();
    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateTipsProgress);
    });
}

// Function to create sustainability tips cards
function createSustainabilityTips() {
    const tipsContainer = document.getElementById('tips-container');
    
    sustainabilityTips.forEach(tip => {
        const tipCard = document.createElement('div');
        tipCard.className = 'tip-card';
        tipCard.textContent = tip;
        tipsContainer.appendChild(tipCard);
    });
}

// Function to create brand scoreboard table
function createBrandScoreboard() {
    const tableBody = document.querySelector('#scoreboard-table tbody');
    
    brandScores.forEach(brand => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = brand.name;
        
        const scoreCell = document.createElement('td');
        scoreCell.textContent = brand.score;
        
        const ratingCell = document.createElement('td');
        ratingCell.textContent = brand.rating;
        
        // Add appropriate class based on rating
        if (brand.rating === 'High') {
            ratingCell.className = 'score-high';
        } else if (brand.rating === 'Medium') {
            ratingCell.className = 'score-medium';
        } else {
            ratingCell.className = 'score-low';
        }
        
        row.appendChild(nameCell);
        row.appendChild(scoreCell);
        row.appendChild(ratingCell);
        
        tableBody.appendChild(row);
    });
}

// Function to create eco-friendly store directory
function createStoreDirectory() {
    const storeList = document.getElementById('store-list');
    
    ecoFriendlyStores.forEach(store => {
        const listItem = document.createElement('li');
        listItem.className = 'store-item';
        
        const storeName = document.createElement('div');
        storeName.className = 'store-name';
        storeName.textContent = store.name;
        
        const storeAddress = document.createElement('div');
        storeAddress.className = 'store-address';
        storeAddress.textContent = store.address;
        
        listItem.appendChild(storeName);
        listItem.appendChild(storeAddress);
        
        storeList.appendChild(listItem);
    });
}

// Function to create carbon footprint visualization
function createCarbonFootprintVisual() {
    const carbonChart = document.getElementById('carbon-chart');
    
    // Find the maximum value for scaling
    const maxValue = Math.max(...carbonFootprintData.map(item => item.value));
    
    carbonFootprintData.forEach(item => {
        const carbonItem = document.createElement('div');
        carbonItem.className = 'carbon-item';
        
        const carbonLabel = document.createElement('div');
        carbonLabel.className = 'carbon-label';
        carbonLabel.textContent = item.activity;
        
        const carbonBarContainer = document.createElement('div');
        carbonBarContainer.className = 'carbon-bar-container';
        
        const carbonBar = document.createElement('div');
        carbonBar.className = 'carbon-bar';
        // Set initial width to 0 for animation
        carbonBar.style.width = '0%';
        
        const carbonValue = document.createElement('div');
        carbonValue.className = 'carbon-value';
        carbonValue.textContent = item.value + '%';
        
        carbonBarContainer.appendChild(carbonBar);
        carbonItem.appendChild(carbonLabel);
        carbonItem.appendChild(carbonBarContainer);
        carbonItem.appendChild(carbonValue);
        
        carbonChart.appendChild(carbonItem);
        
        // Animate the bar after a short delay
        setTimeout(() => {
            carbonBar.style.width = (item.value / maxValue * 100) + '%';
        }, 100);
    });
}

// Function to handle the green pledge button
function setupPledgeButton() {
    const pledgeButton = document.getElementById('pledge-button');
    const pledgeMessage = document.getElementById('pledge-message');
    if (!pledgeButton || !pledgeMessage) return;
    let animationDiv = document.getElementById('pledge-animation');
    if (animationDiv) animationDiv.remove();
    pledgeButton.disabled = false;
    pledgeButton.textContent = 'I Pledge to Shop Sustainably';
    pledgeMessage.textContent = '';
    pledgeMessage.style.display = 'none';
    pledgeButton.onclick = function() {
        // Animation: checkmark with fade-out
        animationDiv = document.createElement('div');
        animationDiv.id = 'pledge-animation';
        animationDiv.innerHTML = `<svg width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="#43a047" opacity="0.15"/><polyline points="18,32 27,41 43,23" style="fill:none;stroke:#43a047;stroke-width:5;stroke-linecap:round;stroke-linejoin:round"/></svg>`;
        animationDiv.style.position = 'absolute';
        animationDiv.style.left = '50%';
        animationDiv.style.top = '50%';
        animationDiv.style.transform = 'translate(-50%, -50%)';
        animationDiv.style.zIndex = '10';
        animationDiv.style.opacity = '1';
        animationDiv.style.transition = 'opacity 0.7s';
        document.querySelector('.pledge-btn-container').appendChild(animationDiv);
        setTimeout(() => {
            animationDiv.style.opacity = '0';
            setTimeout(() => { animationDiv.remove(); }, 700);
        }, 1200);
        pledgeButton.disabled = true;
        pledgeButton.textContent = 'Pledge Completed';
        pledgeMessage.textContent = 'Thank you for your commitment to sustainable shopping!';
        pledgeMessage.style.display = 'block';
    };
}

// Smooth scroll for navbar and hero buttons
function setupSmoothScrolling() {
    const links = document.querySelectorAll('.navbar-menu a, .cta-btn, .hero-cta-btn');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Highlight active menu item on scroll
function setupActiveMenuHighlight() {
    const sections = document.querySelectorAll('.dashboard-card, .hero-section');
    const navLinks = document.querySelectorAll('.navbar-menu a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    createSustainabilityTips();
    createBrandScoreboard();
    createStoreDirectory();
    createCarbonFootprintVisual();
    setupPledgeButton();
    setupSmoothScrolling();
    setupActiveMenuHighlight();
}); 