import { PosStore } from "@point_of_sale/app/store/pos_store";
import { Orderline } from "@point_of_sale/app/store/models";

export class ModernPosStore extends PosStore {
    async setup() {
        await super.setup();
        this.config = useState({
            multiUom: true,
            accessRights: true
        });
    }
}