// src/utils/gestorTareas.js

function calcularPrioridad(estado, fechaVencimiento) {
    const hoy = new Date();
    const fechaTarea = new Date(fechaVencimiento);
  
    if (estado === 'Completada') {
      return 'Baja';
    } else if (fechaTarea < hoy) {
      return 'Alta';
    } else {
      return 'Media';
    }
  }
  
  module.exports = { calcularPrioridad };
  