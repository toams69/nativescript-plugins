/* eslint-disable @typescript-eslint/no-misused-new */
/// <reference path="../../references.d.ts" />

declare class NSCTCPClient extends NSObject {
  static alloc(): NSCTCPClient; // inherited from NSObject

  static new(): NSCTCPClient; // inherited from NSObject

  connectWithServernamePort(servername: string, port: number): void;
}
