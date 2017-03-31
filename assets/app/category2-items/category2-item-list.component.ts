import { Component, OnInit } from "@angular/core";

import { Category2_item } from "./category2-item.model";
import { Category2_itemService } from "./category2-item.service";

@Component({
    selector: 'app-item-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-item
                   [category2_item]="category2_item"
                    *ngFor="let category2_item of category2_items"></app-item>
        </div>
    `
})
export class Category2_itemListComponent implements OnInit {
    category2_items: Category2_item[];

    constructor(private category2_itemService: Category2_itemService) {}

    ngOnInit() {
        this.category2_itemService.getItems()
            .subscribe(
                (category2_items: Category2_item[]) => {
                    this.category2_items = category2_items;
                }
            );
    }
}