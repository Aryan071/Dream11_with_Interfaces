"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricketPlayer_1 = require("./cricketPlayer");
class playerMapper {
    static toDomain(player) {
        let players = new cricketPlayer_1.cricketPlayer(player.id, player.name, player.credit, player.playingRole);
        return players;
    }
}
exports.default = playerMapper;
