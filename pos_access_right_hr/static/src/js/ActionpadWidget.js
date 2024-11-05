/** @odoo-module */
import { patch } from "@web/core/utils/patch";
import { ActionpadWidget } from "@point_of_sale/components/screens/product_screen/action_pad/action_pad";

//Patching ActionpadWidget to disable customer and payment
patch(ActionpadWidget.prototype, {
    setup() {
        super.setup();
        this._cashierRightsCache = new Map();
    },
    
    disable_customer() {
        const cashierId = this.pos.cashier?.id;
        if (!cashierId) return false;
        
        if (!this._cashierRightsCache.has(cashierId)) {
            this._cashierRightsCache.set(cashierId, {
                disable_customer: this.pos.cashier?.disable_customer || false,
                disable_payment: this.pos.cashier?.disable_payment || false
            });
        }
        
        return this._cashierRightsCache.get(cashierId).disable_customer;
    },
    disable_payment() {
        console.log(this.pos.cashier?.disable_customer)
        if (this.pos.cashier?.disable_payment) {
            return true;
        } else {
            return false;
        }
    }
});