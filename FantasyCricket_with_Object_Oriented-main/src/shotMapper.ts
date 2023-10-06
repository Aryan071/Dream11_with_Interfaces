import { Dream11 } from "./dream11Shot";
import { MyCric11 } from "./myCric11Shot";

export default class ShotMapper {
  static toDomain(shot: any, shotType: string) {
    if (shotType === "Dream11") {
      return new Dream11(shot.name, shot.point, shot.runs);
    } else if (shotType === "MyCric11") {
      return new MyCric11(shot.name, shot.point, shot.runs);
    } else {
      throw new Error(`Invalid shotType: ${shotType}`);
    }
  }
}
