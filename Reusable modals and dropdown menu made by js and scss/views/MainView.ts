import { App } from "./App.js";

class MainView extends App {
    constructor() {
        super();

        this.element = document.querySelector("main") as Element;
    }

    render() {
        this.generateMarkup();
    }

    clear() {
        this.element.innerHTML = "";
    }

    eventHandler() {

    }

    generateMarkup() {

        const markup = /*html*/`
        <div class="modals">
        </div>
        `

        //this.element.insertAdjacentHTML("afterbegin", markup);
    }
}

export default new MainView();