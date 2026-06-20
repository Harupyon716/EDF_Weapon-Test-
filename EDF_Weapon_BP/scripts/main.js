import { world, system } from "@minecraft/server";
import { Blazer } from "./class/blazer";

const weaponIds = {
    "edf:blazer": Blazer
};

// 使用中アイテムの保持
const firing = new Map();

// 押した瞬間ON
world.afterEvents.itemStartUse.subscribe((event) => {
    const item = event.itemStack;
    if (!item) return;
    firing.set(event.source.id, new weaponIds[item.typeId]);
});

// 離した瞬間OFF
world.afterEvents.itemStopUse.subscribe((event) => {
    firing.delete(event.source.id);
});

// 毎tickレーザー処理
system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        if (!firing.get(player.id)) continue;

        // ブレイザーの照射処理
        var fireWeapon = firing.get(player.id);
        fireWeapon.fire(player);
    }
}, 1);
