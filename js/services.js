// Services.js - Handles services page functionality

document.addEventListener("DOMContentLoaded", () => {
  initServiceIcons()
  initServiceAnimations()
  initProcessSteps()
})

// Initialize service icons with animated elements
function initServiceIcons() {
  const serviceIcons = document.querySelectorAll(".service-icon-large")

  serviceIcons.forEach((icon, index) => {
    const iconShape = icon.querySelector(".icon-shape-large")
    if (!iconShape) return

    // Create icon based on index/section
    let iconContent
    const sectionId = icon.closest(".service-detail")?.id || ""

    switch (sectionId) {
      case "ai":
        iconContent = createAIIcon(true)
        break
      case "ux":
        iconContent = createUXIcon(true)
        break
      case "quantum":
        iconContent = createQuantumIcon(true)
        break
      case "robotics":
        iconContent = createRoboticsIcon()
        break
      case "vr":
        iconContent = createVRIcon()
        break
      default:
        iconContent = createDefaultIcon(true)
    }

    iconShape.appendChild(iconContent)
  })
}

// Create AI icon with animated elements (large version)
function createAIIcon(isLarge = false) {
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
        width: ${isLarge ? "40px" : "24px"};
        height: ${isLarge ? "40px" : "24px"};
        border: 2px solid var(--primary);
        border-radius: 50%;
        transform: translate(-50%, -50%);
    `

  // Create connection lines
  for (let i = 0; i < 6; i++) {
    const line = document.createElement("div")
    line.className = "connection-line"

    const angle = (i * 60 * Math.PI) / 180

    line.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${isLarge ? "15px" : "10px"};
            height: 2px;
            background-color: var(--primary);
            transform: translate(-50%, -50%) rotate(${i * 60}deg) translateX(${isLarge ? "25px" : "12px"});
            animation: pulseLine 2s infinite alternate;
            animation-delay: ${i * 0.3}s;
        `

    icon.appendChild(line)
  }

  icon.appendChild(brain)

  return icon
}

