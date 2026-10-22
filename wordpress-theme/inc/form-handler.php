<?php
/**
 * OweK Form Handler: Custom Post Type, Admin Dashboard, CSV Export, Webhook Dispatcher
 *
 * @package HelloElementorChild
 * @author Siam
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Custom Post Type for Form Submissions
 */
function owek_register_submissions_cpt() {
	$labels = [
		'name'               => _x( 'Submissions', 'post type general name', 'hello-elementor-child' ),
		'singular_name'      => _x( 'Submission', 'post type singular name', 'hello-elementor-child' ),
		'menu_name'          => _x( 'OweK Submissions', 'admin menu', 'hello-elementor-child' ),
		'name_admin_bar'     => _x( 'Submission', 'add new on admin bar', 'hello-elementor-child' ),
		'add_new'            => __( 'Add New', 'hello-elementor-child' ),
		'add_new_item'       => __( 'Add New Submission', 'hello-elementor-child' ),
		'new_item'           => __( 'New Submission', 'hello-elementor-child' ),
		'edit_item'          => __( 'View Submission', 'hello-elementor-child' ),
		'view_item'          => __( 'View Submission', 'hello-elementor-child' ),
		'all_items'          => __( 'All Submissions', 'hello-elementor-child' ),
		'search_items'       => __( 'Search Submissions', 'hello-elementor-child' ),
		'not_found'          => __( 'No submissions found.', 'hello-elementor-child' ),
		'not_found_in_trash' => __( 'No submissions found in Trash.', 'hello-elementor-child' ),
	];

	$args = [
		'labels'             => $labels,
		'description'        => __( 'OweK landing page waitlist and contact submissions', 'hello-elementor-child' ),
		'public'             => false,
		'publicly_queryable' => false,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => false,
		'rewrite'            => false,
		'capability_type'    => 'post',
		'capabilities'       => [
			'create_posts' => false, // Disallow manual creation via admin
		],
		'map_meta_cap'       => true,
		'has_archive'        => false,
		'hierarchical'       => false,
		'menu_position'      => 25,
		'menu_icon'          => 'dashicons-feedback',
		'supports'           => [ 'title' ],
	];

	register_post_type( 'owek_submission', $args );
}
add_action( 'init', 'owek_register_submissions_cpt' );

/**
 * Custom Admin Table Columns for Submissions
 */
function owek_submissions_table_columns( $columns ) {
	$custom_columns = [
		'cb'          => $columns['cb'],
		'title'       => __( 'Email / Identifier', 'hello-elementor-child' ),
		'form_type'   => __( 'Form Type', 'hello-elementor-child' ),
		'full_name'   => __( 'Name', 'hello-elementor-child' ),
		'role'        => __( 'Role / Interest', 'hello-elementor-child' ),
		'message_snip'=> __( 'Message Preview', 'hello-elementor-child' ),
		'webhook'     => __( 'Webhook Status', 'hello-elementor-child' ),
		'date'        => __( 'Submitted Date', 'hello-elementor-child' ),
	];
	return $custom_columns;
}
add_filter( 'manage_owek_submission_posts_columns', 'owek_submissions_table_columns' );

/**
 * Render Content for Custom Admin Columns
 */
function owek_render_submissions_custom_columns( $column, $post_id ) {
	switch ( $column ) {
		case 'form_type':
			$type = get_post_meta( $post_id, '_owek_form_type', true );
			if ( 'hero_waitlist' === $type ) {
				echo '<span style="background: #000C2A; color: #FFF; padding: 4px 10px; border-radius: 99px; font-size: 11px; font-weight: 600;">Hero Waitlist</span>';
			} elseif ( 'cta_waitlist' === $type ) {
				echo '<span style="background: #8B72F5; color: #FFF; padding: 4px 10px; border-radius: 99px; font-size: 11px; font-weight: 600;">CTA Waitlist</span>';
			} elseif ( 'contact_form' === $type ) {
				echo '<span style="background: #10B981; color: #FFF; padding: 4px 10px; border-radius: 99px; font-size: 11px; font-weight: 600;">Contact Form</span>';
			} else {
				echo esc_html( ucfirst( str_replace( '_', ' ', $type ) ) );
			}
			break;

		case 'full_name':
			$name = get_post_meta( $post_id, '_owek_full_name', true );
			echo esc_html( $name ? $name : '—' );
			break;

		case 'role':
			$role = get_post_meta( $post_id, '_owek_role', true );
			echo esc_html( $role ? $role : '—' );
			break;

		case 'message_snip':
			$msg = get_post_meta( $post_id, '_owek_message', true );
			if ( $msg ) {
				echo esc_html( wp_trim_words( $msg, 10, '...' ) );
			} else {
				echo '<span style="color:#999;">—</span>';
			}
			break;

		case 'webhook':
			$status = get_post_meta( $post_id, '_owek_webhook_status', true );
			if ( 'success' === $status ) {
				echo '<span style="color: #10B981; font-weight: 600;">✓ Sent</span>';
			} elseif ( 'failed' === $status ) {
				echo '<span style="color: #EF4444; font-weight: 600;">✕ Failed</span>';
			} else {
				echo '<span style="color: #999;">Not Configured</span>';
			}
			break;
	}
}
add_action( 'manage_owek_submission_posts_custom_column', 'owek_render_submissions_custom_columns', 10, 2 );

