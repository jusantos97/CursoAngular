import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";

import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";
import { PhotoOwnerOnlyDirective } from "./photo-owner-only/photo-owner-only.directive";
import { ShowIfLoggedModule } from "../../shared/directives/show-if-logged/show-if-logged.module";
import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";


@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent,
        PhotoOwnerOnlyDirective
],

    exports: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent
],

    imports: [
        CommonModule, 
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule,
        ShowIfLoggedModule
]

})
export class PhotoDetailsModule { }
