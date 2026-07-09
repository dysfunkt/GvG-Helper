import { SlashCommandSubcommandBuilder } from "discord.js";
import type { GvgSubcommand } from "./types";

export const ping: GvgSubcommand = {
    data: new SlashCommandSubcommandBuilder().setName("ping").setDescription("Replies with Pong!"),

    async execute(interaction) {
        await interaction.reply("🏓 Pong!");
    },
};
