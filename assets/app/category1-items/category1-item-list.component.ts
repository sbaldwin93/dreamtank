import { Component, OnInit } from "@angular/core";

import { Category1_item } from "./category1-item.model";
import { Category1_itemService } from "./category1-item.service";

@Component({
    selector: 'app-item-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-item
                   [category1_item]="category1_item"
                    *ngFor="let category1_item of category1_items"></app-item>
        </div>
    `
})
export class Category1_itemListComponent implements OnInit {
    category1_items: Category1_item[];

    constructor(private category1_itemService: Category1_itemService) {}

    ngOnInit() {
        this.category1_itemService.getItems()
            .subscribe(
                (category1_items: Category1_item[]) => {
                    this.category1_items = category1_items;
                }
            );
    }
}