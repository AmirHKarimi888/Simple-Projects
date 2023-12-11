const navmenuItems = [
    { id: 1, title: "Home", name: "Home" },
    { id: 2, title: "Modal1", name: "Modal1" },
    { id: 3, title: "Dropdown1", name: "Dropdown1", options: [
            { id: "3-1", title: "Option 1" },
            { id: "3-2", title: "Option 2" },
            { id: "3-3", title: "Option 3" },
            { id: "3-4", title: "Option 4", options: [
                    { id: "3-4-1", title: "Option 1" },
                    { id: "3-4-2", title: "Option 2" },
                    { id: "3-4-3", title: "Option 3" },
                    { id: "3-4-4", title: "Option 4" }
                ] }
        ] },
    { id: 4, title: "Modal2", name: "Modal2" }
];
export const state = {
    navmenuItems: navmenuItems,
    selectedModal: 0
};
