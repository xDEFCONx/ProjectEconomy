ServerEvents.recipes(event => {

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Minecraft (Vanilla)

  event.remove({id:'minecraft:shulker_box'})

  // Shulker box buff

  event.shaped(
    Item.of('minecraft:shulker_box'),
    [
      'ABA',
      'ACA',
      'ABA'
    ], 
    {
      A: 'minecraft:diamond',
      B: 'minecraft:shulker_shell',
      C: 'minecraft:chest'
  })
  
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ProjectE

  event.remove({output:'projecte:dm_pick'})
  event.remove({output:'projecte:dm_axe'})
  event.remove({output:'projecte:dm_shovel'})
  event.remove({output:'projecte:dm_hoe'})
  event.remove({output:'projecte:dm_shears'})
  event.remove({output:'projecte:dm_hammer'})
  event.remove({output:'projecte:rm_pick'})
  event.remove({output:'projecte:rm_axe'})
  event.remove({output:'projecte:rm_shovel'})
  event.remove({output:'projecte:rm_hoe'})
  event.remove({output:'projecte:rm_shears'})
  event.remove({output:'projecte:rm_hammer'})
  event.remove({output:'projecte:rm_morning_star'})
  event.remove({output:'projecte:destruction_catalyst'})
  event.remove({output:'projecte:low_covalence_dust'})
  event.remove({output:'projecte:medium_covalence_dust'})
  event.remove({output:'projecte:high_covalence_dust'})
  event.remove({output:'projecte:alchemical_chest'})
  event.remove({output:'projecte:condenser_mk1'})
  event.remove({output:'projecte:condenser_mk2'})
  event.remove({output:'projecte:collector_mk1'})
  event.remove({output:'projecte:collector_mk2'})
  event.remove({output:'projecte:collector_mk3'})
  event.remove({output:'projecte:relay_mk1'})
  event.remove({output:'projecte:relay_mk2'})
  event.remove({output:'projecte:relay_mk3'})
  event.remove({output:'projecte:dm_pedestal'})
  event.remove({output:'projecte:white_alchemical_bag'})
  event.remove({output:'projecte:orange_alchemical_bag'})
  event.remove({output:'projecte:magenta_alchemical_bag'})
  event.remove({output:'projecte:light_blue_alchemical_bag'})
  event.remove({output:'projecte:yellow_alchemical_bag'})
  event.remove({output:'projecte:lime_alchemical_bag'})
  event.remove({output:'projecte:pink_alchemical_bag'})
  event.remove({output:'projecte:gray_alchemical_bag'})
  event.remove({output:'projecte:light_gray_alchemical_bag'})
  event.remove({output:'projecte:cyan_alchemical_bag'})
  event.remove({output:'projecte:purple_alchemical_bag'})
  event.remove({output:'projecte:blue_alchemical_bag'})
  event.remove({output:'projecte:brown_alchemical_bag'})
  event.remove({output:'projecte:green_alchemical_bag'})
  event.remove({output:'projecte:red_alchemical_bag'})
  event.remove({output:'projecte:black_alchemical_bag'})
  event.remove({output:'projecte:dm_sword'})
  event.remove({output:'projecte:rm_sword'})
  event.remove({output:'projecte:rm_katar'})
  event.remove({output:'projecte:dm_helmet'})
  event.remove({output:'projecte:dm_chestplate'})
  event.remove({output:'projecte:dm_leggings'})
  event.remove({output:'projecte:dm_boots'})
  event.remove({output:'projecte:rm_helmet'})
  event.remove({output:'projecte:rm_chestplate'})
  event.remove({output:'projecte:rm_leggings'})
  event.remove({output:'projecte:rm_boots'})
  event.remove({output:'projecte:gem_helmet'})
  event.remove({output:'projecte:gem_chestplate'})
  event.remove({output:'projecte:gem_leggings'})
  event.remove({output:'projecte:gem_boots'})
  event.remove({output:'projecte:archangel_smite'})
  event.remove({output:'projecte:hyperkinetic_lens'})
  event.remove({output:'projecte:catalytic_lens'})
  event.remove({output:'projecte:klein_star_ein'})
  event.remove({output:'projecte:klein_star_zwei'})
  event.remove({output:'projecte:klein_star_drei'})
  event.remove({output:'projecte:klein_star_vier'})
  event.remove({output:'projecte:klein_star_sphere'})
  event.remove({output:'projecte:klein_star_omega'})
  event.remove({output:'projecte:repair_talisman'})
  event.remove({output:'projecte:harvest_goddess_band'})
  event.remove({output:'projecte:ignition_ring'})
  event.remove({output:'projecte:zero_ring'})
  event.remove({output:'projecte:swiftwolf_rending_gale'})
  event.remove({output:'projecte:watch_of_flowing_time'})
  event.remove({output:'projecte:gem_of_eternal_density'})
  event.remove({output:'projecte:mercurial_eye'})
  event.remove({output:'projecte:void_ring'})
  event.remove({output:'projecte:arcana_ring'})
  event.remove({output:'projecte:mind_stone'})
  event.remove({output:'projecte:divining_rod_1'})
  event.remove({output:'projecte:divining_rod_2'})
  event.remove({output:'projecte:divining_rod_3'})

  // No philosopher's stone conversion recipes

  event.remove({not:{id:'projecte:transmutation_table'},input:'projecte:philosophers_stone'})
  event.remove({output:'projecte:philosophers_stone'})
  event.remove({id:'projecte:transmutation_table'})

  // Transmutation table buff

  event.shaped(
    Item.of('projecte:transmutation_table'),
    [
      'ADA',
      'CBC',
      'ACA'
    ], 
    {
      A: 'minecraft:diamond_block',
      B: 'projecte:philosophers_stone',
      C: 'minecraft:netherite_ingot',
      D: 'minecraft:redstone'
  })
  
  // Transmutation tablet easy conversion

  event.remove({output:'projecte:transmutation_tablet'})
  event.shapeless(
    Item.of('projecte:transmutation_tablet', 1),
    [
      'projecte:transmutation_table',
    ]
  )

  event.shapeless(
    Item.of('projecte:transmutation_table', 1),
    [
      'projecte:transmutation_tablet',
    ]
  )

  // Philosopher's stone buff

  event.shaped(
    Item.of('projecte:philosophers_stone'),
    [
      'ACA',
      'CBC',
      'ACA'
    ], 
    {
      A: 'minecraft:redstone_block',
      B: 'minecraft:diamond_block',
      C: 'minecraft:netherite_scrap'
  })
  
  // Coal recipe buffs

  function PECoal(output, outputAmount, PECoalInput) {
    event.shaped(
      Item.of(output, outputAmount),
      [
        'AAA',
        'ABA',
        'AAA'
      ], 
      {
        B: 'minecraft:diamond',
        A: PECoalInput
      })
  }

  PECoal('projecte:alchemical_coal', 2, 'minecraft:coal')
  PECoal('projecte:mobius_fuel', 2, 'projecte:alchemical_coal')
  PECoal('projecte:aeternalis_fuel', 2, 'projecte:mobius_fuel')

  // Matter buffs

  event.remove({output:'projecte:dark_matter'})
  event.remove({output:'projecte:red_matter'})
  event.shaped(
    Item.of('projecte:dark_matter', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'projecte:aeternalis_fuel',
      B: 'minecraft:netherite_ingot',
    }
  )


  event.shaped(
    Item.of('projecte:red_matter', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'projecte:dark_matter',
      B: 'projecte:dark_matter_block',
    }
  )  
  
  // Item buffs

  event.remove({output:'projecte:body_stone'})
  event.shaped(
    Item.of('projecte:body_stone', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'minecraft:netherite_block',
      B: 'projecte:red_matter_block',
      C: 'minecraft:golden_carrot'
    }
  )

  event.remove({output:'projecte:soul_stone'})
  event.shaped(
    Item.of('projecte:soul_stone', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'minecraft:netherite_block',
      B: 'projecte:red_matter_block',
      C: 'minecraft:beacon'
    }
  )

  event.remove({output:'projecte:life_stone'})
  event.shaped(
    Item.of('projecte:life_stone', 1),
    [
      'ADA',
      'BDC',
      'ADA'
    ],
    {
      A: 'minecraft:netherite_block',
      B: 'projecte:body_stone',
      C: 'projecte:soul_stone',
      D: 'projecte:red_matter_block'
    }
  )

  event.remove({output:'projecte:volcanite_amulet'})
  event.shaped(
    Item.of('projecte:volcanite_amulet', 1),
    [
      'BAB',
      'BCB',
      'BAB'
    ],
    {
      A: 'minecraft:netherite_block',
      B: 'projecte:dark_matter_block',
      C: 'minecraft:lava_bucket'
    }
  )

  event.remove({output:'projecte:evertide_amulet'})
  event.shaped(
    Item.of('projecte:evertide_amulet', 1),
    [
      'BAB',
      'BCB',
      'BAB'
    ],
    {
      A: 'minecraft:netherite_block',
      B: 'projecte:dark_matter_block',
      C: 'minecraft:water_bucket'
    }
  )

  event.remove({output:'projecte:black_hole_band'})
  event.shaped(
    Item.of('projecte:black_hole_band', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'projecte:dark_matter_block',
      B: 'projecte:iron_band'
    }
  )

  event.remove({output:'projecte:dm_furnace'})
  event.shaped(
    Item.of('projecte:dm_furnace', 1),
    [
      '   ',
      'ABA',
      '   '
    ],
    {
      A: 'projecte:dark_matter_block',
      B: 'minecraft:furnace'
    }
  )

  event.remove({output:'projecte:rm_furnace'})
  event.shaped(
    Item.of('projecte:rm_furnace', 1),
    [
      '   ',
      'ABA',
      '   '
    ],
    {
      A: 'projecte:red_matter_block',
      B: 'projecte:dm_furnace'
    }
  )

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Refined Storage

  event.remove({output:'refinedstorage:white_controller'})
  event.remove({output:'refinedstorage:white_creative_controller'})
  event.remove({output:'refinedstorage:orange_controller'})
  event.remove({output:'refinedstorage:orange_creative_controller'})
  event.remove({output:'refinedstorage:magenta_controller'})
  event.remove({output:'refinedstorage:magenta_creative_controller'})
  event.remove({output:'refinedstorage:yellow_controller'})
  event.remove({output:'refinedstorage:yellow_creative_controller'})
  event.remove({output:'refinedstorage:lime_controller'})
  event.remove({output:'refinedstorage:lime_creative_controller'})
  event.remove({output:'refinedstorage:pink_controller'})
  event.remove({output:'refinedstorage:pink_creative_controller'})
  event.remove({output:'refinedstorage:gray_controller'})
  event.remove({output:'refinedstorage:gray_creative_controller'})
  event.remove({output:'refinedstorage:light_gray_controller'})
  event.remove({output:'refinedstorage:light_gray_creative_controller'})
  event.remove({output:'refinedstorage:cyan_controller'})
  event.remove({output:'refinedstorage:cyan_creative_controller'})
  event.remove({output:'refinedstorage:purple_controller'})
  event.remove({output:'refinedstorage:purple_creative_controller'})
  event.remove({output:'refinedstorage:blue_controller'})
  event.remove({output:'refinedstorage:blue_creative_controller'})
  event.remove({output:'refinedstorage:brown_controller'})
  event.remove({output:'refinedstorage:brown_creative_controller'})
  event.remove({output:'refinedstorage:green_controller'})
  event.remove({output:'refinedstorage:green_creative_controller'})
  event.remove({output:'refinedstorage:red_controller'})
  event.remove({output:'refinedstorage:red_creative_controller'})
  event.remove({output:'refinedstorage:black_controller'})
  event.remove({output:'refinedstorage:black_creative_controller'})
  event.remove({output:'refinedstorage:controller'})
  event.remove({output:'refinedstorage:wireless_grid'})
  event.remove({output:'refinedstorage:wireless_fluid_grid'})
  event.remove({output:'refinedstorage:wireless_crafting_monitor'})
  event.remove({output:'refinedstorageaddons:wireless_crafting_grid'})
  event.remove({output:'refinedstorage:portable_grid'})
  event.remove({id:'refinedstorage:quartz_enriched_iron'})

  // Creative wireless Transmitter

  event.remove({output:'creativewirelesstransmitter:creative_wireless_transmitter'})
  
  event.shaped(
    Item.of('creativewirelesstransmitter:creative_wireless_transmitter', 1),
    [
      'ACA',
      'CBC',
      'ACA'
    ],
    {
      A: 'refinedstorage:wireless_transmitter',
      B: 'minecraft:nether_star',
      C: 'projecte:red_matter_block'
    }
  )

  // RS Creative Controller recipe

  event.shaped(
    Item.of('refinedstorage:creative_controller', 1),
    [
      'ACA',
      'EBE',
      'ADA'
    ],
    {
      A: 'projecte:red_matter',
      B: 'refinedstorage:machine_casing',
      C: 'refinedstorage:advanced_processor',
      D: 'minecraft:beacon',
      E: 'advancednetherite:netherite_emerald_block'
    }
  )

  // Quartz enriched iron buff

  event.shapeless(
    Item.of('refinedstorage:quartz_enriched_iron', 1),
    [
      '3x minecraft:iron_ingot',
      '3x minecraft:quartz_block',
      '3x minecraft:redstone_block'
    ]
  )


  // RS Creative Grid recipes

  function creativeGrids (outputGrid, input) {
    event.shaped(
      Item.of(outputGrid, 1),
      [
        'ACA',
        'ADA',
        'ABA'
      ],
      {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'refinedstorage:machine_casing',
        C: 'advancednetherite:netherite_diamond_ingot',
        D: input
      }
    )
  }

  creativeGrids('refinedstorage:creative_wireless_grid','#refinedstorage:grid')
  creativeGrids('refinedstorage:creative_wireless_fluid_grid','#refinedstorage:fluid_grid')
  creativeGrids('refinedstorage:creative_wireless_crafting_monitor','#refinedstorage:crafting_monitor')
  creativeGrids('refinedstorageaddons:creative_wireless_crafting_grid','#refinedstorage:crafting_grid')

  event.shaped(
    Item.of('refinedstorage:creative_portable_grid', 1),
    [
      'ACA',
      'EBE',
      'ADA'
    ],
    {
      A: 'minecraft:netherite_ingot',
      B: 'refinedstorage:disk_manipulator',
      C: '#refinedstorage:grid',
      D: '#refinedstorage:fluid_grid',
      E: 'advancednetherite:netherite_emerald_ingot'
    }
  )
  
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Ben's Sharks

  event.remove({output:'benssharks:cellophane_noodles'})
  event.remove({output:'benssharks:jagged_helmet'})
  event.remove({output:'benssharks:jagged_chestplate'})
  event.remove({output:'benssharks:jagged_leggings'})
  event.remove({output:'benssharks:jagged_boots'})
  event.remove({output:'benssharks:krill_cake'})
  event.remove({output:'benssharks:krill_noodles'})
  event.remove({output:'benssharks:land_mine'})
  event.remove({output:'benssharks:sucker'})
  event.remove({output:'benssharks:shark_fin_soup'})
  event.remove({output:'benssharks:soup_sharkfin'})
  event.remove({output:'benssharks:starch'})
  event.remove({output:'benssharks:egg_capsule'})
  event.remove({output:'benssharks:dent'})
  event.remove({output:'benssharks:fish_bucket'})
  event.remove({output:'benssharks:maelstrom'})
  event.remove({output:'benssharks:maelstrom_bow'})
  event.remove({output:'benssharks:krill_item'})
  event.remove({output:'benssharks:raw_pilot_fish'})
  event.remove({output:'benssharks:cooked_pilot_fish'})
  event.remove({output:'benssharks:shark_fin'})
  event.remove({output:'benssharks:axoleather'})
  event.remove({output:'benssharks:axoscute'})

  // Shark plush recipe

  event.shaped(
    Item.of('benssharks:shark_plush_block', 1),
    [
      ' AA',
      ' B ',
      'AA '
    ],
    {
      A: 'minecraft:prismarine_shard',
      B: 'minecraft:cod'
    }
  )

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Waystones

  event.remove({output:'waystones:warp_stone'})
  event.shaped(
    Item.of('waystones:warp_stone', 1),
    [
      'CBC',
      'BAB',
      'CBC'
    ],
    {
      A: 'projecte:red_matter',
      B: 'minecraft:ender_pearl',
      C: 'minecraft:purpur_block'
      
    }
  )

  event.remove({output:'waystones:warp_dust'})
  event.shapeless(
    Item.of('waystones:warp_dust', 1),
    [
      'minecraft:ender_pearl',
      'minecraft:purpur_block',
    ]
  )

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Mobile Beacons

  event.remove({output:'mobilebeacon:mobile_beacon_shell'})
  event.shaped(
    Item.of('mobilebeacon:mobile_beacon_shell', 1),
    [
      'BBB',
      'BAB',
      'CCC'
    ],
    {
      A: 'projecte:aeternalis_fuel_block',
      B: 'minecraft:diamond_block',
      C: 'minecraft:netherite_block'    
    }
  )

  event.remove({output:'mobilebeacon:mobile_beacon_iron'})
  event.remove({output:'mobilebeacon:mobile_beacon_iron_ii'})
  event.remove({output:'mobilebeacon:mobile_beacon_gold'})
  event.remove({output:'mobilebeacon:mobile_beacon_gold_ii'})
  event.remove({output:'mobilebeacon:mobile_beacon_emerald'})
  event.remove({output:'mobilebeacon:mobile_beacon_emerald_ii'})
  event.remove({output:'mobilebeacon:mobile_beacon_diamond'})
  event.remove({output:'mobilebeacon:mobile_beacon_diamond_ii'})
  event.remove({output:'mobilebeacon:mobile_beacon_netherite'})
  event.remove({output:'mobilebeacon:mobile_beacon_netherite_ii'})

  event.shaped(
    Item.of('mobilebeacon:mobile_beacon_iron', 1),
    [
      'BBB',
      'BAB',
      'CCC'
    ],
    {
      A: 'minecraft:beacon',
      B: 'mobilebeacon:mobile_beacon_shell',
      C: 'advancednetherite:netherite_iron_block'    
    }
  )

  event.shaped(
    Item.of('mobilebeacon:mobile_beacon_emerald', 1),
    [
      'BBB',
      'BAB',
      'CCC'
    ],
    {
      A: 'projecte:life_stone',
      B: 'mobilebeacon:mobile_beacon_iron',
      C: 'advancednetherite:netherite_emerald_block'    
    }
  )

  event.shaped(
    Item.of('mobilebeacon:mobile_beacon_netherite', 1),
    [
      'BBB',
      'BAB',
      'CCC'
    ],
    {
      A: 'avaritia:neutron_ingot',
      B: 'mobilebeacon:mobile_beacon_emerald',
      C: 'advancednetherite:netherite_diamond_block'    
    }
  )

  event.smithing(
    'mobilebeacon:mobile_beacon_netherite_ii',
    'avaritia:infinity_ingot',
    'mobilebeacon:mobile_beacon_netherite',
    'avaritia:infinity_ingot'
  )

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Advanced Netherite

  event.remove({output:'advancednetherite:netherite_iron_ingot'})
  event.remove({output:'advancednetherite:netherite_gold_ingot'})
  event.remove({output:'advancednetherite:netherite_emerald_ingot'})
  event.remove({output:'advancednetherite:netherite_diamond_ingot'})

  function AdvNetheriteIngots (output, advNetheriteInput, prevOutput) {
    event.shapeless(
      Item.of(output, 1),
      [
        prevOutput,
        advNetheriteInput
      ]
    )
  }

  AdvNetheriteIngots('advancednetherite:netherite_iron_ingot','8x minecraft:iron_block','minecraft:netherite_ingot'),
  AdvNetheriteIngots('advancednetherite:netherite_gold_ingot','8x minecraft:gold_block','advancednetherite:netherite_iron_ingot'),
  AdvNetheriteIngots('advancednetherite:netherite_emerald_ingot','8x minecraft:diamond_block','advancednetherite:netherite_gold_ingot'),
  AdvNetheriteIngots('advancednetherite:netherite_diamond_ingot','8x minecraft:netherite_block','advancednetherite:netherite_emerald_ingot')

  event.remove({output:'advancednetherite:netherite_iron_sword'})
  event.remove({output:'advancednetherite:netherite_gold_sword'})
  event.remove({output:'advancednetherite:netherite_emerald_sword'})
  event.remove({output:'advancednetherite:netherite_diamond_sword'})

  event.remove({output:'advancednetherite:netherite_iron_pickaxe'})
  event.remove({output:'advancednetherite:netherite_gold_pickaxe'})
  event.remove({output:'advancednetherite:netherite_emerald_pickaxe'})
  event.remove({output:'advancednetherite:netherite_diamond_pickaxe'})

  event.remove({output:'advancednetherite:netherite_iron_shovel'})
  event.remove({output:'advancednetherite:netherite_gold_shovel'})
  event.remove({output:'advancednetherite:netherite_emerald_shovel'})
  event.remove({output:'advancednetherite:netherite_diamond_shovel'})

  event.remove({output:'advancednetherite:netherite_iron_hoe'})
  event.remove({output:'advancednetherite:netherite_gold_hoe'})
  event.remove({output:'advancednetherite:netherite_emerald_hoe'})
  event.remove({output:'advancednetherite:netherite_diamond_hoe'})

  event.remove({output:'advancednetherite:netherite_iron_axe'})
  event.remove({output:'advancednetherite:netherite_gold_axe'})
  event.remove({output:'advancednetherite:netherite_emerald_axe'})
  event.remove({output:'advancednetherite:netherite_diamond_axe'})

  event.remove({id:'advancednetherite:netherite_diamond_chestplate_smithing'})
  event.remove({id:'advancednetherite:netherite_emerald_chestplate_smithing'})
  event.remove({id:'advancednetherite:netherite_gold_chestplate_smithing'})
  event.remove({id:'advancednetherite:netherite_iron_chestplate_smithing'})

  event.remove({id:'advancednetherite:netherite_diamond_helmet_smithing'})
  event.remove({id:'advancednetherite:netherite_emerald_helmet_smithing'})
  event.remove({id:'advancednetherite:netherite_gold_helmet_smithing'})
  event.remove({id:'advancednetherite:netherite_iron_helmet_smithing'})

  event.remove({id:'advancednetherite:netherite_diamond_boots_smithing'})
  event.remove({id:'advancednetherite:netherite_emerald_boots_smithing'})
  event.remove({id:'advancednetherite:netherite_gold_boots_smithing'})
  event.remove({id:'advancednetherite:netherite_iron_boots_smithing'})

  event.remove({id:'advancednetherite:netherite_diamond_leggings_smithing'})
  event.remove({id:'advancednetherite:netherite_emerald_leggings_smithing'})
  event.remove({id:'advancednetherite:netherite_gold_leggings_smithing'})
  event.remove({id:'advancednetherite:netherite_iron_leggings_smithing'})

  function AdvNetheriteItems (inputTool, advNetheriteInput, outputTool) {
    event.smithing(
      outputTool,
      'minecraft:netherite_upgrade_smithing_template',
      inputTool,
      advNetheriteInput
    )
  }

  AdvNetheriteItems('minecraft:netherite_sword','advancednetherite:netherite_iron_block','advancednetherite:netherite_iron_sword')
  AdvNetheriteItems('minecraft:netherite_pickaxe','advancednetherite:netherite_iron_block','advancednetherite:netherite_iron_pickaxe')
  AdvNetheriteItems('minecraft:netherite_shovel','advancednetherite:netherite_iron_block','advancednetherite:netherite_iron_shovel')
  AdvNetheriteItems('minecraft:netherite_hoe','advancednetherite:netherite_iron_block','advancednetherite:netherite_iron_hoe')
  AdvNetheriteItems('minecraft:netherite_axe','advancednetherite:netherite_iron_block','advancednetherite:netherite_iron_axe')

  AdvNetheriteItems('advancednetherite:netherite_iron_sword','advancednetherite:netherite_gold_block','advancednetherite:netherite_gold_sword')
  AdvNetheriteItems('advancednetherite:netherite_iron_pickaxe','advancednetherite:netherite_gold_block','advancednetherite:netherite_gold_pickaxe')
  AdvNetheriteItems('advancednetherite:netherite_iron_shovel','advancednetherite:netherite_gold_block','advancednetherite:netherite_gold_shovel')
  AdvNetheriteItems('advancednetherite:netherite_iron_hoe','advancednetherite:netherite_gold_block','advancednetherite:netherite_gold_hoe')
  AdvNetheriteItems('advancednetherite:netherite_iron_axe','advancednetherite:netherite_gold_block','advancednetherite:netherite_gold_axe')

  AdvNetheriteItems('advancednetherite:netherite_gold_sword','advancednetherite:netherite_emerald_block','advancednetherite:netherite_emerald_sword')
  AdvNetheriteItems('advancednetherite:netherite_gold_pickaxe','advancednetherite:netherite_emerald_block','advancednetherite:netherite_emerald_pickaxe')
  AdvNetheriteItems('advancednetherite:netherite_gold_shovel','advancednetherite:netherite_emerald_block','advancednetherite:netherite_emerald_shovel')
  AdvNetheriteItems('advancednetherite:netherite_gold_hoe','advancednetherite:netherite_emerald_block','advancednetherite:netherite_emerald_hoe')
  AdvNetheriteItems('advancednetherite:netherite_gold_axe','advancednetherite:netherite_emerald_block','advancednetherite:netherite_emerald_axe')

  AdvNetheriteItems('advancednetherite:netherite_emerald_sword','advancednetherite:netherite_diamond_block','advancednetherite:netherite_diamond_sword')
  AdvNetheriteItems('advancednetherite:netherite_emerald_pickaxe','advancednetherite:netherite_diamond_block','advancednetherite:netherite_diamond_pickaxe')
  AdvNetheriteItems('advancednetherite:netherite_emerald_shovel','advancednetherite:netherite_diamond_block','advancednetherite:netherite_diamond_shovel')
  AdvNetheriteItems('advancednetherite:netherite_emerald_hoe','advancednetherite:netherite_diamond_block','advancednetherite:netherite_diamond_hoe')
  AdvNetheriteItems('advancednetherite:netherite_emerald_axe','advancednetherite:netherite_diamond_block','advancednetherite:netherite_diamond_axe')

  AdvNetheriteItems('minecraft:netherite_helmet','advancednetherite:netherite_iron_block','advancednetherite:netherite_iron_helmet')
  AdvNetheriteItems('minecraft:netherite_chestplate','advancednetherite:netherite_iron_block','advancednetherite:netherite_iron_chestplate')
  AdvNetheriteItems('minecraft:netherite_leggings','advancednetherite:netherite_iron_block','advancednetherite:netherite_iron_leggings')
  AdvNetheriteItems('minecraft:netherite_boots','advancednetherite:netherite_iron_block','advancednetherite:netherite_iron_boots')

  AdvNetheriteItems('advancednetherite:netherite_iron_helmet','advancednetherite:netherite_gold_block','advancednetherite:netherite_gold_helmet')
  AdvNetheriteItems('advancednetherite:netherite_iron_chestplate','advancednetherite:netherite_gold_block','advancednetherite:netherite_gold_chestplate')
  AdvNetheriteItems('advancednetherite:netherite_iron_leggings','advancednetherite:netherite_gold_block','advancednetherite:netherite_gold_leggings')
  AdvNetheriteItems('advancednetherite:netherite_iron_boots','advancednetherite:netherite_gold_block','advancednetherite:netherite_gold_boots')

  AdvNetheriteItems('advancednetherite:netherite_gold_helmet','advancednetherite:netherite_emerald_block','advancednetherite:netherite_emerald_helmet')
  AdvNetheriteItems('advancednetherite:netherite_gold_chestplate','advancednetherite:netherite_emerald_block','advancednetherite:netherite_emerald_chestplate')
  AdvNetheriteItems('advancednetherite:netherite_gold_leggings','advancednetherite:netherite_emerald_block','advancednetherite:netherite_emerald_leggings')
  AdvNetheriteItems('advancednetherite:netherite_gold_boots','advancednetherite:netherite_emerald_block','advancednetherite:netherite_emerald_boots')

  AdvNetheriteItems('advancednetherite:netherite_emerald_helmet','advancednetherite:netherite_diamond_block','advancednetherite:netherite_diamond_helmet')
  AdvNetheriteItems('advancednetherite:netherite_emerald_chestplate','advancednetherite:netherite_diamond_block','advancednetherite:netherite_diamond_chestplate')
  AdvNetheriteItems('advancednetherite:netherite_emerald_leggings','advancednetherite:netherite_diamond_block','advancednetherite:netherite_diamond_leggings')
  AdvNetheriteItems('advancednetherite:netherite_emerald_boots','advancednetherite:netherite_diamond_block','advancednetherite:netherite_diamond_boots')

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Avaritia

  event.remove({output:'avaritia:neutron_ring'})
  event.remove({output:'avaritia:infinity_totem'})
  event.remove({output:'avaritia:infinity_ring'})
  event.remove({output:'avaritia:infinity_umbrella'})
  event.remove({output:'avaritia:infinity_hoe'})
  event.remove({output:'avaritia:infinity_shovel'})
  event.remove({output:'avaritia:infinity_axe'})
  event.remove({output:'avaritia:infinity_bucket'})
  event.remove({output:'avaritia:infinity_bow'})
  event.remove({output:'avaritia:infinity_crossbow'})
  event.remove({output:'avaritia:crystal_sword'})
  event.remove({output:'avaritia:crystal_hoe'})
  event.remove({output:'avaritia:crystal_pickaxe'})
  event.remove({output:'avaritia:crystal_shovel'})
  event.remove({output:'avaritia:crystal_axe'})
  event.remove({output:'avaritia:blaze_hoe'})
  event.remove({output:'avaritia:blaze_shovel'})
  event.remove({output:'avaritia:blaze_axe'})
  event.remove({output:'avaritia:neutron_horse_armor'})
  event.remove({output:'avaritia:blaze_cube'})
  event.remove({output:'avaritia:diamond_lattice'})
  event.remove({output:'avaritia:crystal_matrix_ingot'})
  event.remove({output:'avaritia:neutron_pile'})
  event.remove({output:'avaritia:neutron_nugget'})
  event.remove({output:'avaritia:neutron_gear'})
  event.remove({output:'avaritia:infinity_nugget'})
  event.remove({output:'avaritia:infinity_catalyst'})
  event.remove({output:'avaritia:singularity'})
  event.remove({output:'avaritia:eternal_singularity'})
  event.remove({output:'avaritia:record_fragment'})
  event.remove({output:'avaritia:star_fuel'})
  event.remove({output:'avaritia:refined_coal'})
  event.remove({output:'avaritia:endest_pearl'})
  event.remove({output:'avaritia:matter_cluster'})
  event.remove({output:'avaritia:enhancement_core'})
  event.remove({output:'avaritia:upgrade_smithing_template'})
  event.remove({output:'avaritia:infinity_upgrade'})
  event.remove({output:'avaritia:ultimate_stew'})
  event.remove({output:'avaritia:cosmic_meatballs'})
  event.remove({output:'avaritia:compressed_crafting_table'})
  event.remove({output:'avaritia:double_compressed_crafting_table'})
  event.remove({output:'avaritia:neutron'})
  event.remove({output:'avaritia:infinity'})
  event.remove({output:'avaritia:crystal_matrix'})
  event.remove({output:'avaritia:blaze_cube_block'})
  event.remove({output:'avaritia:compressed_chest'})
  event.remove({output:'avaritia:infinity_chest'})
  event.remove({output:'avaritia:infinity_clock'})
  event.remove({output:'avaritia:soul_farmland'})
  event.remove({output:'avaritia:diamond_lattice_block'})
  event.remove({output:'avaritia:star_fuel_block'})
  event.remove({output:'avaritia:refined_coal_block'})
  event.remove({output:'avaritia:sculk_crafting_table'})
  event.remove({output:'avaritia:nether_crafting_table'})
  event.remove({output:'avaritia:end_crafting_table'})
  event.remove({output:'avaritia:extreme_crafting_table'})
  event.remove({output:'avaritia:neutron_collector'})
  event.remove({output:'avaritia:dense_neutron_collector'})
  event.remove({output:'avaritia:denser_neutron_collector'})
  event.remove({output:'avaritia:densest_neutron_collector'})
  event.remove({output:'avaritia:neutron_compressor'})
  event.remove({output:'avaritia:extreme_smithing_table'})
  event.remove({output:'avaritia:extreme_anvil'})
  event.remove({output:'avaritia:endless_cake'})

  // Neutron and infinity ingots

  event.shapeless(
    Item.of('avaritia:neutron_ingot', 1),
    [
      '9x projecte:red_matter_block',
    ]
  )

  event.shapeless(
    Item.of('avaritia:infinity_ingot', 1),
    [
      '9x avaritia:neutron_ingot',
    ]
  )

  // Avaritia item smithing

  // event.smithing(
  //   'avaritia:infinity_pickaxe',
  //   'avaritia:neutron_ingot',
  //   'avaritia:blaze_pickaxe',
  //   'avaritia:infinity_ingot'
  // )

  event.smithing(
    'avaritia:infinity_chestplate',
    'mobilebeacon:mobile_beacon_netherite_ii',
    'advancednetherite:netherite_diamond_chestplate',
    'avaritia:infinity_ingot'
  )

  event.smithing(
    'avaritia:infinity_helmet',
    'mobilebeacon:mobile_beacon_netherite_ii',
    'advancednetherite:netherite_diamond_helmet',
    'avaritia:infinity_ingot'
  )
  
  event.smithing(
    'avaritia:infinity_pants',
    'mobilebeacon:mobile_beacon_netherite_ii',
    'advancednetherite:netherite_diamond_leggings',
    'avaritia:infinity_ingot'
  )

  event.smithing(
    'avaritia:infinity_boots',
    'mobilebeacon:mobile_beacon_netherite_ii',
    'advancednetherite:netherite_diamond_boots',
    'avaritia:infinity_ingot'
  )

  event.smithing(
    'avaritia:infinity_elytra',
    'avaritia:neutron_ingot',
    '#icarus:wings',
    'avaritia:neutron_ingot',
  )

  // Avaritia tool crafting changes

  event.shaped(
    Item.of('avaritia:blaze_pickaxe', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'minecraft:magma_block',
      B: 'projecte:rm_furnace',
      C: 'advancednetherite:netherite_diamond_pickaxe'
    }
  )

  function BlazeToolShaped(inputTool, outputTool) {
    event.shaped(
      Item.of(outputTool, 1),
      [
        'ABA',
        'BCB',
        'ABA'
      ],
      {
        A: 'minecraft:magma_block',
        B: 'projecte:red_matter',
        C: inputTool
      }
    )
  }

  event.shaped(
    Item.of('avaritia:crystal_pickaxe', 1),
    [
      'EAE',
      'BEC',
      'EDE'
    ],
    {
      A: 'avaritia:blaze_pickaxe',
      B: 'avaritia:blaze_axe',
      C: 'avaritia:blaze_shovel',
      D: 'avaritia:blaze_pickaxe',
      E: 'avaritia:neutron_ingot',
    }
  )

  event.smithing(
    'avaritia:crystal_hoe',
    'projecte:red_matter_block',
    'avaritia:blaze_hoe',
    'avaritia:neutron_ingot'
  )

  BlazeToolShaped('advancednetherite:netherite_diamond_shovel','avaritia:blaze_shovel')
  BlazeToolShaped('advancednetherite:netherite_diamond_axe','avaritia:blaze_axe')
  BlazeToolShaped('advancednetherite:netherite_diamond_hoe','avaritia:blaze_hoe')

  event.smithing(
    'avaritia:blaze_sword',
    'projecte:rm_furnace',
    'advancednetherite:netherite_diamond_sword',
    'projecte:rm_furnace'
  )

  // Infinity Sword and Infinity Pickaxe recipes

  event.shapeless(
    Item.of('avaritia:infinity_sword', 1),
    [
      'minecraft:wooden_sword',
      'advancednetherite:netherite_diamond_sword',
      'terrariaweapons:volcano',
      'terrariaweapons:terrablade',
      'terrariaweapons:terraprisma',
      'terrariaweapons:star_wrath',
      'terrariaweapons:true_nights_edge',
      'terrariaweapons:true_excalibur',
      'terrariaweapons:meowmere'
    ]
  )

  event.shaped(
    Item.of('avaritia:infinity_pickaxe', 1),
    [
      'CAD',
      'ABA',
      'FAE'
    ],
    {
      A: 'avaritia:crystal_pickaxe',
      B: 'avaritia:infinity_ingot',
      C: 'minecraft:wooden_pickaxe',
      D: 'minecraft:diamond_pickaxe',
      E: 'advancednetherite:netherite_diamond_pickaxe',
      F: 'avaritia:blaze_pickaxe'
    }
  )


  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Mob Lassos

  event.remove({output:'moblassos:golden_lasso'})
  event.remove({output:'moblassos:aqua_lasso'})
  event.remove({output:'moblassos:diamond_lasso'})
  event.remove({output:'moblassos:emerald_lasso'})
  event.remove({output:'moblassos:hostile_lasso'})

  event.shaped(
    Item.of('moblassos:creative_lasso', 1),
    [
      'CBC',
      'EAE',
      'CDC'
    ], 
    {
      A: 'minecraft:lead',
      B: '#minecraft:boats',
      C: 'minecraft:diamond',
      D: 'minecraft:chest',
      E: 'minecraft:netherite_ingot'
    })

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Icarus

  event.remove({output:'icarus:flandres_wings'})
  event.remove({output:'icarus:discords_wings'})
  event.remove({output:'icarus:zanzas_wings'})
  event.remove({id: 'icarus:dragon_wings'})
  event.remove({id: 'icarus:mechanical_leather_wings'})
  event.remove({id: 'icarus:light_wings'})
  event.remove({id: 'icarus:mechanical_feathered_wings'})
  event.remove({id: 'icarus:feathered_wings'})

  function IcarusWings(variantInput, variantOutput) {
    event.shaped(
      Item.of(variantOutput, 1),
      [
        'CAC',
        'EBE',
        'CDC'
      ], 
      {
        A: variantInput,
        B: 'minecraft:elytra',
        C: 'minecraft:bone',
        D: 'projecte:red_matter_block',
        E: 'minecraft:gold_block'
      })
  }

  IcarusWings('minecraft:feather','icarus:white_feathered_wings')
  IcarusWings('minecraft:dragon_breath','icarus:white_dragon_wings')
  IcarusWings('minecraft:iron_ingot','icarus:white_mechanical_feathered_wings')
  IcarusWings('minecraft:leather','icarus:white_mechanical_leather_wings')
  IcarusWings('minecraft:nether_star','icarus:white_light_wings')

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Disenchanting Table

  event.remove({output:'disenchanting_table:disenchanting_table'})
  event.shaped(
    Item.of('disenchanting_table:disenchanting_table', 1),
    [
      ' C ',
      'BAB',
      'AAA'
    ], 
    {
      A: 'projecte:dark_matter_block',
      B: 'advancednetherite:netherite_diamond_ingot',
      C: 'minecraft:enchanting_table'
    }
  )

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Iron Bows

  event.remove({mod:'ironbows'})
    
  function ironBowsCraft(inputMaterial1, inputBow, inputMaterial2, outputBow) {
    event.shaped(
      Item.of(outputBow, 1),
      [
        'ACA',
        'ABA',
        'ACA'
      ], 
      {
        A: inputMaterial1,
        B: inputBow,
        C: inputMaterial2
      })
  }

  ironBowsCraft('minecraft:iron_block','minecraft:bow','minecraft:netherite_ingot','ironbows:iron_bow')
  ironBowsCraft('minecraft:gold_block','ironbows:iron_bow','advancednetherite:netherite_iron_ingot','ironbows:golden_bow')
  ironBowsCraft('minecraft:diamond_block','ironbows:golden_bow','advancednetherite:netherite_gold_ingot','ironbows:diamond_bow')
  ironBowsCraft('minecraft:netherite_block','ironbows:diamond_bow','advancednetherite:netherite_emerald_ingot','ironbows:emerald_bow')
  ironBowsCraft('projecte:dark_matter_block','ironbows:emerald_bow','advancednetherite:netherite_diamond_ingot','ironbows:netherite_bow')

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Sophisticated Backpacks

  event.remove({output:'sophisticatedbackpacks:backpack'})
  event.remove({output:'sophisticatedbackpacks:copper_backpack'})
  event.remove({output:'sophisticatedbackpacks:iron_backpack'})
  event.remove({output:'sophisticatedbackpacks:gold_backpack'})
  event.remove({output:'sophisticatedbackpacks:diamond_backpack'})
  event.remove({output:'sophisticatedbackpacks:netherite_backpack'})
  event.remove({output:'sophisticatedbackpacks:filter_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_filter_upgrade'})
  event.remove({output:'sophisticatedbackpacks:feeding_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_feeding_upgrade'})
  event.remove({output:'sophisticatedbackpacks:pickup_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_pickup_upgrade'})
  event.remove({output:'sophisticatedbackpacks:magnet_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_magnet_upgrade'})
  event.remove({output:'sophisticatedbackpacks:compacting_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_compacting_upgrade'})
  event.remove({output:'sophisticatedbackpacks:void_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_void_upgrade'})
  event.remove({output:'sophisticatedbackpacks:restock_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_restock_upgrade'})
  event.remove({output:'sophisticatedbackpacks:deposit_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_deposit_upgrade'})
  event.remove({output:'sophisticatedbackpacks:refill_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_refill_upgrade'})
  event.remove({output:'sophisticatedbackpacks:inception_upgrade'})
  event.remove({output:'sophisticatedbackpacks:everlasting_upgrade'})
  event.remove({output:'sophisticatedbackpacks:smelting_upgrade'})
  event.remove({output:'sophisticatedbackpacks:auto_smelting_upgrade'})
  event.remove({output:'sophisticatedbackpacks:smoking_upgrade'})
  event.remove({output:'sophisticatedbackpacks:auto_smoking_upgrade'})
  event.remove({output:'sophisticatedbackpacks:blasting_upgrade'})
  event.remove({output:'sophisticatedbackpacks:auto_blasting_upgrade'})
  event.remove({output:'sophisticatedbackpacks:stonecutter_upgrade'})
  event.remove({output:'sophisticatedbackpacks:stack_upgrade_starter_tier'})
  event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_1'})
  event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_2'})
  event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_3'})
  event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_4'})
  event.remove({output:'sophisticatedbackpacks:stack_downgrade_tier_1'})
  event.remove({output:'sophisticatedbackpacks:stack_downgrade_tier_2'})
  event.remove({output:'sophisticatedbackpacks:stack_downgrade_tier_3'})
  event.remove({output:'sophisticatedbackpacks:stack_upgrade_omega_tier'})
  event.remove({output:'sophisticatedbackpacks:jukebox_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_jukebox_upgrade'})
  event.remove({output:'sophisticatedbackpacks:tool_swapper_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_tool_swapper_upgrade'})
  event.remove({output:'sophisticatedbackpacks:tank_upgrade'})
  event.remove({output:'sophisticatedbackpacks:battery_upgrade'})
  event.remove({output:'sophisticatedbackpacks:pump_upgrade'})
  event.remove({output:'sophisticatedbackpacks:advanced_pump_upgrade'})
  event.remove({output:'sophisticatedbackpacks:xp_pump_upgrade'})
  event.remove({output:'sophisticatedbackpacks:anvil_upgrade'})
  event.remove({output:'sophisticatedbackpacks:smithing_upgrade'})
  event.remove({output:'sophisticatedbackpacks:infinity_upgrade'})
  event.remove({output:'sophisticatedbackpacks:survival_infinity_upgrade'})

  // Backpack shaped recipes

  event.shaped(
    Item.of('sophisticatedbackpacks:backpack', 1),
    [
      'BCB',
      'CAC',
      'BCB'
    ], 
    {
      A: 'minecraft:shulker_box',
      B: 'minecraft:leather',
      C: 'minecraft:netherite_block'
    }
  )

  
  event.shaped(
    Item.of('sophisticatedbackpacks:iron_backpack', 1),
    [
      'BCB',
      'CAC',
      'BCB'
    ], 
    {
      A: 'sophisticatedbackpacks:backpack',
      B: 'minecraft:netherite_block',
      C: 'minecraft:shulker_box'
    }
  )

  event.shaped(
    Item.of('sophisticatedbackpacks:gold_backpack', 1),
    [
      'BCB',
      'CAC',
      'BCB'
    ], 
    {
      A: 'sophisticatedbackpacks:iron_backpack',
      B: 'minecraft:shulker_box',
      C: 'projecte:dark_matter_block'
    }
  )

  event.shaped(
    Item.of('sophisticatedbackpacks:diamond_backpack', 1),
    [
      'BCB',
      'CAC',
      'BCB'
    ], 
    {
      A: 'sophisticatedbackpacks:gold_backpack',
      B: 'projecte:dark_matter_block',
      C: 'projecte:red_matter_block'
    }
  )

  event.shaped(
    Item.of('sophisticatedbackpacks:netherite_backpack', 1),
    [
      'BCB',
      'CAC',
      'BCB'
    ], 
    {
      A: 'sophisticatedbackpacks:diamond_backpack',
      B: 'projecte:red_matter_block',
      C: 'avaritia:neutron_ingot'
    }
  )

  // Backpack upgrade recipes

  function SophisticatedUpgrades(inputModifier, inputMaterial, outputUpgrade){
    event.shaped(
      Item.of(outputUpgrade, 1),
      [
        'BCB',
        'BAB',
        'BBB'
      ], 
      {
        A: 'sophisticatedbackpacks:upgrade_base',
        B: inputMaterial,
        C: inputModifier
      }
    )
  }

  SophisticatedUpgrades('minecraft:hopper','projecte:dark_matter','sophisticatedbackpacks:advanced_filter_upgrade')
  SophisticatedUpgrades('minecraft:bell','projecte:red_matter','sophisticatedbackpacks:advanced_magnet_upgrade')
  SophisticatedUpgrades('minecraft:enchanted_golden_apple','projecte:red_matter','sophisticatedbackpacks:advanced_feeding_upgrade')
  SophisticatedUpgrades('minecraft:campfire','projecte:dark_matter','sophisticatedbackpacks:advanced_void_upgrade')
  SophisticatedUpgrades('minecraft:end_crystal','projecte:dark_matter','sophisticatedbackpacks:everlasting_upgrade')
  SophisticatedUpgrades('minecraft:anvil','projecte:dark_matter_block','sophisticatedbackpacks:stack_upgrade_tier_1')
  SophisticatedUpgrades('minecraft:anvil','sophisticatedbackpacks:stack_upgrade_tier_1','sophisticatedbackpacks:stack_upgrade_tier_2')
  SophisticatedUpgrades('minecraft:anvil','sophisticatedbackpacks:stack_upgrade_tier_2','sophisticatedbackpacks:stack_upgrade_tier_3')

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Terraria weapons

  function TerrariaSmithing(inputSword, inputMaterial1, inputMaterial2, outputSword) {

    event.smithing(
      outputSword,
      inputMaterial1,
      inputSword,
      inputMaterial2
    )
  
  }

  TerrariaSmithing('avaritia:blaze_sword','avaritia:neutron_ingot','avaritia:neutron_ingot','terrariaweapons:volcano')
  TerrariaSmithing('terrariaweapons:volcano','avaritia:neutron_ingot','avaritia:neutron_ingot','terrariaweapons:true_nights_edge')
  TerrariaSmithing('terrariaweapons:true_nights_edge','avaritia:neutron_ingot','avaritia:neutron_ingot','terrariaweapons:true_excalibur')
  TerrariaSmithing('terrariaweapons:true_excalibur','avaritia:neutron_ingot','avaritia:neutron_ingot','terrariaweapons:terrablade')
  TerrariaSmithing('terrariaweapons:terrablade','avaritia:neutron_ingot','avaritia:neutron_ingot','terrariaweapons:meowmere')
  TerrariaSmithing('terrariaweapons:meowmere','avaritia:neutron_ingot','avaritia:neutron_ingot','terrariaweapons:star_wrath')
  TerrariaSmithing('terrariaweapons:star_wrath','avaritia:neutron_ingot','avaritia:infinity_ingot','terrariaweapons:terraprisma')

})



// Disable specific item drops for Ben's Sharks

ItemEvents.dropped('benssharks:krill_item', e => e.cancel())
ItemEvents.dropped('benssharks:sucker', e => e.cancel())
ItemEvents.dropped('benssharks:maelstrom', e => e.cancel())
ItemEvents.dropped('benssharks:maelstrom_bow', e => e.cancel())
ItemEvents.dropped('benssharks:krill_item', e => e.cancel())
ItemEvents.dropped('benssharks:raw_pilot_fish', e => e.cancel())
ItemEvents.dropped('benssharks:cooked_pilot_fish', e => e.cancel())
ItemEvents.dropped('benssharks:shark_fin', e => e.cancel())
ItemEvents.dropped('benssharks:axoleather', e => e.cancel())
ItemEvents.dropped('benssharks:axoscute', e => e.cancel())
ItemEvents.dropped('benssharks:shark_tooth', e => e.cancel())

