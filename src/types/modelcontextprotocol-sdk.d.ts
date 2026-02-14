declare module '@modelcontextprotocol/sdk/client/index.js' {
  export class Client {
    constructor(options: { name: string; version: string });
    connect(transport: any): Promise<void>;
    listTools(): Promise<{ tools: any[] }>;
    callTool(options: { name: string; arguments: Record<string, unknown> }): Promise<any>;
  }
}

declare module '@modelcontextprotocol/sdk/client/streamableHttp.js' {
  export class StreamableHTTPClientTransport {
    constructor(url: URL);
    close(): Promise<void>;
  }
}
