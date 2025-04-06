// Animations.js - Handles all animation-related functionality

document.addEventListener("DOMContentLoaded", () => {
  // Initialize animations
  initParticles()
  initHologram()
  initDataStream()
  initServiceIcons()
  initTextAnimations()
})

// Create and animate particles in the background
function initParticles() {
  const particlesContainer = document.querySelector(".bg-particles")
  const numParticles = 50

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"

    // Random positioning
    const posX = Math.random() * 100
    const posY = Math.random() * 100

    // Random size
    const size = Math.random() * 3 + 1

    // Random animation delay
    const delay = Math.random() * 5

    // Set styles
    particle.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: var(--primary);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            box-shadow: 0 0 ${size * 3}px var(--glow-primary);
            animation: particleFloat ${Math.random() * 10 + 10}s infinite;
            animation-delay: ${delay}s;
        `

    particlesContainer.appendChild(particle)
  }
}

// Create and animate the hologram effect
function initHologram() {
  const hologram = document.querySelector(".hero-hologram")
  if (!hologram) return

  // Create hologram lines
  for (let i = 0; i < 20; i++) {
    const line = document.createElement("div")
    line.className = "hologram-line"

    // Position lines evenly
    const posY = i * 5

    // Set styles
    line.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: var(--primary);
            opacity: 0.1;
            transform: scaleX(${Math.random() * 0.5 + 0.5});
            animation: pulseOpacity ${Math.random() * 2 + 1}s infinite alternate;
            animation-delay: ${Math.random() * 2}s;
        `

    hologram.appendChild(line)
  }

  // Create hologram shape
  const shape = document.createElement("div")
  shape.className = "hologram-shape"
  shape.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60%;
        height: 70%;
        border: 2px solid var(--primary);
        border-radius: 10px;
        transform: translate(-50%, -50%);
        opacity: 0.2;
        animation: pulse 3s infinite;
    `

  hologram.appendChild(shape)

  // Add keyframes for pulse opacity
  const style = document.createElement("style")
  style.textContent = `
        @keyframes pulseOpacity {
            0% { opacity: 0.05; }
            100% { opacity: 0.2; }
        }
    `
  document.head.appendChild(style)
}

// Create and animate the data stream effect
function initDataStream() {
  const dataStream = document.querySelector(".hero-data-stream")
  if (!dataStream) return

  // Create data bits
  for (let i = 0; i < 100; i++) {
    const bit = document.createElement("div")
    bit.className = "data-bit"

    // Random positioning
    const posX = Math.random() * 100
    const posY = Math.random() * 100

    // Random size
    const size = Math.random() * 3 + 1

    // Random animation duration
    const duration = Math.random() * 3 + 2

    // Set styles
    bit.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size * 3}px;
            background-color: var(--primary);
            opacity: ${Math.random() * 0.3 + 0.1};
            animation: dataBitFall ${duration}s linear infinite;
            animation-delay: ${Math.random() * 3}s;
        `

    dataStream.appendChild(bit)
  }

  // Add keyframes for data bit fall
  const style = document.createElement("style")
  style.textContent = `
        @keyframes dataBitFall {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(1000%); }
        }
    `
  document.head.appendChild(style)
}

// Initialize service icons with animated elements
function initServiceIcons() {
  const serviceIcons = document.querySelectorAll(".service-icon")

  serviceIcons.forEach((icon, index) => {
    const iconShape = icon.querySelector(".icon-shape")
    if (!iconShape) return

    // Create icon based on index
    let iconContent

    switch (index) {
      case 0: // AI Integration
        iconContent = createAIIcon()
        break
      case 1: // Immersive UX
        iconContent = createUXIcon()
        break
      case 2: // Quantum Development
        iconContent = createQuantumIcon()
        break
      default:
        iconContent = createDefaultIcon()
    }

    iconShape.appendChild(iconContent)
  })
}

// Create AI icon with animated elements
function createAIIcon() {
  const icon = document.createElement("div")
  icon.className = "ai-icon"
  icon.style.cssText = `
        width: 100%;
        height: 100%;
        position: relative;
    `

  // Create brain shape
  const brain = document.createElement("div")
  brain.className = "brain-shape"
  brain.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 24px;
        height: 24px;
        border: 2px solid var(--primary);
        border-radius: 50%;
        transform: translate(-50%, -50%);
    `

  // Create connection lines
  for (let i = 0; i < 6; i++) {
    const line = document.createElement("div")
    line.className = "connection-line"

    const angle = (i * 60 * Math.PI) / 180
    const x = Math.cos(angle) * 15
    const y = Math.sin(angle) * 15

    line.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 2px;
            background-color: var(--primary);
            transform: translate(-50%, -50%) rotate(${i * 60}deg) translateX(12px);
            animation: pulseLine 2s infinite alternate;
            animation-delay: ${i * 0.3}s;
        `

    icon.appendChild(line)
  }

  icon.appendChild(brain)

  // Add keyframes for pulse line
  const style = document.createElement("style")
  style.textContent = `
        @keyframes pulseLine {
            0% { opacity: 0.3; width: 8px; }
            100% { opacity: 1; width: 12px; }
        }
    `
  document.head.appendChild(style)

  return icon
}

