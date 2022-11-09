import { SimpleTcpSocketCommon, _generateSendBuffer } from './common';

export class SimpleTcpSocket extends SimpleTcpSocketCommon {
  client: NSCTCPClient | undefined;
  public connect(servername: string, port: number) {
    console.log('connect');
    this.client = NSCTCPClient.new();
    if (this.client) this.client.connectWithServernamePort(servername, port);
  }

  public sendData(data: any) {
    const generatedBuffer = _generateSendBuffer(data);
    if (this.client) this.client.sendWithData(generatedBuffer.toString('base64'));
  }
}
