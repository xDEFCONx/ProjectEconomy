BlockEvents.modification(event => {
  event.modify('projecte:dm_furnace', block => {
    block.destroySpeed = 5.0 
    block.requiresTool = false
  })
  event.modify('projecte:rm_furnace', block => {
    block.destroySpeed = 5.0 
    block.requiresTool = false
  })
})