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
                                return 'Zahlungsstatus';
                            } else {
                                return 'Bestellstatus';
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
                    header: 'Name'
                },
                description: {
                    header: 'Beschreibung'
                },
                position: {
                    header: 'Sortierung'
                },
                sendMail: {
                    header: 'Email Senden?'
                }

            }
        };
    }
});