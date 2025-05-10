ServerEvents.recipes(event => {

  function fortuneBooks (fortuneLevel, fortuneItem1, fortuneItem2, fortuneBookIdentity) {

      event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', fortuneLevel + 1),
        [
          'BAB',
          'ACA',
          'BAB'
        ],
        {
          A: fortuneItem1,
          B: fortuneItem2,
          C: 'minecraft:enchanting_table'
        }
      ).id(fortuneBookIdentity);
  }

  fortuneBooks (3, 'minecraft:netherite_block', 'minecraft:diamond_block', 'additionalfortune:fortune_4')
  fortuneBooks (4, 'advancednetherite:netherite_iron_block', 'minecraft:netherite_block', 'additionalfortune:fortune_5')
  fortuneBooks (5, 'advancednetherite:netherite_gold_block', 'advancednetherite:netherite_iron_block', 'additionalfortune:fortune_6')
  fortuneBooks (6, 'advancednetherite:netherite_gold_block', 'advancednetherite:netherite_gold_block', 'additionalfortune:fortune_7')
  fortuneBooks (7, 'projecte:dark_matter_block', 'advancednetherite:netherite_gold_block', 'additionalfortune:fortune_8')
  fortuneBooks (8, 'projecte:dark_matter_block', 'projecte:dark_matter_block', 'additionalfortune:fortune_9')
  fortuneBooks (9, 'advancednetherite:netherite_emerald_block', 'projecte:dark_matter_block', 'additionalfortune:fortune_10')
  
})