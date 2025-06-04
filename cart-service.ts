export class CartSerice {
    public valor: number;

    constructor(valorInicial: number = 0) {
        this.valor = valorInicial;
    }

    // Obtener el valor actual del contador
    public obtenerValor(): number {
        return this.valor;
    }

    // Aumentar el contador en 1 (o por una cantidad específica)
    public aumentar(cantidad: number = 2): void {
        this.valor += cantidad;
    }

    // Disminuir el contador en 1 (o por una cantidad específica)
    public disminuir(cantidad: number = 1): void {
        this.valor -= cantidad;
    }

    // Reiniciar el contador al valor inicial
    public reiniciar(): void {
        this.valor = 0;
    }
}

