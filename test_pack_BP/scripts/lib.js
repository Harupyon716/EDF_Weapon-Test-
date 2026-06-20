// プレイヤーの視線内の一番手前のモブを取得
function get_target_Entity(player, maxDistance = 32) {
    // プレイヤーの視線の先にあるモブを配列で取得
    const entitis = player.getEntitiesFromViewDirection({
        maxDistance: maxDistance
    });

    // 取得できなかった場合は早期リターン
    if (!entitis || entitis.length === 0) {
        return;
    };

    // 一番手前のモブ
    return entitis[0];
};

export { get_target_Entity }