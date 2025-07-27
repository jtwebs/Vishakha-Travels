// FAQ Toggle Functionality
function toggleFAQ(element) {
  const faqItem = element.parentElement
  const isActive = faqItem.classList.contains("active")

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active")
  })

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active")
  }
}

// Booking Form Submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const name = formData.get("name")
  const phone = formData.get("phone")
  const from = formData.get("from") || "Solapur"
  const to = formData.get("to")
  const date = formData.get("date")
  const passengers = formData.get("passengers")
  const details = formData.get("details") || "No additional details"

  // Create WhatsApp message
  const message = `Hi! I want to book Force Traveller from Solapur.

*Booking Details:*
Name: ${name}
Phone: ${phone}
From: ${from}
To: ${to}
Travel Date: ${date}
Passengers: ${passengers}
Additional Details: ${details}

Please send me a quote. Thank you!`

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message)

  // Open WhatsApp
  window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank")
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)"
  }
})

// Route card click handlers
document.querySelectorAll(".route-card").forEach((card) => {
  card.addEventListener("click", function () {
    const destination = this.querySelector("h3").textContent
    const message = `Hi! I'm interested in booking Force Traveller from Solapur to ${destination}. Please send me details and quote.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank")
  })
})

// Gallery image lazy loading
const observerOptions = {
  threshold: 0.1,
  rootMargin: "50px",
}

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.style.opacity = "1"
      imageObserver.unobserve(img)
    }
  })
}, observerOptions)

// Observe all images
document.querySelectorAll("img").forEach((img) => {
  imageObserver.observe(img)
})

// Form validation
function validateForm() {
  const requiredFields = document.querySelectorAll("input[required], textarea[required]")
  let isValid = true

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      field.style.borderColor = "#ef4444"
      isValid = false
    } else {
      field.style.borderColor = "#e5e7eb"
    }
  })

  return isValid
}

// Phone number formatting
document.getElementById("phone").addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "")
  if (value.length > 0 && !value.startsWith("91")) {
    if (value.length === 10) {
      value = "91" + value
    }
  }
  if (value.length > 12) {
    value = value.substring(0, 12)
  }
  e.target.value = value ? "+" + value : ""
})

// Date input minimum date (today)
document.getElementById("date").min = new Date().toISOString().split("T")[0]

// Animate elements on scroll
const animateOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  },
  { threshold: 0.1 },
)

// Apply animation to cards and sections
document.querySelectorAll(".feature-card, .route-card, .testimonial-card, .benefit-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  animateOnScroll.observe(el)
})

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
  // Implementation for mobile menu if needed
  console.log("Mobile menu toggle")
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Solapur Travels website loaded successfully!")

  // Set current year in footer
  const currentYear = new Date().getFullYear()
  document.querySelector(".footer-bottom p").innerHTML = document
    .querySelector(".footer-bottom p")
    .innerHTML.replace("2024", currentYear)
})
