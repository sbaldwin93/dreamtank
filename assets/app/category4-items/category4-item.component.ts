import { Component, Input } from "@angular/core";

import { Category4_item } from "./category4-item.model";
import { Category4_itemService } from "./category4-item.service";

@Component({
    selector: 'app-item',
    templateUrl: './category4-item.component.html',
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
export class Category4_itemComponent {
    @Input() category4_item: Category4_item;

    constructor(private category4_itemService: Category4_itemService) {}

    onEdit() {
        this.category4_itemService.editItem(this.category4_item);
    }

    onDelete() {
        this.category4_itemService.deleteItem(this.category4_item)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.category4_item.userId;
    }
}