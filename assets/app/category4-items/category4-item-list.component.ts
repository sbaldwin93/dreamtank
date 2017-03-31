import { Component, OnInit } from "@angular/core";

import { Category4_item } from "./category4-item.model";
import { Category4_itemService } from "./category4-item.service";

@Component({
    selector: 'app-item-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-item
                   [category4_item]="category4_item"
                    *ngFor="let category4_item of category4_items"></app-item>
        </div>
    `
})
export class Category4_itemListComponent implements OnInit {
    category4_items: Category4_item[];

    constructor(private category4_itemService: Category4_itemService) {}

    ngOnInit() {
        this.category4_itemService.getItems()
            .subscribe(
                (category4_items: Category4_item[]) => {
                    this.category4_items = category4_items;
                }
            );
    }
}