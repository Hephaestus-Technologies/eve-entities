import {ManufacturingGroup} from "./manufacturing-group";
import {BlueprintGroup} from "./blueprint-group";
import {PiGroup} from "./pi-group";
import {ReactionGroup} from "./reaction-group";

export type Subgroup = BlueprintGroup | PiGroup | ReactionGroup | null;

export default interface ItemType {

    typeId: number;

    name: string;

    group: ManufacturingGroup;

    subgroup: Subgroup

}
