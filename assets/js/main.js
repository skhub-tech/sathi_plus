/**
 * Sathi Plus Landing Page Script
 * Lightweight, zero-bloat vanilla JavaScript (Ponytail standard)
 */

document.addEventListener('DOMContentLoaded', () => {
  initOSDetection();
  initMockupTabs();
  initModalLightbox();
  initFAQAccordion();
  initCopyButtons();
  initMobileNav();
  initToolsSearch();
  
  // Initialize Lucide icons if loaded
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * 1. Smart OS Detection
 * Detects whether user is on macOS or Windows and tailors CTA buttons accordingly.
 */
function initOSDetection() {
  const ua = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform ? window.navigator.platform.toLowerCase() : '';
  
  const isMac = platform.includes('mac') || ua.includes('macintosh') || ua.includes('mac os');
  const isWindows = platform.includes('win') || ua.includes('windows');

  const heroCtaContainer = document.getElementById('hero-cta-container');
  const macCard = document.getElementById('card-macos');
  const winCard = document.getElementById('card-windows');

  if (!heroCtaContainer) return;

  if (isMac) {
    // Recommend macOS
    renderHeroButtons({
      primaryOS: 'macOS',
      primaryIcon: 'apple',
      primaryTitle: 'Download for macOS',
      primarySub: 'Apple Silicon M1-M4 & Intel DMG • Free v2.4',
      primaryHref: '#download-mac',
      secondaryOS: 'Windows',
      secondaryIcon: 'monitor',
      secondaryTitle: 'Download for Windows',
      secondarySub: 'Windows 10 / 11 (64-bit .exe)',
      secondaryHref: '#download-windows'
    });
    
    if (macCard) macCard.classList.add('recommended');
    const badge = macCard?.querySelector('.os-card-badge');
    if (badge) badge.textContent = 'Recommended for your Mac';
    
  } else if (isWindows) {
    // Recommend Windows
    renderHeroButtons({
      primaryOS: 'Windows',
      primaryIcon: 'monitor',
      primaryTitle: 'Download for Windows',
      primarySub: 'Windows 10 / 11 (64-bit .exe) • Free v2.4',
      primaryHref: '#download-windows',
      secondaryOS: 'macOS',
      secondaryIcon: 'apple',
      secondaryTitle: 'Download for macOS',
      secondarySub: 'Apple Silicon & Intel DMG',
      secondaryHref: '#download-mac'
    });

    if (winCard) winCard.classList.add('recommended');
    const badge = winCard?.querySelector('.os-card-badge');
    if (badge) badge.textContent = 'Recommended for your PC';

  } else {
    // Fallback for Linux/other
    renderHeroButtons({
      primaryOS: 'macOS',
      primaryIcon: 'apple',
      primaryTitle: 'Download for macOS',
      primarySub: 'Apple Silicon & Intel • Free v2.4',
      primaryHref: '#download-mac',
      secondaryOS: 'Windows',
      secondaryIcon: 'monitor',
      secondaryTitle: 'Download for Windows',
      secondarySub: 'Windows 10 / 11 64-bit',
      secondaryHref: '#download-windows'
    });
  }

  // Refresh icons
  if (window.lucide) window.lucide.createIcons();
}

const BRAND_ICONS = {
  apple: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="vertical-align: middle;"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>`,
  windows: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style="vertical-align: middle;"><path d="M0 3.449L9.75 2.1v9.451H0V3.449zm0 17.102l9.75 1.349V12.45H0v8.101zm11.25 1.558L24 24V12.45H11.25v9.659zm0-19.768v9.208H24V0l-12.75 2.341z"/></svg>`
};

function renderHeroButtons(cfg) {
  const container = document.getElementById('hero-cta-container');
  if (!container) return;

  const primaryIconSvg = BRAND_ICONS[cfg.primaryIcon] || `<i data-lucide="${cfg.primaryIcon}"></i>`;
  const secondaryIconSvg = BRAND_ICONS[cfg.secondaryIcon] || `<i data-lucide="${cfg.secondaryIcon}"></i>`;

  container.innerHTML = `
    <div class="hero-download-buttons">
      <a href="${cfg.primaryHref}" class="download-btn-highlight" id="hero-primary-download-btn">
        <div class="download-btn-icon">
          ${primaryIconSvg}
        </div>
        <div class="download-btn-text">
          <span class="download-btn-action">${cfg.primaryTitle}</span>
          <span class="download-btn-sub">${cfg.primarySub}</span>
        </div>
      </a>
      <a href="${cfg.secondaryHref}" class="download-alt-btn">
        <div class="download-btn-icon" style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
          ${secondaryIconSvg}
        </div>
        <div class="download-btn-text">
          <span style="font-weight: 600; font-size: 0.95rem;">${cfg.secondaryTitle}</span>
          <span style="font-size: 0.78rem; color: var(--text-muted);">${cfg.secondarySub}</span>
        </div>
      </a>
    </div>
  `;
}

/**
 * 2. Interactive App Mockup Tab Switcher
 */
const screenshotData = {
  music: {
    src: 'assets/screenshots/music-generator.png',
    alt: 'Sathi Plus - AI Music Generator Interface',
    title: 'Music Generator',
    category: 'Creative AI',
    desc: 'Describe a melody or song theme, choose duration (up to multi-minute), toggle vocals on/off, and generate or regenerate high-fidelity audio.',
    shortcuts: 'Send: Ctrl+Enter • Toggle Vocals: Alt+Shift+D'
  },
  document: {
    src: 'assets/screenshots/document-reader.png',
    alt: 'Sathi Plus - Focused Document Reader Workspace',
    title: 'Document Reader & Library',
    category: 'Productivity',
    desc: 'Organize files into structured folders, search through extensive reading libraries, and enjoy a distraction-free focused reading workspace.',
    shortcuts: 'Import Doc: Alt+Shift+D • Quick Search: Type name'
  },
  image: {
    src: 'assets/screenshots/image-generator.png',
    alt: 'Sathi Plus - AI Image Generator Interface',
    title: 'Image Generator & Conversation',
    category: 'Visual AI',
    desc: 'Generate stunning photorealistic or artistic images from simple text descriptions, then continue chatting to refine styles, lighting, and details.',
    shortcuts: 'Send: Ctrl+Enter • Enter: New Line'
  },
  pdf: {
    src: 'assets/screenshots/pdf-tools.png',
    alt: 'Sathi Plus - 12-in-1 PDF Tools Suite',
    title: '12-in-1 PDF Powerhouse',
    category: 'Document Suite',
    desc: 'Complete offline toolkit: Images to PDF, Merge, Split, Organize pages, Crop, Edit text, Password Protect, Remove Password, Redact, Compress & Structured JSON.',
    shortcuts: 'Quick Select: Images / PDF Files'
  }
};

function initMockupTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn[data-tab]');
  const mockupImg = document.getElementById('mockup-img');
  const featureBadge = document.getElementById('mockup-feature-badge');
  const featureTitle = document.getElementById('mockup-feature-title');
  const featureDesc = document.getElementById('mockup-feature-desc');
  const featureShortcuts = document.getElementById('mockup-shortcuts-text');

  if (!tabButtons.length || !mockupImg) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-tab');
      const data = screenshotData[tabKey];
      if (!data) return;

      // Update active tab button style
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Smooth fade transition for the screenshot image
      mockupImg.style.opacity = '0';
      setTimeout(() => {
        mockupImg.src = data.src;
        mockupImg.alt = data.alt;
        mockupImg.setAttribute('data-fullsrc', data.src);
        mockupImg.style.opacity = '1';

        if (featureBadge) featureBadge.textContent = data.category;
        if (featureTitle) featureTitle.textContent = data.title;
        if (featureDesc) featureDesc.textContent = data.desc;
        if (featureShortcuts) featureShortcuts.textContent = data.shortcuts;
      }, 150);
    });
  });
}

