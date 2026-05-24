ServerEvents.tags('block', event => {
  // iron-tier tool tagging for dark matter furnace
  event.removeAllTagsFrom('projecte:dm_furnace')
  event.add('minecraft:needs_iron_tool','projecte:dm_furnace')
  event.add('minecraft:mineable/pickaxe','projecte:dm_furnace')
  // iron-tier tool tagging for red matter furnace
  event.removeAllTagsFrom('projecte:rm_furnace')
  event.add('minecraft:needs_iron_tool','projecte:rm_furnace')
  event.add('minecraft:mineable/pickaxe','projecte:rm_furnace')
})