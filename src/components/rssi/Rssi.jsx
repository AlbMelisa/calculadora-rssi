import React from 'react'

const Rssi = () => {
  const steps = [
    {
      title: "Ir a la sección Routers",
      description: "Asegurate de estar en el lugar correcto de la página.",
    },
    {
      title: "Seleccionar router",
      description: "Asegúrate de seleccionar el router que deseas, puedes consultar las especificaciones del producto para estar mas seguro.",
    },
    {
      title: "Calcular RSSI",
      description: "Haz clic en el botón 'RSSI' para comenzar a medir la intensidad de la señal RSSI.",
    },
    {
      title: "Completar campos",
      description: "Asegurate de completar de manera correcta los campos.",
    },
    {
      title: "Calculo",
      description: "Para seleccionar",
    },
  ]

  return (
    <div className="container mx-auto p-4" id='use'>
    <h1 className="text-3xl font-bold text-center mb-8">Modo de uso</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                {index + 1}
              </span>
              {step.title}
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <div>{step.description}</div>
            <div className="mt-4 flex justify-center">
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Rssi