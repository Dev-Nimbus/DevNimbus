// Contact.js - Handles contact form functionality

document.addEventListener("DOMContentLoaded", () => {
  initContactForm()
  initFaqAccordion()
  initMapAnimation()
})

// Initialize contact form with animations and validation
function initContactForm() {
  const contactForm = document.getElementById("contactForm")
  const formInputs = document.querySelectorAll(".form-input, .form-textarea")

  if (!contactForm) return

  // Add focus animations to form fields
  formInputs.forEach((input) => {
    // Create floating label effect
    input.addEventListener("focus", () => {
      const label = input.previousElementSibling
      if (label && label.classList.contains("form-label")) {
        label.style.color = "var(--primary)"
        label.style.transform = "translateY(-20px) scale(0.8)"
      }

      // Animate form line
      const line = input.nextElementSibling
      if (line && line.classList.contains("form-line")) {
        line.style.backgroundColor = "var(--primary)"
        line.style.height = "2px"
        line.style.boxShadow = "0 0 5px var(--glow-primary)"
      }
    })

    // Reset styles on blur if field is empty
    input.addEventListener("blur", () => {
      const label = input.previousElementSibling
      if (label && label.classList.contains("form-label") && !input.value) {
        label.style.color = ""
        label.style.transform = ""
      }

      // Reset form line
      const line = input.nextElementSibling
      if (line && line.classList.contains("form-line")) {
        line.style.backgroundColor = ""
        line.style.height = ""
        line.style.boxShadow = ""
      }
    })

    // Keep label up if field has value
    if (input.value) {
      const label = input.previousElementSibling
      if (label && label.classList.contains("form-label")) {
        label.style.transform = "translateY(-20px) scale(0.8)"
      }
    }
  })

  // Form submission with validation and animation
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Validate form
    let isValid = true
    formInputs.forEach((input) => {
      if (input.required && !input.value.trim()) {
        isValid = false

        // Highlight invalid field
        input.style.borderColor = "red"

        // Shake animation
        input.animate(
          [
            { transform: "translateX(0)" },
            { transform: "translateX(-5px)" },
            { transform: "translateX(5px)" },
            { transform: "translateX(-5px)" },
            { transform: "translateX(5px)" },
            { transform: "translateX(0)" },
          ],
          {
            duration: 300,
            easing: "ease-in-out",
          },
        )

        // Reset after animation
        setTimeout(() => {
          input.style.borderColor = ""
        }, 500)
      }
    })

    if (isValid) {
      // Show success animation
      const submitBtn = contactForm.querySelector('button[type="submit"]')

      if (submitBtn) {
        // Disable button and show loading state
        submitBtn.disabled = true
        const originalText = submitBtn.querySelector(".btn-text").textContent
        submitBtn.querySelector(".btn-text").textContent = "Sending..."

        // Create loading animation
        const loadingDots = document.createElement("div")
        loadingDots.className = "loading-dots"
        loadingDots.innerHTML = "<span></span><span></span><span></span>"
        submitBtn.appendChild(loadingDots)

        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
          // Remove loading state
          submitBtn.disabled = false
          submitBtn.querySelector(".btn-text").textContent = "Message Sent!"
          loadingDots.remove()

          // Add success icon
          const successIcon = document.createElement("div")
          successIcon.className = "success-icon"
          successIcon.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
          submitBtn.querySelector(".btn-icon").appendChild(successIcon)

          // Reset form
          contactForm.reset()

          // Reset button after delay
          setTimeout(() => {
            submitBtn.querySelector(".btn-text").textContent = originalText
            if (successIcon) {
              successIcon.remove()
            }
          }, 3000)

          // Create success message
          const successMessage = document.createElement("div")
          successMessage.className = "success-message"
          successMessage.textContent = "Your message has been sent successfully. We will get back to you soon!"
          successMessage.style.cssText = `
                        color: var(--primary);
                        padding: var(--spacing-md);
                        margin-top: var(--spacing-md);
                        border: 1px solid var(--primary);
                        border-radius: var(--border-radius-md);
                        text-align: center;
                        opacity: 0;
                        transform: translateY(20px);
                        transition: opacity 0.3s, transform 0.3s;
                    `

          contactForm.appendChild(successMessage)

          // Animate success message
          setTimeout(() => {
            successMessage.style.opacity = "1"
            successMessage.style.transform = "translateY(0)"
          }, 100)

          // Remove success message after delay
          setTimeout(() => {
            successMessage.style.opacity = "0"
            successMessage.style.transform = "translateY(20px)"

            setTimeout(() => {
              successMessage.remove()
            }, 300)
          }, 5000)
        }, 2000)
      }
    }
  })

  // Add CSS for loading animation
  const style = document.createElement("style")
  style.textContent = `
        .loading-dots {
            display: inline-flex;
            margin-left: 10px;
        }
        
        .loading-dots span {
            width: 5px;
            height: 5px;
            margin: 0 2px;
            background-color: currentColor;
            border-radius: 50%;
            animation: loadingDots 1s infinite;
        }
        
        .loading-dots span:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .loading-dots span:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes loadingDots {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        
        .success-icon {
            width: 16px;
            height: 16px;
            color: currentColor;
        }
    `
  document.head.appendChild(style)
}

