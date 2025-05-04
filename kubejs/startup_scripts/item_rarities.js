ItemEvents.modification(event => {

  function rarityToEpic(input) {
    event.modify(input, item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
  }

  rarityToEpic('advancednetherite:netherite_emerald_sword')
  rarityToEpic('advancednetherite:netherite_diamond_sword')
  rarityToEpic('advancednetherite:netherite_emerald_pickaxe')
  rarityToEpic('advancednetherite:netherite_diamond_pickaxe')
  rarityToEpic('advancednetherite:netherite_emerald_shovel')
  rarityToEpic('advancednetherite:netherite_diamond_shovel')
  rarityToEpic('advancednetherite:netherite_emerald_hoe')
  rarityToEpic('advancednetherite:netherite_diamond_hoe')
  rarityToEpic('advancednetherite:netherite_emerald_axe')
  rarityToEpic('advancednetherite:netherite_diamond_axe')
  rarityToEpic('advancednetherite:netherite_emerald_hoe')
  rarityToEpic('advancednetherite:netherite_emerald_helmet')
  rarityToEpic('advancednetherite:netherite_diamond_helmet')
  rarityToEpic('advancednetherite:netherite_emerald_chestplate')
  rarityToEpic('advancednetherite:netherite_diamond_chestplate')
  rarityToEpic('advancednetherite:netherite_emerald_leggings')
  rarityToEpic('advancednetherite:netherite_diamond_leggings')
  rarityToEpic('advancednetherite:netherite_emerald_boots')
  rarityToEpic('advancednetherite:netherite_diamond_boots')
  rarityToEpic('mobilebeacon:mobile_beacon_netherite')
  rarityToEpic('mobilebeacon:mobile_beacon_netherite_ii')

  function rarityToRare(input) {
    event.modify(input, item => {
      item.rarity = 'RARE'
      item.fireResistant = true
    })
  }

  rarityToRare('mobilebeacon:mobile_beacon_emerald')

  function rarityToUncommon(input) {
    event.modify(input, item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
  }

  rarityToUncommon('mobilebeacon:mobile_beacon_iron')

})
