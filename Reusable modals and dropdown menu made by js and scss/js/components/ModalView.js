import { App } from "../views/App.js";
class ModalView extends App {
    modals;
    constructor() {
        super();
        this.element = document.querySelector("main");
        this.modals = document.querySelector(".modals");
    }
    generateModal() {
    }
    openModal(id) {
        const markup = /*html*/ `
        <div class="modalBackdrop">
          <div class="modal">
            <h3>Title ${id}</h3>
            <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio vero rerum dolor nam quidem velit aperiam nobis inventore itaque, recusandae incidunt quod deserunt, placeat eum repudiandae voluptatum. Nesciunt, molestias ducimus!
            </p>
          <div>
        </div>
        `;
        this.modals?.insertAdjacentHTML("beforeend", markup);
    }
    closeModal() {
        document.querySelector(".modals")?.removeChild(document.querySelector(".modals")?.lastChild);
    }
}
export default new ModalView();
