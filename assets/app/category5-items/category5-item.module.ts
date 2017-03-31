import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Category5_itemsComponent } from "./category5-items.component";
import { Category5_itemListComponent } from "./category5-item-list.component";
import { Category5_itemComponent } from "./category5-item.component";
import { Category5_itemInputComponent } from "./category5-item-input.component";
import { Category5_itemService } from "./category5-item.service";

@NgModule({
    declarations: [
        Category5_itemsComponent,
        Category5_itemListComponent,
        Category5_itemComponent,
        Category5_itemInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [Category5_itemService]
})
export class Category5_itemModule {
    
}