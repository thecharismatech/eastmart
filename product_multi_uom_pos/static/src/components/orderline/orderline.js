/** @odoo-module */
import { Orderline } from "@point_of_sale/app/generic_components/orderline/orderline";
import { useState, useRef } from "@odoo/owl";

export class ModernOrderline extends Orderline {
    static template = "point_of_sale.Orderline";
    
    setup() {
        super.setup();
        this.uomSelector = useRef("uom_selector");
        this.state = useState({
            selectedUom: null,
            uomList: [],
            prices: new Map()
        });
    }
}