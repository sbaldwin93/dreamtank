import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Category1_itemsComponent } from "./category1-items.component";
import { Category1_itemListComponent } from "./category1-item-list.component";
import { Category1_itemComponent } from "./category1-item.component";
import { Category1_itemInputComponent } from "./category1-item-input.component";
import { Category1_itemService } from "./category1-item.service";

@NgModule({
    declarations: [
        Category1_itemsComponent,
        Category1_itemListComponent,
        Category1_itemComponent,
        Category1_itemInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [Category1_itemService]
})
export class Category1_itemModule {
    
}