/**
 * @file print rules
 * @author Mip
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */

module.exports = {
	name: "info",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		message.channel.send({ 
         "embeds": [
         {
           "type": "rich",
           "title": `This Server is NSFW`,
           "description": `There is a **Discord Role** that filters most of the NSFW channels if you'd like that for yourself - DM me and I can give you it. Just giving a heads up to newcomers if there are more. `,
           "color": 0x00FFFF
         },
         {
            "type": "rich",
            "title": `Use Events!`,
            "description": `Everyone has the ability to create and host a Discord Event. Please use the feature if you want! The author of an event is responsible for communicating any details/changes.`,
            "color": 0x00FFFF
          },
          {
            "type": "rich",
            "title": `Participation`,
            "description": `EVERYONE on this server is allowed and encouraged to join an ongoing voice chat or Event. Please be respectful when joining a call.`,
            "color": 0x00FFFF
          },
          {
            "type": "rich",
            "title": `FFXIV FC In-game Resources`,
            "description": `Most FC resources and permissions are open to everyone. If there are no FC buffs, feel free to activate them or purchase more. If you need an airship/submarine item, please ask **Kira Kabob**. If you need \`Thavnarian Onions\` from the FC garden please ask **Mipha Ordona**.`,
            "color": 0x00FFFF
          },
          {
            "type": "rich",
            "title": `This is a casual FC`,
            "description": `To me, the FC is just a way for us to hang out closely in-game. This FC will won't be ran like a business b/c that's stressful :sob:`,
            "color": 0x00FFFF
          },
          {
            "type": "rich",
            "title": `FFXIV FC Ranks`,
            "description": `Co-Owners will receive the Owner rank if the Owner goes inactive.\n\nVeterans have most permissions in the FC except for purchasing land, withdrawing gil, and accessing the last page of the FC vault (saved for scarce items needed to upgrade workshop/house stuff).\n\nMember is the default role when joining.`,
            "color": 0x00FFFF
          }
       ]});
	},
};
