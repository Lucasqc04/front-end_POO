import { GuiController } from "./GuiController.js";
import { AppController } from "./AppController.js";

let appinstance = new AppController();


 appinstance.setGuiController(new GuiController())


export { appinstance };
