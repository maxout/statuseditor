Ext.define('Shopware.apps.Statuseditor', {
    extend: 'Enlight.app.SubApplication',

    name:'Shopware.apps.Statuseditor',

    loadPath: '{url action=load}',
    bulkLoad: true,

    controllers: [ 'Main' ],

    views: [
        'list.Window',
        'list.Statuseditor',
        'detail.Window',
        'detail.Statuseditor'
    ],

    models: [ 'Status' ],
    stores: [ 'Status' ],

    launch: function() {
        return this.getController('Main').mainWindow;
    }
});