// Create UX icon with animated elements
function createUXIcon() {
  const icon = document.createElement("div")
  icon.className = "ux-icon"
  icon.style.cssText = `
        width: 100%;
        height: 100%;
        position: relative;
    `

  // Create screen shape
  const screen = document.createElement("div")
  screen.className = "screen-shape"
  screen.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 26px;
        height: 20px;
        border: 2px solid var(--primary);
        border-radius: 2px;
        transform: translate(-50%, -50%);
    `

  // Create screen elements
  const element1 = document.createElement("div")
  element1.style.cssText = `
        position: absolute;
        top: 25%;
        left: 20%;
        width: 60%;
        height: 2px;
        background-color: var(--primary);
        opacity: 0.7;
        animation: pulseOpacity 1.5s infinite alternate;
    `

  const element2 = document.createElement("div")
  element2.style.cssText = `
        position: absolute;
        top: 50%;
        left: 20%;
        width: 40%;
        height: 2px;
        background-color: var(--primary);
        opacity: 0.7;
        animation: pulseOpacity 1.5s infinite alternate;
        animation-delay: 0.5s;
    `

  const element3 = document.createElement("div")
  element3.style.cssText = `
        position: absolute;
        top: 75%;
        left: 20%;
        width: 50%;
        height: 2px;
        background-color: var(--primary);
        opacity: 0.7;
        animation: pulseOpacity 1.5s infinite alternate;
        animation-delay: 1s;
    `

  screen.appendChild(element1)
  screen.appendChild(element2)
  screen.appendChild(element3)
  icon.appendChild(screen)

  return icon
}

// Create Quantum icon with animated elements
function createQuantumIcon() {
  const icon = document.createElement("div")
  icon.className = "quantum-icon"
  icon.style.cssText = `
        width: 100%;
        height: 100%;
        position: relative;
    `

  // Create atom shape
  const atom = document.createElement("div")
  atom.className = "atom-shape"
  atom.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background-color: var(--primary);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: pulse 2s infinite;
    `

  // Create orbits
  for (let i = 0; i < 3; i++) {
    const orbit = document.createElement("div")
    orbit.className = "orbit"

    orbit.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${20 + i * 8}px;
            height: ${20 + i * 8}px;
            border: 1px solid var(--primary);
            border-radius: 50%;
            transform: translate(-50%, -50%) rotate(${i * 30}deg);
            animation: rotate ${3 + i}s linear infinite;
        `

    // Create electron
    const electron = document.createElement("div")
    electron.className = "electron"
    electron.style.cssText = `
            position: absolute;
            top: 0;
            left: 50%;
            width: 4px;
            height: 4px;
            background-color: var(--primary);
            border-radius: 50%;
            transform: translate(-50%, -50%);
        `

    orbit.appendChild(electron)
    icon.appendChild(orbit)
  }

  icon.appendChild(atom)

  return icon
}

// Create default icon
function createDefaultIcon() {
  const icon = document.createElement("div")
  icon.className = "default-icon"
  icon.style.cssText = `
        width: 100%;
        height: 100%;
        position: relative;
    `

  // Create gear shape
  const gear = document.createElement("div")
  gear.className = "gear-shape"
  gear.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 24px;
        height: 24px;
        border: 2px solid var(--primary);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: rotate 10s linear infinite;
    `

  // Create gear teeth
  for (let i = 0; i < 8; i++) {
    const tooth = document.createElement("div")
    tooth.className = "gear-tooth"

    const angle = (i * 45 * Math.PI) / 180

    tooth.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 3px;
            background-color: var(--primary);
            transform: translate(-50%, -50%) rotate(${i * 45}deg) translateX(15px);
        `

    gear.appendChild(tooth)
  }

  icon.appendChild(gear)

  return icon
}

// Initialize text animations
function initTextAnimations() {
  // Animate text elements with data-text attribute
  const textElements = document.querySelectorAll("[data-text]")

  textElements.forEach((element) => {
    const text = element.textContent
    element.setAttribute("data-text", text)
  })
}

// Export animation functions for use in other scripts
window.animationUtils = {
  animateElement: (element, animationName, duration = 1, delay = 0) => {
    if (!element) return

    element.style.animation = `${animationName} ${duration}s ${delay}s`
    element.style.animationFillMode = "forwards"
  },

  createParticleEffect: (x, y, container, count = 10) => {
    let gsap
    if (window.gsap) {
      gsap = window.gsap
    }
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div")

      // Random angle and distance
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * 50 + 20

      // Calculate end position
      const endX = Math.cos(angle) * distance
      const endY = Math.sin(angle) * distance

      // Random size
      const size = Math.random() * 5 + 2

      // Set styles
      particle.style.cssText = `
                position: absolute;
                top: ${y}px;
                left: ${x}px;
                width: ${size}px;
                height: ${size}px;
                background-color: var(--primary);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
            `

      // Add to container
      container.appendChild(particle)

      // Animate
      const duration = Math.random() * 0.5 + 0.5

      // Use GSAP if available, otherwise use basic animation
      if (gsap) {
        gsap.to(particle, {
          x: endX,
          y: endY,
          opacity: 0,
          duration: duration,
          onComplete: () => {
            particle.remove()
          },
        })
      } else {
        particle.animate(
          [
            { transform: "translate(0, 0)", opacity: 1 },
            { transform: `translate(${endX}px, ${endY}px)`, opacity: 0 },
          ],
          {
            duration: duration * 1000,
            easing: "ease-out",
            fill: "forwards",
          },
        ).onfinish = () => {
          particle.remove()
        }
      }
    }
  },
}