/**
 * Filter Dropdown by Form Type in Admin
 */
function owek_submissions_filter_dropdown() {
	global $typenow;
	if ( 'owek_submission' === $typenow ) {
		$selected = isset( $_GET['owek_filter_type'] ) ? sanitize_text_field( $_GET['owek_filter_type'] ) : '';
		?>
		<select name="owek_filter_type">
			<option value=""><?php _e( 'All Submission Types', 'hello-elementor-child' ); ?></option>
			<option value="hero_waitlist" <?php selected( $selected, 'hero_waitlist' ); ?>>Hero Waitlist</option>
			<option value="cta_waitlist" <?php selected( $selected, 'cta_waitlist' ); ?>>CTA Waitlist</option>
			<option value="contact_form" <?php selected( $selected, 'contact_form' ); ?>>Contact Form</option>
		</select>
		<?php
	}
}
add_action( 'restrict_manage_posts', 'owek_submissions_filter_dropdown' );

/**
 * Query filter by form type
 */
function owek_submissions_apply_filter( $query ) {
	global $pagenow;
	if ( is_admin() && 'edit.php' === $pagenow && isset( $_GET['post_type'] ) && 'owek_submission' === $_GET['post_type'] ) {
		if ( ! empty( $_GET['owek_filter_type'] ) ) {
			$type = sanitize_text_field( $_GET['owek_filter_type'] );
			$query->set( 'meta_key', '_owek_form_type' );
			$query->set( 'meta_value', $type );
		}
	}
}
add_filter( 'parse_query', 'owek_submissions_apply_filter' );

/**
 * Add Detail Meta Box in Submission Edit Screen
 */
function owek_submission_detail_meta_box() {
	add_meta_box(
		'owek_submission_meta',
		__( 'Submission Details', 'hello-elementor-child' ),
		'owek_render_submission_meta_box',
		'owek_submission',
		'normal',
		'high'
	);
}
add_action( 'add_meta_boxes', 'owek_submission_detail_meta_box' );

function owek_render_submission_meta_box( $post ) {
	$type       = get_post_meta( $post->ID, '_owek_form_type', true );
	$email      = get_post_meta( $post->ID, '_owek_email', true );
	$name       = get_post_meta( $post->ID, '_owek_full_name', true );
	$role       = get_post_meta( $post->ID, '_owek_role', true );
	$message    = get_post_meta( $post->ID, '_owek_message', true );
	$ip         = get_post_meta( $post->ID, '_owek_ip_address', true );
	$user_agent = get_post_meta( $post->ID, '_owek_user_agent', true );
	$webhook    = get_post_meta( $post->ID, '_owek_webhook_status', true );
	$webhook_log= get_post_meta( $post->ID, '_owek_webhook_response', true );
	?>
	<table class="form-table" style="max-width: 800px;">
		<tr>
			<th style="width: 180px;"><strong><?php _e( 'Submission Type', 'hello-elementor-child' ); ?></strong></th>
			<td><code><?php echo esc_html( strtoupper( str_replace( '_', ' ', $type ) ) ); ?></code></td>
		</tr>
		<tr>
			<th><strong><?php _e( 'Email Address', 'hello-elementor-child' ); ?></strong></th>
			<td><a href="mailto:<?php echo esc_attr( $email ); ?>" style="font-size: 16px; font-weight: 600;"><?php echo esc_html( $email ); ?></a></td>
		</tr>
		<?php if ( $name ) : ?>
		<tr>
			<th><strong><?php _e( 'Full Name', 'hello-elementor-child' ); ?></strong></th>
			<td><?php echo esc_html( $name ); ?></td>
		</tr>
		<?php endif; ?>
		<?php if ( $role ) : ?>
		<tr>
			<th><strong><?php _e( 'Role / Interest', 'hello-elementor-child' ); ?></strong></th>
			<td><?php echo esc_html( $role ); ?></td>
		</tr>
		<?php endif; ?>
		<?php if ( $message ) : ?>
		<tr>
			<th><strong><?php _e( 'Message / Inquiry', 'hello-elementor-child' ); ?></strong></th>
			<td>
				<div style="background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 8px; padding: 14px; white-space: pre-wrap; font-family: sans-serif; line-height: 1.6;">
					<?php echo esc_html( $message ); ?>
				</div>
			</td>
		</tr>
		<?php endif; ?>
		<tr>
			<th><strong><?php _e( 'Submitted On', 'hello-elementor-child' ); ?></strong></th>
			<td><?php echo esc_html( get_the_date( 'F j, Y @ g:i a', $post ) ); ?></td>
		</tr>
		<tr>
			<th><strong><?php _e( 'IP Address', 'hello-elementor-child' ); ?></strong></th>
			<td><code><?php echo esc_html( $ip ? $ip : 'Unavailable' ); ?></code></td>
		</tr>
		<tr>
			<th><strong><?php _e( 'Webhook Forwarding', 'hello-elementor-child' ); ?></strong></th>
			<td>
				<?php if ( 'success' === $webhook ) : ?>
					<span style="color: #10B981; font-weight: 600;">✓ Successfully dispatched to configured webhook</span>
				<?php elseif ( 'failed' === $webhook ) : ?>
					<span style="color: #EF4444; font-weight: 600;">✕ Forwarding failed</span>
					<?php if ( $webhook_log ) : ?>
						<p><small><code><?php echo esc_html( $webhook_log ); ?></code></small></p>
					<?php endif; ?>
				<?php else : ?>
					<span style="color: #666;">No webhook configured in Customizer</span>
				<?php endif; ?>
			</td>
		</tr>
	</table>
	<?php
}

