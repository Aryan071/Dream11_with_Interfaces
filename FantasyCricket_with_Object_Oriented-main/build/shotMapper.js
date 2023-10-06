"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dream11Shot_1 = require("./dream11Shot");
const myCric11Shot_1 = require("./myCric11Shot");
class ShotMapper {
    static toDomain(shot, shotType) {
        if (shotType === "Dream11") {
            return new dream11Shot_1.Dream11(shot.name, shot.point, shot.runs);
        }
        else if (shotType === "MyCric11") {
            return new myCric11Shot_1.MyCric11(shot.name, shot.point, shot.runs);
        }
        else {
            throw new Error(`Invalid shotType: ${shotType}`);
        }
    }
}
exports.default = ShotMapper;
