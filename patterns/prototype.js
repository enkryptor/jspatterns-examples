
// вместо
const newArticle = Article.createFromArticle(article);
// можем написать так
const newArticle2 = anotherArticle.clone();







class StorageNode {
    clone() {
        const storage =  new StorageNode();
        storage.type = this.type;
        storage.limit = 0;

        return storage;
    }
}

new StorageNode().clone();
