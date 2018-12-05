export default interface IToken {
    domain?: string;
    userId?: number | string;
    serviceCode?: string;
    connectionId?: any;
    serviceId?: string;
    serviceName?: string;
    clientId?: number;
    serviceUserId?: number;
    loginMethod?: number;
    refreshTokenId?: number;
    scopeGroupIds?: number[];
    serviceUsername?: string;
}
