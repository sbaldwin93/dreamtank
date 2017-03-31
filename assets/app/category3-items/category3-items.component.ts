import { Component } from "@angular/core";

@Component({
    selector: 'app-items',
    template: `
        <div class="row">
            <app-item-input></app-item-input>
        </div>
        <hr>
        <div class="row">
            <app-item-list></app-item-list>
        </div>
    `
})
export class Category3_itemsComponent {

}