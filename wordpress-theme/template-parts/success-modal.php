<?php
/**
 * Template part: Success Modal
 *
 * @package HelloElementorChild
 */
$theme_uri = get_stylesheet_directory_uri();
?>
<div id="owek-success-modal" class="modal-overlay" role="dialog" aria-modal="true">
  <div class="modal-content-card">
    <!-- Close Button matching Figma Button - Close dialog -->
    <button 
      type="button" 
      class="modal-close-btn" 
      aria-label="Close dialog"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <!-- Modal Inner Body matching Figma Frame 1982250921 -->
    <div class="modal-inner">
      <div class="modal-icon-container">
        <img 
          src="<?php echo esc_url( $theme_uri . '/assets/image_1_16a6ff7d.png' ); ?>" 
          alt="Success Checkmark" 
          class="modal-success-icon" 
        />
      </div>

      <h3 class="modal-title">Thank you!</h3>

      <p class="modal-message">
        We've received your query. A member of the OweK team will review your inquiry and get back to you within 24–48 hours.
      </p>
    </div>
  </div>
</div>
