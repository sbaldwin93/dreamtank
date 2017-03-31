import { Component, OnInit } from "@angular/core";

import { Category3_item } from "./category3-item.model";
import { Category3_itemService } from "./category3-item.service";

@Component({
    selector: 'app-item-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-item
                   [category3_item]="category3_item"
                    *ngFor="let category3_item of category3_items"></app-item>
        </div>
    `
})
export class Category3_itemListComponent implements OnInit {
    category3_items: Category3_item[];

    constructor(private category3_itemService: Category3_itemService) {}

    ngOnInit() {
        this.category3_itemService.getItems()
            .subscribe(
                (category3_items: Category3_item[]) => {
                    this.category3_items = category3_items;
                }
            );
    }
}