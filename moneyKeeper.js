export class MoneyKeeper {
    constructor(language) {
        this.language = this.#checkLanguage(language);

        this.#div_container_balanse = document.createElement("div");
        this.#div_container_balanse.classList.add("container");

        this.#div_balanse = document.createElement("div");
        this.#div_balanse.classList.add("balanse");

        this.#user = new User(1403537);
    }

    show() {
        this.#addBalanseBlock(this.#user.totalBalanse);
    }

    language;

    #div_container_balanse;
    #div_balanse;
    #user;

    #addBalanseBlock(currentbalanse) {
        const header = ["Ваш баланс", "Your Balanse"];
        this.#div_balanse.innerHTML = `
           <h2>${header[this.language]}</h2>
           <h1>${currentbalanse}</h1>
        `;
        this.#div_container_balanse.appendChild(this.#div_balanse);
        document.querySelector("#app").appendChild(this.#div_container_balanse);
    }

    #checkLanguage(language) {
        switch (language.toLowerCase()) {
            case "ua":
                return 0;
            case "en":
                return 1;
            default:
                return 1;
        }
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
