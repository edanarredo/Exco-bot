/**
 * @file uhoh command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */
 module.exports = {
	name: "uhoh",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		message.channel.send({ content: "Stinky :uhoh:" });
	},
};
