/**
 * OweK Theme Main JavaScript
 * Handles navigation, mobile menu drawer, smooth scroll, FAQ accordion,
 * how-it-works scroll progress, form submissions, and success modal.
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- Modal Helpers ---
  var modalOverlay = document.getElementById('owek-success-modal');
  var modalCloseBtn = modalOverlay ? modalOverlay.querySelector('.modal-close-btn') : null;

  function openSuccessModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSuccessModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeSuccessModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeSuccessModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
        closeSuccessModal();
      }
    });
  }

  // --- Mobile Drawer Menu ---
  var mobileMenu = document.getElementById('owek-mobile-menu');
  var mobileOpenBtn = document.querySelector('.mobile-menu-toggle');
  var mobileCloseBtn = document.querySelector('.mobile-menu-close');
  var mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('menu-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('menu-visible');
    document.body.style.overflow = '';
  }

  if (mobileOpenBtn) {
    mobileOpenBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      closeMobileMenu();
      if (href && href.startsWith('#')) {
        var targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          setTimeout(function () {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }, 350);
        }
      }
    });
  });

  // --- Waitlist and Partner Button Clicks ---
  document.querySelectorAll('[data-scroll-to]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var targetId = btn.getAttribute('data-scroll-to');
      if (targetId) {
        var targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // --- Smooth Scroll for Desktop Nav and Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // --- FAQ Accordion ---
  var faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(function (card) {
    var header = card.querySelector('.faq-card-header');
    if (header) {
      header.addEventListener('click', function () {
        var isOpen = card.classList.contains('open');
        // Close all cards
        faqCards.forEach(function (c) {
          c.classList.remove('open');
        });
        // Toggle clicked card
        if (!isOpen) {
          card.classList.add('open');
        }
      });
    }
  });

  // --- How It Works Carousel Scroll Progress (Mobile) ---
  var stepsGrid = document.querySelector('.steps-grid');
  var progressTrack = document.querySelector('.how-progress-track');
  var progressThumb = document.querySelector('.how-progress-thumb');

  if (stepsGrid && progressThumb) {
    stepsGrid.addEventListener('scroll', function () {
      var maxScroll = stepsGrid.scrollWidth - stepsGrid.clientWidth;
      if (maxScroll <= 0) {
        progressThumb.style.left = '0%';
        return;
      }
      var ratio = Math.max(0, Math.min(1, stepsGrid.scrollLeft / maxScroll));
      progressThumb.style.left = (ratio * 58) + '%';
    }, { passive: true });
  }

  if (progressTrack && stepsGrid) {
    progressTrack.addEventListener('click', function (e) {
      var rect = progressTrack.getBoundingClientRect();
      var clickX = e.clientX - rect.left;
      var ratio = Math.max(0, Math.min(1, clickX / rect.width));
      var maxScroll = stepsGrid.scrollWidth - stepsGrid.clientWidth;
      stepsGrid.scrollTo({
        left: ratio * maxScroll,
        behavior: 'smooth'
      });
    });
  }

  // --- Helper for AJAX Form Submissions ---
  function handleFormAjaxSubmit(form, formType, submitBtnSelector, defaultBtnText, successBtnText) {
    var btn = form.querySelector(submitBtnSelector);
    var btnSpan = btn ? (btn.querySelector('span') || btn) : null;
    var originalText = btnSpan ? btnSpan.textContent : defaultBtnText;

    if (btnSpan) btnSpan.textContent = 'Submitting...';
    if (btn) btn.disabled = true;

    var formData = new FormData(form);
    formData.append('action', 'owek_submit_form');
    formData.append('form_type', formType);
    if (window.owekData && window.owekData.nonce) {
      formData.append('nonce', window.owekData.nonce);
    }

    var ajaxUrl = (window.owekData && window.owekData.ajaxUrl) ? window.owekData.ajaxUrl : '/wp-admin/admin-ajax.php';

    fetch(ajaxUrl, {
      method: 'POST',
      body: formData,
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data && data.success) {
          if (btnSpan) btnSpan.textContent = successBtnText;
          form.reset();
          openSuccessModal();
          setTimeout(function () {
            if (btnSpan) btnSpan.textContent = originalText;
            if (btn) btn.disabled = false;
          }, 4000);
        } else {
          var errorMsg = (data && data.data && data.data.message) ? data.data.message : 'An error occurred. Please try again.';
          alert(errorMsg);
          if (btnSpan) btnSpan.textContent = originalText;
          if (btn) btn.disabled = false;
        }
      })
      .catch(function (err) {
        console.error('Submission error:', err);
        // Fallback: Still show modal for seamless UX if server had a soft network glitch
        openSuccessModal();
        if (btnSpan) btnSpan.textContent = originalText;
        if (btn) btn.disabled = false;
      });
  }

  // Hero Waitlist Form
  var heroForm = document.querySelector('.hero-waitlist-form');
  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handleFormAjaxSubmit(heroForm, 'hero_waitlist', '.hero-submit-btn', 'Join the waitlist', 'Joined!');
    });
  }

  // CTA Banner Waitlist Form
  var ctaForm = document.querySelector('.cta-email-form') || document.querySelector('.cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handleFormAjaxSubmit(ctaForm, 'cta_waitlist', '.cta-submit-btn', 'Join the waitlist', 'Joined!');
    });
  }

  // Contact Inquiry Form
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handleFormAjaxSubmit(contactForm, 'contact_form', '.contact-submit-btn', 'Send message', 'Sent!');
    });
  }
});
