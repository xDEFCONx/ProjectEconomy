LootJS.modifiers((event) => {

  const pickWhenFortune = LootEntry.of("minecraft:netherite_scrap")
    .applyBonus("minecraft:fortune", 1)
    .when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));

  const pickWhenSilkTouch = LootEntry.of("minecraft:ancient_debris").when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));

  const netheriteScrap = "minecraft:ancient_debris"

  // event.addBlockLootModifier("minecraft:ancient_debris").removeLoot("minecraft:ancient_debris");

  event.addBlockLootModifier("minecraft:ancient_debris")
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(pickWhenFortune, pickWhenSilkTouch, netheriteScrap);

});