import { EDFWeapon } from "./EDFWeapon";
import { getTargetEntity } from "../lib";

/**
 * EDFのブレイザーを定義するクラス
 */
class Blazer extends EDFWeapon{
    static get DAMAGE() { return 10; }
    static get MAX_DIST() { return 50; }

    constructor() {
        super();
        this.ammo = 999;
    }

    // 照射
    fire(player) {
        const entity = getTargetEntity(player, Blazer.MAX_DIST);
        this.renderEffect(player, (!entity) ? Blazer.MAX_DIST : entity.distance);
        if (!entity) return;
        this.addDamage(entity);
    };

    // ダメージ処理
    addDamage(entity) {
        entity.entity.applyDamage(Blazer.DAMAGE);
    };

    // レーザーの描画
    renderEffect(player, dist) {
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