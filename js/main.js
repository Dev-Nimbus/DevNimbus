// Main.js - Main functionality and initialization

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all components
  initInteractiveElements()
  initTestimonialSlider()
  initServiceCardEffects()
  initProjectCardEffects()
  initScrollReveal()
})

// Initialize interactive elements with hover and click effects
function initInteractiveElements() {
  // Add hover effects to buttons
  const buttons = document.querySelectorAll(".btn")

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", (e) => {
      // Create hover effect
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const circle = document.createElement("div")
      circle.classList.add("btn-hover-effect")
      circle.style.cssText = `
                position: absolute;
                top: ${y}px;
                left: ${x}px;
                width: 5px;
                height: 5px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                z-index: 0;
            `

      button.appendChild(circle)

      // Animate the circle
      circle.animate(
        [
          { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
          { transform: "translate(-50%, -50%) scale(50)", opacity: 0 },
        ],
        {
          duration: 500,
          easing: "ease-out",
          fill: "forwards",
        },
      ).onfinish = () => {
        circle.remove()
      }
    })

    button.addEventListener("click", (e) => {
      // Create click effect
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Create particle effect
      if (window.animationUtils) {
        window.animationUtils.createParticleEffect(e.clientX, e.clientY, document.body, 10)
      }
    })
  })

  // Add hover effects to service links
  const serviceLinks = document.querySelectorAll(".service-link, .project-link")

  serviceLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      // Animate the arrow
      const arrow = link.querySelector(".arrow")
      if (arrow) {
        arrow.style.transform = "translateX(5px)"
      }
    })

    link.addEventListener("mouseleave", () => {
      // Reset the arrow
      const arrow = link.querySelector(".arrow")
      if (arrow) {
        arrow.style.transform = "translateX(0)"
      }
    })
  })
}

// Initialize testimonial slider
function initTestimonialSlider() {
  const testimonialContainer = document.querySelector(".testimonials-container")
  const testimonials = document.querySelectorAll(".testimonial-card")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  const indicators = document.querySelectorAll(".indicator")

  if (!testimonialContainer || testimonials.length === 0) return

  let currentIndex = 0
  const testimonialCount = testimonials.length

  // Set up testimonial container
  testimonialContainer.style.display = "flex"
  testimonialContainer.style.transition = "transform 0.5s ease"

  // Initialize testimonial width based on screen size
  let testimonialWidth = 100

  function updateTestimonialWidth() {
    if (window.innerWidth >= 768) {
      testimonialWidth = testimonialContainer.clientWidth / 2
      testimonialContainer.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`
    } else {
      testimonialWidth = testimonialContainer.clientWidth
      testimonialContainer.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`
    }

    testimonials.forEach((testimonial) => {
      testimonial.style.minWidth = `${testimonialWidth}px`
    })
  }

  // Initial setup
  updateTestimonialWidth()
  window.addEventListener("resize", updateTestimonialWidth)

  // Update active indicator
  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active")
      } else {
        indicator.classList.remove("active")
      }
    })
  }

  // Next slide
  function nextSlide() {
    if (currentIndex < testimonialCount - 1) {
      currentIndex++
    } else {
      currentIndex = 0
    }

    testimonialContainer.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`
    updateIndicators()
  }

  // Previous slide
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--
    } else {
      currentIndex = testimonialCount - 1
    }

    testimonialContainer.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`
    updateIndicators()
  }

  // Add event listeners
  if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide)
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide)
  }

  // Add indicator click events
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index
      testimonialContainer.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`
      updateIndicators()
    })
  })

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000)
}

// Initialize service card effects
function initServiceCardEffects() {
  const serviceCards = document.querySelectorAll(".service-card")

  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      // Add glow effect
      card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px var(--glow-primary)"

      // Animate icon
      const iconGlow = card.querySelector(".icon-glow")
      if (iconGlow) {
        iconGlow.style.opacity = "0.4"
      }
    })

    card.addEventListener("mouseleave", () => {
      // Remove glow effect
      card.style.boxShadow = ""

      // Reset icon
      const iconGlow = card.querySelector(".icon-glow")
      if (iconGlow) {
        iconGlow.style.opacity = ""
      }
    })

    // Add parallax effect on mouse move
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Calculate rotation based on mouse position
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      // Apply transform
      card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    // Reset transform on mouse leave
    card.addEventListener("mouseleave", () => {
      card.style.transform = ""
    })
  })
}

// Initialize project card effects
function initProjectCardEffects() {
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      // Add glow effect
      card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px var(--glow-primary)"

      // Animate overlay
      const overlay = card.querySelector(".project-overlay")
      if (overlay) {
        overlay.style.opacity = "1"
      }
    })

    card.addEventListener("mouseleave", () => {
      // Remove glow effect
      card.style.boxShadow = ""

      // Reset overlay
      const overlay = card.querySelector(".project-overlay")
      if (overlay) {
        overlay.style.opacity = ""
      }
    })
  })
}

// Initialize scroll reveal animations
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".section-header, .service-card, .project-card, .testimonial-card, .founder-container",
  )

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed")

        // Add staggered animation to child elements
        const children = entry.target.children
        if (children.length > 0) {
          Array.from(children).forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("revealed")
            }, index * 100)
          })
        }

        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  revealElements.forEach((element) => {
    element.classList.add("reveal-element")
    observer.observe(element)
  })

  // Add CSS for reveal animations
  const style = document.createElement("style")
  style.textContent = `
        .reveal-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .reveal-element.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `
  document.head.appendChild(style)
}

