ItemEvents.modification(event => {

  function terrariaWeaponRarity(terrariaWeapon) {
    event.modify(terrariaWeapon, item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
  }

  terrariaWeaponRarity('more_terraria_weapons:terrablade')
  terrariaWeaponRarity('more_terraria_weapons:true_nights_edge')
  terrariaWeaponRarity('more_terraria_weapons:true_excalibur')
  terrariaWeaponRarity('more_terraria_weapons:meowmere')

})
