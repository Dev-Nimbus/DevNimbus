// Portfolio.js - Handles portfolio page functionality

document.addEventListener("DOMContentLoaded", () => {
  initPortfolioFilter()
  initPortfolioItems()
  initProjectModal()
})

// Initialize portfolio filter functionality
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  if (!filterButtons.length || !portfolioItems.length) return

  // Add click event to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      button.classList.add("active")

      // Get filter value
      const filterValue = button.getAttribute("data-filter")

      // Filter portfolio items
      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          // Show item with animation
          item.style.display = "block"
          item.style.opacity = "0"
          item.style.transform = "translateY(20px)"

          setTimeout(() => {
            item.style.transition = "opacity 0.5s ease, transform 0.5s ease"
            item.style.opacity = "1"
            item.style.transform = "translateY(0)"
          }, 50)
        } else {
          // Hide item with animation
          item.style.opacity = "0"
          item.style.transform = "translateY(20px)"

          setTimeout(() => {
            item.style.display = "none"
          }, 500)
        }
      })

      // Create particle effect
      if (window.animationUtils) {
        const rect = button.getBoundingClientRect()
        const x = rect.left + rect.width / 2
        const y = rect.top + rect.height / 2

        window.animationUtils.createParticleEffect(x, y, document.body, 10)
      }
    })
  })
}

// Initialize portfolio items with hover effects
function initPortfolioItems() {
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  portfolioItems.forEach((item) => {
    // Add hover effect
    item.addEventListener("mouseenter", () => {
      const overlay = item.querySelector(".portfolio-overlay")
      if (overlay) {
        overlay.style.opacity = "1"
      }
    })

    item.addEventListener("mouseleave", () => {
      const overlay = item.querySelector(".portfolio-overlay")
      if (overlay) {
        overlay.style.opacity = ""
      }
    })

    // Add click event to view project links
    const viewProjectLinks = item.querySelectorAll(".view-project")
    viewProjectLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()

        // Get project ID from href
        const projectId = link.getAttribute("href").replace("#", "")

        // Open project modal
        openProjectModal(projectId)
      })
    })
  })
}

// Initialize project modal functionality
function initProjectModal() {
  const modal = document.querySelector(".project-modal")
  const closeButton = modal?.querySelector(".modal-close")

  if (!modal || !closeButton) return

  // Close modal when clicking close button
  closeButton.addEventListener("click", () => {
    closeProjectModal()
  })

  // Close modal when clicking outside modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal()
    }
  })

  // Close modal when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProjectModal()
    }
  })
}

// Open project modal with specific project content
function openProjectModal(projectId) {
  const modal = document.querySelector(".project-modal")
  const modalContent = modal?.querySelector(".modal-content")

  if (!modal || !modalContent) return

  // Get project content based on ID
  const projectContent = getProjectContent(projectId)

  // Set modal content
  modalContent.innerHTML = projectContent

  // Show modal
  modal.classList.add("active")

  // Disable body scroll
  document.body.style.overflow = "hidden"
}

// Close project modal
function closeProjectModal() {
  const modal = document.querySelector(".project-modal")

  if (!modal) return

  // Hide modal
  modal.classList.remove("active")

  // Enable body scroll
  document.body.style.overflow = ""
}

