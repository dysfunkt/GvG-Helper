import { Collection } from "discord.js";

import { gvgCommand } from "./gvg";

export const commands = new Collection([[gvgCommand.data.name, gvgCommand]]);
