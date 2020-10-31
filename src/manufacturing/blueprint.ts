import Activity from "../manufacturing/activity";

export default interface Blueprint {

    blueprintId: number;

    manufacturing: Activity;

    materialResearch: Activity;

    timeResearch: Activity;

    copying: Activity;

    invention: Activity;

}
