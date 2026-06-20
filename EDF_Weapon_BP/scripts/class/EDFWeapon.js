/** 
 * EDF武器の抽象クラス
 */
class EDFWeapon {
    static get DAMAGE() { return };
    static get MAX_DIST() { return };

    constructor() {
        if (new.target === EDFWeapon) {
            throw new Error("EDFWeaponは抽象クラス(仮)です。")
        };
    };

    fire() {
        throw Error("EDFWeaponは抽象クラスです。サブクラスで実装してください。")
    };

    addDamage() {
        throw Error("EDFWeaponは抽象クラスです。サブクラスで実装してください。")
    };

    renderEffect() {
        throw Error("EDFWeaponは抽象クラスです。サブクラスで実装してください。")
    };

};

export { EDFWeapon }