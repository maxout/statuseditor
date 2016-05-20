Ext.define('Shopware.apps.Statuseditor.controller.Statuseditor', {
    extend: 'Shopware.detail.Controller',

    configure: function() {
        return {
            eventAlias: 'statuseditor',
            detailWindow: 'Shopware.apps.Statuseditor.view.detail.Window'
        }
    }
});