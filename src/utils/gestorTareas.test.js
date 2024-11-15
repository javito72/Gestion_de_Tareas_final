// src/utils/gestorTareas.test.js

const { calcularPrioridad } = require('./gestorTareas');

describe('Función calcularPrioridad', () => {
  test('Debe devolver "Baja" si la tarea está completada', () => {
    const resultado = calcularPrioridad('Completada', '2024-10-01');
    expect(resultado).toBe('Baja');
  });

  test('Debe devolver "Alta" si la tarea está vencida', () => {
    const resultado = calcularPrioridad('Pendiente', '2022-10-01');
    expect(resultado).toBe('Alta');
  });

  test('Debe devolver "Media" si la tarea está pendiente y la fecha no ha pasado', () => {
    const fechaFutura = new Date();
    fechaFutura.setDate(fechaFutura.getDate() + 7); // 7 días en el futuro
    const resultado = calcularPrioridad('Pendiente', fechaFutura.toISOString().split('T')[0]);
    expect(resultado).toBe('Media');
  });
});
