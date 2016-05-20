Ext.define('Shopware.apps.Statuseditor.view.detail.Statuseditor', {
    extend: 'Shopware.model.Container',
    padding: 20,

    configure: function() {
        var me = this;

        return {
            controller: 'Statuseditor',
            fieldSets: [
                {
                    fields: {
                        name: {
                            fieldLabel: 'Name'
                        },
                        description: {
                            fieldLabel: 'Beschreibung'
                        },
                        position: {
                            fieldLabel: 'Sortierung',
                            defaultValue: 0
                        },
                        group: {
                            fieldLabel: 'Art',
                            xtype: 'combo',
                            store: me.getGroupStore(),
                            valueField: 'id',
                            displayField: 'name',
                            queryMode: 'local'
                        },
                        sendMail: {
                            fieldLabel: 'Email Senden?',
                            xtype: 'checkbox',
                            inputValue: 1,
                            uncheckedValue: 0
                        }
                    }
                }
            ]
        };
    },

    getGroupStore: function () {
        return Ext.create('Ext.data.Store', {
            fields: [
                {
                    name: 'id',
                    type: 'string'
                },
                {
                    name: 'name',
                    type: 'string'
                }
            ],
            data: [
                {
                    id: 'payment',
                    name: 'Zahlungstatus'
                },
                {
                    id: 'state',
                    name: 'Bestellstatus'
                }
            ]
        })
    }
});