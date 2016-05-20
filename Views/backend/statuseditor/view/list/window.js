Ext.define('Shopware.apps.Statuseditor.view.list.Window', {
    extend: 'Shopware.window.Listing',
    alias: 'widget.product-list-window',
    height: 450,
    title : 'Bestell und Zahlungstatus Übersicht',

    configure: function() {
        return {
            listingGrid: 'Shopware.apps.Statuseditor.view.list.Statuseditor',
            listingStore: 'Shopware.apps.Statuseditor.store.Status'
        };
    }
});