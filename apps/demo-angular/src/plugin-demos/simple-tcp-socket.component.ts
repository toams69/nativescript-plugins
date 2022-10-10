import { Component, NgZone } from '@angular/core';
import { DemoSharedSimpleTcpSocket } from '@demo/shared';
import {} from '@nativescript/simple-tcp-socket';

@Component({
  selector: 'demo-simple-tcp-socket',
  templateUrl: 'simple-tcp-socket.component.html',
})
export class SimpleTcpSocketComponent {
  demoShared: DemoSharedSimpleTcpSocket;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSimpleTcpSocket();
  }
}
