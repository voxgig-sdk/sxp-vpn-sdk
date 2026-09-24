"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SxpVpnError = void 0;
class SxpVpnError extends Error {
    isSxpVpnError = true;
    sdk = 'SxpVpn';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.SxpVpnError = SxpVpnError;
//# sourceMappingURL=SxpVpnError.js.map