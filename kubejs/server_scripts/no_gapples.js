LootJS.modifiers((event) => {
    event.addLootTypeModifier(LootType.CHEST)
        .removeLoot('minecraft:golden_apple')
        .removeLoot('minecraft:enchanted_golden_apple')
})