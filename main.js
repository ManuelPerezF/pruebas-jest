export default function clasificarTriangulos(a, b, c) {
    // Validaciones
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Error: Los lados deben ser mayores a 0";
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Error: Los lados no forman un triángulo";
    }
    if (arguments.length !== 3) {
        return "Error: Deben proporcionar 3 lados";
    }
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return "Error: Los lados deben ser números";
    }

    // Clasificación
    if (a === b && b === c) {
        return "Triángulo equilátero";
    } else if (a === b || b === c || a === c) {
        return "Triángulo isósceles";
    } else {
        return "Triángulo escaleno";
    }
}
