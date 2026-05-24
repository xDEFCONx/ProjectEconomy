LootJS.modifiers((event) => {

  const blazeFortune = LootEntry.of("minecraft:netherite_scrap")
    .applyBonus("minecraft:fortune", 1)
    .when((c) => c.matchMainHand("avaritia:blaze_pickaxe"));

  const infinityFortune = LootEntry.of("minecraft:netherite_scrap")
    .applyBonus("minecraft:fortune", 1)
    .when((c) => c.matchMainHand("avaritia:infinity_pickaxe"));


  const pickWhenFortune = LootEntry.of("minecraft:netherite_scrap")
    .applyBonus("minecraft:fortune", 1)
    .when((c) => c.not((n) => n.matchMainHand("avaritia:blaze_pickaxe")))
    .when((c) => c.not((n) => n.matchMainHand("avaritia:infinity_pickaxe")))
    .when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));

  const pickWhenSilkTouch = LootEntry.of("minecraft:ancient_debris").when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));

  const netheriteScrap = "minecraft:netherite_scrap"

  event.addBlockLootModifier("minecraft:ancient_debris")
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(blazeFortune, infinityFortune, pickWhenFortune, pickWhenSilkTouch, netheriteScrap);
  // The order in addAlternativesLoot matters. Order is subsequential.

});