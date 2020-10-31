import {ManufacturingGroup} from "./manufacturing-group";
import {BlueprintGroup} from "./blueprint-group";
import {PiGroup} from "./pi-group";
import {ReactionGroup} from "./reaction-group";

export default interface ItemType {

    typeId: number;

    name: string;

    group: ManufacturingGroup;

    subgroup: BlueprintGroup | PiGroup | ReactionGroup | null

}
