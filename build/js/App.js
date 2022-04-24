class TabManager{
    constructor() {
        this.current_tab = null;

        this.list_menu = null;
        this.list_tab = null;

        this.init();
    }
    init(){
        this.list_menu = [...document.querySelectorAll(".header__nav__item")].map(item=>({elem:item, tab:item.dataset.tab}));

        this.list_tab = [...document.querySelectorAll(".tab")]
            .map(item=>({elem:item, tab:item.dataset.tab}));

        for (const btn  of this.list_menu) {
            btn.elem.addEventListener("click", ()=>{this.changeTab(btn.tab)})
        }
        console.log(this.list_menu);
        console.log(this.list_tab);

    }

    changeTab(tab){
        if(this.current_tab!=null)
            this.current_tab.classList.remove("active");
        this.current_tab = this.list_tab.find(item=>{
            console.log(item.tab, tab)
            return item.tab===tab;
        }).elem;

        this.current_tab.classList.add("active");
    }

}
class App {
    constructor() {
        this.init();
    }

    init() {
        new TabManager();
    }
}
new App();