// Get project content based on project ID
function getProjectContent(projectId) {
  // Project content templates
  const projectTemplates = {
    neoverse: `
            <div class="project-details-container">
                <div class="project-header">
                    <h2 class="project-title">NeoVerse Platform</h2>
                    <p class="project-subtitle">AI Integration</p>
                </div>
                
                <div class="project-image">
                    <div class="project-image-placeholder"></div>
                </div>
                
                <div class="project-info">
                    <div class="project-info-item">
                        <div class="info-label">Client</div>
                        <div class="info-value">TechFusion Inc.</div>
                    </div>
                    <div class="project-info-item">
                        <div class="info-label">Timeline</div>
                        <div class="info-value">6 Months</div>
                    </div>
                    <div class="project-info-item">
                        <div class="info-label">Services</div>
                        <div class="info-value">AI Integration, UX Design, Development</div>
                    </div>
                    <div class="project-info-item">
                        <div class="info-label">Year</div>
                        <div class="info-value">2025</div>
                    </div>
                </div>
                
                <div class="project-description">
                    <p>NeoVerse is a revolutionary platform that merges artificial intelligence with immersive user experiences, enabling businesses to create personalized digital environments for their customers. The platform uses advanced machine learning algorithms to analyze user behavior and preferences, adapting the interface and content in real-time to provide a truly personalized experience.</p>
                    <p>Our team developed the core AI engine, designed the adaptive interface, and implemented the platform across web and mobile applications. The result is a seamless, intuitive experience that evolves with each user interaction, creating deeper engagement and satisfaction.</p>
                </div>
                
                <div class="project-features">
                    <h3 class="features-title">Key Features</h3>
                    <div class="features-list">
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Adaptive AI-driven interface that evolves based on user behavior</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Real-time content personalization using machine learning</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Predictive analytics dashboard for business insights</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Cross-platform compatibility with seamless synchronization</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Natural language processing for conversational interactions</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Advanced data visualization with interactive elements</div>
                        </div>
                    </div>
                </div>
                
                <div class="project-gallery">
                    <h3 class="gallery-title">Project Gallery</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <div class="gallery-image-placeholder"></div>
                        </div>
                        <div class="gallery-item">
                            <div class="gallery-image-placeholder"></div>
                        </div>
                        <div class="gallery-item">
                            <div class="gallery-image-placeholder"></div>
                        </div>
                        <div class="gallery-item">
                            <div class="gallery-image-placeholder"></div>
                        </div>
                    </div>
                </div>
                
                <div class="project-cta">
                    <a href="contact.html" class="btn btn-primary">
                        <span class="btn-text">Start Your Project</span>
                        <span class="btn-icon"></span>
                    </a>
                </div>
            </div>
        `,
    quantum: `
            <div class="project-details-container">
                <div class="project-header">
                    <h2 class="project-title">Quantum Interface</h2>
                    <p class="project-subtitle">UX Design</p>
                </div>
                
                <div class="project-image">
                    <div class="project-image-placeholder"></div>
                </div>
                
                <div class="project-info">
                    <div class="project-info-item">
                        <div class="info-label">Client</div>
                        <div class="info-value">Nexus Ventures</div>
                    </div>
                    <div class="project-info-item">
                        <div class="info-label">Timeline</div>
                        <div class="info-value">4 Months</div>
                    </div>
                    <div class="project-info-item">
                        <div class="info-label">Services</div>
                        <div class="info-value">UX Design, Animation, Development</div>
                    </div>
                    <div class="project-info-item">
                        <div class="info-label">Year</div>
                        <div class="info-value">2026</div>
                    </div>
                </div>
                
                <div class="project-description">
                    <p>Quantum Interface redefines user interaction through quantum-inspired design principles and animations, creating interfaces that adapt and respond to user behavior in real-time. This innovative approach to UX design draws inspiration from quantum mechanics, incorporating concepts like superposition and entanglement to create fluid, dynamic user experiences.</p>
                    <p>Our team developed a comprehensive design system that includes animated components, interaction patterns, and visual elements that work together to create a cohesive, engaging experience. The result is an interface that feels alive and responsive, anticipating user needs and adapting to their preferences.</p>
                </div>
                
                <div class="project-features">
                    <h3 class="features-title">Key Features</h3>
                    <div class="features-list">
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Fluid animations that respond to user input and context</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Adaptive layout that reorganizes based on user behavior</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Micro-interactions that provide feedback and guidance</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Context-aware navigation that anticipates user needs</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Gesture-based controls with haptic feedback</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon"></div>
                            <div class="feature-text">Accessibility features integrated seamlessly into the design</div>
                        </div>
                    </div>
                </div>
                
                <div class="project-gallery">
                    <h3 class="gallery-title">Project Gallery</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <div class="gallery-image-placeholder"></div>
                        </div>
                        <div class="gallery-item">
                            <div class="gallery-image-placeholder"></div>
                        </div>
                        <div class="gallery-item">
                            <div class="gallery-image-placeholder"></div>
                        </div>
                        <div class="gallery-item">
                            <div class="gallery-image-placeholder"></div>
                        </div>
                    </div>
                </div>
                
                <div class="project-cta">
                    <a href="contact.html" class="btn btn-primary">
                        <span class="btn-text">Start Your Project</span>
                        <span class="btn-icon"></span>
                    </a>
                </div>
            </div>
        `,
    // Add more project templates as needed
    synthmind: getDefaultProjectTemplate(
      "SynthMind AI",
      "AI Integration",
      "DataCore Systems",
      "5 Months",
      "AI Development, Machine Learning, Integration",
      "2026",
    ),
    nexusvr: getDefaultProjectTemplate(
      "NexusVR",
      "VR Experiences",
      "Immersive Technologies",
      "7 Months",
      "VR Development, 3D Modeling, UX Design",
      "2027",
    ),
    quantumcalc: getDefaultProjectTemplate(
      "QuantumCalc",
      "Quantum Development",
      "Research Institute",
      "8 Months",
      "Quantum Algorithms, Development, Testing",
      "2026",
    ),
    roboassist: getDefaultProjectTemplate(
      "RoboAssist",
      "Robotic Interfaces",
      "Automation Industries",
      "6 Months",
      "Interface Design, Robotics Integration, Development",
      "2027",
    ),
    flowux: getDefaultProjectTemplate(
      "FlowUX",
      "UX Design",
      "Digital Experiences Co.",
      "3 Months",
      "UX Design, Animation, Development",
      "2025",
    ),
    quantumsecure: getDefaultProjectTemplate(
      "QuantumSecure",
      "Quantum Development",
      "SecureTech Solutions",
      "9 Months",
      "Quantum Cryptography, Security Implementation, Testing",
      "2027",
    ),
  }

  // Return project content or default content if project not found
  return (
    projectTemplates[projectId] ||
    getDefaultProjectTemplate("Project Not Found", "Unknown Category", "Unknown Client", "N/A", "N/A", "N/A")
  )
}

