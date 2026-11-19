/* ==========================================================================
   ZEBICOM — Vanilla JavaScript Interactive Engine
   ========================================================================== */

(function () {
  'use strict';

  const WHATSAPP_BASE = 'https://wa.me/918519002579';
  const EMAIL_ADDRESS = 'zebicomcomapny@gmail.com';

  /* ------------------------------------------------------------------------
     Service & AI Employee Data
     ------------------------------------------------------------------------ */
  const SERVICES_DATA = {
    'digital-marketing': {
      number: 'Service 01',
      title: 'Digital Marketing',
      selectValue: 'Digital Marketing',
      description:
        'Build your brand, reach the right audience, and generate quality business opportunities.',
      outcomeNote:
        'Structured acquisition funnels combining paid media, search visibility, and consistent brand storytelling.',
      capabilities: [
        'Social Media Marketing',
        'Meta Ads Management',
        'Google Ads Management',
        'Lead Generation',
        'SEO Optimization',
        'Content Strategy',
        'Social Media Management',
      ],
    },
    'web-development': {
      number: 'Service 02',
      title: 'Web Development',
      selectValue: 'Web Development',
      description:
        'Create powerful digital experiences with modern, responsive, and conversion-focused websites.',
      outcomeNote:
        'Fast, mobile-ready web platforms engineered for clear brand authority and effortless customer inquiry flows.',
      capabilities: [
        'Business Websites',
        'E-commerce Websites',
        'Landing Pages',
        'WordPress Development',
        'Custom Website Development',
      ],
    },
    'it-solutions': {
      number: 'Service 03',
      title: 'IT & Software Solutions',
      selectValue: 'IT Solutions',
      description:
        'Technology solutions designed to simplify business operations and improve productivity.',
      outcomeNote:
        'Tailored software systems connecting internal teams, customer portals, and third-party business infrastructure.',
      capabilities: [
        'Custom Software Development',
        'Web Applications',
        'Mobile Applications',
        'SaaS Development',
        'Business Management Systems',
        'API Integrations',
      ],
    },
    'ai-agents': {
      number: 'Service 04',
      title: 'AI Agents',
      selectValue: 'AI Agents',
      description:
        'Deploy intelligent AI employees that communicate with customers and support your business operations 24/7.',
      outcomeNote:
        'Conversational voice and chat agents trained on your business rules to respond instantly at any hour.',
      capabilities: [
        'AI Voice Agents',
        'AI Calling Agents',
        'AI Receptionists',
        'AI Customer Support Agents',
        'AI Chatbots',
        'Appointment Booking Agents',
      ],
    },
    'ai-automation': {
      number: 'Service 05',
      title: 'AI Automation',
      selectValue: 'AI Automation',
      description:
        'Automate repetitive business tasks and connect your business systems with intelligent workflows.',
      outcomeNote:
        'End-to-end automated pipelines that capture leads, sync CRM records, and trigger instant customer follow-ups.',
      capabilities: [
        'Business Workflow Automation',
        'n8n Automation',
        'CRM Automation',
        'WhatsApp Automation',
        'Email Automation',
        'Lead Follow-up Automation',
        'AI-Powered Business Workflows',
      ],
    },
    'custom-ai-solutions': {
      number: 'Service 06',
      title: 'Custom AI Solutions',
      selectValue: 'Custom AI Solutions',
      description:
        'Build intelligent solutions tailored to your business requirements.',
      outcomeNote:
        'Bespoke AI architectures integrated directly into your proprietary data, internal tools, and industry workflows.',
      capabilities: [
        'Custom AI Integrations',
        'AI-Powered Applications',
        'Intelligent Business Assistants',
        'AI Data Processing',
        'Custom Automation Systems',
      ],
    },
  };

  const AI_EMPLOYEES_DATA = {
    'ai-receptionist': {
      title: 'AI Receptionist',
      channel: 'Inbound Voice & Scheduling',
      steps: [
        'Answers every incoming business call immediately without hold queues',
        'Provides accurate service, location, and operating information',
        'Books, confirms, and reschedules calendar appointments automatically',
      ],
      dialogue: [
        {
          speaker: 'Caller',
          type: 'caller',
          line: 'Hello, I would like to schedule a consultation for our company website and automation setup.',
        },
        {
          speaker: 'AI Agent',
          type: 'agent',
          line: 'Good day. I can arrange that for you right away. Would you prefer a slot tomorrow morning or afternoon?',
        },
        {
          speaker: 'System',
          type: 'system',
          line: 'Calendar slot verified · Confirmation dispatched via WhatsApp & Email.',
        },
      ],
    },
    'ai-calling-agent': {
      title: 'AI Calling Agent',
      channel: 'Outbound Voice Qualification',
      steps: [
        'Initiates prompt follow-up calls when new inquiries arrive',
        'Qualifies project scope, timeline, and service requirements naturally',
        'Routes qualified prospects directly to your sales team and CRM',
      ],
      dialogue: [
        {
          speaker: 'AI Agent',
          type: 'agent',
          line: 'Hi, following up on your recent inquiry with ZEBICOM. Are you looking to deploy AI support or workflow automation first?',
        },
        {
          speaker: 'Caller',
          type: 'caller',
          line: 'We want to automate our WhatsApp lead responses and CRM updates.',
        },
        {
          speaker: 'System',
          type: 'system',
          line: 'Lead qualified · CRM record updated · Specialist handoff scheduled.',
        },
      ],
    },
    'ai-customer-support': {
      title: 'AI Customer Support',
      channel: 'Omnichannel Support Desk',
      steps: [
        'Resolves routine inquiries across web chat, WhatsApp, and email',
        'References verified business documentation for consistent responses',
        'Escalates complex tickets with full conversation context to human staff',
      ],
      dialogue: [
        {
          speaker: 'Caller',
          type: 'caller',
          line: 'Can your systems integrate with our existing CRM and billing tools?',
        },
        {
          speaker: 'AI Agent',
          type: 'agent',
          line: 'Yes. We build API integrations and n8n workflows tailored to connect directly with your current stack.',
        },
        {
          speaker: 'System',
          type: 'system',
          line: 'Technical brief attached · Ticket logged for engineering review.',
        },
      ],
    },
    'ai-business-automation': {
      title: 'AI Business Automation',
      channel: 'Cross-System Orchestration',
      steps: [
        'Links forms, Meta/Google lead ads, WhatsApp, and internal databases',
        'Processes, enriches, and routes incoming operational data automatically',
        'Eliminates manual copy-paste tasks across sales and operations teams',
      ],
      dialogue: [
        {
          speaker: 'System',
          type: 'system',
          line: 'Trigger: New lead captured from campaign landing page.',
        },
        {
          speaker: 'AI Agent',
          type: 'agent',
          line: 'Data validated, categorized by service interest, and assigned to regional workflow.',
        },
        {
          speaker: 'System',
          type: 'system',
          line: 'CRM synced · Instant WhatsApp greeting sent · Team notified.',
        },
      ],
    },
  };

  /* ------------------------------------------------------------------------
     Utility Helpers
     ------------------------------------------------------------------------ */
  function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function openWhatsAppUrl(url) {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  function preselectServiceAndBook(serviceName) {
    const bookingBtns = document.querySelectorAll('[data-booking-service]');
    bookingBtns.forEach((btn) => {
      const val = btn.getAttribute('data-booking-service');
      const isMatch = val === serviceName;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-pressed', String(isMatch));
    });

    const ticketService = document.getElementById('ticket-service');
    if (ticketService) {
      ticketService.textContent = serviceName;
    }

    const contactSelect = document.getElementById('contact-service');
    if (contactSelect && contactSelect instanceof HTMLSelectElement) {
      contactSelect.value = serviceName;
    }

    bookingState.service = serviceName;
    scrollToSection('book-call');
  }

  /* ------------------------------------------------------------------------
     1. Branded Intro Curtain
     ------------------------------------------------------------------------ */
  const loader = document.getElementById('page-loader');
  if (loader) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      loader.classList.add('is-hidden');
    } else {
      window.setTimeout(() => {
        loader.classList.add('is-hidden');
      }, 520);
    }
  }

  /* ------------------------------------------------------------------------
     2. Sticky Header, Mobile Drawer & Back-to-Top
     ------------------------------------------------------------------------ */
  const siteHeader = document.getElementById('site-header');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const backToTopBtn = document.getElementById('back-to-top');

  function setMobileMenu(open) {
    if (!hamburgerBtn || !mobileDrawer) return;
    hamburgerBtn.setAttribute('aria-expanded', String(open));
    hamburgerBtn.setAttribute(
      'aria-label',
      open ? 'Close navigation menu' : 'Open navigation menu'
    );
    mobileDrawer.classList.toggle('is-open', open);
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      setMobileMenu(!isOpen);
    });
  }

  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      if (siteHeader) {
        siteHeader.classList.toggle('is-scrolled', y > 24);
      }
      if (backToTopBtn) {
        backToTopBtn.classList.toggle('is-visible', y > 480);
      }
    },
    { passive: true }
  );

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => scrollToSection('home'));
  }

  document.querySelectorAll('[data-scroll-target]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const targetId = el.getAttribute('data-scroll-target');
      if (targetId) {
        e.preventDefault();
        setMobileMenu(false);
        scrollToSection(targetId);
      }
    });
  });

  /* ------------------------------------------------------------------------
     3. Active Navigation Highlighting & Scroll Reveal Observer
     ------------------------------------------------------------------------ */
  const revealNodes = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    );
    revealNodes.forEach((node) => revealObs.observe(node));

    const trackedSections = ['home', 'about', 'services', 'ai-solutions', 'our-work', 'contact'];
    const navObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = entry.target.id;
            document.querySelectorAll('[data-nav-id]').forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('data-nav-id') === activeId);
            });
          }
        });
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0 }
    );
    trackedSections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) navObs.observe(section);
    });
  } else {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
  }

  /* ------------------------------------------------------------------------
     4. Services Specification Modal
     ------------------------------------------------------------------------ */
  const serviceModal = document.getElementById('service-modal');
  const modalNumber = document.getElementById('modal-service-number');
  const modalTitle = document.getElementById('modal-service-title');
  const modalDesc = document.getElementById('modal-service-desc');
  const modalOutcome = document.getElementById('modal-service-outcome');
  const modalCaps = document.getElementById('modal-service-caps');
  const modalInquireBtn = document.getElementById('modal-inquire-btn');
  let activeModalServiceKey = 'digital-marketing';

  function closeServiceModal() {
    if (serviceModal) {
      serviceModal.setAttribute('hidden', '');
    }
  }

  function openServiceModal(serviceKey) {
    const data = SERVICES_DATA[serviceKey];
    if (!data || !serviceModal) return;
    activeModalServiceKey = serviceKey;

    if (modalNumber) modalNumber.textContent = data.number;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDesc) modalDesc.textContent = data.description;
    if (modalOutcome) modalOutcome.textContent = data.outcomeNote;
    if (modalInquireBtn) modalInquireBtn.textContent = `Inquire About ${data.title}`;

    if (modalCaps) {
      modalCaps.innerHTML = '';
      data.capabilities.forEach((cap) => {
        const li = document.createElement('li');
        li.className = 'modal-cap-item';
        li.innerHTML =
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F00018" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        const span = document.createElement('span');
        span.textContent = cap;
        li.appendChild(span);
        modalCaps.appendChild(li);
      });
    }

    serviceModal.removeAttribute('hidden');
  }

  document.querySelectorAll('[data-open-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-open-service');
      if (key) openServiceModal(key);
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', closeServiceModal);
  });

  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) closeServiceModal();
    });
  }

  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', () => {
      const data = SERVICES_DATA[activeModalServiceKey];
      closeServiceModal();
      if (data) {
        preselectServiceAndBook(data.selectValue);
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeServiceModal();
      setMobileMenu(false);
    }
  });

  /* ------------------------------------------------------------------------
     5. AI Employees Interactive Switcher
     ------------------------------------------------------------------------ */
  const aiStageChannel = document.getElementById('ai-stage-channel');
  const aiStageTitle = document.getElementById('ai-stage-title');
  const aiFlowList = document.getElementById('ai-flow-list');
  const aiDialogueList = document.getElementById('ai-dialogue-list');

  function selectAIEmployee(agentId) {
    const data = AI_EMPLOYEES_DATA[agentId];
    if (!data) return;

    document.querySelectorAll('[data-ai-card]').forEach((card) => {
      const isMatch = card.getAttribute('data-ai-card') === agentId;
      card.classList.toggle('is-selected', isMatch);
      card.setAttribute('aria-pressed', String(isMatch));
      const statusLabel = card.querySelector('[data-ai-status]');
      if (statusLabel) {
        statusLabel.textContent = isMatch ? 'Selected' : 'Inspect';
      }
    });

    if (aiStageChannel) aiStageChannel.textContent = data.channel;
    if (aiStageTitle) aiStageTitle.textContent = data.title;

    if (aiFlowList) {
      aiFlowList.innerHTML = '';
      data.steps.forEach((step) => {
        const li = document.createElement('li');
        li.textContent = step;
        aiFlowList.appendChild(li);
      });
    }

    if (aiDialogueList) {
      aiDialogueList.innerHTML = '';
      data.dialogue.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'ai-dialogue-item';
        if (item.type === 'agent') div.classList.add('ai-dialogue-item--agent');
        if (item.type === 'system') div.classList.add('ai-dialogue-item--system');

        const speaker = document.createElement('span');
        speaker.className = 'ai-dialogue-speaker';
        speaker.textContent = `${item.speaker}:`;

        const text = document.createElement('span');
        text.textContent = item.line;

        div.appendChild(speaker);
        div.appendChild(text);
        aiDialogueList.appendChild(div);
      });
    }
  }

  document.querySelectorAll('[data-ai-card]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-ai-card');
      if (id) selectAIEmployee(id);
    });
  });

  /* ------------------------------------------------------------------------
     6. Our Work Category Filter & Pre-select Actions
     ------------------------------------------------------------------------ */
  document.querySelectorAll('[data-work-filter]').forEach((tab) => {
    tab.addEventListener('click', () => {
      const selected = tab.getAttribute('data-work-filter') || 'All';
      document.querySelectorAll('[data-work-filter]').forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });

      document.querySelectorAll('[data-work-category]').forEach((card) => {
        const cat = card.getAttribute('data-work-category');
        if (selected === 'All' || cat === selected) {
          card.removeAttribute('hidden');
        } else {
          card.setAttribute('hidden', '');
        }
      });
    });
  });

  document.querySelectorAll('[data-book-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const serviceName = btn.getAttribute('data-book-service');
      if (serviceName) {
        preselectServiceAndBook(serviceName);
      }
    });
  });

  /* ------------------------------------------------------------------------
     7. Process Step Hover / Click Focus
     ------------------------------------------------------------------------ */
  const processSteps = document.querySelectorAll('[data-process-step]');
  processSteps.forEach((step) => {
    const activate = () => {
      processSteps.forEach((s) => s.classList.remove('is-active'));
      step.classList.add('is-active');
    };
    step.addEventListener('mouseenter', activate);
    step.addEventListener('focus', activate);
    step.addEventListener('click', activate);
  });

  /* ------------------------------------------------------------------------
     8. WhatsApp Booking System (Dynamic Dates + Validation + Instant Launch)
     ------------------------------------------------------------------------ */
  const bookingState = {
    service: 'Digital Marketing',
    dateLabel: '',
    fullDate: '',
    time: '11:30 AM',
    format: 'WhatsApp Video / Voice Call',
    formatShort: 'WhatsApp Call',
  };

  const dateContainer = document.getElementById('booking-dates-container');
  const ticketService = document.getElementById('ticket-service');
  const ticketFormat = document.getElementById('ticket-format');
  const ticketDate = document.getElementById('ticket-date');
  const ticketTime = document.getElementById('ticket-time');

  function buildUpcomingDates() {
    if (!dateContainer) return;
    dateContainer.innerHTML = '';
    const base = new Date();

    for (let i = 0; i < 6; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);

      const dayName =
        i === 0
          ? 'Today'
          : i === 1
          ? 'Tomorrow'
          : d.toLocaleDateString('en-US', { weekday: 'short' });
      const dateLabel = d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
      const fullLabel = d.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'slot-btn slot-btn--date';
      const isDefault = i === 1;
      if (isDefault) {
        btn.classList.add('is-active');
        bookingState.dateLabel = `${dayName}, ${dateLabel}`;
        bookingState.fullDate = fullLabel;
        if (ticketDate) ticketDate.textContent = bookingState.dateLabel;
      }
      btn.setAttribute('aria-pressed', String(isDefault));
      btn.innerHTML = `<span class="slot-date-day">${dayName}</span><span class="slot-date-num">${dateLabel}</span>`;

      btn.addEventListener('click', () => {
        dateContainer.querySelectorAll('.slot-btn--date').forEach((b) => {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        bookingState.dateLabel = `${dayName}, ${dateLabel}`;
        bookingState.fullDate = fullLabel;
        if (ticketDate) ticketDate.textContent = bookingState.dateLabel;
      });

      dateContainer.appendChild(btn);
    }
  }
  buildUpcomingDates();

  document.querySelectorAll('[data-booking-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-booking-service') || 'Digital Marketing';
      document.querySelectorAll('[data-booking-service]').forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      bookingState.service = val;
      if (ticketService) ticketService.textContent = val;
    });
  });

  document.querySelectorAll('[data-booking-time]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-booking-time') || '11:30 AM';
      document.querySelectorAll('[data-booking-time]').forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      bookingState.time = val;
      if (ticketTime) ticketTime.textContent = `${val} IST`;
    });
  });

  document.querySelectorAll('[data-booking-format]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const fullVal = btn.getAttribute('data-booking-format') || 'WhatsApp Video / Voice Call';
      const shortVal = btn.getAttribute('data-booking-format-short') || 'WhatsApp Call';
      document.querySelectorAll('[data-booking-format]').forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      bookingState.format = fullVal;
      bookingState.formatShort = shortVal;
      if (ticketFormat) ticketFormat.textContent = shortVal;
    });
  });

  const bookingForm = document.getElementById('booking-form');
  const bookingConfirmState = document.getElementById('booking-confirm-state');
  const bookingNameInput = document.getElementById('booking-name');
  const bookingBizInput = document.getElementById('booking-business');
  const bookingPhoneInput = document.getElementById('booking-phone');
  const bookingGoalInput = document.getElementById('booking-goal');
  const bookingNameError = document.getElementById('booking-name-error');
  const bookingPhoneError = document.getElementById('booking-phone-error');
  const bookingRefTitle = document.getElementById('booking-ref-title');
  const bookingRefSlot = document.getElementById('booking-ref-slot');
  const bookingWaLaunch = document.getElementById('booking-wa-launch');
  const bookingCopyBtn = document.getElementById('booking-copy-btn');
  const bookingResetBtn = document.getElementById('booking-reset-btn');
  let lastBookingSummary = '';

  function setFieldError(inputEl, errorEl, show) {
    if (inputEl) inputEl.classList.toggle('is-error', show);
    if (errorEl) errorEl.classList.toggle('is-visible', show);
  }

  if (bookingNameInput) {
    bookingNameInput.addEventListener('input', () =>
      setFieldError(bookingNameInput, bookingNameError, false)
    );
  }
  if (bookingPhoneInput) {
    bookingPhoneInput.addEventListener('input', () =>
      setFieldError(bookingPhoneInput, bookingPhoneError, false)
    );
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameVal = bookingNameInput instanceof HTMLInputElement ? bookingNameInput.value.trim() : '';
      const bizVal = bookingBizInput instanceof HTMLInputElement ? bookingBizInput.value.trim() : '';
      const phoneVal = bookingPhoneInput instanceof HTMLInputElement ? bookingPhoneInput.value.trim() : '';
      const goalVal = bookingGoalInput instanceof HTMLInputElement ? bookingGoalInput.value.trim() : '';

      const digits = phoneVal.replace(/\D/g, '');
      const badName = nameVal.length < 2;
      const badPhone = digits.length < 8 || digits.length > 15;

      setFieldError(bookingNameInput, bookingNameError, badName);
      setFieldError(bookingPhoneInput, bookingPhoneError, badPhone);

      if (badName || badPhone) return;

      const refCode = `ZBC-${Math.floor(1000 + Math.random() * 9000)}`;
      const lines = [
        'Hello ZEBICOM Team,',
        '',
        `*Consultation Booking Request (${refCode})*`,
        `Service Focus: ${bookingState.service}`,
        `Preferred Date: ${bookingState.fullDate}`,
        `Preferred Time: ${bookingState.time} (IST)`,
        `Meeting Format: ${bookingState.format}`,
        `Name: ${nameVal}`,
        `Business: ${bizVal || 'Not specified'}`,
        `WhatsApp Number: ${phoneVal}`,
        goalVal ? `Project Goal: ${goalVal}` : '',
      ].filter(Boolean);

      lastBookingSummary = lines.join('\n');
      const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(lastBookingSummary)}`;

      if (bookingRefTitle) bookingRefTitle.textContent = `Slot Ready · Ref ${refCode}`;
      if (bookingRefSlot) bookingRefSlot.textContent = `${bookingState.dateLabel} (${bookingState.time})`;
      if (bookingWaLaunch && bookingWaLaunch instanceof HTMLAnchorElement) {
        bookingWaLaunch.href = waUrl;
      }

      const triggerConfirmationAnimation = (el) => {
        if (!el) return;
        el.classList.remove('is-animating');
        void el.offsetWidth;
        el.classList.add('is-animating');
      };

      bookingForm.setAttribute('hidden', '');
      if (bookingConfirmState) {
        bookingConfirmState.removeAttribute('hidden');
        triggerConfirmationAnimation(bookingConfirmState);
      }

      openWhatsAppUrl(waUrl);
    });
  }

  if (bookingCopyBtn) {
    bookingCopyBtn.addEventListener('click', async () => {
      if (!lastBookingSummary) return;
      try {
        await navigator.clipboard.writeText(lastBookingSummary);
        bookingCopyBtn.textContent = 'Copied';
        window.setTimeout(() => {
          bookingCopyBtn.textContent = 'Copy Pass';
        }, 2500);
      } catch {
        bookingCopyBtn.textContent = 'Copy Pass';
      }
    });
  }

  if (bookingResetBtn) {
    bookingResetBtn.addEventListener('click', () => {
      if (bookingConfirmState) {
        bookingConfirmState.classList.remove('is-animating');
        bookingConfirmState.setAttribute('hidden', '');
      }
      if (bookingForm) bookingForm.removeAttribute('hidden');
    });
  }

  /* ------------------------------------------------------------------------
     9. Contact Us Form Validation & WhatsApp Inquiry Integration
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contact-form');
  const contactName = document.getElementById('contact-fullName');
  const contactBusiness = document.getElementById('contact-businessName');
  const contactEmail = document.getElementById('contact-email');
  const contactPhone = document.getElementById('contact-phone');
  const contactService = document.getElementById('contact-service');
  const contactDetails = document.getElementById('contact-details');

  const contactNameErr = document.getElementById('contact-fullName-error');
  const contactEmailErr = document.getElementById('contact-email-error');
  const contactPhoneErr = document.getElementById('contact-phone-error');
  const contactDetailsErr = document.getElementById('contact-details-error');

  const contactStatusBox = document.getElementById('contact-status-box');
  const contactWaLink = document.getElementById('contact-wa-link');
  const contactCopyBtn = document.getElementById('contact-copy-btn');
  const contactMailLink = document.getElementById('contact-mail-link');
  let lastInquirySummary = '';

  [
    [contactName, contactNameErr],
    [contactEmail, contactEmailErr],
    [contactPhone, contactPhoneErr],
    [contactDetails, contactDetailsErr],
  ].forEach(([inputEl, errEl]) => {
    if (inputEl) {
      inputEl.addEventListener('input', () => setFieldError(inputEl, errEl, false));
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameVal = contactName instanceof HTMLInputElement ? contactName.value.trim() : '';
      const bizVal = contactBusiness instanceof HTMLInputElement ? contactBusiness.value.trim() : '';
      const emailVal = contactEmail instanceof HTMLInputElement ? contactEmail.value.trim() : '';
      const phoneVal = contactPhone instanceof HTMLInputElement ? contactPhone.value.trim() : '';
      const serviceVal = contactService instanceof HTMLSelectElement ? contactService.value : 'Digital Marketing';
      const detailsVal = contactDetails instanceof HTMLTextAreaElement ? contactDetails.value.trim() : '';

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneDigits = phoneVal.replace(/\D/g, '');

      const badName = nameVal.length < 2;
      const badEmail = !emailRegex.test(emailVal);
      const badPhone = phoneDigits.length < 8 || phoneDigits.length > 15;
      const badDetails = detailsVal.length < 10;

      setFieldError(contactName, contactNameErr, badName);
      setFieldError(contactEmail, contactEmailErr, badEmail);
      setFieldError(contactPhone, contactPhoneErr, badPhone);
      setFieldError(contactDetails, contactDetailsErr, badDetails);

      if (badName || badEmail || badPhone || badDetails) return;

      const lines = [
        'Hello ZEBICOM Team,',
        '',
        '*New Project Inquiry*',
        `Full Name: ${nameVal}`,
        `Business Name: ${bizVal || 'Not specified'}`,
        `Email: ${emailVal}`,
        `Phone: ${phoneVal}`,
        `Selected Service: ${serviceVal}`,
        `Project Details: ${detailsVal}`,
      ];

      lastInquirySummary = lines.join('\n');
      const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(lastInquirySummary)}`;
      const mailUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
        `ZEBICOM Inquiry — ${serviceVal}`
      )}&body=${encodeURIComponent(lastInquirySummary)}`;

      if (contactWaLink && contactWaLink instanceof HTMLAnchorElement) {
        contactWaLink.href = waUrl;
      }
      if (contactMailLink && contactMailLink instanceof HTMLAnchorElement) {
        contactMailLink.href = mailUrl;
      }
      if (contactStatusBox) {
        contactStatusBox.removeAttribute('hidden');
        contactStatusBox.classList.remove('is-animating');
        void contactStatusBox.offsetWidth;
        contactStatusBox.classList.add('is-animating');
        contactStatusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      openWhatsAppUrl(waUrl);
    });
  }

  if (contactCopyBtn) {
    contactCopyBtn.addEventListener('click', async () => {
      if (!lastInquirySummary) return;
      try {
        await navigator.clipboard.writeText(lastInquirySummary);
        contactCopyBtn.textContent = 'Copied';
        window.setTimeout(() => {
          contactCopyBtn.textContent = 'Copy Summary';
        }, 2500);
      } catch {
        contactCopyBtn.textContent = 'Copy Summary';
      }
    });
  }

  /* ------------------------------------------------------------------------
     10. Frequently Asked Questions (Sleek Accordion)
     ------------------------------------------------------------------------ */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const wasOpen = item.classList.contains('is-open');

      faqItems.forEach((other) => {
        other.classList.remove('is-open');
        const otherTrigger = other.querySelector('.faq-trigger');
        const otherPanel = other.querySelector('.faq-panel');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        if (otherPanel) otherPanel.setAttribute('hidden', '');
      });

      if (!wasOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.removeAttribute('hidden');
      }
    });
  });
})();
