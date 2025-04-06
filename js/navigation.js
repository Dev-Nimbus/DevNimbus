// Navigation.js - Handles navigation functionality

document.addEventListener("DOMContentLoaded", () => {
  initNavigation()
  initScrollEffects()
})

function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle")
  const nav = document.querySelector(".nav")

  if (!navToggle || !nav) return

  // Toggle navigation on mobile
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active")
    nav.classList.toggle("active")

    // Create toggle animation
    if (navToggle.classList.contains("active")) {
      // Create particle effect when opening
      if (window.animationUtils) {
        const rect = navToggle.getBoundingClientRect()
        const x = rect.left + rect.width / 2
        const y = rect.top + rect.height / 2

        window.animationUtils.createParticleEffect(x, y, document.body, 15)
      }
    }
  })

  // Close navigation when clicking outside
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("active") && !nav.contains(e.target) && !navToggle.contains(e.target)) {
      navToggle.classList.remove("active")
      nav.classList.remove("active")
    }
  })

  // Handle navigation links
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Close mobile navigation when clicking a link
      if (window.innerWidth < 768) {
        navToggle.classList.remove("active")
        nav.classList.remove("active")
      }

      // Smooth scroll to section if it's on the same page
      const href = link.getAttribute("href")

      if (href.startsWith("#")) {
        e.preventDefault()
        const targetSection = document.querySelector(href)

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Update active link based on scroll position
  updateActiveNavLink()
  window.addEventListener("scroll", updateActiveNavLink)
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let currentSection = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    const href = link.getAttribute("href")

    if (href === `#${currentSection}`) {
      link.classList.add("active")
    }
  })
}

function initScrollEffects() {
  const header = document.querySelector(".header")

  if (!header) return

  // Add scrolled class to header when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Animate elements when they come into view
  const animateOnScroll = document.querySelectorAll(".animate-on-scroll")

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  animateOnScroll.forEach((element) => {
    observer.observe(element)
  })
}

