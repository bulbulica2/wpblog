<?php
/**
 * The Gallery RS
 * Grs Gallery Smart
 * 1.0.0
 */

class GRSGallerySmart extends LIMB_Gallery {

	// Costructor
	public function __construct( $task = 'grs' ) {
		if ( method_exists( $this, $task ) ) {
			$this->{$task}();
		} else {
			return;
		}
	}

	// Activate
	public function activate() {
		$this->checkVersion();

		return;
	}

	// Fast update check fastUpdateCheck
	public function fastUpdateCheck() {
		$existVersion = get_option( parent::$vOptName, false );
		if ( $existVersion ) {
			if ( version_compare( parent::$currentVersion, $existVersion ) == 1 ) {
				if ( $this->doUpdates() ) {
					$this->storeStatus( 'success', __( 'Successfully update', 'limb-gallery' ) );
					parent::$version = parent::$currentVersion;
				} else {
					$this->storeStatus( 'error', __( 'Problems with update', 'limb-gallery' ) );
				}
			}
		}

		return;
	}

	// Uninstall
	public function uninstall() {
		require_once( GRS_PLG_DIR . '/database/GRSGalleryUninstall.php' );
		$obj    = new GRSGalleryUninstall();
		$result = $obj->uninstall();
		if ( $result !== false ) {
			$this->storeStatus( 'error', __( 'Plugin uninstalled', 'limb-gallery' ) );
		}

		return $result;
	}

	// CHeck version
	public function checkVersion() {
		/*
		  * Get current version,
		  * get exists version,
		  * compare versions,
		  * check for tables, check for updates, check for inserts.
		*/
		$existVersion = get_option( parent::$vOptName, false );
		if ( $existVersion ) {
			switch ( version_compare( parent::$currentVersion, $existVersion ) ) {
				case - 1:
					$this->storeStatus( 'error',
						__( 'Trying to update old version, Please uninstall current then install your version',
							'limb-gallery' ) );
					break;
				case 0: // do nothing
					if ( $this->checkTables() ) {
						if ( $this->insertData() ) {
							$this->storeStatus( 'success', __( 'Successfully activate', 'limb-gallery' ) );
						} else {
							$this->storeStatus( 'error',
								__( 'Some rows dropped and can\'t be inserted', 'limb-gallery' ) );
						}
					} else {
						$this->storeStatus( 'error',
							__( 'Some tables dropped, or can\'t be created', 'limb-gallery' ) );
					}
					break;
				case 1:
					if ( $this->checkTables() ) {
						if ( $this->doUpdates() ) {
							$this->storeStatus( 'success', __( 'Successfully update', 'limb-gallery' ) );
						} else {
							$this->storeStatus( 'error', __( 'Problems with update', 'limb-gallery' ) );
						}
					} else {
						$this->storeStatus( 'error',
							__( 'Some tables not exists and can\'t created', 'limb-gallery' ) );
					}
					break;
				default:
					$this->storeStatus( 'error', __( 'Unknown version', 'limb-gallery' ) );
					break;
			}
		} else {
			// First time so lets set activation status option, insert data 
			if ( $this->checkTables() ) {
				if ( $this->insertData() ) {
					$add = add_option( parent::$vOptName, parent::$currentVersion );
					$this->storeStatus( 'success', __( 'Plugin successfully activate', 'limb-gallery' ) );
				} else {
					$this->storeStatus( 'error', __( 'Data has not been inserted', 'limb-gallery' ) );
				}
			} else {
				$this->storeStatus( 'error', __( 'Some tables have not been created', 'limb-gallery' ) );
			}
		}
	}

	// Do updates
	public function doUpdates() {
		require_once( GRS_PLG_DIR . '/database/GRSGalleryUpdate.php' );
		$obj = new GRSGalleryUpdate();

		return $obj->update();
	}

	// Do bulk updates
	public function bulkUpdate( $options ) {
		$dirAndName = plugin_basename( parent::$grsMainFile );
		if ( $options['action'] == 'update' && $options['type'] == 'plugin' ) {
			foreach ( $options['plugins'] as $each_plugin ) {
				if ( $each_plugin == $dirAndName ) {
					$this->activate();
				}
			}
		}
	}

	// CHeck tables
	public function checkTables() {
		global $wpdb;
		$ok    = true;
		$query = "SELECT COUNT(*) as `grsTc` 
			      FROM `information_schema`.`tables`
				  WHERE
				  `TABLE_SCHEMA` = '" . DB_NAME . "' AND 
				  `TABLE_NAME` IN ('" . $wpdb->prefix . "limb_gallery_galleries',
								   '" . $wpdb->prefix . "limb_gallery_galleriescontent', 
								   '" . $wpdb->prefix . "limb_gallery_albums',
								   '" . $wpdb->prefix . "limb_gallery_albumscontent',
								   '" . $wpdb->prefix . "limb_gallery_comments',
								   '" . $wpdb->prefix . "limb_gallery_settings',
								   '" . $wpdb->prefix . "limb_gallery_themes')";
		$c     = $wpdb->get_var( $query );
		if ( $c < 7 ) {
			require_once( GRS_PLG_DIR . '/database/GRSGalleryCreate.php' );
			$obj = new GRSGalleryCreate();
			$ok  = $obj->create();
		}

		return $ok;
	}

	// Insert data
	public function insertData() {
		require_once( GRS_PLG_DIR . '/database/GRSGalleryInsert.php' );
		$obj = new GRSGalleryInsert();

		return $obj->insert();
	}

	// Message
	public function storeStatus( $mood, $message, $saveInDb = false ) {
		$statusObj          = new stdClass();
		$statusObj->date    = date( 'Y-m-d-H:i:s', time() );
		$statusObj->mood    = $mood;
		$statusObj->content = $message;
		if ( get_option( parent::$aCsOptName ) ) {
			update_option( parent::$aCsOptName, json_encode( $statusObj ) );
		} else {
			add_option( parent::$aCsOptName, json_encode( $statusObj ) );
		}
	}
}