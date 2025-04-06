// Preloader.js - Handles preloader functionality

document.addEventListener("DOMContentLoaded", () => {
  initPreloader()
})

function initPreloader() {
  const preloader = document.querySelector(".preloader")
  const preloaderBar = document.querySelector(".preloader-bar")
  const preloaderText = document.querySelector(".preloader-text")

  if (!preloader || !preloaderBar || !preloaderText) return

  // Update preloader text with loading messages
  const loadingMessages = [
    "INITIALIZING SYSTEMS",
    "LOADING CORE MODULES",
    "CALIBRATING INTERFACE",
    "ESTABLISHING CONNECTION",
    "RENDERING ENVIRONMENT",
    "ACTIVATING ANIMATIONS",
    "LAUNCHING EXPERIENCE",
  ]

  let messageIndex = 0

  // Update loading message every 500ms
  const messageInterval = setInterval(() => {
    messageIndex = (messageIndex + 1) % loadingMessages.length

    // Animate text change
    preloaderText.style.opacity = "0"

    setTimeout(() => {
      preloaderText.textContent = loadingMessages[messageIndex]
      preloaderText.style.opacity = "1"
    }, 200)
  }, 500)

  // Simulate loading progress
  let progress = 0
  const progressInterval = setInterval(() => {
    progress += Math.random() * 10

    if (progress >= 100) {
      progress = 100
      clearInterval(progressInterval)
      clearInterval(messageInterval)

      // Update final message
      preloaderText.textContent = "WELCOME TO DEVNIMBUS"

      // Hide preloader after a delay
      setTimeout(() => {
        preloader.classList.add("fade-out")

        // Enable scrolling on body
        document.body.style.overflow = "auto"

        // Remove preloader from DOM after animation completes
        setTimeout(() => {
          preloader.style.display = "none"

          // Trigger entrance animations for hero section
          animateHeroEntrance()
        }, 800)
      }, 500)
    }

    preloaderBar.style.width = `${progress}%`
  }, 150)

  // Disable scrolling on body while preloader is active
  document.body.style.overflow = "hidden"
}

function animateHeroEntrance() {
  // Animate hero elements with a staggered delay
  const heroTitle = document.querySelector(".hero-title")
  const heroSubtitle = document.querySelector(".hero-subtitle")
  const heroButtons = document.querySelector(".hero-buttons")

  if (heroTitle) {
    heroTitle.style.opacity = "1"
    heroTitle.style.transform = "translateY(0)"
  }

  if (heroSubtitle) {
    setTimeout(() => {
      heroSubtitle.style.opacity = "1"
      heroSubtitle.style.transform = "translateY(0)"
    }, 300)
  }

  if (heroButtons) {
    setTimeout(() => {
      heroButtons.style.opacity = "1"
      heroButtons.style.transform = "translateY(0)"
    }, 600)
  }
}

