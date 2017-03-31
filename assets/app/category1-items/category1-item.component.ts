import { Component, Input } from "@angular/core";

import { Category1_item } from "./category1-item.model";
import { Category1_itemService } from "./category1-item.service";

@Component({
    selector: 'app-item',
    templateUrl: './category1-item.component.html',
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
export class Category1_itemComponent {
    @Input() category1_item: Category1_item;

    constructor(private category1_itemService: Category1_itemService) {}

    onEdit() {
        this.category1_itemService.editItem(this.category1_item);
    }

    onDelete() {
        this.category1_itemService.deleteItem(this.category1_item)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.category1_item.userId;
    }
}