<?php
/**
 * Template part: Contact Us Section
 *
 * @package HelloElementorChild
 */
?>
<section class="contact-section" id="contact">
  <div class="container contact-container">
    <!-- Left Column: Heading & Description -->
    <div class="contact-intro-col">
      <div class="contact-badge-pill">
        <span><?php echo esc_html( owek_get_option( 'owek_contact_badge', 'Contact Us' ) ); ?></span>
      </div>
      <h2 class="contact-title"><?php echo esc_html( owek_get_option( 'owek_contact_title', 'Questions? Let’s talk.' ) ); ?></h2>
      <p class="contact-description">
        <?php echo esc_html( owek_get_option( 'owek_contact_desc', 'Whether you’re exploring tuition financing or interested in partnering with OweK, we’d love to hear from you.' ) ); ?>
      </p>
    </div>

    <!-- Right Column: Contact Form Card matching Figma Frame 214:409 -->
    <div class="contact-form-card">
      <?php 
      $external_shortcode = owek_get_option( 'owek_contact_shortcode', '' );
      if ( ! empty( $external_shortcode ) ) : 
        echo do_shortcode( $external_shortcode );
      else : ?>
        <form class="contact-form">
          <div class="form-row-2col">
            <!-- Full Name -->
            <div class="form-group">
              <label class="form-label">Full name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Jane Doe" 
                required 
                class="form-input"
              />
            </div>

            <!-- Email Address -->
            <div class="form-group">
              <label class="form-label">Your email address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="jane@example.com" 
                required 
                class="form-input"
              />
            </div>
          </div>

          <!-- Role Select -->
          <div class="form-group">
            <label class="form-label">I am a...</label>
            <div class="select-wrapper">
              <select 
                name="role" 
                class="form-select"
              >
                <option value="Parent or Family Member">Parent or Family Member</option>
                <option value="School Administrator">School Administrator</option>
                <option value="Camp Director">Camp Director</option>
                <option value="Financial Institution or Lending Partner">Financial Institution or Lending Partner</option>
                <option value="Other">Other</option>
              </select>
              <div class="select-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6F6B65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <!-- Message Textarea -->
          <div class="form-group">
            <label class="form-label">How can we help?</label>
            <textarea 
              name="message" 
              rows="4"
              placeholder="Tell us about your school, camp, or family tuition needs..." 
              class="form-textarea"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="form-submit-row">
            <button type="submit" class="contact-submit-btn">
              <span><?php echo esc_html( owek_get_option( 'owek_contact_btn_label', 'Send message' ) ); ?></span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="btn-arrow-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </form>
      <?php endif; ?>
    </div>
  </div>
</section>
