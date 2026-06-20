import { get_target_Entity } from "../lib";

class Blazer {
    static get DAMAGE() { return 10; }
    static get MAX_DIST() { return 50; }

    constructor(itemStack) {

    };

    // 照射
    static fire(player) {
        const entity = get_target_Entity(player, Blazer.MAX_DIST);
        Blazer.renderEffect(player, (!entity) ? Blazer.MAX_DIST : entity.distance);
        if (!entity) return;
        Blazer.addDamage(entity);
    };

    // ダメージ処理
    static addDamage(entity) {
        entity.entity.applyDamage(Blazer.DAMAGE);
    };

    // レーザーの描画
    static renderEffect(player, dist) {
        // プレイヤーの視線の位置を取得
        const posEye = player.getHeadLocation();

        // プレイヤーの向いている方向を取得
        const dir = player.getViewDirection();

        // プレイヤーの向いている方向にレーザーを描画(distの長さ)
        for (let i = 0; i <= dist; i += 1) {
            player.dimension.spawnParticle(
                "minecraft:redstone_wire_dust_particle",
                // 視線から少し先の座標
                {
                    x: posEye.x + dir.x * i,
                    y: posEye.y + dir.y * i,
                    z: posEye.z + dir.z * i
                }
            );
        };
    };

};

export { Blazer }