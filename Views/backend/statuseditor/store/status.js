Ext.define('Shopware.apps.Statuseditor.store.Status', {
    extend:'Shopware.store.Listing',
    groupField: 'group',

    sorters: [{
        property: 'group',
        direction: 'ASC'
    }, {
        property: 'position',
        direction: 'ASC'
    }],

    configure: function() {
        return {
            controller: 'Statuseditor'
        };
    },
    model: 'Shopware.apps.Statuseditor.model.Status'
});