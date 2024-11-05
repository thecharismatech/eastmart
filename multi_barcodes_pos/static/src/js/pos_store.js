/** @odoo-module */
import { PosGlobalState } from '@point_of_sale/store/pos_store';
import { patch } from '@web/core/utils/patch';

patch(PosGlobalState.prototype, {
    async _processData(loadedData) {
        await super._processData(...arguments);
        const multiBarcodesData = loadedData['multi.barcode'];
        for (const product of this.db.product_by_id) {
            if (product) {
                product.barcode_ids = multiBarcodesData.filter(
                    barcode => barcode.product_id[0] === product.id
                ).map(barcode => barcode.barcode);
            }
        }
    },
    async scan_product(code) {
        let product = this.db.get_product_by_barcode(code);
        if (!product) {
            const multiBarcode = this.db.product_by_id.find(
                p => p && p.barcode_ids && p.barcode_ids.includes(code)
            );
            if (multiBarcode) {
                product = multiBarcode;
            }
        }
        return super.scan_product(code);
    }
});
