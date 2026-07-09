import { SlashCommandSubcommandBuilder } from "discord.js";
import type { GvgSubcommand } from "../types";

export const startTimer: GvgSubcommand = {
    data: new SlashCommandSubcommandBuilder()
        .setName("start")
        .setDescription("Starts a GvG timer")
        .addIntegerOption((option) =>
            option
                .setName("offset")
                .setDescription("Offset in seconds (+ delays, - starts ahead)")
                .setRequired(false),
        ),

    async execute(interaction) {
        const offset = interaction.options.getInteger("offset") ?? 0;

        await interaction.reply(`Starting timer with an offset of ${offset} seconds.`);
    },
};
