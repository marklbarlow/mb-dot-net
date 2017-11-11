import { NgModule } from '@angular/core';

import * as root from './';

@NgModule({
    declarations: [
        root.MbImageOverlayComponent,
        root.MbGalleryStubComponent,
        root.MatDividerStubComponent,
        root.MatIconStubComponent,
        root.MatListStubComponent,
        root.MatListItemStubComponent,
        root.MatToolbarStubComponent,
        root.ReversePipeStub,
        root.RouterLinkStubDirective,
        root.RouterOutletStubComponent,
    ],
})
export class TestingModule { }