import Activity from "manufacturing/activity";

export default interface Blueprint {

    blueprintId: number;

    manufacturing: Activity;

    reaction: Activity;

}
