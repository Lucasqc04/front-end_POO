export class GuiController{

    #btnToggleDrawer;
    #menuDrawer;

    constructor(){

this.#btnToggleDrawer = document.getElementById("BtnToggleDrawer")
    this.#menuDrawer = document.getElementById("menuDrawer")


    this.#btnToggleDrawer.addEventListener("click", () =>{

 

       if( this.#menuDrawer = document.getElementById("menuDrawer").style.display === "block" ){

        this.#menuDrawer = document.getElementById("menuDrawer").style.display = "none" ;
 

       }else{
 
        this.#menuDrawer = document.getElementById("menuDrawer").style.display = "block" ;
       }


})   



    }


}