/**
 * Add Export to CSV button to Admin Submissions List
 */
function owek_add_export_csv_button() {
	global $typenow;
	if ( 'owek_submission' === $typenow ) {
		$export_url = add_query_arg( [
			'action'   => 'owek_export_submissions_csv',
			'_wpnonce' => wp_create_nonce( 'owek_export_csv_nonce' ),
		], admin_url( 'admin-post.php' ) );
		?>
		<script type="text/javascript">
			jQuery(document).ready(function($) {
				$('.wrap .page-title-action').after(
					'<a href="<?php echo esc_url( $export_url ); ?>" class="page-title-action" style="background: #8B72F5; color: #FFF; border-color: #8B72F5;">' +
					'📥 Export to CSV</a>'
				);
			});
		</script>
		<?php
	}
}
add_action( 'admin_footer', 'owek_add_export_csv_button' );

/**
 * Handle CSV Export
 */
function owek_handle_export_submissions_csv() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( __( 'Unauthorized access', 'hello-elementor-child' ) );
	}

	check_admin_referer( 'owek_export_csv_nonce' );

	$args = [
		'post_type'      => 'owek_submission',
		'posts_per_page' => -1,
		'post_status'    => 'publish',
	];

	$submissions = get_posts( $args );

	header( 'Content-Type: text/csv; charset=utf-8' );
	header( 'Content-Disposition: attachment; filename=owek_submissions_' . date( 'Y-m-d_His' ) . '.csv' );

	$output = fopen( 'php://output', 'w' );
	fputcsv( $output, [ 'ID', 'Form Type', 'Email', 'Full Name', 'Role/Interest', 'Message', 'Submitted Date', 'IP Address', 'Webhook Status' ] );

	foreach ( $submissions as $sub ) {
		fputcsv( $output, [
			$sub->ID,
			get_post_meta( $sub->ID, '_owek_form_type', true ),
			get_post_meta( $sub->ID, '_owek_email', true ),
			get_post_meta( $sub->ID, '_owek_full_name', true ),
			get_post_meta( $sub->ID, '_owek_role', true ),
			get_post_meta( $sub->ID, '_owek_message', true ),
			get_the_date( 'Y-m-d H:i:s', $sub ),
			get_post_meta( $sub->ID, '_owek_ip_address', true ),
			get_post_meta( $sub->ID, '_owek_webhook_status', true ),
		] );
	}

	fclose( $output );
	exit;
}
add_action( 'admin_post_owek_export_submissions_csv', 'owek_handle_export_submissions_csv' );

/**
 * Forward Submission to External Webhook (Option 2: Zapier, Make, HubSpot, Mailchimp)
 */
function owek_forward_to_webhook( $payload ) {
	$webhook_url = get_theme_mod( 'owek_webhook_url', '' );

	if ( empty( $webhook_url ) || ! filter_var( $webhook_url, FILTER_VALIDATE_URL ) ) {
		return 'not_configured';
	}

	$response = wp_remote_post( $webhook_url, [
		'method'      => 'POST',
		'timeout'     => 15,
		'redirection' => 5,
		'httpversion' => '1.1',
		'blocking'    => true,
		'headers'     => [
			'Content-Type' => 'application/json',
			'User-Agent'   => 'OweK-WordPress/1.0',
		],
		'body'        => wp_json_encode( $payload ),
	] );

	if ( is_wp_error( $response ) ) {
		return 'failed: ' . $response->get_error_message();
	}

	$code = wp_remote_retrieve_response_code( $response );
	if ( $code >= 200 && $code < 300 ) {
		return 'success';
	}

	return 'failed: HTTP ' . $code;
}

