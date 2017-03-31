import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Category4_item } from "./category4-item.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class Category4_itemService {
    private category4_items: Category4_item[] = [];
    itemIsEdit = new EventEmitter<Category4_item>();

    constructor(private http: Http, private errorService: ErrorService) {
    }

    addItem(category4_item: Category4_item) {
        const body = JSON.stringify(category4_item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/category4_item' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const category2_item = new Category4_item(
                    result.obj.content,
                    result.obj.category,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.category4_items.push(category4_item);
                return category4_item;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getItems() {
        return this.http.get('http://localhost:3000/category4_item')
            .map((response: Response) => {
                const category4_items = response.json().obj;
                let transformedItems: Category4_item[] = [];
                for (let category4_item of category4_items) {
                    transformedItems.push(new Category4_item(
                        category4_item.content,
                        category4_item.category,
                        category4_item.user.firstName,
                        category4_item._id,
                        category4_item.user._id)
                    );
                }
                this.category4_items = transformedItems;
                return transformedItems;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editItem(category4_item: Category4_item) {
        this.itemIsEdit.emit(category4_item);
    }

    updateItem(category4_item: Category4_item) {
        const body = JSON.stringify(category4_item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/category4_item/' + category4_item.itemId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteItem(category4_item: Category4_item) {
        this.category4_items.splice(this.category4_items.indexOf(category4_item), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/category4_item/' + category4_item.itemId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}