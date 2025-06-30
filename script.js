document.addEventListener('DOMContentLoaded', function() {
    // Handle search functionality
    const searchInput = document.querySelector('input[type="search"]');
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const sections = document.querySelectorAll('main section');
        
        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            const shouldShow = text.includes(searchTerm);
            
            if (shouldShow) {
                section.classList.remove('hidden');
                section.style.opacity = '1';
            } else {
                section.classList.add('hidden');
                section.style.opacity = '0';
            }
        });
    });

    // Handle image loading errors
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Image failed to load: ${this.src}`);
            
            // Create error message container
            const errorMsg = document.createElement('div');
            errorMsg.className = 'p-4 text-red-600 bg-red-50 rounded-lg mt-2';
            errorMsg.textContent = 'Image failed to load';
            
            // Replace image with error message
            this.parentNode.insertBefore(errorMsg, this.nextSibling);
            this.style.display = 'none';
        });
    });

    // Add loading state to images
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('loading', 'lazy');
        
        img.addEventListener('load', function() {
            this.removeAttribute('loading');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
