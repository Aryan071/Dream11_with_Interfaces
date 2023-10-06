import { cricketPlayer } from "./cricketPlayer";

class playerMapper {
  static toDomain(player: any) {
    let players = new cricketPlayer(
      player.id,
      player.name,
      player.credit,
      player.playingRole
    );
    return players;
  }
}
export default playerMapper;
