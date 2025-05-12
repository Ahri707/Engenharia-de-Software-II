import Informatica from "./produtos/Informatica";
import Vestuario from "./produtos/Vestuario";

class App {
  constructor() {
    this.init();
  }

  init() {
    const camisa = new Vestuario("Camisa", 50, 10);
    const mouse = new Informatica("Mouse", 100, "vista");
    console.log(`Nome do produto Vestuario: ${camisa.getNome()}, Preço total: ${camisa.calcularTotal(15)}`);
    console.log(`Nome do produto Informatica: ${mouse.getNome()}, Preço total: ${mouse.calcularTotal(15)}`);
  }
}

const app = new App();