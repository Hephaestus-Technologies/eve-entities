import ItemBatch from "../general/item-batch";

export default interface Activity {

    product: ItemBatch;

    materials: ItemBatch[];

    skills: any;

    time: number;

}
