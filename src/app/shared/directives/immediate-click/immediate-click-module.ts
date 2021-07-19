import { immediateClickDirective } from "./immediate-click.directive";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [immediateClickDirective],
    exports: [immediateClickDirective],
    imports: [CommonModule]
})

export class ImmediateClickModule { }