import { SlashCommandSubcommandBuilder } from "discord.js";
import type { GvgSubcommand } from "../types";

export const stopTimer: GvgSubcommand = {
    data: new SlashCommandSubcommandBuilder().setName("stop").setDescription("Stops a GvG timer"),

    async execute(interaction) {
        await interaction.reply(`Stopping timer.`);
    },
};
