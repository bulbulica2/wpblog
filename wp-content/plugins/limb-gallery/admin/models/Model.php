<?php
/**
 * LIMB gallery
 * Admin model
 */

class GRSAdminModel {
	// vars
	public $version;

	//Costructor
	public function __construct( $version ) {
		$this->version = $version;
	}

	// method declaration
	public function check_action() {
	}

	public function getGrsGalleries() {
		global $wpdb;
		$grsGalleries = $wpdb->get_results( "SELECT `id`, `title` FROM `" . $wpdb->prefix . "limb_gallery_galleries`" );

		return $grsGalleries;
	}

	public function getGrsAlbums() {
		global $wpdb;
		$grsAlbums = $wpdb->get_results( "SELECT `id`, `title` FROM `" . $wpdb->prefix . "limb_gallery_albums`" );

		return $grsAlbums;
	}

	public function getGrsThemes() {
		global $wpdb;
		$grsThemes = $wpdb->get_results( "SELECT `id`, `name`, `default` FROM `" . $wpdb->prefix . "limb_gallery_themes`" );

		return $grsThemes;
	}

	public function addDotes( $str ) {
		return strlen( $str ) > 15 ? substr( $str, 0, 15 ) . "..." : $str;
	}

	public function getViewConf( $conf ) {
		$viewConf = array();
		foreach ( $conf as $key => $value ) {
			$viewConf[ $key ]                = array();
			$viewConf[ $key ]['mode']        = $value ? '' : 'disabled';
			$viewConf[ $key ]['class']       = $value ? 'enabled' : 'disabled';
			$viewConf[ $key ]['checked_yes'] = $value ? 'checked' : '';
			$viewConf[ $key ]['checked_no']  = $value ? '' : 'checked';
		}

		return $viewConf;
	}

	public function getOrderbies() {
		return array(
			'order'       => __( 'Custom Order', 'limb-gallery' ),
			'createDate'  => __( 'Date', 'limb-gallery' ),
			'id'          => __( 'Id', 'limb-gallery' ),
			'title'       => __( 'Title', 'limb-gallery' ),
			'description' => __( 'Description', 'limb-gallery' ),
			'type'        => __( 'Type', 'limb-gallery' ),
		);
	}

	public function getOrderbiesForAlb() {
		return array(
			'date'        => __( 'Date', 'limb-gallery' ),
			'contentId'   => __( 'Id', 'limb-gallery' ),
			'title'       => __( 'Title', 'limb-gallery' ),
			'description' => __( 'Description', 'limb-gallery' ),
			'contentType' => __( 'Type', 'limb-gallery' ),
		);
	}

	public function getClickActions() {
		return array(
			'openLightbox' => __( 'Open lightbox', 'limb-gallery' ),
			'openLink'     => __( 'Open link', 'limb-gallery' ),
			'doNothing'    => __( 'Do nothing', 'limb-gallery' ),
		);
	}

	public function getOpenLinkTargets() {
		return array(
			'_top'    => __( 'Same tab', 'limb-gallery' ),
			'_blank'  => __( 'New tab', 'limb-gallery' ),
			'_self'   => __( 'Same frame', 'limb-gallery' ),
			'_parent' => __( 'Parent frame', 'limb-gallery' ),
		);
	}

	public function getShortCode( $id ) {
		global $wpdb;
		try {
			$paramsStr = $wpdb->get_var( $wpdb->prepare( "SELECT `params` FROM `" . $wpdb->prefix . "limb_gallery_shortcodes` WHERE `id`=%d", $id ) );
			//TODO check params validness
			// Bring to normal keys from lowercase saved data
			$params = (array)json_decode($paramsStr);
			$newParamsArr = [];
			foreach ( $params as $key => $param ) {
				if(isset(GRSAdminController::$attributesKeysMapping[$key])) {
					$newParamsArr[GRSAdminController::$attributesKeysMapping[$key]] = $param;
				} else {
					$newParamsArr[$key] = $param;
				}
			}

			if ( ! empty( $newParamsArr ) ) {
				return json_encode($newParamsArr);
			} else {
				return '';
			}
		} catch ( \Exception $e ) {
			// log error
			return '';
		}
	}

} 