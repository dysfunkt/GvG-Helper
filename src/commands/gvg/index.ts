import type { ChatInputCommandInteraction } from "discord.js";
import { MessageFlags, SlashCommandBuilder } from "discord.js";
import { gvgGroups, subcommands } from "./registry";

const builder = new SlashCommandBuilder().setName("gvg").setDescription("Guild vs Guild utilities");

for (const command of subcommands.values()) {
    builder.addSubcommand(command.data);
}

for (const group of gvgGroups.values()) {
    builder.addSubcommandGroup(group.data);
}

export const gvgCommand = {
    data: builder,

    async execute(interaction: ChatInputCommandInteraction) {
        // handle subcommand groups
        const groupName = interaction.options.getSubcommandGroup(false);

        if (groupName) {
            const group = gvgGroups.get(groupName);

            if (!group) {
                await interaction.reply({
                    content: "Unknown command group.",
                    ephemeral: true,
                });
                return;
            }

            await group.execute(interaction);
            return;
        }

        // handle top-level commands
        const subcommandName = interaction.options.getSubcommand();
        const subcommand = subcommands.get(subcommandName);

        if (!subcommand) {
            await interaction.reply({
                content: "Unknown subcommand.",
                flags: [MessageFlags.Ephemeral],
            });
            return;
        }

        await subcommand.execute(interaction);
    },
};