// Create UX icon with animated elements (large version)
function createUXIcon(isLarge = false) {
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
        width: ${isLarge ? "50px" : "26px"};
        height: ${isLarge ? "40px" : "20px"};
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

// Create Quantum icon with animated elements (large version)
function createQuantumIcon(isLarge = false) {
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
        width: ${isLarge ? "15px" : "10px"};
        height: ${isLarge ? "15px" : "10px"};
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
            width: ${isLarge ? 30 + i * 12 : 20 + i * 8}px;
            height: ${isLarge ? 30 + i * 12 : 20 + i * 8}px;
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
            width: ${isLarge ? "6px" : "4px"};
            height: ${isLarge ? "6px" : "4px"};
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

// Create Robotics icon
function createRoboticsIcon() {
  const icon = document.createElement("div")
  icon.className = "robotics-icon"
  icon.style.cssText = `
        width: 100%;
        height: 100%;
        position: relative;
    `

  // Create robot head
  const head = document.createElement("div")
  head.className = "robot-head"
  head.style.cssText = `
        position: absolute;
        top: 30%;
        left: 50%;
        width: 30px;
        height: 30px;
        border: 2px solid var(--primary);
        border-radius: 5px;
        transform: translateX(-50%);
    `

  // Create robot eyes
  const leftEye = document.createElement("div")
  leftEye.style.cssText = `
        position: absolute;
        top: 30%;
        left: 25%;
        width: 6px;
        height: 6px;
        background-color: var(--primary);
        border-radius: 50%;
        animation: blink 3s infinite;
    `

  const rightEye = document.createElement("div")
  rightEye.style.cssText = `
        position: absolute;
        top: 30%;
        right: 25%;
        width: 6px;
        height: 6px;
        background-color: var(--primary);
        border-radius: 50%;
        animation: blink 3s infinite;
    `

  // Create robot body
  const body = document.createElement("div")
  body.className = "robot-body"
  body.style.cssText = `
        position: absolute;
        top: 65%;
        left: 50%;
        width: 40px;
        height: 25px;
        border: 2px solid var(--primary);
        border-radius: 3px;
        transform: translateX(-50%);
    `

  // Add parts to robot
  head.appendChild(leftEye)
  head.appendChild(rightEye)
  icon.appendChild(head)
  icon.appendChild(body)

  return icon
}

// Create VR icon
function createVRIcon() {
  const icon = document.createElement("div")
  icon.className = "vr-icon"
  icon.style.cssText = `
        width: 100%;
        height: 100%;
        position: relative;
    `

  // Create VR headset
  const headset = document.createElement("div")
  headset.className = "vr-headset"
  headset.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 30px;
        border: 2px solid var(--primary);
        border-radius: 10px;
        transform: translate(-50%, -50%);
    `

  // Create lenses
  const leftLens = document.createElement("div")
  leftLens.style.cssText = `
        position: absolute;
        top: 50%;
        left: 30%;
        width: 10px;
        height: 10px;
        background-color: var(--primary);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.5;
        animation: pulse 2s infinite;
    `

  const rightLens = document.createElement("div")
  rightLens.style.cssText = `
        position: absolute;
        top: 50%;
        right: 30%;
        width: 10px;
        height: 10px;
        background-color: var(--primary);
        border-radius: 50%;
        transform: translate(50%, -50%);
        opacity: 0.5;
        animation: pulse 2s infinite;
        animation-delay: 0.5s;
    `

  // Add lenses to headset
  headset.appendChild(leftLens)
  headset.appendChild(rightLens)
  icon.appendChild(headset)

  return icon
}

// Create default icon
function createDefaultIcon(isLarge = false) {
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
        width: ${isLarge ? "40px" : "24px"};
        height: ${isLarge ? "40px" : "24px"};
        border: 2px solid var(--primary);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: rotate 10s linear infinite;
    `

  // Create gear teeth
  for (let i = 0; i < 8; i++) {
    const tooth = document.createElement("div")
    tooth.className = "gear-tooth"

    tooth.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${isLarge ? "12px" : "8px"};
            height: 3px;
            background-color: var(--primary);
            transform: translate(-50%, -50%) rotate(${i * 45}deg) translateX(${isLarge ? "25px" : "15px"});
        `

    gear.appendChild(tooth)
  }

  icon.appendChild(gear)

  return icon
}

// Initialize service animations
function initServiceAnimations() {
  const serviceVisuals = document.querySelectorAll(".service-visual-animation")

  serviceVisuals.forEach((visual) => {
    // Add additional animated elements based on class
    if (visual.classList.contains("ai-animation")) {
      addAIAnimationElements(visual)
    } else if (visual.classList.contains("quantum-animation")) {
      addQuantumAnimationElements(visual)
    } else if (visual.classList.contains("robotics-animation")) {
      addRoboticsAnimationElements(visual)
    } else if (visual.classList.contains("vr-animation")) {
      addVRAnimationElements(visual)
    }
  })
}

// Add additional AI animation elements
function addAIAnimationElements(container) {
  // Add neural network nodes
  for (let i = 0; i < 20; i++) {
    const node = document.createElement("div")

    const x = Math.random() * 80 + 10 // 10% to 90%
    const y = Math.random() * 80 + 10 // 10% to 90%
    const size = Math.random() * 6 + 4 // 4px to 10px

    node.style.cssText = `
            position: absolute;
            top: ${y}%;
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background-color: var(--primary);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: pulse ${Math.random() * 2 + 2}s infinite;
            animation-delay: ${Math.random() * 2}s;
        `

    container.appendChild(node)
  }

  // Add connection lines
  for (let i = 0; i < 30; i++) {
    const line = document.createElement("div")

    const startX = Math.random() * 80 + 10
    const startY = Math.random() * 80 + 10
    const endX = Math.random() * 80 + 10
    const endY = Math.random() * 80 + 10

    const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))
    const angle = (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI

    line.style.cssText = `
            position: absolute;
            top: ${startY}%;
            left: ${startX}%;
            width: ${length}%;
            height: 1px;
            background-color: var(--primary);
            transform: rotate(${angle}deg);
            transform-origin: left center;
            opacity: ${Math.random() * 0.3 + 0.1};
        `

    container.appendChild(line)
  }
}

// Add additional Quantum animation elements
function addQuantumAnimationElements(container) {
  // Add more orbits
  for (let i = 0; i < 3; i++) {
    const orbit = document.createElement("div")

    orbit.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${100 + i * 30}px;
            height: ${100 + i * 30}px;
            border: 1px solid var(--primary);
            border-radius: 50%;
            transform: translate(-50%, -50%) rotate(${i * 20}deg);
            animation: rotate ${10 + i * 5}s linear infinite;
            opacity: ${0.3 - i * 0.05};
        `

    container.appendChild(orbit)
  }

  // Add particles
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div")

    const angle = Math.random() * Math.PI * 2
    const distance = Math.random() * 100 + 20
    const x = 50 + (Math.cos(angle) * distance) / 2
    const y = 50 + (Math.sin(angle) * distance) / 2
    const size = Math.random() * 4 + 2

    particle.style.cssText = `
            position: absolute;
            top: ${y}%;
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background-color: var(--primary);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: particleFloat ${Math.random() * 5 + 5}s infinite;
            animation-delay: ${Math.random() * 2}s;
        `

    container.appendChild(particle)
  }
}

// Add additional Robotics animation elements
function addRoboticsAnimationElements(container) {
  // Add robot arms
  const leftArm = document.createElement("div")
  leftArm.style.cssText = `
        position: absolute;
        top: 60%;
        left: 30%;
        width: 40px;
        height: 2px;
        background-color: var(--primary);
        transform-origin: right center;
        animation: robotArmLeft 4s infinite alternate;
    `

  const rightArm = document.createElement("div")
  rightArm.style.cssText = `
        position: absolute;
        top: 60%;
        right: 30%;
        width: 40px;
        height: 2px;
        background-color: var(--primary);
        transform-origin: left center;
        animation: robotArmRight 4s infinite alternate;
    `

  // Add robot legs
  const leftLeg = document.createElement("div")
  leftLeg.style.cssText = `
        position: absolute;
        top: 75%;
        left: 40%;
        width: 2px;
        height: 40px;
        background-color: var(--primary);
    `

  const rightLeg = document.createElement("div")
  rightLeg.style.cssText = `
        position: absolute;
        top: 75%;
        right: 40%;
        width: 2px;
        height: 40px;
        background-color: var(--primary);
    `

  // Add keyframes for robot arms
  const style = document.createElement("style")
  style.textContent = `
        @keyframes robotArmLeft {
            0% { transform: rotate(30deg); }
            100% { transform: rotate(-30deg); }
        }
        
        @keyframes robotArmRight {
            0% { transform: rotate(-30deg); }
            100% { transform: rotate(30deg); }
        }
    `
  document.head.appendChild(style)

  container.appendChild(leftArm)
  container.appendChild(rightArm)
  container.appendChild(leftLeg)
  container.appendChild(rightLeg)
}

// Add additional VR animation elements
function addVRAnimationElements(container) {
  // Add VR environment elements
  const grid = document.createElement("div")
  grid.style.cssText = `
        position: absolute;
        bottom: 20%;
        left: 0;
        width: 100%;
        height: 60%;
        background-image: 
            linear-gradient(90deg, var(--primary) 1px, transparent 1px),
            linear-gradient(0deg, var(--primary) 1px, transparent 1px);
        background-size: 20px 20px;
        opacity: 0.1;
        transform: perspective(500px) rotateX(60deg);
    `

  // Add floating objects
  for (let i = 0; i < 8; i++) {
    const object = document.createElement("div")

    const size = Math.random() * 15 + 10
    const x = Math.random() * 70 + 15
    const y = Math.random() * 50 + 20

    // Random shape (cube or sphere)
    const isSquare = Math.random() > 0.5

    object.style.cssText = `
            position: absolute;
            top: ${y}%;
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background-color: transparent;
            border: 1px solid var(--primary);
            ${isSquare ? "border-radius: 2px;" : "border-radius: 50%;"}
            opacity: ${Math.random() * 0.3 + 0.2};
            animation: float ${Math.random() * 4 + 3}s infinite alternate;
            animation-delay: ${Math.random() * 2}s;
        `

    container.appendChild(object)
  }

  container.appendChild(grid)
}

// Initialize process steps with animations
function initProcessSteps() {
  const processSteps = document.querySelectorAll(".process-step")

  processSteps.forEach((step, index) => {
    // Add hover effect
    step.addEventListener("mouseenter", () => {
      // Highlight step number
      const stepNumber = step.querySelector(".step-number")
      if (stepNumber) {
        stepNumber.style.opacity = "1"
        stepNumber.style.color = "var(--primary)"
        stepNumber.style.textShadow = "0 0 10px var(--glow-primary)"
      }
    })

    step.addEventListener("mouseleave", () => {
      // Reset step number
      const stepNumber = step.querySelector(".step-number")
      if (stepNumber) {
        stepNumber.style.opacity = ""
        stepNumber.style.color = ""
        stepNumber.style.textShadow = ""
      }
    })

    // Add observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate step when it comes into view
            step.style.opacity = "0"
            step.style.transform = "translateY(30px)"

            setTimeout(() => {
              step.style.transition = "opacity 0.6s ease, transform 0.6s ease"
              step.style.opacity = "1"
              step.style.transform = "translateY(0)"
            }, index * 200) // Staggered delay

            observer.unobserve(step)
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(step)
  })
}

