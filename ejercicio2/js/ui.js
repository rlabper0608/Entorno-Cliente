export const UI = {
    status: null,
    sizes:null, 
    table:null,

    init(config) {
        UI.status = config.status,
        UI.sizes = config.status,
        UI.table = config.status
    },

    setStatus(message) {
        UI.status.innerHTML = message
    }
}