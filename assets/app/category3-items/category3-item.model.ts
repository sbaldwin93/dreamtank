export class Category3_item {
    content: string;
    category: string;
    username: string;
    itemId?: string;
    userId?: string;

    constructor(content: string, category: string, username: string, itemId?: string, userId?: string) {
        this.content = content;
        this.category = category;
        this.username = username;
        this.itemId = itemId;
        this.userId = userId;
    }
}