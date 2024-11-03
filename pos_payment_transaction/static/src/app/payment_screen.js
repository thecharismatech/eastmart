import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";

export class PaymentTransactionScreen extends Component {
    static template = "pos_payment_transaction.PaymentScreen";
    
    setup() {
        this.state = useState({
            transactionNumber: "",
            isValid: false
        });
        this.popup = useService("popup");
        this.pos = useService("pos");
    }

    onTransactionInput(ev) {
        const value = ev.target.value.replace(/\D/g, '').slice(0, 6);
        this.state.transactionNumber = value;
        this.state.isValid = value.length === 6;
    }

    validateAndProcess() {
        if (!this.state.isValid) {
            this.popup.add({
                title: 'Transaction Required',
                body: 'Enter exactly 6 digits',
                type: 'error'
            });
            return;
        }
        this.processPayment();
    }

    async processPayment() {
        await this.pos.createPayment({
            transactionNumber: this.state.transactionNumber,
            transactionValidated: true
        });
    }
}

registry.category("pos_screens").add("PaymentTransactionScreen", PaymentTransactionScreen);