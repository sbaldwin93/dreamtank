import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Category3_itemsComponent } from "./category3-items.component";
import { Category3_itemListComponent } from "./category3-item-list.component";
import { Category3_itemComponent } from "./category3-item.component";
import { Category3_itemInputComponent } from "./category3-item-input.component";
import { Category3_itemService } from "./category3-item.service";

@NgModule({
    declarations: [
        Category3_itemsComponent,
        Category3_itemListComponent,
        Category3_itemComponent,
        Category3_itemInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [Category3_itemService]
})
export class Category3_itemModule {
    
}