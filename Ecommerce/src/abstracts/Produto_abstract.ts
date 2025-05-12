abstract class Produto {
  protected nome: string;
  protected valor: number;
  static preco_km: number = 2.0;

  constructor(nome: string, valor: number) {
    if (valor < 0) {
      throw new Error("O valor deve ser maior ou igual a zero.");
    }
    this.nome = nome;
    this.valor = valor;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getValor(): number {
    return this.valor;
  }

  public setValor(valor: number): void {
    if (valor < 0) {
      throw new Error("O valor deve ser maior ou igual a zero.");
    }
    this.valor = valor;
  }

  public static calcularFrete(distanciaKm: number): number {
    return Produto.preco_km * distanciaKm;
  }

  public calcularTotal(distanciaKm: number): number {
    return this.calcularPreco() + Produto.calcularFrete(distanciaKm);
  }

  public abstract calcularPreco(): number;
}

export default Produto;