/**
 * 3. Modal Lightbox for Full-Resolution Screenshot Inspection
 */
function initModalLightbox() {
  const modal = document.getElementById('screenshot-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const triggerContainer = document.getElementById('mockup-screen-container');
  const zoomBtn = document.getElementById('mockup-zoom-btn');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal || !modalImg || !triggerContainer) return;

  const openModal = () => {
    const mockupImg = document.getElementById('mockup-img');
    const activeTab = document.querySelector('.tab-btn.active');
    const tabKey = activeTab ? activeTab.getAttribute('data-tab') : 'music';
    const data = screenshotData[tabKey];

    if (mockupImg && data) {
      modalImg.src = data.src;
      modalImg.alt = data.alt;
      if (modalTitle) modalTitle.textContent = `Sathi Plus - ${data.title}`;
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  triggerContainer.addEventListener('click', openModal);
  if (zoomBtn) zoomBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/**
 * 4. FAQ Accordion with Keyboard Support
 */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Close other items
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('open');
      });

      // Toggle current
      item.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });
}

/**
 * 5. One-Click Copy for CLI Commands (Brew & Winget)
 */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<i data-lucide="check" style="color: #10b981;"></i>`;
        if (window.lucide) window.lucide.createIcons();

        setTimeout(() => {
          btn.innerHTML = originalHtml;
          if (window.lucide) window.lucide.createIcons();
        }, 2000);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    });
  });
}

/**
 * 6. Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  // Close drawer when link clicked
  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

/**
 * 7. Live Filter for 18+ Tools Matrix
 */
function initToolsSearch() {
  const searchInput = document.getElementById('tools-search-input');
  const countBadge = document.getElementById('tools-search-count');
  const toolCards = document.querySelectorAll('.tool-card');
  if (!searchInput || !toolCards.length) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    toolCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const isMatch = text.includes(query);
      card.style.display = isMatch ? 'flex' : 'none';
      if (isMatch) visibleCount++;
    });

    if (countBadge) {
      countBadge.textContent = query ? `${visibleCount} found` : `${toolCards.length} tools`;
    }
  });
}
