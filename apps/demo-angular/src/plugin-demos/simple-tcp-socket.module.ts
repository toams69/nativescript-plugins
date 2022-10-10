import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SimpleTcpSocketComponent } from './simple-tcp-socket.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SimpleTcpSocketComponent }])],
  declarations: [SimpleTcpSocketComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SimpleTcpSocketModule {}
