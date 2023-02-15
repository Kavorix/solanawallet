import { Idl } from "../../idl.js";
import { Coder } from "../index.js";
import { SplTokenInstructionCoder } from "./instruction.js";
import { SplTokenStateCoder } from "./state.js";
import { SplTokenAccountsCoder } from "./accounts.js";
import { SplTokenEventsCoder } from "./events.js";
import { SplTokenTypesCoder } from "./types.js";
/**
 * Coder for the SPL token program.
 */
export declare class SplTokenCoder implements Coder {
    readonly instruction: SplTokenInstructionCoder;
    readonly accounts: SplTokenAccountsCoder;
    readonly state: SplTokenStateCoder;
    readonly events: SplTokenEventsCoder;
    readonly types: SplTokenTypesCoder;
    constructor(idl: Idl);
}
//# sourceMappingURL=index.d.ts.map