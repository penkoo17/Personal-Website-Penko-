const skillsData = [
  {
    id: "KEAHLIAN 01",
    icon: "code",
    title: "Full-Stack Development",
    subtitle: "Web, Application & Software Development",
    level: "Intermediate",
    description:
      "Mengembangkan website, aplikasi, dan berbagai tools software dengan menggabungkan desain antarmuka, logika pemrograman, serta fungsionalitas sesuai kebutuhan project. Mencakup pengembangan frontend, backend, hingga pembuatan solusi digital sederhana.",
    items: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "Responsive Layout",
      "Web Animation",
      "Frontend Development",
      "Backend Development",
      "Mobile App Development",
      "Software & Tools Development"
    ]
  },
  {
    id: "KEAHLIAN 02",
    icon: "android",
    title: "Android Modification",
    subtitle: "Advanced System Customization & Troubleshooting",
    level: "Advanced",
    description:
      "Mengeksplorasi, memodifikasi, dan melakukan kustomisasi sistem Android, mulai dari akses root, instalasi custom ROM, modifikasi kernel, hingga konfigurasi komponen sistem dan troubleshooting perangkat Android. Mencakup pemahaman mendalam tentang struktur sistem, keamanan, dan optimasi performa perangkat.",
    items: [
      "Ubl",
      "Fix Softbrick,Hardbrick",
      "Custom Recovery",
      "Custom/Port rom",
      "root",
      "Kernel & Boot Image"
    ]
  },
  {
    id: "KEAHLIAN 03",
    icon: "windows",
    title: "Windows Tweaking & Customization",
    subtitle: "OS Installation & System Optimization",
    level: "Intermediate",
    description:
      "Menguasai berbagai konfigurasi dan penyesuaian Windows, termasuk instalasi custom OS, tweaking sistem, serta optimasi performa sesuai kebutuhan.",
    items: [
      "system Tweaking",
      "OS Custom installation",
      "Windows Customization",
      "improve computer performance"
    ]
  },
  {
    id: "KEAHLIAN 04",
    icon: "security",
    title: "Cybersecurity Fundamentals",
    subtitle: "Basic Security Exploration",
    level: "Beginner — Learning",
    description:
      "Sedang mempelajari dasar-dasar keamanan siber, termasuk pengenalan sistem, jaringan, dan perlindungan informasi digital.",
    items: [
      "Cybersecurity Basics",
      "Basic Penetration Testing",
      "Basic Security Concepts",
      "Linux & Security Tools"
    ]
  },
  {
    id: "KEAHLIAN 05",
    icon: "iot",
    title: "IoT & Embedded Systems",
    subtitle: "Microcontroller Programming & Hardware Integration",
    level: "beginner - Learning",
    description:
      "Mengembangkan sistem berbasis Internet of Things dengan menggabungkan pemrograman, mikrokontroler, dan perangkat elektronik untuk menciptakan sistem otomatisasi serta perangkat yang saling terintegrasi.",
    items: [
      "IoT Programming",
      "Microcontroller Programming",
      "Hardware Integration",
      "Sensor Integration",
      "Embedded Systems Development"
    ]
  },
];

const projectsData = [
  {
    id: "01",
    title: "Nutritrack",
    category: "app",
    categoryLabel: "Mobile App",
    year: "2026",
    status: "done",
    description:
      "aplikasi penghitung kalori,protein harian berdasarkan data fisik pengguna. dan sub fitur yaitu penghitung ketika patungan dengan sangat akurat.",
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    images: ["assets/nutritrack2.jpg", "assets/nutritrack1.jpg"],
    externalLink: "https://www.mediafire.com/file/0auvbl20ydq1hqn/MealSplit.apk/file"
  },
  {
    id: "02",
    title: "Pemantau arus lalu lintas",
    category: "web",
    categoryLabel: "Website",
    year: "2026",
    status: "stalled",
    description:
      "website yang mampu mendeteksi arus lalu lintas macet atau tidak, dan menganalisa nya.",
    tech: ["Web", "Local", "in development"],
    images: ["assets/traffict.png"],
    externalLink: ""
  },
  {
    id: "03",
    title: "Spysense",
    category: "iot",
    categoryLabel: "IoT",
    year: "2026",
    status: "done",
    description:
      "spysense adalah alat yang mampu mendeteksi perangkat di sekitar secara realtime.",
    tech: ["ioT", "Interactive Chart", "security"],
    images: ["assets/spysense.jpg"],
    externalLink: ""
  },
  {
    id: "04",
    title: "Sentinel",
    category: "web",
    categoryLabel: "Alat",
    year: "2025",
    status: "done",
    description:
      "Sentinel adalah website yang mampu mencari celah keamanan pada website apapun.",
    tech: ["linux", "Tools", "Security"],
    images: ["assets/sentinel.jpg"],
    externalLink: "https://sentinelpemkw.streamlit.app/"
  },
  {
    id: "05",
    title: "Pelacak lokasi",
    category: "web",
    categoryLabel: "Alat",
    year: "2026",
    status: "done",
    description:
      "mampu melacak subject dengan akurat dengan hasil yaitu kordinat dan bisa langsung di akses lewat app seperti google maps.",
    tech: ["Javascript", "Tools", "security"],
    images: ["assets/gps-track.jpg"],
    externalLink: ""
  },
  {
    id: "06",
    title: "Evolia",
    category: "app",
    categoryLabel: "mobile app",
    year: "2026",
    status: "progress",
    description:
      "aplikasi untuk kamu yang ingin berkembang dalam hal apapun, evolia membungkus itu semua layaknya sebuah game.",
    tech: ["Fullstack", "beta", "In Development"],
    images: ["assets/evolia.png"],
    externalLink: ""
  }
];

