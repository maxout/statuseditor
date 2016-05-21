Ext.define('Shopware.apps.Statuseditor.view.list.Statuseditor', {
    extend: 'Shopware.grid.Panel',
    alias: 'widget.statuseditor-listing-grid',
    region: 'center',

    createFeatures: function () {
        var features = [];
        features.push(
            Ext.create('Ext.grid.feature.Grouping', {
                groupHeaderTpl: Ext.create('Ext.XTemplate',
                    '{literal}{name:this.formatName}{/literal}',
                    {
                        formatName: function(name) {
                            if (name == 'payment') {
                                return '{s name="overview/edit/payment_status" namespace="backend/order/main"}Zahlungsstatus{/s}';
                            } else {
                                return '{s name="overview/edit/order_status" namespace="backend/order/main"}{/s}';
                            }
                        }
                    }
                )
            })
        );

        return features;
    },

    configure: function () {
        return {
            detailWindow: 'Shopware.apps.Statuseditor.view.detail.Window',
            rowEditing: true,
            columns: {
                name: {
                    header: '{s name="column/name" namespace="backend/order/main"}{/s}'
                },
                description: {
                    header: '{s name="column/description" namespace="backend/order/main"}{/s}'
                },
                position: {
                    header: '{s name="sorting" namespace="backend/product_stream/main"}{/s}'
                },
                sendMail: {
                    header: '{s name="button" namespace="backend/order/main"}{/s}'
                }

            }
        };
    }
});