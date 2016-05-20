Ext.define('Shopware.apps.Statuseditor.model.Status', {
    extend: 'Shopware.data.Model',

    configure: function() {
        return {
            controller: 'Statuseditor',
            detail: 'Shopware.apps.Statuseditor.view.detail.Statuseditor'
        };
    },

    fields: [
        { name : 'id', type: 'int', useNull: true },
        { name : 'name', type: 'string' },
        { name : 'description', type: 'string' },
        { name : 'position', type: 'int' },
        { name : 'group', type: 'string', useNull: true },
        { name : 'sendMail', type: 'string' }
    ]
});