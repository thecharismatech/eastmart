/** @odoo-module */
import { Orderline } from "@point_of_sale/app/generic_components/orderline/orderline";
import { useRef, useState } from "@odoo/owl";
import { patch } from "@web/core/utils/patch";

patch(Orderline.prototype, {
    setup() {
        super.setup();
        this.select_uom = useRef("uom_value");
        this.state = useState({
            selectedUom: null,
            uomList: [],
            priceByUom: new Map()
        });
    },

    updateUomList(uoms) {
        this.state.uomList = uoms;
    },

    cacheUomPrice(uomId, price) {
        this.state.priceByUom.set(uomId, price);
    }
});