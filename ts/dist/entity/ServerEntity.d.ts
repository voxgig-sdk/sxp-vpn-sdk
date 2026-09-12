import { SxpVpnEntityBase } from '../SxpVpnEntityBase';
import type { SxpVpnSDK } from '../SxpVpnSDK';
import type { Control } from '../types';
import type { Server, ServerListMatch } from '../SxpVpnTypes';
declare class ServerEntity extends SxpVpnEntityBase<Server> {
    constructor(client: SxpVpnSDK, entopts: any);
    make(this: ServerEntity): ServerEntity;
    list(this: any, reqmatch?: ServerListMatch, ctrl?: Control): Promise<ServerEntity[]>;
}
export { ServerEntity };
