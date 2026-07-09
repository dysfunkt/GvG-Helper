import { Collection } from "discord.js";
import type { GvgSubcommand } from "../types";
import { startTimer } from "./start";
import { stopTimer } from "./stop";

export const timerSubcommands = new Collection<string, GvgSubcommand>([
    [startTimer.data.name, startTimer],
    [stopTimer.data.name, stopTimer],
]);
