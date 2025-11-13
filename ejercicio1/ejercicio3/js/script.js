import { UI } from "./UI.js"
import { TimeHandler } from "./TimeHandler.js"

UI.init({
    container:"container",
    box:"box",
});

TimeHandler.timeAdder(UI, 10, 3000);