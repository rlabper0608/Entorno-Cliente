export const UI = {
    container:null,
    box:null,
    init: (config) => {
        UI.container = document.getElementById(config.container);
        UI.box = document.getElementById(config.box);
        console.log(UI.box);
    },
    add:() => {
        const clon = UI.box.content.cloneNode(true);
        UI.box.appendChild(clon);
        console.log(UI.container)
    }, 
    clear:() => {

    }
}