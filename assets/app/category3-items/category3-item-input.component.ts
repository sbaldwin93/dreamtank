import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Category3_itemService } from "./category3-item.service";
import { Category3_item } from "./category3-item.model";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-item-input',
    templateUrl: './category3-item-input.component.html'
})
export class Category3_itemInputComponent implements OnInit {
    category3_item: Category3_item;

    constructor(private category3_itemService: Category3_itemService, private authService: AuthService) {}

    onSubmit(form: NgForm) {
        if (this.category3_item) {
            // Edit
            this.category3_item.content = form.value.content;
            this.category3_item.category = "category3";
            this.category3_itemService.updateItem(this.category3_item)
                .subscribe(
                    result => console.log(result)
                );
            this.category3_item = null;
        } else {
            // Create
            const category3_item = new Category3_item(form.value.content, "category3", null);
            this.category3_itemService.addItem(category3_item)
                .subscribe(
                    data => console.log(data),
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.category3_item = null;
        form.resetForm();
    }

    ngOnInit() {
        this.category3_itemService.itemIsEdit.subscribe(
            (category3_item: Category3_item) => this.category3_item = category3_item
        );
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}