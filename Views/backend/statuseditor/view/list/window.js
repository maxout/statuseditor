Ext.define('Shopware.apps.Statuseditor.view.list.Window', {
    extend: 'Shopware.window.Listing',
    alias: 'widget.product-list-window',
    height: 450,
    title : '{s name="OverviewWindowTitle" namespace="backend/statuseditor/main"}Bestell und Zahlungsstatus Übersicht{/s}',

    configure: function() {
        return {
            listingGrid: 'Shopware.apps.Statuseditor.view.list.Statuseditor',
            listingStore: 'Shopware.apps.Statuseditor.store.Status'
        };
    }
});