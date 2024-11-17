export interface TransmitServerEnvironment {
  protocol: string;
  hostname: string;
  port: number;
}

export interface TransmitServerConfiguration {
  osc?: {
    localPort?: number;
    localAddress?: string;
    remotePort: number;
    remoteAddress: string;
    broadcast?: boolean;
    multicastTTL?: number;
    multicastMembership?: Array<string>;
    socket?: string;
    mertadata?: boolean;
  };
  http?: TransmitServerEnvironment;
  ws?: {
    osc?: TransmitServerEnvironment;
    signal?: TransmitServerEnvironment;
    announce?: TransmitServerEnvironment;
    message?: TransmitServerEnvironment;
  };
}

export const readymadeServerConfiguration: TransmitServerConfiguration = {
  osc: {
    remoteAddress: '127.0.0.1',
    remotePort: 57122,
    broadcast: true,
    metadata: false,
  },
  http: {
    protocol: 'http',
    hostname: 'localhost',
    port: 4449,
  },
  ws: {
    osc: {
      protocol: 'ws',
      hostname: 'localhost',
      port: 4445,
    },
    signal: {
      protocol: 'ws',
      hostname: 'localhost',
      port: 4446,
    },
    announce: {
      protocol: 'ws',
      hostname: 'localhost',
      port: 4447,
    },
    message: {
      protocol: 'ws',
      hostname: 'localhost',
      port: 4448,
    },
  },
};
