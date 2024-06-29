export class MoneyKeeper {
    constructor() {
        this.#div_container_balanse = document.createElement("div");
        this.#div_container_balanse.classList.add("container");

        this.#div_balanse = document.createElement("div");
        this.#div_balanse.classList.add("balanse");

        this.#user = new User(9345987);
        //this.#model.set totalBalanse();
    }

    show() {
        this.#addBalanseBlock(this.#user.totalBalanse);
    }

    #div_container_balanse;
    #div_balanse;
    #user;

    #addBalanseBlock(currentbalanse) {
        this.#div_balanse.innerHTML = `
           <h2>Your Balanse</h2>
           <h1>${currentbalanse}</h1>
        `;
        this.#div_container_balanse.appendChild(this.#div_balanse);
        document.querySelector("#app").appendChild(this.#div_container_balanse);
    }
}

class User {
    #totalBalanse;

    constructor(initBalanse) {
        this.#totalBalanse = initBalanse;
    }

    get totalBalanse() {
        return this.#totalBalanse;
    }

    set totalBalanse(newBalanse) {
        this.#totalBalanse = newBalanse;
    }
}
