import { Collection } from "discord.js";
import { ping } from "./ping";
import { timerGroup } from "./timer";
import type { GvgSubcommand, GvgSubcommandGroup } from "./types";

export const subcommands = new Collection<string, GvgSubcommand>([[ping.data.name, ping]]);

export const gvgGroups = new Collection<string, GvgSubcommandGroup>([
    [timerGroup.data.name, timerGroup],
]);
