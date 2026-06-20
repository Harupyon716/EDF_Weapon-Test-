class EDFWeapon {
    constructor(itemStack) {
        if (new.target === EDFWeapon) {
            throw new Error("EDFWeaponは抽象クラス(仮)です。")
        }

        this.itemStack = itemStack
    };
};

export { EDFWeapon }