const skillGrid = document.getElementById("skillGrid");
const projectGrid = document.getElementById("projectGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

const skillIcons = {
  code: `
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
    <line x1="14" y1="4" x2="10" y2="20"></line>
  `,
  android: `
    <rect x="4" y="4" width="16" height="16" rx="3"></rect>
    <rect x="9" y="9" width="6" height="6" rx="1"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  `,
  windows: `
    <line x1="4" y1="21" x2="4" y2="14"></line>
    <line x1="4" y1="10" x2="4" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12" y2="3"></line>
    <line x1="20" y1="21" x2="20" y2="16"></line>
    <line x1="20" y1="12" x2="20" y2="3"></line>
    <line x1="1" y1="14" x2="7" y2="14"></line>
    <line x1="9" y1="8" x2="15" y2="8"></line>
    <line x1="17" y1="16" x2="23" y2="16"></line>
  `,
  security: `
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  `,
  iot: `
    <circle cx="12" cy="12" r="2"></circle>
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
  `,
  network: `
    <circle cx="12" cy="5" r="2.25"></circle>
    <circle cx="5" cy="18.5" r="2.25"></circle>
    <circle cx="19" cy="18.5" r="2.25"></circle>
    <line x1="10.9" y1="7" x2="6.1" y2="16.5"></line>
    <line x1="13.1" y1="7" x2="17.9" y2="16.5"></line>
    <line x1="7.25" y1="18.5" x2="16.75" y2="18.5"></line>
  `,
  server: `
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  `,
  database: `
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  `,
  design: `
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
    <path d="M2 2l7.586 7.586"></path>
    <circle cx="11" cy="11" r="2"></circle>
  `,
  terminal: `
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  `
};

const skillIconKeywords = [
  { key: "android", words: ["android", "rom", "root", "smartphone"] },
  { key: "windows", words: ["windows", "operating system", "tweak"] },
  { key: "security", words: ["cyber", "security", "keamanan", "pentest", "hacking"] },
  { key: "iot", words: ["iot", "embedded", "microcontroller", "arduino", "esp32", "hardware"] },
  { key: "network", words: ["network", "jaringan", "mikrotik", "cisco"] },
  { key: "server", words: ["server", "devops", "cloud", "hosting"] },
  { key: "database", words: ["database", "sql", "data"] },
  { key: "design", words: ["design", "ui/ux", "desain", "figma", "grafis"] },
  { key: "terminal", words: ["linux", "terminal", "script", "automation"] },
  { key: "code", words: ["web", "stack", "develop", "program", "software", "app"] }
];

function getSkillIconSVG(skill) {
  let key = String(skill.icon || "").toLowerCase().trim();

  if (!skillIcons[key]) {
    const text = `${skill.title} ${skill.subtitle}`.toLowerCase();
    const match = skillIconKeywords.find((entry) =>
      entry.words.some((word) => text.includes(word))
    );
    key = match ? match.key : "code";
  }

  return `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${skillIcons[key]}
    </svg>
  `;
}

function getSkillLevelBars(levelStr = "") {
  const lower = levelStr.toLowerCase();
  let activeBars = 2;

  if (lower.includes("advanced") && lower.includes("intermediate")) {
    activeBars = 3;
  } else if (lower.includes("advanced") || lower.includes("expert") || lower.includes("mahir")) {
    activeBars = 4;
  } else if (lower.includes("intermediate") || lower.includes("menengah")) {
    activeBars = 3;
  } else {
    activeBars = 2;
  }

  return [1, 2, 3, 4]
    .map(
      (barIdx) =>
        `<span class="signal-bar ${barIdx <= activeBars ? "is-active" : ""}"></span>`
    )
    .join("");
}

function renderSkills() {
  if (!skillGrid) return;

  skillGrid.innerHTML = skillsData
    .map((skill, index) => {
      const themeIndex = (index % 4) + 1;
      const numWatermark = String(index + 1).padStart(2, "0");

      return `
      <article class="skill-card-3d theme-s${themeIndex}" data-tilt-card data-scroll-item style="--delay: ${(index % 2) * 90}ms">
        <div class="skill-card-top">
          <div class="skill-badge-num">${skill.id}</div>
          <div class="skill-level-pill">
            <span class="skill-level-dot"></span>
            <span>${skill.level}</span>
            <span class="skill-signal-bars" aria-hidden="true">
              ${getSkillLevelBars(skill.level)}
            </span>
          </div>
        </div>

        <div class="skill-card-body">
          <div class="skill-head-row">
            <div class="skill-icon-box" aria-hidden="true">
              ${getSkillIconSVG(skill)}
            </div>
            <div class="skill-head-text">
              <span class="skill-subtitle">${skill.subtitle}</span>
              <h3 class="skill-title">${skill.title}</h3>
            </div>
            <span class="skill-watermark" aria-hidden="true">${numWatermark}</span>
          </div>

          <p class="skill-desc">${skill.description}</p>

          <div class="skill-stack-panel">
            <div class="skill-stack-header">
              <span class="skill-stack-label">FOKUS &amp; KEAHLIAN</span>
              <span class="skill-stack-count">${skill.items.length} Fokus</span>
            </div>
            <div class="skill-items">
              ${skill.items
                .map((item) => {
                  const cleanItem = String(item).replace(/^-+\s*/, "");
                  return `
                  <span class="skill-item-pill">
                    <span class="skill-item-check">✓</span>
                    <span>${cleanItem}</span>
                  </span>
                `;
                })
                .join("")}
            </div>
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  initSubtleTiltCards();
  observeScrollItems();
}

function getStatusBadgeHTML(status) {
  const normalized = String(status || "done").toLowerCase();

  if (normalized === "progress") {
    return `
      <span class="project-status-badge status-progress" title="Sedang Dalam Proses Pengerjaan">
        <span class="status-progress-dot"></span>
        <span>Dalam Proses</span>
      </span>
    `;
  }

  if (normalized === "stalled" || normalized === "terhenti" || normalized === "mangkrak") {
    return `
      <span class="project-status-badge status-stalled" title="Project Terhenti Sementara">
        <span class="status-stalled-icon">
          <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
            <rect x="2.2" y="2" width="2.6" height="8" rx="1" fill="currentColor"></rect>
            <rect x="7.2" y="2" width="2.6" height="8" rx="1" fill="currentColor"></rect>
          </svg>
        </span>
        <span>Terhenti</span>
      </span>
    `;
  }

  return `
    <span class="project-status-badge status-done" title="Project Selesai">
      <span class="status-check-circle">
        <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="2.5 6.5 5 9 9.5 3.5"></polyline>
        </svg>
      </span>
      <span>Selesai</span>
    </span>
  `;
}

function renderProjects(filterCategory = "all") {
  if (!projectGrid) return;

  const filtered =
    filterCategory === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === filterCategory);

  projectGrid.innerHTML = filtered
    .map((project, index) => {
      const projectThemeIndex =
        ((parseInt(project.id, 10) - 1) % 6) + 1 || (index % 6) + 1;
      return `
      <article class="project-card-3d theme-p${projectThemeIndex}" data-tilt-card data-scroll-item style="--delay: ${(index % 3) * 85}ms">
        <div class="project-thumb">
          <div class="project-mockup-3d">
            <div class="mockup-top">
              <div class="mockup-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="mockup-number">PRJ // ${project.id}</span>
            </div>
            <div class="mockup-center-title">${project.title.split("—")[0].trim()}</div>
            <div class="mockup-bar"></div>
          </div>
        </div>

        <div class="project-body">
          <div class="project-meta">
            <div class="project-meta-left">
              <span class="project-category">${project.categoryLabel}</span>
              <span class="project-year">${project.year}</span>
            </div>
            ${getStatusBadgeHTML(project.status)}
          </div>

          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>

          <div class="project-tech">
            ${project.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
          </div>

          <button type="button" class="project-link" data-open-project="${project.id}">
            <span>Lihat Detail Project</span>
            <span>↗</span>
          </button>
        </div>
      </article>
    `;
    })
    .join("");

  const detailButtons = projectGrid.querySelectorAll("[data-open-project]");
  detailButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-open-project");
      openProjectModal(projectId);
    });
  });

  initSubtleTiltCards();
  observeScrollItems();
}

const projectModal = document.getElementById("projectModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalCloseFooterBtn = document.getElementById("modalCloseFooterBtn");
const modalProjectId = document.getElementById("modalProjectId");
const modalProjectImg = document.getElementById("modalProjectImg");
const modalPhotoThumbs = document.getElementById("modalPhotoThumbs");
const modalProjectCategory = document.getElementById("modalProjectCategory");
const modalProjectYear = document.getElementById("modalProjectYear");
const modalProjectStatus = document.getElementById("modalProjectStatus");
const modalProjectTitle = document.getElementById("modalProjectTitle");
const modalProjectDesc = document.getElementById("modalProjectDesc");
const modalProjectTech = document.getElementById("modalProjectTech");
const modalExternalLink = document.getElementById("modalExternalLink");

function openProjectModal(projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project || !projectModal) return;

  const photoList =
    Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : ["assets/project-preview.svg"];

  modalProjectId.textContent = `DETAIL // PRJ-${project.id}`;
  modalProjectImg.src = photoList[0];
  modalProjectImg.alt = `Foto ${project.title}`;
  modalProjectCategory.textContent = project.categoryLabel;
  modalProjectYear.textContent = project.year;
  modalProjectStatus.innerHTML = getStatusBadgeHTML(project.status);
  modalProjectTitle.textContent = project.title;
  modalProjectDesc.textContent = project.description;

  modalProjectTech.innerHTML = project.tech
    .map((t) => `<span class="tech-pill">${t}</span>`)
    .join("");

  if (photoList.length > 1) {
    modalPhotoThumbs.innerHTML = photoList
      .map(
        (imgSrc, idx) => `
        <button type="button" class="modal-thumb-btn ${idx === 0 ? "active" : ""}" data-photo-src="${imgSrc}">
          <img src="${imgSrc}" alt="Foto ${idx + 1}" />
        </button>
      `
      )
      .join("");

    const thumbBtns = modalPhotoThumbs.querySelectorAll(".modal-thumb-btn");
    thumbBtns.forEach((tBtn) => {
      tBtn.addEventListener("click", () => {
        thumbBtns.forEach((b) => b.classList.remove("active"));
        tBtn.classList.add("active");
        modalProjectImg.src = tBtn.getAttribute("data-photo-src");
      });
    });
  } else {
    modalPhotoThumbs.innerHTML = "";
  }

  if (project.externalLink && project.externalLink.trim() !== "") {
    modalExternalLink.href = project.externalLink;
    modalExternalLink.style.display = "inline-flex";
  } else {
    modalExternalLink.style.display = "none";
  }

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
if (modalCloseFooterBtn) modalCloseFooterBtn.addEventListener("click", closeProjectModal);

if (projectModal) {
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal && projectModal.classList.contains("is-open")) {
    closeProjectModal();
  }
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filterValue = btn.getAttribute("data-filter");
    renderProjects(filterValue);
  });
});

function initProfilePhotoFallback() {
  const profileImg = document.getElementById("profileImage");
  if (profileImg) {
    const candidatePaths = [
      "assets/profile-placeholder.png",
      "assets/profile.png",
      "assets/profile.jpg",
      "assets/profile.jpeg",
      "assets/profile.webp",
      "assets/pp.png",
      "assets/pp.jpg",
      "assets/profile-placeholder.svg"
    ];

    let tryIndex = 0;

    profileImg.addEventListener("error", () => {
      while (tryIndex < candidatePaths.length) {
        const nextSrc = candidatePaths[tryIndex++];
        if (!profileImg.getAttribute("src").endsWith(nextSrc)) {
          profileImg.src = nextSrc;
          break;
        }
      }
    });
  }

  const schoolLogoImg = document.getElementById("schoolLogoImg");
  if (schoolLogoImg) {
    const logoCandidates = [
      "assets/school-logo.jpg",
      "assets/school-logo.png",
      "assets/school-logo.jpeg",
      "assets/school-logo.webp",
      "assets/logo.png",
      "assets/logo.jpg"
    ];

    let logoIndex = 0;

    schoolLogoImg.addEventListener("error", () => {
      while (logoIndex < logoCandidates.length) {
        const nextLogo = logoCandidates[logoIndex++];
        if (!schoolLogoImg.getAttribute("src").endsWith(nextLogo)) {
          schoolLogoImg.src = nextLogo;
          break;
        }
      }
    });
  }
}

function initPhoto3DInteraction() {
  const stage = document.getElementById("photoInteractiveStage");
  const card = document.getElementById("photo3DCard");
  if (!stage || !card) return;

  const defaultRX = 2;
  const defaultRY = -4;

  let targetRX = defaultRX;
  let targetRY = defaultRY;
  let currentRX = defaultRX;
  let currentRY = defaultRY;

  let targetLift = 0;
  let currentLift = 0;

  let targetLayerX = 0;
  let targetLayerY = 0;
  let currentLayerX = 0;
  let currentLayerY = 0;

  let rafId = null;

  function animatePhoto() {
    currentRX += (targetRX - currentRX) * 0.16;
    currentRY += (targetRY - currentRY) * 0.16;
    currentLift += (targetLift - currentLift) * 0.16;
    currentLayerX += (targetLayerX - currentLayerX) * 0.16;
    currentLayerY += (targetLayerY - currentLayerY) * 0.16;

    card.style.setProperty("--photo-rx", `${currentRX.toFixed(2)}deg`);
    card.style.setProperty("--photo-ry", `${currentRY.toFixed(2)}deg`);
    card.style.setProperty("--photo-lift", `${currentLift.toFixed(2)}px`);
    card.style.setProperty("--layer-x", `${currentLayerX.toFixed(2)}px`);
    card.style.setProperty("--layer-y", `${currentLayerY.toFixed(2)}px`);

    const moving =
      Math.abs(targetRX - currentRX) > 0.02 ||
      Math.abs(targetRY - currentRY) > 0.02 ||
      Math.abs(targetLift - currentLift) > 0.04;

    if (moving) {
      rafId = requestAnimationFrame(animatePhoto);
    } else {
      rafId = null;
    }
  }

  function startAnimation() {
    if (!rafId) {
      rafId = requestAnimationFrame(animatePhoto);
    }
  }

  function handlePointerMove(clientX, clientY) {
    const rect = stage.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const normX = Math.max(-1, Math.min(1, (x - rect.width / 2) / (rect.width / 2)));
    const normY = Math.max(-1, Math.min(1, (y - rect.height / 2) / (rect.height / 2)));

    const isMobile = window.innerWidth <= 768;
    const maxTilt = isMobile ? 2.8 : 3.8;
    const maxShift = isMobile ? 2.6 : 4.2;

    targetRY = normX * maxTilt;
    targetRX = -normY * maxTilt;
    targetLift = isMobile ? -2.5 : -3.5;

    targetLayerX = -normX * maxShift;
    targetLayerY = -normY * maxShift;

    const shineX = ((x / rect.width) * 100).toFixed(1);
    const shineY = ((y / rect.height) * 100).toFixed(1);
    card.style.setProperty("--shine-x", `${shineX}%`);
    card.style.setProperty("--shine-y", `${shineY}%`);

    stage.classList.add("is-interacting");
    startAnimation();
  }

  function resetPhoto() {
    targetRX = defaultRX;
    targetRY = defaultRY;
    targetLift = 0;
    targetLayerX = 0;
    targetLayerY = 0;
    stage.classList.remove("is-interacting");
    startAnimation();
  }

  stage.addEventListener("mousemove", (e) => {
    handlePointerMove(e.clientX, e.clientY);
  });

  stage.addEventListener("mouseleave", resetPhoto);

  stage.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        handlePointerMove(t.clientX, t.clientY);
      }
    },
    { passive: true }
  );

  stage.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        handlePointerMove(t.clientX, t.clientY);
      }
    },
    { passive: true }
  );

  stage.addEventListener("touchend", () => {
    setTimeout(resetPhoto, 180);
  });

  stage.addEventListener("click", () => {
    targetLift = -7;
    targetLayerX = 5;
    targetLayerY = 5;
    startAnimation();
    setTimeout(() => {
      targetLift = -3;
      targetLayerX = 0;
      targetLayerY = 0;
      startAnimation();
    }, 200);
  });
}

