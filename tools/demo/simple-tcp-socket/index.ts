import { DemoSharedBase } from '../utils';
import { SimpleTcpSocket } from '@nativescript/simple-tcp-socket';

export class DemoSharedSimpleTcpSocket extends DemoSharedBase {
  testIt() {
    console.log('test simple-tcp-socket!');
    const client = new SimpleTcpSocket();
    client.connect('192.168.1.200', 9100);
  }
}
