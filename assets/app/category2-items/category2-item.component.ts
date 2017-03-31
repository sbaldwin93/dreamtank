import { Component, Input } from "@angular/core";

import { Category2_item } from "./category2-item.model";
import { Category2_itemService } from "./category2-item.service";

@Component({
    selector: 'app-item',
    templateUrl: './category2-item.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class Category2_itemComponent {
    @Input() category2_item: Category2_item;

    constructor(private category2_itemService: Category2_itemService) {}

    onEdit() {
        this.category2_itemService.editItem(this.category2_item);
    }

    onDelete() {
        this.category2_itemService.deleteItem(this.category2_item)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.category2_item.userId;
    }
}