# ProjectEconomy

This is a private server modpack with a heavy emphasis on retaining a vanilla block palette, while also implementing many gameplay features. The expectation is to engage with ProjectE's EMC for both progression and for block acquisition, giving the pack a laid-back collection and creativity focus.

## Installation

1) Install [Forge 47.4.0 for Minecraft 1.20.1](https://maven.minecraftforge.net/net/minecraftforge/forge/1.20.1-47.4.0/forge-1.20.1-47.4.0-installer.jar) and run it.
2) Once installed, go to the [release page](https://github.com/xDEFCONx/ProjectEconomy/releases/new) and obtain "instances.zip"
3) Navigate to your .minecraft directory, commonly found at `C:\Users\[USER]\Appdata\Roaming\.minecraft`, and drop the .zip into it.
4) Unzip the contents.
5) Under `..\instances\ProjectEconomy`, run `ProjectEconomyLauncher.bat`

This .bat automatically runs the updater and opens MinecraftLauncher.exe! Make a shortcut to it.

NOTE: DO NOT MOVE THE .BAT ANYWHERE ELSE.

### In the Minecraft launcher:

1) Go to the "Installations" tab at the top.
2) Select "New Installation".
3) Name it what you want, but enter the following into the other fields:

- Version: `release 1.20.1-forge-47.4.0`
- Game Directory `..\.minecraft\instances\ProjectEconomy` (Don't copy this! You need the whole directory address!)
- Resolution: `1920 x 1080`
- JVM Args: `-Xmx4G -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M`

  Note: You can change memory allocated with `-Xmx[MEM]G` and replacing `[MEM]` with the amount in GB.

4) Click "Save".
5) Go back to the "Play" tab, select the installation profile you made, and play the game.

## Mods

Many mods have been installed and tweaked for gameplay balancing and style. Things of note will be documented below for reference.

- **ProjectE** - The backbone of the modpack, as it's used for the economy. Many items and general gameplay features have been stripped for balancing.
- **Refined Storage** - Storage system. RF is no longer required, and powered blocks are replaced with their creative counterparts.
- **Created Wireless Transmitter** - RS expansion for a wireless access point that's universally/dimensionally accessible.
- **Waystones** - Teleportation networks, with experience consumption disabled.
- **Advanced Netherite** - Upgraded netherite tools with perks, for tool progression.
- **Unbreakable** - All durability is disabled.
- **Cosmetic Armor Reworked** - Use armor as vanity items or hide it entirely.
- **ElytraSlot** - Makes base elytra Curios-compatible.
- **Mobile Beacons** - Craftable Curios-compatible beacons that live in your inventory, providing effects to its holder.
- **Easy Anvils** - Better XP scaling, text formatting, free nametag edits, repair anvil with iron block, animations.
- **Easy Magic** - Reroll enchantment outcomes at enchanting table, animations.
- **Tweakerage** - Forge port of Tweakeroo. Used for no chunk fog, but is highly configurable.
- **Ambient Sounds** - Improves the environmental immersion. Cave ambience is disable by default (annoying).
- **Ben's Sharks** - Sharks plus a few other mobs.
- **Iron Bows** - Extra progression of bows.
- **BowInfinityFix** - Infinity does not require an arrow to be present to work.
- **Re:Avaritia** - Used for high-tier crafting items and end-game tools and equipment. Significantly stripped down and edited, including new models, sounds, and methods.
- **Terraria Weapons** - Custom-made sword pack for end-game scaling. Work in progress.
- **Sophisticated Backpacks** - Expandable player inventory items.
- **Mob Lassos** - Allows for moving mobs in a far simpler fashion. Creative lasso is the only one available.