function initSubtleTiltCards() {
  const cards = document.querySelectorAll("[data-tilt-card]");

  cards.forEach((card) => {
    if (card.dataset.tiltBound === "true") return;
    card.dataset.tiltBound = "true";

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let targetLift = 0;
    let currentLift = 0;
    let rafId = null;

    function updateTransform() {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      currentLift += (targetLift - currentLift) * 0.18;

      card.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) translate3d(0, ${currentLift.toFixed(2)}px, 0)`;

      const stillMoving =
        Math.abs(targetX - currentX) > 0.02 ||
        Math.abs(targetY - currentY) > 0.02 ||
        Math.abs(targetLift - currentLift) > 0.04;

      if (stillMoving) {
        rafId = requestAnimationFrame(updateTransform);
      } else {
        if (targetX === 0 && targetY === 0 && targetLift === 0) {
          card.style.transform = "";
        }
        rafId = null;
      }
    }

    card.addEventListener("mousemove", (e) => {
      if (window.innerWidth <= 768) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const midX = rect.width / 2;
      const midY = rect.height / 2;

      targetY = ((x - midX) / midX) * 2.0;
      targetX = -((y - midY) / midY) * 2.0;
      targetLift = -2.5;

      if (!rafId) {
        rafId = requestAnimationFrame(updateTransform);
      }
    });

    card.addEventListener("mouseleave", () => {
      targetX = 0;
      targetY = 0;
      targetLift = 0;

      if (!rafId) {
        rafId = requestAnimationFrame(updateTransform);
      }
    });
  });
}

let globalSmoothScrollY = window.scrollY;

function initCosmicBackground() {
  const canvas = document.getElementById("cosmicCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const pointer = {
    x: width / 2,
    y: height / 2,
    normX: 0,
    normY: 0,
    smoothX: 0,
    smoothY: 0,
    active: false
  };

  window.addEventListener(
    "mousemove",
    (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.normX = (e.clientX / width - 0.5) * 2;
      pointer.normY = (e.clientY / height - 0.5) * 2;
      pointer.active = true;
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        pointer.x = t.clientX;
        pointer.y = t.clientY;
        pointer.normX = (t.clientX / width - 0.5) * 2;
        pointer.normY = (t.clientY / height - 0.5) * 2;
        pointer.active = true;
      }
    },
    { passive: true }
  );

  const ambientOrbs = [
    { xRatio: 0.16, yRatio: 0.2, radius: 220, rgb: "0, 102, 255", alpha: 0.048, speed: 0.006, phase: 0 },
    { xRatio: 0.84, yRatio: 0.36, radius: 240, rgb: "255, 90, 54", alpha: 0.042, speed: 0.005, phase: 2.1 },
    { xRatio: 0.25, yRatio: 0.78, radius: 210, rgb: "16, 185, 129", alpha: 0.04, speed: 0.007, phase: 4.2 },
    { xRatio: 0.78, yRatio: 0.82, radius: 190, rgb: "245, 158, 11", alpha: 0.04, speed: 0.006, phase: 1.3 }
  ];

  const celestialOrbits = [
    {
      xRatio: 0.82,
      yRatio: 0.22,
      rx: 135,
      ry: 52,
      tilt: -0.32,
      z: 0.65,
      rgb: "0, 102, 255",
      satAngle: 0.4,
      satSpeed: 0.007
    },
    {
      xRatio: 0.14,
      yRatio: 0.64,
      rx: 118,
      ry: 44,
      tilt: 0.36,
      z: 0.55,
      rgb: "10, 10, 10",
      satAngle: 2.5,
      satSpeed: -0.006
    }
  ];

  const geoShapes = [
    { xRatio: 0.08, yRatio: 0.38, z: 0.85, type: "diamond", size: 11, rot: 0.2, rotSpeed: 0.006, rgb: "0, 102, 255" },
    { xRatio: 0.91, yRatio: 0.46, z: 0.75, type: "cube", size: 11, rot: 0.5, rotSpeed: -0.005, rgb: "10, 10, 10" },
    { xRatio: 0.48, yRatio: 0.14, z: 0.6, type: "cross", size: 7, rot: 0, rotSpeed: 0.008, rgb: "255, 90, 54" },
    { xRatio: 0.54, yRatio: 0.86, z: 0.8, type: "diamond", size: 10, rot: 1.1, rotSpeed: 0.005, rgb: "16, 185, 129" },
    { xRatio: 0.28, yRatio: 0.52, z: 0.5, type: "cross", size: 6.5, rot: 0.4, rotSpeed: -0.007, rgb: "0, 102, 255" },
    { xRatio: 0.72, yRatio: 0.68, z: 0.7, type: "cube", size: 9.5, rot: 0.1, rotSpeed: 0.005, rgb: "245, 158, 11" }
  ];

  const isMobileScreen = window.innerWidth <= 768;
  const starCount = isMobileScreen ? 34 : 52;
  const stars = Array.from({ length: starCount }, () => {
    const z = Math.random() * 0.9 + 0.3;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      z,
      vx: (Math.random() - 0.5) * 0.22 * z,
      vy: -(Math.random() * 0.22 + 0.06) * z,
      size: (Math.random() * 1.8 + 1.0) * z,
      isSparkle: Math.random() > 0.6,
      isBlue: Math.random() > 0.42,
      baseAlpha: (Math.random() * 0.3 + 0.14) * Math.min(1, z + 0.2),
      pulseSpeed: Math.random() * 0.025 + 0.01,
      pulseOffset: Math.random() * Math.PI * 2
    };
  });

  const planets = [
    {
      xRatio: 0.12,
      yRatio: 0.22,
      z: 0.7,
      radius: 10,
      ringRx: 24,
      ringRy: 7,
      tilt: -0.35,
      isBlue: true,
      driftSpeed: 0.008,
      phase: 0
    },
    {
      xRatio: 0.88,
      yRatio: 0.62,
      z: 0.55,
      radius: 8,
      ringRx: 20,
      ringRy: 6,
      tilt: 0.4,
      isBlue: false,
      driftSpeed: 0.006,
      phase: 2.1
    },
    {
      xRatio: 0.18,
      yRatio: 0.82,
      z: 0.9,
      radius: 6,
      ringRx: 15,
      ringRy: 4.5,
      tilt: -0.25,
      isBlue: true,
      driftSpeed: 0.01,
      phase: 4.2
    }
  ];

  const comets = [];
  const sparks = [];
  const targetCometCount = isMobileScreen ? 10 : 15;

  const cometPalettes = [
    { core: "255, 245, 235", head: "235, 38, 28", mid: "255, 92, 18", tail: "255, 160, 15" },
    { core: "255, 248, 240", head: "255, 68, 12", mid: "255, 118, 0", tail: "255, 180, 25" },
    { core: "255, 240, 235", head: "215, 30, 30", mid: "248, 105, 18", tail: "255, 150, 10" }
  ];

  function spawnSpark(x, y, z, palette, boost = 1) {
    if (sparks.length > 90) return;
    const angle = Math.random() * Math.PI * 2;
    const spd = (Math.random() * 1.4 + 0.4) * z * boost;
    sparks.push({
      x,
      y,
      z,
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd,
      radius: (Math.random() * 1.6 + 0.8) * z,
      alpha: 0.85,
      decay: Math.random() * 0.025 + 0.018,
      color: Math.random() > 0.45 ? palette.mid : palette.head
    });
  }

  function createComet(initialRandomScreen = false, customZ = null) {
    const z = customZ !== null ? customZ : Math.random() * 1.1 + 0.35;
    const angle = (Math.PI / 180) * (136 + (Math.random() * 18 - 9));
    const baseSpeed = Math.random() * 2.2 + 2.1;
    const speed = baseSpeed * (0.55 + z * 0.65);
    const palette = cometPalettes[Math.floor(Math.random() * cometPalettes.length)];

    let startX, startY;
    if (initialRandomScreen) {
      startX = Math.random() * width;
      startY = Math.random() * height;
    } else {
      if (Math.random() > 0.38) {
        startX = Math.random() * width * 1.2 + width * 0.05;
        startY = -60 * z;
      } else {
        startX = width + 60 * z;
        startY = Math.random() * height * 0.85;
      }
    }

    return {
      x: startX,
      y: startY,
      z,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      baseVx: Math.cos(angle) * speed,
      baseVy: Math.sin(angle) * speed,
      length: (Math.random() * 85 + 95) * (0.5 + z * 0.65),
      width: (Math.random() * 1.1 + 1.5) * (0.55 + z * 0.65),
      maxAlpha: Math.min(0.92, 0.35 + z * 0.45),
      palette
    };
  }

  for (let i = 0; i < targetCometCount; i++) {
    comets.push(createComet(true));
  }
  comets.sort((a, b) => a.z - b.z);

  function drawSparkle(x, y, size, colorStr) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    const outer = size * 2.1;
    const inner = size * 0.55;
    for (let i = 0; i < 4; i++) {
      const rot = (Math.PI / 2) * i;
      ctx.lineTo(Math.cos(rot) * outer, Math.sin(rot) * outer);
      ctx.lineTo(
        Math.cos(rot + Math.PI / 4) * inner,
        Math.sin(rot + Math.PI / 4) * inner
      );
    }
    ctx.closePath();
    ctx.fillStyle = colorStr;
    ctx.fill();
    ctx.restore();
  }

  function drawGeoShape(shape, x, y) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(shape.rot);

    const s = shape.size;
    ctx.strokeStyle = "rgba(10, 10, 10, 0.08)";
    ctx.lineWidth = 1.15;

    if (shape.type === "diamond") {
      ctx.beginPath();
      ctx.moveTo(2.5, -s + 2.5);
      ctx.lineTo(s * 0.8 + 2.5, 2.5);
      ctx.lineTo(2.5, s + 2.5);
      ctx.lineTo(-s * 0.8 + 2.5, 2.5);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s * 0.8, 0);
      ctx.lineTo(0, s);
      ctx.lineTo(-s * 0.8, 0);
      ctx.closePath();
      ctx.fillStyle = `rgba(${shape.rgb}, 0.06)`;
      ctx.fill();
      ctx.strokeStyle = `rgba(${shape.rgb}, 0.28)`;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(0, s);
      ctx.moveTo(-s * 0.8, 0);
      ctx.lineTo(s * 0.8, 0);
      ctx.strokeStyle = `rgba(${shape.rgb}, 0.16)`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    } else if (shape.type === "cube") {
      const half = s * 0.68;
      ctx.strokeStyle = `rgba(${shape.rgb}, 0.24)`;
      ctx.fillStyle = `rgba(${shape.rgb}, 0.05)`;
      ctx.beginPath();
      ctx.rect(-half, -half, half * 1.6, half * 1.6);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = "rgba(10, 10, 10, 0.16)";
      ctx.strokeRect(-half + 3.5, -half + 3.5, half * 1.6, half * 1.6);
    } else {
      ctx.beginPath();
      ctx.moveTo(-s, 0);
      ctx.lineTo(s, 0);
      ctx.moveTo(0, -s);
      ctx.lineTo(0, s);
      ctx.strokeStyle = `rgba(${shape.rgb}, 0.28)`;
      ctx.lineWidth = 1.4;
      ctx.lineCap = "round";
      ctx.stroke();
    }

    ctx.restore();
  }

  let frame = 0;

  function renderCosmic() {
    ctx.clearRect(0, 0, width, height);
    frame++;

    pointer.smoothX += (pointer.normX - pointer.smoothX) * 0.06;
    pointer.smoothY += (pointer.normY - pointer.smoothY) * 0.06;

    ambientOrbs.forEach((orb) => {
      const ox =
        orb.xRatio * width +
        Math.sin(frame * orb.speed + orb.phase) * 35 -
        pointer.smoothX * 16;
      const oy =
        orb.yRatio * height +
        Math.cos(frame * orb.speed + orb.phase) * 28 -
        pointer.smoothY * 16;

      const grad = ctx.createRadialGradient(ox, oy, 10, ox, oy, orb.radius);
      grad.addColorStop(0, `rgba(${orb.rgb}, ${orb.alpha})`);
      grad.addColorStop(1, `rgba(${orb.rgb}, 0)`);

      ctx.beginPath();
      ctx.arc(ox, oy, orb.radius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    });

    celestialOrbits.forEach((orb) => {
      orb.satAngle += orb.satSpeed;
      const cx = orb.xRatio * width - pointer.smoothX * 15 * orb.z;
      const cy =
        (((orb.yRatio * height - globalSmoothScrollY * 0.06 * orb.z - pointer.smoothY * 15 * orb.z) %
          (height + 160)) +
          (height + 160)) %
          (height + 160) -
        80;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(orb.tilt);

      ctx.beginPath();
      ctx.setLineDash([5, 7]);
      ctx.ellipse(0, 0, orb.rx, orb.ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${orb.rgb}, 0.13)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);

      const satX = Math.cos(orb.satAngle) * orb.rx;
      const satY = Math.sin(orb.satAngle) * orb.ry;

      ctx.beginPath();
      ctx.arc(satX, satY, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${orb.rgb}, 0.45)`;
      ctx.fill();

      ctx.restore();
    });

    geoShapes.forEach((g) => {
      g.rot += g.rotSpeed;
      const gx =
        g.xRatio * width +
        Math.sin(frame * 0.008 + g.size) * 12 -
        pointer.smoothX * 20 * g.z;
      const gy =
        (((g.yRatio * height - globalSmoothScrollY * 0.1 * g.z - pointer.smoothY * 20 * g.z) %
          (height + 60)) +
          (height + 60)) %
          (height + 60) -
        30;

      drawGeoShape(g, gx, gy);
    });

    planets.forEach((p) => {
      const parallaxX = -pointer.smoothX * 18 * p.z;
      const parallaxY = -pointer.smoothY * 18 * p.z;
      const px =
        p.xRatio * width +
        Math.sin(frame * p.driftSpeed + p.phase) * 18 +
        parallaxX;
      const py =
        (((p.yRatio * height - globalSmoothScrollY * 0.08 * p.z + parallaxY) %
          (height + 80)) +
          (height + 80)) %
          (height + 80) -
        40;
      const rgb = p.isBlue ? "0, 102, 255" : "10, 10, 10";

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(p.tilt);

      ctx.beginPath();
      ctx.ellipse(0, 0, p.ringRx, p.ringRy, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${rgb}, 0.2)`;
      ctx.lineWidth = 1.25;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb}, 0.12)`;
      ctx.fill();
      ctx.strokeStyle = `rgba(${rgb}, 0.26)`;
      ctx.lineWidth = 1.15;
      ctx.stroke();

      ctx.restore();
    });

    const renderedStars = [];

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.x += s.vx;
      s.y += s.vy;

      if (s.x < -20) s.x = width + 20;
      if (s.x > width + 20) s.x = -20;
      if (s.y < -20) s.y = height + 20;
      if (s.y > height + 20) s.y = -20;

      const drawX =
        ((s.x - pointer.smoothX * 22 * s.z) % width + width) % width;
      const drawY =
        ((s.y -
          globalSmoothScrollY * 0.14 * s.z -
          pointer.smoothY * 22 * s.z) %
          height +
          height) %
        height;

      const alpha =
        s.baseAlpha + Math.sin(frame * s.pulseSpeed + s.pulseOffset) * 0.1;
      const rgb = s.isBlue ? "0, 102, 255" : "10, 10, 10";
      const colorStr = `rgba(${rgb}, ${Math.max(0.08, alpha)})`;

      renderedStars.push({ x: drawX, y: drawY, isBlue: s.isBlue });

      if (s.isSparkle) {
        drawSparkle(drawX, drawY, s.size, colorStr);
      } else {
        ctx.beginPath();
        ctx.arc(drawX, drawY, s.size, 0, Math.PI * 2);
        ctx.fillStyle = colorStr;
        ctx.fill();
      }
    }

    for (let i = 0; i < renderedStars.length; i++) {
      for (let j = i + 1; j < renderedStars.length; j++) {
        const a = renderedStars[i];
        const b = renderedStars[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);

        if (dist < 105) {
          const lineAlpha = (1 - dist / 105) * 0.09;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0, 102, 255, ${lineAlpha.toFixed(3)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < comets.length; i++) {
      const c = comets[i];

      const camShiftX = -pointer.smoothX * 34 * c.z;
      const camShiftY = -pointer.smoothY * 34 * c.z;

      const renderX = c.x + camShiftX;
      const renderY = c.y + camShiftY;

      if (pointer.active) {
        const dx = renderX - pointer.x;
        const dy = renderY - pointer.y;
        const dist = Math.hypot(dx, dy);
        const interactRadius = 135 * Math.max(0.7, c.z);

        if (dist > 1 && dist < interactRadius) {
          const force = ((interactRadius - dist) / interactRadius) * 0.42 * c.z;
          c.vx += (dx / dist) * force;
          c.vy += (dy / dist) * force;

          if (Math.random() < 0.35) {
            spawnSpark(renderX, renderY, c.z, c.palette, 1.3);
          }
        }
      }

      c.vx += (c.baseVx - c.vx) * 0.04;
      c.vy += (c.baseVy - c.vy) * 0.04;

      c.x += c.vx;
      c.y += c.vy;

      if (c.z > 0.85 && Math.random() < 0.22) {
        spawnSpark(renderX, renderY, c.z * 0.85, c.palette, 0.8);
      }

      const speedMag = Math.hypot(c.vx, c.vy) || 1;
      const normX = c.vx / speedMag;
      const normY = c.vy / speedMag;

      const tailX = renderX - normX * c.length;
      const tailY = renderY - normY * c.length;

      if (c.z > 0.65) {
        const shadowOffset = c.z * 7;
        const shadowGrad = ctx.createLinearGradient(
          renderX + shadowOffset,
          renderY + shadowOffset,
          tailX + shadowOffset,
          tailY + shadowOffset
        );
        shadowGrad.addColorStop(0, `rgba(10, 10, 10, ${0.09 * c.z})`);
        shadowGrad.addColorStop(1, "rgba(10, 10, 10, 0)");

        ctx.beginPath();
        ctx.moveTo(renderX + shadowOffset, renderY + shadowOffset);
        ctx.lineTo(tailX + shadowOffset, tailY + shadowOffset);
        ctx.strokeStyle = shadowGrad;
        ctx.lineWidth = c.width * 1.1;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      const outerGrad = ctx.createLinearGradient(renderX, renderY, tailX, tailY);
      outerGrad.addColorStop(0, `rgba(${c.palette.mid}, ${c.maxAlpha * 0.38})`);
      outerGrad.addColorStop(0.5, `rgba(${c.palette.tail}, ${c.maxAlpha * 0.16})`);
      outerGrad.addColorStop(1, `rgba(${c.palette.tail}, 0)`);

      ctx.beginPath();
      ctx.moveTo(renderX, renderY);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = outerGrad;
      ctx.lineWidth = c.width * 2.4;
      ctx.lineCap = "round";
      ctx.stroke();

      const coreGrad = ctx.createLinearGradient(renderX, renderY, tailX, tailY);
      coreGrad.addColorStop(0, `rgba(${c.palette.head}, ${c.maxAlpha})`);
      coreGrad.addColorStop(0.4, `rgba(${c.palette.mid}, ${c.maxAlpha * 0.65})`);
      coreGrad.addColorStop(0.8, `rgba(${c.palette.tail}, ${c.maxAlpha * 0.25})`);
      coreGrad.addColorStop(1, `rgba(${c.palette.tail}, 0)`);

      ctx.beginPath();
      ctx.moveTo(renderX, renderY);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = coreGrad;
      ctx.lineWidth = c.width;
      ctx.lineCap = "round";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(renderX, renderY, c.width * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c.palette.mid}, ${0.16 * Math.min(1, c.z)})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(renderX, renderY, c.width * 1.45, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c.palette.head}, 0.95)`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(renderX - normX * 0.5, renderY - normY * 0.5, c.width * 0.65, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c.palette.core}, 0.95)`;
      ctx.fill();

      if (c.x < -c.length - 100 || c.y > height + c.length + 100) {
        comets[i] = createComet(false, c.z);
      }
    }

    for (let i = sparks.length - 1; i >= 0; i--) {
      const sp = sparks[i];
      sp.x += sp.vx;
      sp.y += sp.vy;
      sp.alpha -= sp.decay;

      if (sp.alpha <= 0) {
        sparks.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${sp.color}, ${sp.alpha.toFixed(2)})`;
      ctx.fill();
    }

    requestAnimationFrame(renderCosmic);
  }

  renderCosmic();
}

let scrollObserver = null;

function observeScrollItems() {
  const items = document.querySelectorAll("[data-scroll-item]");

  if (!scrollObserver) {
    scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
          } else {
            const rect = entry.boundingClientRect;
            if (rect.top > window.innerHeight * 0.96 || rect.bottom < -80) {
              entry.target.classList.remove("is-inview");
            }
          }
        });
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px -15px 0px"
      }
    );
  }

  items.forEach((el) => {
    scrollObserver.observe(el);
  });
}

function initScrollLoop() {
  const progressBar = document.getElementById("scrollProgressBar");

  function updateScroll() {
    const targetY = window.scrollY;
    globalSmoothScrollY += (targetY - globalSmoothScrollY) * 0.12;

    if (progressBar) {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = maxScroll > 0 ? (targetY / maxScroll) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, percent)).toFixed(2)}%`;
    }

    requestAnimationFrame(updateScroll);
  }

  updateScroll();
}

function initSmoothAnchorScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const headerOffset = 84;
      const startY = window.scrollY;
      const targetY =
        targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;
      const distance = targetY - startY;
      const duration = 480;
      let startTime = null;

      function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
      }

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuart(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    });
  });
}

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinksContainer = document.getElementById("navLinks");
const navLinks = document.querySelectorAll(".nav-link");

if (mobileMenuBtn && navLinksContainer) {
  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = navLinksContainer.classList.toggle("open");
    mobileMenuBtn.classList.toggle("active", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("open");
      mobileMenuBtn.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (
      navLinksContainer.classList.contains("open") &&
      !navLinksContainer.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {
      navLinksContainer.classList.remove("open");
      mobileMenuBtn.classList.remove("active");
    }
  });
}

const sections = document.querySelectorAll("section[id]");
window.addEventListener(
  "scroll",
  () => {
    const scrollY = window.scrollY + 180;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { passive: true }
);

const copyDiscordBtn = document.getElementById("copyDiscordBtn");
const copyDiscordText = document.getElementById("copyDiscordText");

if (copyDiscordBtn && copyDiscordText) {
  copyDiscordBtn.addEventListener("click", () => {
    const username = copyDiscordBtn.getAttribute("data-copy") || "penkoo18";
    navigator.clipboard.writeText(username).then(() => {
      const originalText = copyDiscordText.textContent;
      copyDiscordText.textContent = `Tersalin: ${username} ✓`;
      setTimeout(() => {
        copyDiscordText.textContent = originalText;
      }, 2200);
    });
  });
}

const yearNow = document.getElementById("yearNow");
if (yearNow) {
  yearNow.textContent = new Date().getFullYear();
}

initProfilePhotoFallback();
renderSkills();
renderProjects("all");
initPhoto3DInteraction();
initSubtleTiltCards();
initCosmicBackground();
observeScrollItems();
initScrollLoop();
initSmoothAnchorScroll();