/**
 * AJAX Handler for Unified Form Submissions
 */
function owek_ajax_handle_form_submission() {
	// Verify Nonce
	check_ajax_referer( 'owek_form_nonce', 'nonce' );

	$form_type = isset( $_POST['form_type'] ) ? sanitize_text_field( $_POST['form_type'] ) : 'general';
	$email     = isset( $_POST['email'] ) ? sanitize_email( $_POST['email'] ) : '';
	$full_name = isset( $_POST['name'] ) ? sanitize_text_field( $_POST['name'] ) : ( isset( $_POST['full_name'] ) ? sanitize_text_field( $_POST['full_name'] ) : '' );
	$role      = isset( $_POST['role'] ) ? sanitize_text_field( $_POST['role'] ) : '';
	$message   = isset( $_POST['message'] ) ? sanitize_textarea_field( $_POST['message'] ) : '';
	$ip        = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( $_SERVER['REMOTE_ADDR'] ) : '';
	$user_agent= isset( $_SERVER['HTTP_USER_AGENT'] ) ? sanitize_text_field( $_SERVER['HTTP_USER_AGENT'] ) : '';

	if ( empty( $email ) || ! is_email( $email ) ) {
		wp_send_json_error( [ 'message' => __( 'Please provide a valid email address.', 'hello-elementor-child' ) ] );
	}

	// Create CPT Post
	$post_title = $email;
	if ( $full_name ) {
		$post_title = $full_name . ' (' . $email . ')';
	}

	$post_id = wp_insert_post( [
		'post_title'  => $post_title,
		'post_type'   => 'owek_submission',
		'post_status' => 'publish',
		'meta_input'  => [
			'_owek_form_type'  => $form_type,
			'_owek_email'      => $email,
			'_owek_full_name'  => $full_name,
			'_owek_role'       => $role,
			'_owek_message'    => $message,
			'_owek_ip_address' => $ip,
			'_owek_user_agent' => $user_agent,
		],
	] );

	if ( is_wp_error( $post_id ) ) {
		wp_send_json_error( [ 'message' => __( 'Could not save submission. Please try again.', 'hello-elementor-child' ) ] );
	}

	// Prepare Webhook Payload
	$payload = [
		'submission_id' => $post_id,
		'form_type'     => $form_type,
		'email'         => $email,
		'full_name'     => $full_name,
		'role'          => $role,
		'message'       => $message,
		'submitted_at'  => current_time( 'mysql' ),
		'site_url'      => home_url(),
	];

	// Dispatch to Webhook
	$webhook_result = owek_forward_to_webhook( $payload );
	if ( 'success' === $webhook_result ) {
		update_post_meta( $post_id, '_owek_webhook_status', 'success' );
	} elseif ( 'not_configured' === $webhook_result ) {
		update_post_meta( $post_id, '_owek_webhook_status', 'none' );
	} else {
		update_post_meta( $post_id, '_owek_webhook_status', 'failed' );
		update_post_meta( $post_id, '_owek_webhook_response', $webhook_result );
	}

	// Send Email to Admin if configured
	$admin_email_notify = get_theme_mod( 'owek_admin_notify_email', get_option( 'admin_email' ) );
	if ( $admin_email_notify && is_email( $admin_email_notify ) ) {
		$subject = sprintf( '[OweK Lead] New %s Submission from %s', strtoupper( str_replace( '_', ' ', $form_type ) ), $email );
		$body    = "You received a new submission on OweK:\n\n";
		$body   .= "Form Type: " . strtoupper( str_replace( '_', ' ', $form_type ) ) . "\n";
		$body   .= "Email: " . $email . "\n";
		if ( $full_name ) {
			$body .= "Name: " . $full_name . "\n";
		}
		if ( $role ) {
			$body .= "Role: " . $role . "\n";
		}
		if ( $message ) {
			$body .= "Message:\n" . $message . "\n";
		}
		$body .= "\nView in WordPress: " . admin_url( 'post.php?post=' . $post_id . '&action=edit' ) . "\n";

		@wp_mail( $admin_email_notify, $subject, $body );
	}

	wp_send_json_success( [
		'message' => __( 'Thank you! Your submission has been received.', 'hello-elementor-child' ),
		'id'      => $post_id,
	] );
}
add_action( 'wp_ajax_owek_submit_form', 'owek_ajax_handle_form_submission' );
add_action( 'wp_ajax_nopriv_owek_submit_form', 'owek_ajax_handle_form_submission' );
