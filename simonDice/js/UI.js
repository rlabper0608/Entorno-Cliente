export const UI = {
	control: {
		red: null,
		green: null,
		blue: null,
		yellow: null,
	},

    init: (domControl) => {
        UI.control.red = document.getElementById(domControl.red);
        UI.control.green = document.getElementById(domControl.green);
        UI.control.blue = document.getElementById(domControl.blue);
        UI.control.yellow = document.getElementById(domControl.yellow);
    },
};
