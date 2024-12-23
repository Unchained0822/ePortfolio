// Project Carousel
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");

    const projects = [
        {
            title: "Turing Machine Simulator",
            description: "A functional simulator built to demonstrate computational theory concepts with an intuitive interface for testing configurations.",
            imageSrc: "assets/images/turing_machine.jpg",
            githubLink: "https://github.com/Unchained0822/Turing_Machine_Simulator.git",
        },
        {
            title: "K-Means Clustering Program",
            description: "A program implementing the K-Means clustering algorithm for data analysis and visualization.",
            imageSrc: "assets/images/k_means.jpg",
            githubLink: "https://github.com/Unchained0822/K-Means_Clustering_program.git",
        },
        {
            title: "Enhanced Skiplist with Multithreading and Caching",
            description: "Optimized a skip list data structure by integrating multithreading and caching strategies to enhance performance.",
            imageSrc: "assets/images/skiplist.jpg",
            githubLink: "https://github.com/Unchained0822/enhanced_skiplist_using_multi-threading_and_caching.git",
        },
        {
            title: "Chat App",
            description: "A real-time chat application showcasing robust communication features and a clean user interface.",
            imageSrc: "assets/images/chat_app.jpg",
            githubLink: "https://github.com/Unchained0822/ChatApp.git",
        },
        {
            title: "Laravel Web App",
            description: "A web application developed using Laravel, showcasing dynamic functionality and an efficient backend system.",
            imageSrc: "assets/images/laravel_app.jpg",
            githubLink: "https://github.com/Unchained0822/macadatarproject.git",
        },
    ];

    // Generate carousel items
    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("carousel-item");
        projectItem.innerHTML = `
            <div class="carousel-image-container">
                <img src="${project.imageSrc}" alt="${project.title} Screenshot">
            </div>
            <div class="carousel-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a class="btn" href="${project.githubLink}" target="_blank" style="
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #333;
                    color: #fff;
                    font-size: 1rem;
                    text-align: center;
                    text-decoration: none;
                    border-radius: 5px;
                    border: none;
                    transition: background-color 0.3s, transform 0.3s;
                ">View on GitHub</a>
            </div>
        `;
        carousel.appendChild(projectItem);
    });

    // Add navigation functionality
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let scrollAmount = 0;
    const scrollStep = 300; // Adjust for scroll sensitivity

    nextButton.addEventListener("click", () => {
        scrollAmount += scrollStep;
        carousel.scrollLeft = scrollAmount;
    });

    prevButton.addEventListener("click", () => {
        scrollAmount -= scrollStep;
        carousel.scrollLeft = scrollAmount;
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const toggleButton = document.createElement("button");
    const navMenu = document.querySelector("nav");

    // Configure toggle button
    toggleButton.classList.add("menu-toggle");
    toggleButton.setAttribute("aria-label", "Toggle navigation menu");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.innerHTML = `
        <img src="assets/images/profile.jpg" alt="Logo" class="menu-logo">
        <div class="lines">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    `;

    document.body.appendChild(toggleButton);

    // Backdrop for overlay effect
    const backdrop = document.createElement("div");
    backdrop.classList.add("menu-backdrop");
    document.body.appendChild(backdrop);

    // Toggle menu function
    function toggleMenu() {
        const isActive = header.classList.toggle("active");
        toggleButton.setAttribute("aria-expanded", isActive);
        backdrop.classList.toggle("visible", isActive);
        document.body.classList.toggle("no-scroll", isActive); // Prevent body scrolling when menu is open
    }

    // Event listeners
    toggleButton.addEventListener("click", toggleMenu);
    backdrop.addEventListener("click", toggleMenu); // Close menu on backdrop click

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && header.classList.contains("active")) {
            header.classList.remove("active");
            toggleButton.setAttribute("aria-expanded", "false");
            backdrop.classList.remove("visible");
            document.body.classList.remove("no-scroll");
        }
    });
});
