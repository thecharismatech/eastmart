odoo.define('multi_barcodes_pos.pos_scan', function(require) {
    'use strict';

    const { PosGlobalState } = require('point_of_sale.models');
    const Registries = require('point_of_sale.Registries');

    const MultiBarcodePosGlobalState = (PosGlobalState) => class MultiBarcodePosGlobalState extends PosGlobalState {
        async _processData(loadedData) {
            await super._processData(...arguments);
            this.multi_barcodes = loadedData['multi.barcode.products'];
        }

        async scan_product(code) {
            let product = null;
            const multi_barcode = this.multi_barcodes.find(item => item.multi_barcode === code);
            
            if (multi_barcode) {
                product = this.db.get_product_by_id(multi_barcode.product_multi_id[0]);
            }
            
            if (!product) {
                return super.scan_product(...arguments);
            }
            
            return product;
        }
    }

    Registries.Model.extend(PosGlobalState, MultiBarcodePosGlobalState);

    return MultiBarcodePosGlobalState;
});