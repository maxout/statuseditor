Ext.define('Shopware.apps.Statuseditor.view.detail.Window', {
    extend: 'Shopware.window.Detail',
    alias: 'widget.product-detail-window',
    title : 'Status editieren',
    height: 420,
    width: 900,

    configure: function() {
        return {
            controller: 'Shopware.apps.Statuseditor.controller.Statuseditor',
            eventAlias: 'statuseditor'
        }
    }
});