// Initialize FAQ accordion functionality
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    if (question) {
      question.addEventListener("click", () => {
        // Toggle active class
        const isActive = item.classList.contains("active")

        // Close all items
        faqItems.forEach((faq) => {
          faq.classList.remove("active")
        })

        // Open clicked item if it wasn't already open
        if (!isActive) {
          item.classList.add("active")

          // Create particle effect
          if (window.animationUtils) {
            const rect = question.getBoundingClientRect()
            const x = rect.left + rect.width - 20
            const y = rect.top + rect.height / 2

            window.animationUtils.createParticleEffect(x, y, document.body, 8)
          }
        }
      })
    }
  })

  // Open first FAQ item by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add("active")
  }
}

// Initialize map animations
function initMapAnimation() {
  const mapContainer = document.querySelector(".map-container")

  if (!mapContainer) return

  // Create map elements
  createMapElements(mapContainer)

  // Add hover effect
  mapContainer.addEventListener("mousemove", (e) => {
    const rect = mapContainer.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Update highlight position
    const highlight = mapContainer.querySelector(".map-highlight")
    if (highlight) {
      highlight.style.left = `${x}px`
      highlight.style.top = `${y}px`
      highlight.style.opacity = "1"
    }
  })

  mapContainer.addEventListener("mouseleave", () => {
    // Hide highlight
    const highlight = mapContainer.querySelector(".map-highlight")
    if (highlight) {
      highlight.style.opacity = "0"
    }
  })
}

// Create map elements
function createMapElements(container) {
  const mapPlaceholder = container.querySelector(".map-placeholder")

  if (!mapPlaceholder) return

  // Create map highlight
  const highlight = document.createElement("div")
  highlight.className = "map-highlight"
  highlight.style.cssText = `
        position: absolute;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle, rgba(0, 136, 255, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s;
    `

  mapPlaceholder.appendChild(highlight)

  // Create map lines
  for (let i = 0; i < 5; i++) {
    const line = document.createElement("div")
    line.className = "map-line"

    const isHorizontal = Math.random() > 0.5
    const position = Math.random() * 80 + 10 // 10% to 90%

    line.style.cssText = `
            position: absolute;
            background-color: var(--primary);
            opacity: 0.2;
            ${
              isHorizontal
                ? `top: ${position}%;
                left: 0;
                width: 100%;
                height: 1px;`
                : `top: 0;
                left: ${position}%;
                width: 1px;
                height: 100%;`
            }
        `

    mapPlaceholder.appendChild(line)
  }

  // Create map dots
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("div")
    dot.className = "map-dot"

    const x = Math.random() * 90 + 5 // 5% to 95%
    const y = Math.random() * 90 + 5 // 5% to 95%
    const size = Math.random() * 3 + 1 // 1px to 4px

    dot.style.cssText = `
            position: absolute;
            top: ${y}%;
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background-color: var(--primary);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.1};
        `

    mapPlaceholder.appendChild(dot)
  }

  // Create second ripple with delay
  const ripple2 = document.createElement("div")
  ripple2.className = "map-ripple"
  ripple2.style.animationDelay = "1s"

  const mapOverlay = container.querySelector(".map-overlay")
  if (mapOverlay) {
    mapOverlay.appendChild(ripple2)
  }
}

