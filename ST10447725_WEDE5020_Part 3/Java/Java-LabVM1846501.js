// FILE: script.js
// Single JavaScript file for The Odd Jobbers website
// Contains all functionality for all pages

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components when DOM is loaded
    initializeNavigation();
    initializeForms();
    initializeInteractiveElements();
    
    // Page-specific initializations
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'service.html') {
        initializeServicePage();
    }
    
    if (currentPage === 'contact.html') {
        initializeContactPage();
    }
    
    if (currentPage === 'enquiry.html') {
        initializeEnquiryPage();
    }
});

// ========================
// NAVIGATION FUNCTIONALITY
// ========================

function initializeNavigation() {
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Mobile menu functionality (for future responsive design)
    setupMobileMenu();
}

function setupMobileMenu() {
    // This can be expanded for mobile menu toggle
    console.log('Navigation ready for mobile enhancements');
}

// ========================
// FORM HANDLING
// ========================

function initializeForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                handleFormSubmission(this);
            }
        });
        
        // Add real-time validation
        addRealTimeValidation(form);
    });
}

function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            highlightField(field, true, 'This field is required');
        } else {
            highlightField(field, false);
            
            // Email validation
            if (field.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    isValid = false;
                    highlightField(field, true, 'Please enter a valid email address');
                }
            }
            
            // Phone validation (if provided)
            if (field.type === 'tel' && field.value.trim()) {
                const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                if (!phoneRegex.test(field.value)) {
                    isValid = false;
                    highlightField(field, true, 'Please enter a valid phone number');
                }
            }
        }
    });
    
    return isValid;
}

function addRealTimeValidation(form) {
    const fields = form.querySelectorAll('input, textarea, select');
    
    fields.forEach(field => {
        field.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                highlightField(this, true, 'This field is required');
            } else {
                highlightField(this, false);
            }
        });
        
        // Clear errors on input
        field.addEventListener('input', function() {
            if (this.value.trim()) {
                highlightField(this, false);
            }
        });
    });
}

function highlightField(field, isError, message = '') {
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    if (isError) {
        field.style.borderColor = '#ff4444';
        
        // Add error message
        if (message) {
            const errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.color = '#ff4444';
            errorElement.style.fontSize = '0.8rem';
            errorElement.style.marginTop = '5px';
            errorElement.textContent = message;
            field.parentNode.appendChild(errorElement);
        }
    } else {
        field.style.borderColor = '#ccc';
    }
}

function handleFormSubmission(form) {
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    // Collect form data
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Success message
        showNotification('Thank you for your submission! We will contact you soon.', 'success');
        
        // Reset form
        form.reset();
        
        // Restore button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // For enquiry form, you might want to redirect or show specific next steps
        if (form.id === 'enquiryForm') {
            console.log('Enquiry submitted:', data);
            // Additional enquiry-specific logic can go here
        }
    }, 1500);
}

// ========================
// INTERACTIVE ELEMENTS
// ========================

function initializeInteractiveElements() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Button loading states
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
            // Add visual feedback for buttons
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Image lazy loading enhancement
    setupLazyLoading();
}

function setupLazyLoading() {
    // This can be expanded for lazy loading images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for fade-in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // Force load if already cached
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
}

// ========================
// SERVICE PAGE FUNCTIONALITY
// ========================

function initializeServicePage() {
    initializeServiceCards();
    setupServiceInteractions();
}

function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('#services > div > div');
    
    serviceCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        // Add click event to service cards
        card.addEventListener('click', function() {
            const serviceTitle = this.querySelector('h3').textContent;
            console.log('Service selected:', serviceTitle);
            
            // Store selected service for enquiry form
            localStorage.setItem('selectedService', serviceTitle);
        });
    });
}

function setupServiceInteractions() {
    // Quick quote buttons
    const quickQuoteButtons = document.querySelectorAll('.button[href="enquiry.html"]');
    quickQuoteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const serviceCard = this.closest('div');
            if (serviceCard) {
                const serviceTitle = serviceCard.querySelector('h3').textContent;
                localStorage.setItem('selectedService', serviceTitle);
            }
        });
    });
}

// ========================
// CONTACT PAGE FUNCTIONALITY
// ========================

function initializeContactPage() {
    initializeMap();
    initializeContactInfo();
    updateBusinessHoursStatus();
}

function initializeMap() {
    const mapIframe = document.querySelector('iframe');
    
    if (mapIframe) {
        // Add loading indicator for map
        const mapContainer = mapIframe.parentElement;
        const loadingIndicator = document.createElement('div');
        loadingIndicator.textContent = 'Loading map...';
        loadingIndicator.style.textAlign = 'center';
        loadingIndicator.style.padding = '20px';
        mapContainer.insertBefore(loadingIndicator, mapIframe);
        
        mapIframe.style.display = 'none';
        
        mapIframe.addEventListener('load', function() {
            loadingIndicator.remove();
            this.style.display = 'block';
            console.log('Map loaded successfully');
        });
        
        mapIframe.addEventListener('error', function() {
            loadingIndicator.textContent = 'Unable to load map. Please check your internet connection.';
            loadingIndicator.style.color = '#ff4444';
        });
    }
}

