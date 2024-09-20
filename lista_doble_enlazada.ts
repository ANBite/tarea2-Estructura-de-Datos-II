// Clase Nodo
class Nodo<T> {
    valor: T;             // Valor que almacena el nodo
    siguiente: Nodo<T> | null;  // Referencia al siguiente nodo
    anterior: Nodo<T> | null;   // Referencia al nodo anterior

    constructor(valor: T) {
        this.valor = valor;
        this.siguiente = null;
        this.anterior = null;
    }
}

// Clase Lista Doblemente Enlazada
class ListaDoblementeEnlazada<T> {
    cabeza: Nodo<T> | null;  // Primer nodo de la lista
    cola: Nodo<T> | null;    // Último nodo de la lista
    longitud: number;        // Número de nodos en la lista

    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.longitud = 0;
    }

    // Método para agregar un nodo al final de la lista
    agregarAlFinal(valor: T): void {
        const nuevoNodo = new Nodo(valor);

        if (!this.cabeza) {
            // Si la lista está vacía
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            // Agregar el nodo al final
            if (this.cola) {
                this.cola.siguiente = nuevoNodo;
                nuevoNodo.anterior = this.cola;
                this.cola = nuevoNodo;
            }
        }

        this.longitud++;
    }

    // Método para agregar un nodo al principio de la lista
    agregarAlInicio(valor: T): void {
        const nuevoNodo = new Nodo(valor);

        if (!this.cabeza) {
            // Si la lista está vacía
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            // Agregar el nodo al principio
            nuevoNodo.siguiente = this.cabeza;
            this.cabeza.anterior = nuevoNodo;
            this.cabeza = nuevoNodo;
        }

        this.longitud++;
    }

    // Método para eliminar el último nodo de la lista
    eliminarUltimo(): T | null {
        if (!this.cola) return null;  // Si la lista está vacía

        const valorEliminado = this.cola.valor;

        if (this.cabeza === this.cola) {
            // Si solo hay un nodo en la lista
            this.cabeza = null;
            this.cola = null;
        } else {
            // Actualizar la cola
            this.cola = this.cola.anterior;
            if (this.cola) this.cola.siguiente = null;
        }

        this.longitud--;
        return valorEliminado;
    }

    // Método para eliminar el primer nodo de la lista
    eliminarPrimero(): T | null {
        if (!this.cabeza) return null;  // Si la lista está vacía

        const valorEliminado = this.cabeza.valor;

        if (this.cabeza === this.cola) {
            // Si solo hay un nodo en la lista
            this.cabeza = null;
            this.cola = null;
        } else {
            // Actualizar la cabeza
            this.cabeza = this.cabeza.siguiente;
            if (this.cabeza) this.cabeza.anterior = null;
        }

        this.longitud--;
        return valorEliminado;
    }

    // Método para mostrar los valores de la lista de inicio a fin
    mostrarAdelante(): void {
        let actual = this.cabeza;
        const valores: T[] = [];

        while (actual) {
            valores.push(actual.valor);
            actual = actual.siguiente;
        }

        console.log("Lista adelante:", valores.join(" <-> "));
    }

    // Método para mostrar los valores de la lista de fin a inicio
    mostrarAtras(): void {
        let actual = this.cola;
        const valores: T[] = [];

        while (actual) {
            valores.push(actual.valor);
            actual = actual.anterior;
        }

        console.log("Lista atrás:", valores.join(" <-> "));
    }

    //Método para imprimir números pares
    imprimirSoloPares(): void {
        let actual = this.cabeza;
        const valores: T[] = [];

        while (actual) {
            // Solo agregamos números pares
            if (typeof actual.valor === "number" && actual.valor % 2 === 0) {
                valores.push(actual.valor);
            }
            actual = actual.siguiente;
        }

        console.log("Lista de números pares:", valores.join(" <-> "));
    }

    // Método para verificar si la lista está vacía
    estaVacia(): boolean {
        return this.longitud === 0;
    }
}

// Ejemplo de uso:
const lista = new ListaDoblementeEnlazada<number>();

lista.agregarAlFinal(1);
lista.agregarAlFinal(2);
lista.agregarAlInicio(0);
lista.mostrarAdelante();  
lista.mostrarAtras();   

lista.imprimirSoloPares();

lista.eliminarUltimo();
lista.mostrarAdelante(); 

lista.eliminarPrimero();
lista.mostrarAdelante();  