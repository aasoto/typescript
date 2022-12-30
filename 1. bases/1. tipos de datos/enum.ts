(()=>{
  /**
   * El enum sirve para tener escalas con valores predeterminados, igual estospueden ser modificados
   */

  //enum por defecto
  enum EscalaNumerica {
    min,
    medium,
    maximum
  }

  const valor:number = EscalaNumerica.medium

  console.log(valor)
  console.log(EscalaNumerica)

  //enum modificado
  enum EscalaCalificaciones {
    deficiente = 0,
    insuficiente = 2,
    aceptable = 6,
    sobresaliente = 8,
    excelente = 9
  }

  const nota:number = EscalaCalificaciones.sobresaliente

  console.log(nota)
  console.log(EscalaCalificaciones)

  //cuando no se colocan valores en las variables estan toman la unidad siguiente a la variable anterior
  enum enumeracion {
    a=10,
    b,
    c=9,
    d
  }

  console.log(enumeracion.d)
  console.log(enumeracion)
})()