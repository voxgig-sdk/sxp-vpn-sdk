import { Context } from './Context';
declare class SxpVpnError extends Error {
    isSxpVpnError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { SxpVpnError };
