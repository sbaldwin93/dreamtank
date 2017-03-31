import { Component, OnInit } from "@angular/core";

import { Category5_item } from "./category5-item.model";
import { Category5_itemService } from "./category5-item.service";

@Component({
    selector: 'app-item-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-item
                   [category5_item]="category5_item"
                    *ngFor="let category5_item of category5_items"></app-item>
        </div>
    `
})
export class Category5_itemListComponent implements OnInit {
    category5_items: Category5_item[];

    constructor(private category5_itemService: Category5_itemService) {}

    ngOnInit() {
        this.category5_itemService.getItems()
            .subscribe(
                (category5_items: Category5_item[]) => {
                    this.category5_items = category5_items;
                }
            );
    }
}