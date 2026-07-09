import type {
    ChatInputCommandInteraction,
    SlashCommandSubcommandBuilder,
    SlashCommandSubcommandGroupBuilder,
} from "discord.js";

export interface GvgSubcommand {
    readonly data: SlashCommandSubcommandBuilder;
    execute(interaction: ChatInputCommandInteraction): Promise<void>;
}

export interface GvgSubcommandGroup {
    readonly data: SlashCommandSubcommandGroupBuilder;
    execute(interaction: ChatInputCommandInteraction): Promise<void>;
}
