
// на примере http-client-factory
const promise = HttpClientFactory.getClient(options).get(url);


// Функция, создающая элемент `<li>`
const createListItem = (text) => {
    const li = document.createElement("li");
    li.innerText = text;
    return li;
};

// далее передаём её как значение
const elements = items.map(createListItem);
