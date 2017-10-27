import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HelloWorldComponent} from './hello-world.component';

import {UglyDirective} from './ugly.directive';
@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        HelloWorldComponent,
        UglyDirective
    ],
    exports: [
        HelloWorldComponent
    ]
})
export class HelloWorldModule {}