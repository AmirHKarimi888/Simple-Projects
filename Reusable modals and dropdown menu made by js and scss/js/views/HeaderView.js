import ModalView from "../components/ModalView.js";
import { state } from "../model.js";
import { App } from "./App.js";
class HeaderView extends App {
    navmenu;
    constructor() {
        super();
        this.element = document.querySelector("header");
        this.navmenu = this.element.querySelector(".header__navmenu");
    }
    render() {
        this.updateNavmenu();
        this.eventHandler();
    }
    eventHandler() {
        this.navmenu.querySelectorAll(".header__navmenuItem")?.forEach((el) => {
            el.addEventListener("click", (event) => {
                if (el.classList[el.classList.length - 1].includes("Modal")) {
                    let id = el.classList[el.classList.length - 1].slice(el.classList[el.classList.length - 1].length - 1);
                    ModalView.openModal(id);
                    document.querySelector(".modalBackdrop")?.addEventListener("click", ModalView.closeModal);
                    document.querySelector(".modal")?.addEventListener("click", (event) => event.stopPropagation());
                }
                else if (el.classList.contains("Dropdown1")) {
                    let id = el.id.slice(el.id.length - 1);
                    const dropdownEl = this.navmenu.querySelector(`.dropdown${id}`);
                    dropdownEl?.classList.add("dropdownActive");
                    event.stopPropagation();
                }
            });
        });
        this.navmenu.querySelectorAll(".header__navmenuItemOptionsItem")?.forEach((el) => {
            el.addEventListener("mouseenter", (event) => {
                let id = el.id.slice(el.id.length - 3, el.id.length);
                const dropdownEl = this.navmenu.querySelector(`.dropdown${id}`);
                dropdownEl?.classList.add("dropdownActive");
                event.stopPropagation();
            });
            el.addEventListener("mouseleave", () => {
                let id = el.id.slice(el.id.length - 3, el.id.length);
                const dropdownEl = this.navmenu.querySelector(`.dropdown${id}`);
                dropdownEl?.classList.remove("dropdownActive");
            });
        });
        document.querySelector("html")?.addEventListener("click", () => {
            const dropdownEl = this.navmenu.querySelector(`.header__navmenuItemOptions`);
            dropdownEl?.classList.remove("dropdownActive");
        });
    }
    updateNavmenu() {
        this.clearNavmenu();
        const markup = /*html*/ `
        ${state.navmenuItems.map((item) => {
            return ( /*html*/`
                <li class="header__navmenuItem ${item?.name}" id="navmenuItem${item?.id}">
                  ${item?.title}
                  ${item?.options ? /*html*/ `
                    <ul class="header__navmenuItemOptions dropdown${item?.id}">
                        ${item?.options.map((innerItem) => {
                return ( /*html*/`
                              <li class="header__navmenuItemOptionsItem" id="navmenuItem${innerItem?.id}">
                              ${innerItem?.title}

                              ${innerItem?.options ? /*html*/ `
                              <ul class="header__navmenuItemOptionsItemOptions dropdown${innerItem?.id}">
                              ${innerItem?.options?.map((innerInnerItem) => {
                    return ( /*html*/`
                                    <li class="header__navmenuItemOptionsItemOptionsItem">
                                     ${innerInnerItem?.title}
                                    </li>
                                    `);
                })
                    .join("")}
                              </ul>
                              ` : ''}
                              </li>
                            `);
            })
                .join("")}
                    </ul>
                  ` : ''}
                </li>
                `);
        })
            .join("")}
        `;
        this.navmenu.insertAdjacentHTML("afterbegin", markup);
    }
    clearNavmenu() {
        this.navmenu.innerHTML = "";
    }
}
export default new HeaderView();
