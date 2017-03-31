import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Category2_itemsComponent } from "./category2-items.component";
import { Category2_itemListComponent } from "./category2-item-list.component";
import { Category2_itemComponent } from "./category2-item.component";
import { Category2_itemInputComponent } from "./category2-item-input.component";
import { Category2_itemService } from "./category2-item.service";

@NgModule({
    declarations: [
        Category2_itemsComponent,
        Category2_itemListComponent,
        Category2_itemComponent,
        Category2_itemInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [Category2_itemService]
})
export class Category2_itemModule {
    
}