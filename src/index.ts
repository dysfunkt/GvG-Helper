import { Client, Events, GatewayIntentBits, MessageFlags } from "discord.js";
import { commands } from "./commands";
import { env } from "./config";
import { logger } from "./utils/logger";

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (readyClient) => {
    logger.info(`Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = commands.get(interaction.commandName);

    if (!command) {
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        logger.error(error, "Command failed");

        await interaction.reply({
            content: "Something went wrong while running this command.",
            flags: [MessageFlags.Ephemeral],
        });
    }
});

await client.login(env.DISCORD_TOKEN);
