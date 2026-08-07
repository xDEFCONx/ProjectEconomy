LootJS.modifiers((event) => {

  event.addBlockLootModifier("avaritia:fake_bedrock")
    .removeLoot(Ingredient.all)
    .matchMainHand(Item.of('avaritia:infinity_pickaxe'))
    .addLoot(Item.of("minecraft:bedrock", 1))
    .applyBonus("minecraft:fortune", 1);
});