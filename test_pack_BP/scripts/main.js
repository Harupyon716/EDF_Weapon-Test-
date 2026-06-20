import { world, system } from "@minecraft/server";
import { Blazer } from "./class/blazer";
import { get_near_Entity } from "./lib";

// 使用中アイテムの保持
const firing = new Map();

// 押した瞬間ON
world.afterEvents.itemStartUse.subscribe((event) => {
    const item = event.itemStack;
    if (!item || item.typeId !== "edf:blazer") return;
    firing.set(event.source.id, true);
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
        Blazer.fire(player);
    }
}, 1);
