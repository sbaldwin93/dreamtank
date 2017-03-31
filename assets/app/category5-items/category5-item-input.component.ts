import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Category5_itemService } from "./category5-item.service";
import { Category5_item } from "./category5-item.model";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-item-input',
    templateUrl: './category5-item-input.component.html'
})
export class Category5_itemInputComponent implements OnInit {
    category5_item: Category5_item;

    constructor(private category5_itemService: Category5_itemService, private authService: AuthService) {}

    onSubmit(form: NgForm) {
        if (this.category5_item) {
            // Edit
            this.category5_item.content = form.value.content;
            this.category5_item.category = "category5";
            this.category5_itemService.updateItem(this.category5_item)
                .subscribe(
                    result => console.log(result)
                );
            this.category5_item = null;
        } else {
            // Create
            const category5_item = new Category5_item(form.value.content, "category5", null);
            this.category5_itemService.addItem(category5_item)
                .subscribe(
                    data => console.log(data),
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.category5_item = null;
        form.resetForm();
    }

    ngOnInit() {
        this.category5_itemService.itemIsEdit.subscribe(
            (category5_item: Category5_item) => this.category5_item = category5_item
        );
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}