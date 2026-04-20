import clasificarTriangulos from './main.js';

describe("Clasificación de triángulos", () => {

// Validos

  test("equilatero", () => {
    // Arrange
    const a = 5, b = 5, c = 5;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Triángulo equilátero");
  });

  test("isosceles_1", () => {
    // Arrange
    const a = 5, b = 5, c = 3;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Triángulo isósceles");
  });

  test("isosceles_2", () => {
    // Arrange
    const a = 5, b = 3, c = 5;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Triángulo isósceles");
  });

  test("isosceles_3", () => {
    // Arrange
    const a = 3, b = 5, c = 5;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Triángulo isósceles");
  });

  test("escaleno", () => {
    // Arrange
    const a = 4, b = 5, c = 6;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Triángulo escaleno");
  });

// Invalidos
  test("error_cero", () => {
    // Arrange
    const a = 0, b = 5, c = 5;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Error: Los lados deben ser mayores a 0");
  });

  test("error_negativo", () => {
    // Arrange
    const a = -1, b = 5, c = 5;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Error: Los lados deben ser mayores a 0");
  });

  test("error_no_triangulo_igual", () => {
    // Arrange
    const a = 1, b = 2, c = 3;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Error: Los lados no forman un triángulo");
  });

  test("error_no_triangulo_mayor", () => {
    // Arrange
    const a = 1, b = 2, c = 4;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Error: Los lados no forman un triángulo");
  });

  test("error_parametros", () => {
    // Arrange
    const a = 1, b = 2;

    // Act
    const resultado = clasificarTriangulos(a, b);

    // Assert
    expect(resultado).toBe("Error: Deben proporcionar 3 lados");
  });

  test("error_tipo", () => {
    // Arrange
    const a = "a", b = 2, c = 3;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Error: Los lados deben ser números");
  });

// Condiciones de Borde

  test("borde_casi_equilatero", () => {
    // Arrange
    const a = 5, b = 5, c = 4;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Triángulo isósceles");
  });

  test("borde_casi_isosceles", () => {
    // Arrange
    const a = 5, b = 6, c = 7;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Triángulo escaleno");
  });

  test("borde_pequeno", () => {
    // Arrange
    const a = 1, b = 1, c = 1;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Triángulo equilátero");
  });

  test("borde_grande", () => {
    // Arrange
    const a = 1000000, b = 1000000, c = 1000000;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Triángulo equilátero");
  });

  test("borde_mixto", () => {
    // Arrange
    const a = 1000000, b = 999999, c = 2;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Triángulo escaleno");
  });

  test("borde_igual_suma", () => {
    // Arrange
    const a = 5, b = 3, c = 8;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Error: Los lados no forman un triángulo");
  });

  test("borde_apenas_valido", () => {
    // Arrange
    const a = 5, b = 3, c = 7;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Triángulo escaleno");
  });

  test("borde_apenas_invalido", () => {
    // Arrange
    const a = 5, b = 3, c = 9;

    // Act
    const resultado = clasificarTriangulos(a, b, c);

    // Assert
    expect(resultado).toBe("Error: Los lados no forman un triángulo");
  });

});