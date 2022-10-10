import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSimpleTcpSocket } from '@demo/shared';
import {} from '@nativescript/simple-tcp-socket';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSimpleTcpSocket {}
