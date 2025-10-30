export const UI = {
    status: null,
    sizes:null, 
    table:null,
    cell: null,
    aux: null,

    init(config) {
        UI.status = config.status,
        UI.sizes = config.status,
        UI.table = config.status
        UI.cell = config.cell
    },

    setStatus(message) {
        UI.status.innerHTML = message
    },

    duplicate () {
        for (let i = 0; i < 30; i++) {
            UI.aux = UI.cell.cloneNode(true);
            console.log(UI.aux)
            UI.table.appendChild(UI.aux);
            console.log(UI.table)
        }
    }
}