// Generate default project template
function getDefaultProjectTemplate(title, category, client, timeline, services, year) {
  return `
        <div class="project-details-container">
            <div class="project-header">
                <h2 class="project-title">${title}</h2>
                <p class="project-subtitle">${category}</p>
            </div>
            
            <div class="project-image">
                <div class="project-image-placeholder"></div>
            </div>
            
            <div class="project-info">
                <div class="project-info-item">
                    <div class="info-label">Client</div>
                    <div class="info-value">${client}</div>
                </div>
                <div class="project-info-item">
                    <div class="info-label">Timeline</div>
                    <div class="info-value">${timeline}</div>
                </div>
                <div class="project-info-item">
                    <div class="info-label">Services</div>
                    <div class="info-value">${services}</div>
                </div>
                <div class="project-info-item">
                    <div class="info-label">Year</div>
                    <div class="info-value">${year}</div>
                </div>
            </div>
            
            <div class="project-description">
                <p>This innovative project showcases our expertise in ${category.toLowerCase()}, delivering cutting-edge solutions that push the boundaries of what's possible in the digital realm. Working closely with ${client}, our team developed a comprehensive solution that addresses complex challenges while providing an intuitive, engaging user experience.</p>
                <p>Through careful planning, iterative development, and rigorous testing, we created a product that exceeds expectations and sets new standards in the industry. The result is a seamless, powerful tool that transforms how users interact with technology.</p>
            </div>
            
            <div class="project-features">
                <h3 class="features-title">Key Features</h3>
                <div class="features-list">
                    <div class="feature-item">
                        <div class="feature-icon"></div>
                        <div class="feature-text">Intuitive user interface with responsive design</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"></div>
                        <div class="feature-text">Advanced functionality with cutting-edge technology</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"></div>
                        <div class="feature-text">Seamless integration with existing systems</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"></div>
                        <div class="feature-text">Robust security features and data protection</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"></div>
                        <div class="feature-text">Comprehensive analytics and reporting capabilities</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon"></div>
                        <div class="feature-text">Scalable architecture for future growth</div>
                    </div>
                </div>
            </div>
            
            <div class="project-gallery">
                <h3 class="gallery-title">Project Gallery</h3>
                <div class="gallery-grid">
                    <div class="gallery-item">
                        <div class="gallery-image-placeholder"></div>
                    </div>
                    <div class="gallery-item">
                        <div class="gallery-image-placeholder"></div>
                    </div>
                    <div class="gallery-item">
                        <div class="gallery-image-placeholder"></div>
                    </div>
                    <div class="gallery-item">
                        <div class="gallery-image-placeholder"></div>
                    </div>
                </div>
            </div>
            
            <div class="project-cta">
                <a href="contact.html" class="btn btn-primary">
                    <span class="btn-text">Start Your Project</span>
                    <span class="btn-icon"></span>
                </a>
            </div>
        </div>
    `
}