function initializeContactInfo() {
    const contactInfo = document.querySelector('address');
    
    if (contactInfo) {
        // Make phone number clickable
        const phoneElement = contactInfo.querySelector('p:nth-child(2)');
        if (phoneElement) {
            const phoneMatch = phoneElement.textContent.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
            if (phoneMatch) {
                const phoneNumber = phoneMatch[0];
                const cleanNumber = phoneNumber.replace(/\D/g, '');
                phoneElement.innerHTML = phoneElement.innerHTML.replace(
                    phoneNumber, 
                    `<a href="tel:${cleanNumber}" style="color: #007bff; text-decoration: none;">${phoneNumber}</a>`
                );
            }
        }
        
        // Make email clickable
        const emailElement = contactInfo.querySelector('p:first-child');
        if (emailElement) {
            const emailMatch = emailElement.textContent.match(/\S+@\S+\.\S+/);
            if (emailMatch) {
                const email = emailMatch[0];
                emailElement.innerHTML = emailElement.innerHTML.replace(
                    email,
                    `<a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>`
                );
            }
        }
    }
}

function updateBusinessHoursStatus() {
    const statusElement = document.createElement('div');
    statusElement.style.padding = '10px';
    statusElement.style.margin = '10px 0';
    statusElement.style.borderRadius = '5px';
    statusElement.style.fontWeight = 'bold';
    
    if (isWithinBusinessHours()) {
        statusElement.textContent = '✓ We are currently open and ready to help!';
        statusElement.style.backgroundColor = '#d4edda';
        statusElement.style.color = '#155724';
        statusElement.style.border = '1px solid #c3e6cb';
    } else {
        statusElement.textContent = '✗ We are currently closed. Please leave a message and we will get back to you during business hours.';
        statusElement.style.backgroundColor = '#f8d7da';
        statusElement.style.color = '#721c24';
        statusElement.style.border = '1px solid #f5c6cb';
    }
    
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        const contactInfo = contactSection.querySelector('h3').nextElementSibling;
        contactInfo.parentNode.insertBefore(statusElement, contactInfo);
    }
}

function isWithinBusinessHours() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();
    
    // Monday to Friday, 8 AM to 5 PM
    return (day >= 1 && day <= 5 && hour >= 8 && hour < 17);
}

// ========================
// ENQUIRY PAGE FUNCTIONALITY
// ========================

function initializeEnquiryPage() {
    prefillServiceType();
    setupEnquiryFormEnhancements();
}

function prefillServiceType() {
    // Check if a service was selected from the services page
    const selectedService = localStorage.getItem('selectedService');
    if (selectedService) {
        const serviceSelect = document.getElementById('serviceType');
        if (serviceSelect) {
            // Try to find matching option
            for (let option of serviceSelect.options) {
                if (option.text.includes(selectedService) || selectedService.includes(option.text)) {
                    option.selected = true;
                    break;
                }
            }
            
            // Clear the stored selection
            localStorage.removeItem('selectedService');
        }
    }
}

function setupEnquiryFormEnhancements() {
    const serviceSelect = document.getElementById('serviceType');
    const jobDetails = document.getElementById('jobDetails');
    
    if (serviceSelect && jobDetails) {
        // Add placeholder text based on service selection
        serviceSelect.addEventListener('change', function() {
            const placeholders = {
                'parcel': 'Please describe what you need delivered, including size, weight, pickup and delivery addresses...',
                'furniture': 'Please describe the furniture items, dimensions, pickup and delivery locations...',
                'apartment_move': 'Please tell us about your move: number of rooms, large items, current and new address...',
                'retail_pickup': 'Which store, what items, delivery address, and any special instructions...',
                'event_help': 'Please describe your event, what needs setup/takedown, date, location...',
                'custom': 'Tell us about your unique request and how we can help...'
            };
            
            jobDetails.placeholder = placeholders[this.value] || 'Please provide details about your job...';
        });
        
        // Trigger change event to set initial placeholder
        serviceSelect.dispatchEvent(new Event('change'));
    }
}

// ========================
// UTILITY FUNCTIONS
// ========================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.color = 'white';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    notification.style.maxWidth = '300px';
    
    // Style based on type
    const styles = {
        'success': { backgroundColor: '#28a745' },
        'error': { backgroundColor: '#dc3545' },
        'info': { backgroundColor: '#007bff' },
        'warning': { backgroundColor: '#ffc107', color: '#212529' }
    };
    
    Object.assign(notification.style, styles[type] || styles.info);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 5000);
}

function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    if (cleaned.length === 10) {
        return '(' + cleaned.substring(0, 3) + ') ' + 
               cleaned.substring(3, 6) + '-' + 
               cleaned.substring(6, 10);
    }
    
    return phoneNumber;
}

// Export functions for potential module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateForm,
        formatPhoneNumber,
        isWithinBusinessHours
    };
}

