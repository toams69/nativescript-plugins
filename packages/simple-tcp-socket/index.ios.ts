import { SimpleTcpSocketCommon } from './common';

export class SimpleTcpSocket extends SimpleTcpSocketCommon {
  public connect(servername: string, port: number) {
    console.log('connect');
    const client = NSCTCPClient.new();
    console.log(client);
    client.connectWithServernamePort(servername, port);
  }
}
