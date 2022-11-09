import { Observable } from '@nativescript/core';
import { Buffer } from 'buffer';

export class SimpleTcpSocketCommon extends Observable {
  public connect(servername: string, port: number) {}
  public sendData(data: any) {}
}

export const _generateSendBuffer = (buffer, encoding: BufferEncoding = 'utf8') => {
  if (typeof buffer === 'string') {
    return Buffer.from(buffer, encoding);
  } else if (Buffer.isBuffer(buffer)) {
    return buffer;
  } else if (buffer instanceof Uint8Array || Array.isArray(buffer)) {
    return Buffer.from(buffer);
  } else {
    throw new TypeError(`Invalid data, chunk must be a string or buffer, not ${typeof buffer}`);
  }
};
