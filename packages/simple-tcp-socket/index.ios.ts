import { SimpleTcpSocketCommon } from './common';

export class SimpleTcpSocket extends SimpleTcpSocketCommon {
  public connect(servername: string, port: number) {
    console.log('connect');
    // @ts-ignore
    const client = NSCTCPClient.new();
    console.log(client);
    client.connect(servername, port);
  }
}
