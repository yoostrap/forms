<?php
namespace Hizzle\Forms;

defined('ABSPATH') || exit;

class Response extends \WP_List_Table {
    public function __construct() {
        parent::__construct([
            'singular' => __('Form Entry', 'hizzle-forms'),
            'plural'   => __('Form Entries', 'hizzle-forms'),
            'ajax'     => false
        ]);
    }

    public static function get_entries($per_page = 10, $page_number = 1) {
        global $wpdb;
        $responses_table = $wpdb->prefix . 'hizzle_forms_responses';
        $posts_table = $wpdb->prefix . 'posts';

        $sql = "SELECT r.id, r.form_id, p.post_title as form_name, r.submission_time, r.form_data 
                FROM $responses_table r 
                LEFT JOIN $posts_table p 
                ON r.form_id = p.ID 
                WHERE p.post_type = 'hizzle_form'";

        if (!empty($_REQUEST['orderby'])) {
            $sql .= ' ORDER BY ' . esc_sql($_REQUEST['orderby']);
            $sql .= !empty($_REQUEST['order']) ? ' ' . esc_sql($_REQUEST['order']) : ' ASC';
        }

        $sql .= " LIMIT $per_page";
        $sql .= ' OFFSET ' . ($page_number - 1) * $per_page;

        return $wpdb->get_results($sql, 'ARRAY_A');
    }

    public static function delete_entry($id) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'hizzle_forms_responses';
        $wpdb->delete($table_name, ['id' => $id], ['%d']);
    }

    public static function record_count() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'hizzle_forms_responses';
        return $wpdb->get_var("SELECT COUNT(*) FROM $table_name");
    }

    public function no_items() {
        _e('No form entries found.', 'hizzle-forms');
    }

    public function column_default($item, $column_name) {
        $form_data = maybe_unserialize($item['form_data']);
        switch ($column_name) {
            case 'name':
                return isset($form_data['name']) ? esc_html($form_data['name']) : '';
            case 'email':
                return isset($form_data['email']) ? esc_html($form_data['email']) : '';
            case 'submission_time':
                return esc_html($item['submission_time']);
            default:
                return print_r($item, true);
        }
    }

    public function get_columns() {
        $columns = [
            'cb'              => '<input type="checkbox" />',
            'name'            => __('Name', 'hizzle-forms'),
            'email'           => __('Email', 'hizzle-forms'),
            'submission_time' => __('Submission Time', 'hizzle-forms'),
        ];

        return $columns;
    }

    protected function column_cb($item) {
        return sprintf(
            '<input type="checkbox" name="bulk-delete[]" value="%s" />', $item['id']
        );
    }

    protected function get_bulk_actions() {
        $actions = [
            'bulk-delete' => __('Delete', 'hizzle-forms')
        ];
        return $actions;
    }

    public function prepare_items() {
        $this->process_bulk_action();

        $columns = $this->get_columns();
        $this->_column_headers = array($columns, array(), array());

        $per_page     = $this->get_items_per_page('entries_per_page', 10);
        $current_page = $this->get_pagenum();
        $total_items  = self::record_count();

        $this->set_pagination_args([
            'total_items' => $total_items,
            'per_page'    => $per_page
        ]);

        $this->items = self::get_entries($per_page, $current_page);
    }

    public function process_bulk_action() {
        if ('delete' === $this->current_action()) {
            $nonce = esc_attr($_REQUEST['_wpnonce']);
            if (!wp_verify_nonce($nonce, 'sp_delete_entry')) {
                die('Go get a life script kiddies');
            } else {
                self::delete_entry(absint($_GET['entry']));
                wp_redirect(esc_url(add_query_arg()));
                exit;
            }
        }

        if ((isset($_POST['action']) && $_POST['action'] == 'bulk-delete') || (isset($_POST['action2']) && $_POST['action2'] == 'bulk-delete')) {
            $delete_ids = esc_sql($_POST['bulk-delete']);
            foreach ($delete_ids as $id) {
                self::delete_entry($id);
            }
            wp_redirect(esc_url(add_query_arg()));
            exit;
        }
    }
}
?>
