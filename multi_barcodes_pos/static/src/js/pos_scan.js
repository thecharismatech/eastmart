/** @odoo-module */
import { PosStore } from "@point_of_sale/store/pos_store";
import { patch } from "@web/core/utils/patch";

patch(PosStore.prototype, {
    async _processData(loadedData) {
        await super._processData(...arguments);
        this.multi_barcodes_map = new Map(
            loadedData['multi.barcode.products'].map(item => [
                item.multi_barcode, 
                item.product_multi_id[0]
            ])
        );
    },

    async scan_product(code) {
        let product = this.db.get_product_by_barcode(code);
        
        if (!product) {
            const productId = this.multi_barcodes_map.get(code);
            if (productId) {
                product = this.db.get_product_by_id(productId);
            }
        }
        
        return product || null;
    }
});