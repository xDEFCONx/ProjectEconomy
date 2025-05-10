MoreJSEvents.registerPotionBrewing((event) => {

  // Remove vanilla recipes

  event.removeByPotion(
    "minecraft:regeneration",
    "minecraft:glowstone_dust",
    null
  );

  event.removeByPotion(
    "minecraft:water",
    "minecraft:redstone",
    null
  );

  event.removeByPotion(
    "minecraft:awkward",
    "minecraft:blaze_powder",
    null
  );

  event.removeByPotion(
    "minecraft:awkward",
    "minecraft:ghast_tear",
    null
  );

  event.removeByPotion(
    "minecraft:awkward",
    "minecraft:glistering_melon_slice",
    null
  );

  // event.removeByPotion(
  //   "minecraft:regeneration"["minecraft:splash_potion"],
  //   "minecraft:dragon_breath",
  //   "minecraft:regeneration"["minecraft:lingering_potion"]
  // );

  // Add new brewing chains

  event.addPotionBrewing(
    "minecraft:sweet_berries",
    "minecraft:water",
    "minecraft:mundane"
  );

  event.addPotionBrewing(
    "minecraft:barrel",
    "minecraft:mundane",
    "minecraft:strength"
  );

  event.addPotionBrewing(
    "minecraft:glistering_melon_slice",
    "minecraft:strength",
    "minecraft:healing"
  );

  event.addPotionBrewing(
    "minecraft:golden_apple",
    "minecraft:strength",
    "minecraft:regeneration"
  );

  event.addPotionBrewing(
    "minecraft:enchanted_golden_apple",
    "minecraft:strength",
    "minecraft:luck"
  );
  
});