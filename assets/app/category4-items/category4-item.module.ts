import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Category4_itemsComponent } from "./category4-items.component";
import { Category4_itemListComponent } from "./category4-item-list.component";
import { Category4_itemComponent } from "./category4-item.component";
import { Category4_itemInputComponent } from "./category4-item-input.component";
import { Category4_itemService } from "./category4-item.service";

@NgModule({
    declarations: [
        Category4_itemsComponent,
        Category4_itemListComponent,
        Category4_itemComponent,
        Category4_itemInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [Category4_itemService]
})
export class Category4_itemModule {
    
}