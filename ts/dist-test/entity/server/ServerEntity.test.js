"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ServerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SXP_VPN_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SXP_VPN_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SxpVpnSDK.test();
        const ent = testsdk.Server();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SXP_VPN_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'server.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "country", "req": false, "short": "Country where the server is located", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "host", "req": false, "short": "Server hostname or IP address", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the server", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "load", "req": false, "short": "Server load percentage", "type": "`$NUMBER`", "index$": 3 }, { "active": true, "name": "name", "req": false, "short": "Server name or location", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "port", "req": false, "short": "Connection port", "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "protocol", "req": false, "short": "VPN protocol used", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "status", "req": false, "short": "Server status (active, inactive, maintenance)", "type": "`$STRING`", "index$": 7 }], "id": { "field": "id", "name": "id" }, "name": "server", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api1.php", "json": "{\"operationId\":\"getServersList\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"servers\":{\"description\":\"Array of available VPN servers\",\"items\":{\"properties\":{\"country\":{\"description\":\"Country where the server is located\",\"type\":\"string\"},\"host\":{\"description\":\"Server hostname or IP address\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the server\",\"type\":\"string\"},\"load\":{\"description\":\"Server load percentage\",\"type\":\"number\"},\"name\":{\"description\":\"Server name or location\",\"type\":\"string\"},\"port\":{\"description\":\"Connection port\",\"type\":\"integer\"},\"protocol\":{\"description\":\"VPN protocol used\",\"type\":\"string\"},\"status\":{\"description\":\"Server status (active, inactive, maintenance)\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successfully retrieved the list of VPN servers\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Service unavailable\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api1.php", "segments": [{ "lit": "api1.php" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.servers`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "server", "name__orig": "server", "Name": "Server", "name_": "server", "name-": "server", "NAME": "SERVER", "index$": 0 }, { "active": true, "entity": "server", "key$": "BasicServerFlow", "kind": "basic", "name": "BasicServerFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "server_ref01" } }], "index$": 0 }] }, 'Server');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let server_ref01_data = Object.values(setup.data.existing.server)[0];
        // LIST
        const server_ref01_ent = client.Server();
        const server_ref01_match = {};
        const server_ref01_list = (await server_ref01_ent.list(server_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/server/ServerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SxpVpnSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['server01', 'server02', 'server03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SXP_VPN_TEST_SERVER_ENTID': idmap,
        'SXP_VPN_TEST_LIVE': 'FALSE',
        'SXP_VPN_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['SXP_VPN_TEST_SERVER_ENTID'];
    const live = 'TRUE' === env.SXP_VPN_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SXP_VPN_TEST_SERVER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.SxpVpnSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.SXP_VPN_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ServerEntity.test.js.map