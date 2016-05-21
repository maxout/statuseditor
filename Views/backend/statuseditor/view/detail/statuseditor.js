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
                            fieldLabel: '{s name="column/name" namespace="backend/order/main"}{/s}'
                        },
                        description: {
                            fieldLabel: '{s name="column/description" namespace="backend/order/main"}{/s}'
                        },
                        position: {
                            fieldLabel: '{s name="sorting" namespace="backend/product_stream/main"}{/s}',
                            defaultValue: 0
                        },
                        group: {
                            fieldLabel: '{s name="variant/configurator/dependency/group" namespace="backend/article/view/main"}{/s}',
                            xtype: 'combo',
                            store: me.getGroupStore(),
                            valueField: 'id',
                            displayField: 'name',
                            queryMode: 'local'
                        },
                        sendMail: {
                            fieldLabel: '{s name="button" namespace="backend/order/main"}{/s}',
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
                    name: '{s name="overview/edit/payment_status" namespace="backend/order/main"}Zahlungsstatus{/s}'
                },
                {
                    id: 'state',
                    name: '{s name="overview/edit/order_status" namespace="backend/order/main"}{/s}'
                }
            ]
        })
    }
});