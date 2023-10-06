"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    id;
    name;
    credit;
    constructor(id, name, credit) {
        this.id = id;
        this.name = name;
        this.credit = credit;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getCredit() {
        return this.credit;
    }
}
exports.Player = Player;
