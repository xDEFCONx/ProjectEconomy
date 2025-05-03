MoreJSEvents.registerPotionBrewing((event) => {

  // Remove vanilla recipes

  event.removeByPotion(
    "minecraft:potion",
    "minecraft:nether_wart",
    null
  );

  event.removeByPotion(
    "minecraft:regeneration",
    "minecraft:glowstone_dust",
    null
  );

  event.removeByPotion(
    "minecraft:awkward",
    "minecraft:ghast_tear",
    null
  );

  // Add new brewing chains

  event.addPotionBrewing(
    "minecraft:sweet_berries",
    "minecraft:water",
    "minecraft:awkward"
  );

  event.addPotionBrewing(
    "minecraft:golden_apple",
    "minecraft:healing",
    "minecraft:regeneration"
  );

  event.addPotionBrewing(
    "minecraft:enchanted_golden_apple",
    "minecraft:strong_healing",
    "minecraft:strong_regeneration"
  );


})