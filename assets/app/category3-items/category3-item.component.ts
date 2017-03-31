import { Component, Input } from "@angular/core";

import { Category3_item } from "./category3-item.model";
import { Category3_itemService } from "./category3-item.service";

@Component({
    selector: 'app-item',
    templateUrl: './category3-item.component.html',
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
export class Category3_itemComponent {
    @Input() category3_item: Category3_item;

    constructor(private category3_itemService: Category3_itemService) {}

    onEdit() {
        this.category3_itemService.editItem(this.category3_item);
    }

    onDelete() {
        this.category3_itemService.deleteItem(this.category3_item)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.category3_item.userId;
    }
}