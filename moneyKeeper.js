export class MoneyKeeper {
    constructor() {
        this.#div_container_balanse = document.createElement("div");
        this.#div_container_balanse.classList.add("container");

        this.#div_balanse = document.createElement("div");
        this.#div_balanse.classList.add("balanse");
    }

    show() {
        this.#addBalanseBlock(1234876);
    }

    #div_container_balanse;
    #div_balanse;

    #addBalanseBlock(currentbalanse) {
        this.#div_balanse.innerHTML = `
           <h2>Your Balanse</h2>
           <h1>${currentbalanse}</h1>
        `;
        this.#div_container_balanse.appendChild(this.#div_balanse);
        document.querySelector("#app").appendChild(this.#div_container_balanse);
    }
}
