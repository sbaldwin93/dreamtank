import { Component, Input } from "@angular/core";

import { Category5_item } from "./category5-item.model";
import { Category5_itemService } from "./category5-item.service";

@Component({
    selector: 'app-item',
    templateUrl: './category5-item.component.html',
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
export class Category5_itemComponent {
    @Input() category5_item: Category5_item;

    constructor(private category5_itemService: Category5_itemService) {}

    onEdit() {
        this.category5_itemService.editItem(this.category5_item);
    }

    onDelete() {
        this.category5_itemService.deleteItem(this.category5_item)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.category5_item.userId;
    }
}