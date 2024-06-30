export class MoneyKeeper {
    constructor(language) {
        this.language = this.#checkLanguage(language);

        this.#div_container_balanse = document.createElement("div");
        this.#div_container_balanse.classList.add("container");

        this.#div_balanse = document.createElement("div");
        this.#div_balanse.classList.add("balanse");

        this.#income_extensive_date = document.createElement("div");
        this.#income_extensive_date.classList.add("income-extensive-date");

        this.#user = new User(1403537);
    }

    show() {
        this.#addBalanseBlock(this.#user.totalBalanse);
        this.#addIncomeExtensive();
        this.#addButtonSelectDay();
        this.#addButtonSelectWeek();
        this.#addButtonSelectMonth();
    }

    language;

    #div_container_balanse;
    #div_balanse;
    #income_extensive_date;
    #user;

    #btnSelectDay;
    #btnSelectWeek;
    #btnSelectMonth;

    #addBalanseBlock(currentbalanse) {
        const header = ["Ваш баланс", "Your Balanse"];
        this.#div_balanse.innerHTML = `
           <h1>${header[this.language]}</h1>
           <h2>${currentbalanse}</h2>
           <svg class="svg-icon">
                <use href="./public/symbol.svg#icon-ukraine-hryvna-svgrepo-com"></use>
            </svg>
        `;
        this.#div_container_balanse.appendChild(this.#div_balanse);
        document.querySelector("#app").appendChild(this.#div_container_balanse);
    }

    #addIncomeExtensive() {
        this.#income_extensive_date.innerHTML = `
        <div class="income-extensive">
            <div>
                <h3>Income</h3>
                <p id="money-plus" class="money plus">
                    +10 000
                </p>
                <svg class="svg-icon">
                    <use href="./public/symbol.svg#icon-ukraine-hryvna-svgrepo-com"></use>
                </svg>
            </div>
            <div>
                <h3>Expense</h3>
                <p id="money-minus" class="money minus">
                    -2 390
                </p>
                <svg class="svg-icon">
                    <use href="./public/symbol.svg#icon-ukraine-hryvna-svgrepo-com"></use>
                </svg>
            </div>
        </div>
        `;
        this.#div_container_balanse.appendChild(this.#income_extensive_date);
    }

    #addButtonSelectDay() {
        this.#btnSelectDay = document.createElement("button"); //class="btn-select-date date-selected"
        this.#btnSelectDay.classList.add("btn-select-date", "date-selected");
        this.#btnSelectDay.innerHTML = "Day";
        this.#income_extensive_date.appendChild(this.#btnSelectDay);
    }

    #addButtonSelectWeek() {
        this.#btnSelectWeek = document.createElement("button"); //class="btn-select-date date-selected"
        this.#btnSelectWeek.classList.add("btn-select-date");
        this.#btnSelectWeek.innerHTML = "Week";
        this.#income_extensive_date.appendChild(this.#btnSelectWeek);
    }

    #addButtonSelectMonth() {
        this.#btnSelectMonth = document.createElement("button"); //class="btn-select-date date-selected"
        this.#btnSelectMonth.classList.add("btn-select-date");
        this.#btnSelectMonth.innerHTML = "Month";
        this.#income_extensive_date.appendChild(this.#btnSelectMonth);
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
