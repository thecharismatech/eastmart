/** @odoo-module */
import { patch } from "@web/core/utils/patch";
import { Orderline } from "@point_of_sale/app/store/models";

patch(Orderline.prototype, {
    export_as_JSON() {
        const json = super.export_as_JSON();
        if (this.product_uom_id === undefined) {
            this.product_uom_id = this.product.uom_id;
        }
        json.product_uom_id = this.product_uom_id[0];
        return json;
    }
});
