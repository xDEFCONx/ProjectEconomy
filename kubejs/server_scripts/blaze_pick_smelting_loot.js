LootJS.modifiers((event) => {

  const oreMap = {
    "minecraft:iron_ore": { raw: "minecraft:raw_iron", ingot: "minecraft:iron_ingot", count: 1 },
    "minecraft:deepslate_iron_ore": { raw: "minecraft:raw_iron", ingot: "minecraft:iron_ingot", count: 1 },
    "minecraft:copper_ore": { raw: "minecraft:raw_copper", ingot: "minecraft:copper_ingot", count: 3 },
    "minecraft:deepslate_copper_ore": { raw: "minecraft:raw_copper", ingot: "minecraft:copper_ingot", count: 3 },
    "minecraft:gold_ore": { raw: "minecraft:raw_gold", ingot: "minecraft:gold_ingot", count: 1 },
    "minecraft:deepslate_gold_ore": { raw: "minecraft:raw_gold", ingot: "minecraft:gold_ingot", count: 1 }
  };

  const pickaxeMap = [
    "minecraft:wooden_pickaxe",
    "minecraft:stone_pickaxe",
    "minecraft:iron_pickaxe",
    "minecraft:golden_pickaxe",
    "minecraft:diamond_pickaxe",
    "minecraft:netherite_pickaxe",
    "advancednetherite:netherite_iron_pickaxe",
    "advancednetherite:netherite_gold_pickaxe",
    "advancednetherite:netherite_emerald_pickaxe",
    "advancednetherite:netherite_diamond_pickaxe",
  ];

  const oreDrops = (itemID, count) => {
    return LootEntry.of(Item.of(itemID, count)).applyBonus("minecraft:fortune", 1);
  };

  for (const [blockID, drops] of Object.entries(oreMap)) {
    
    // Blaze pick, smelt on
    event.addBlockLootModifier(blockID)
      .removeLoot(Ingredient.all)
      .matchMainHand(Item.of('avaritia:blaze_pickaxe', '{mode:{smelt:1b}}').weakNBT())
      .addLoot(oreDrops(drops.ingot, drops.count));

    // Blaze pick, smelt off
    event.addBlockLootModifier(blockID)
      .matchMainHand(Item.of('avaritia:blaze_pickaxe', '{mode:{smelt:0b}}').weakNBT())
      .addLoot(oreDrops(drops.raw, drops.count));

    // Crystal pick, fortune
    event.addBlockLootModifier(blockID)
      .matchMainHand(Item.of('avaritia:crystal_pickaxe'))
      .matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune"))
      .addLoot(oreDrops(drops.ingot, drops.count));

    // Crystal pick, silk touch
    event.addBlockLootModifier(blockID)
      .matchMainHand(Item.of('avaritia:crystal_pickaxe'))
      .matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
      .addLoot(LootEntry.of(blockID));

    // Infinity pick always drops ingots
    event.addBlockLootModifier(blockID)
      .matchMainHand(Item.of('avaritia:infinity_pickaxe'))
      .addLoot(oreDrops(drops.ingot, drops.count));

    // Mapped pickaxes, silk touch
    event.addBlockLootModifier(blockID)
      .matchMainHand(pickaxeMap)
      .matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
      .addLoot(LootEntry.of(blockID));
    
    // Mapped pickaxes, fortune
    event.addBlockLootModifier(blockID)
      .matchMainHand(pickaxeMap)
      .not((n) => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
      .addLoot(oreDrops(drops.raw, drops.count));
  }
  
});