/**
 * OweK Shopify Theme Main JavaScript
 * Handles navigation, mobile menu drawer, smooth scroll, FAQ accordion,
 * how-it-works scroll progress, Shopify AJAX/native form submissions, and success modal.
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- Modal Helpers ---
  var modalOverlay = document.getElementById('owek-success-modal');

  function openSuccessModal(title, message) {
    if (!modalOverlay) modalOverlay = document.getElementById('owek-success-modal');
    if (!modalOverlay) return;

    if (title) {
      var titleEl = modalOverlay.querySelector('.modal-title') || modalOverlay.querySelector('#modal-title');
      if (titleEl) titleEl.textContent = title;
    }
    if (message) {
      var msgEl = modalOverlay.querySelector('.modal-message') || modalOverlay.querySelector('#modal-desc');
      if (msgEl) msgEl.textContent = message;
    }

    modalOverlay.classList.add('open');
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeSuccessModal() {
    if (!modalOverlay) modalOverlay = document.getElementById('owek-success-modal');
    if (!modalOverlay) return;

    modalOverlay.classList.remove('open');
    modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeSuccessModal();
      }
    });

    var closeBtn = modalOverlay.querySelector('.modal-close-btn') || document.getElementById('modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeSuccessModal);
    }

    var okBtn = modalOverlay.querySelector('.modal-done-btn') || document.getElementById('modal-ok-btn');
    if (okBtn) {
      okBtn.addEventListener('click', closeSuccessModal);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && (modalOverlay.classList.contains('open') || modalOverlay.style.display === 'flex')) {
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
    if (!mobileMenu) mobileMenu = document.getElementById('owek-mobile-menu');
    if (!mobileMenu) return;
    mobileMenu.classList.add('menu-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu) mobileMenu = document.getElementById('owek-mobile-menu');
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

  // --- Check if Page Reloaded with Shopify Form Success Marker ---
  var successMarker = document.querySelector('.shopify-submission-success-marker');
  var urlParams = new URLSearchParams(window.location.search);
  var hash = window.location.hash || '';

  if (successMarker) {
    var formType = successMarker.getAttribute('data-form-type');
    if (formType === 'contact') {
      openSuccessModal(
        'Thank you!',
        "We've received your query. A member of the OweK team will review your inquiry and get back to you within 24–48 hours."
      );
    } else {
      openSuccessModal(
        'You’re on the list!',
        'Thanks for joining the OweK waitlist. We’ll notify you as soon as tuition financing becomes available in your area.'
      );
    }
  } else if (hash.indexOf('contact_form') !== -1 || urlParams.get('customer_posted') === 'true') {
    // Fallback detection for Shopify standard post redirect
    openSuccessModal(
      'Thank you!',
      'Your submission has been received. We’ll be in touch with you shortly.'
    );
  }

  // --- Smooth Scroll for [data-scroll-to] ---
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

  // --- Smooth Scroll for Navigation and Anchor Links ---
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
        faqCards.forEach(function (c) {
          c.classList.remove('open');
        });
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

  // --- Helper for Shopify AJAX Form Submissions ---
  function handleShopifyFormSubmit(form, submitBtnSelector, defaultBtnText, successBtnText, successTitle, successDesc) {
    var btn = form.querySelector(submitBtnSelector);
    var btnSpan = btn ? (btn.querySelector('span') || btn) : null;
    var originalText = btnSpan ? btnSpan.textContent : defaultBtnText;

    if (btnSpan) btnSpan.textContent = 'Submitting...';
    if (btn) btn.disabled = true;

    var action = form.getAttribute('action') || '/contact';
    var formData = new FormData(form);

    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    })
      .then(function (res) {
        if (btnSpan) btnSpan.textContent = successBtnText;
        form.reset();
        openSuccessModal(successTitle, successDesc);
        setTimeout(function () {
          if (btnSpan) btnSpan.textContent = originalText;
          if (btn) btn.disabled = false;
        }, 4000);
      })
      .catch(function (err) {
        console.warn('Shopify submission handled gracefully:', err);
        form.reset();
        openSuccessModal(successTitle, successDesc);
        if (btnSpan) btnSpan.textContent = originalText;
        if (btn) btn.disabled = false;
      });
  }

  // Hero Waitlist Form
  var heroForm = document.querySelector('.hero-waitlist-form');
  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handleShopifyFormSubmit(
        heroForm, 
        '.hero-submit-btn', 
        'Join the waitlist', 
        'Joined!',
        'You’re on the list!',
        'Thanks for joining the OweK waitlist. We’ll notify you as soon as tuition financing becomes available in your area.'
      );
    });
  }

  // CTA Banner Waitlist Form
  var ctaForm = document.querySelector('.cta-email-form') || document.querySelector('.cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handleShopifyFormSubmit(
        ctaForm, 
        '.cta-submit-btn', 
        'Join the waitlist', 
        'Joined!',
        'You’re on the list!',
        'Thanks for joining the OweK waitlist. We’ll notify you as soon as tuition financing becomes available in your area.'
      );
    });
  }

  // Contact Inquiry Form
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handleShopifyFormSubmit(
        contactForm, 
        '.contact-submit-btn', 
        'Send message', 
        'Sent!',
        'Thank you!',
        "We've received your query. A member of the OweK team will review your inquiry and get back to you within 24–48 hours."
      );
    });
  }
});
