export const UI = {
    listButtons : [],
    list: [],
    busy: false,

    init(configButtons) {
        UI.listButtons = configButtons
    },

    setList: (list) => {
        UI.list = list;
    },

    isBusy: ()=> {
        return UI.busy;
    },

    nextElement: () => {
        if (UI.list.length > 0) {
            UI.busy = true;
            UI.changeOn(UI.listButtons[UI.list.shift()]);
        } else UI.busy = false;
    },

    changeOff(element) {
        setTimeout(() => {
            document.getElementById(element.id).style.backgroundColor = element.colorOff;
            UI.nextElement();
        }, 1000);
    },
    
    changeOn(element) {
        setTimeout(() => {
            document.getElementById(element.id).style.backgroundColor = element.colorOn;
            UI.changeOff(element);
        }, 1000);
    }
}