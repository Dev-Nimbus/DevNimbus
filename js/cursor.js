// Cursor.js - Custom cursor functionality

document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor()
})

function initCustomCursor() {
  const cursorOuter = document.querySelector(".cursor-outer")
  const cursorInner = document.querySelector(".cursor-inner")

  if (!cursorOuter || !cursorInner) return

  // Initial position off-screen
  cursorOuter.style.top = "-100px"
  cursorOuter.style.left = "-100px"
  cursorInner.style.top = "-100px"
  cursorInner.style.left = "-100px"

  // Track mouse movement
  document.addEventListener("mousemove", (e) => {
    // Update cursor position with slight delay for outer cursor
    cursorInner.style.top = `${e.clientY}px`
    cursorInner.style.left = `${e.clientX}px`

    // Delayed movement for outer cursor
    setTimeout(() => {
      cursorOuter.style.top = `${e.clientY}px`
      cursorOuter.style.left = `${e.clientX}px`
    }, 50)
  })

  // Handle cursor states for interactive elements
  const interactiveElements = document.querySelectorAll(
    "a, button, .nav-toggle, .service-card, .project-card, .social-link, .control-btn",
  )

  interactiveElements.forEach((element) => {
    // Mouse enter - expand cursor
    element.addEventListener("mouseenter", () => {
      cursorOuter.classList.add("cursor-hover")
      cursorInner.classList.add("cursor-hover")

      // Create ripple effect
      const ripple = document.createElement("div")
      ripple.className = "cursor-ripple"
      ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 40px;
                height: 40px;
                border: 1px solid var(--primary);
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
                z-index: -1;
            `

      cursorOuter.appendChild(ripple)

      // Animate ripple
      ripple.animate(
        [
          { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
          { transform: "translate(-50%, -50%) scale(1.5)", opacity: 0 },
        ],
        {
          duration: 600,
          easing: "ease-out",
          fill: "forwards",
        },
      ).onfinish = () => {
        ripple.remove()
      }
    })

    // Mouse leave - return to normal
    element.addEventListener("mouseleave", () => {
      cursorOuter.classList.remove("cursor-hover")
      cursorInner.classList.remove("cursor-hover")
    })

    // Mouse down - shrink cursor
    element.addEventListener("mousedown", () => {
      cursorOuter.style.transform = "translate(-50%, -50%) scale(0.9)"
      cursorInner.style.transform = "translate(-50%, -50%) scale(0.9)"
    })

    // Mouse up - return to normal size
    element.addEventListener("mouseup", () => {
      cursorOuter.style.transform = "translate(-50%, -50%) scale(1)"
      cursorInner.style.transform = "translate(-50%, -50%) scale(1)"
    })
  })

  // Handle cursor disappearing when leaving the window
  document.addEventListener("mouseleave", () => {
    cursorOuter.style.opacity = "0"
    cursorInner.style.opacity = "0"
  })

  document.addEventListener("mouseenter", () => {
    cursorOuter.style.opacity = "1"
    cursorInner.style.opacity = "1"
  })

  // Disable cursor on touch devices
  if ("ontouchstart" in window) {
    cursorOuter.style.display = "none"
    cursorInner.style.display = "none"
    document.body.style.cursor = "auto"
  }
}

