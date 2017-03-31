import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Category5_item } from "./category5-item.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class Category5_itemService {
    private category5_items: Category5_item[] = [];
    itemIsEdit = new EventEmitter<Category5_item>();

    constructor(private http: Http, private errorService: ErrorService) {
    }

    addItem(category5_item: Category5_item) {
        const body = JSON.stringify(category5_item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/category5_item' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const category5_item = new Category5_item(
                    result.obj.content,
                    result.obj.category,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.category5_items.push(category5_item);
                return category5_item;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getItems() {
        return this.http.get('http://localhost:3000/category5_item')
            .map((response: Response) => {
                const category5_items = response.json().obj;
                let transformedItems: Category5_item[] = [];
                for (let category5_item of category5_items) {
                    transformedItems.push(new Category5_item(
                        category5_item.content,
                        category5_item.category,
                        category5_item.user.firstName,
                        category5_item._id,
                        category5_item.user._id)
                    );
                }
                this.category5_items = transformedItems;
                return transformedItems;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editItem(category5_item: Category5_item) {
        this.itemIsEdit.emit(category5_item);
    }

    updateItem(category5_item: Category5_item) {
        const body = JSON.stringify(category5_item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/category5_item/' + category5_item.itemId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteItem(category5_item: Category5_item) {
        this.category5_items.splice(this.category5_items.indexOf(category5_item), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/category5_item/' + category5_item.itemId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}