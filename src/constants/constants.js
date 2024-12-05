export const antennas = [
  {
    id: 1,
    name: "Antena Ubiquiti Litebeam",
    brand: "Ubiquiti",
    model: "LiteBeam LBE-5AC-Gen2",
    description:
      "Conectividad de larga distancia y utiliza un patrón de antena direccional para mejorar la inmunidad del ruido.",
    frequencyOne: "5",
    antennaType: "Antena Direccional",
    antennaGain: 23,
    price: "$149.324",
  },
  {
    id: 2,
    name: "Antena Ubiquiti Airmax AMO-5G13",
    brand: "Ubiquiti",
    model: "Airmax Antena Amo-5g13 ",
    description: "",
    frequencyOne: "5",
    antennaType: "Antena Omnidireccional",
    description:
      "Ideal para redes inalámbricas en entornos que requieren cobertura en 360 grados en la banda de 5 GHz.",
    antennaGain: 13,
    price: "$464.883",
  },
  {
    id: 3,
    name: "Tupavco TP542 Dual-Band",
    brand: "Tupavco",
    model: "TP542",
    description: "",
    frequencyOne: "2.4",
    frequencyTwo: "5",
    antennaType: "Antena Direccional",
    description:
      "Ideal para quienes necesitan un rango confiable y una conexión estable en aplicaciones al aire libre con enfoque direccional.",
    antennaGain: 13,
    price: "$39.950",
  },
];

export const routers = [
  {
    id: 1,
    name: "Mercusys MR70X",
    brand: "Mercusys",
    model: "MR70X",
    functions: "Router, ap",
    frequencyOne: "2.4",
    frequencyTwo: "5",
    description:
      "Ofrece velocidades totales de hasta 1800 Mbps, con 1201 Mbps en 5 GHz y 574 Mbps en 2.4 GHz. Juega en línea, mira vídeos en 4K y maximiza todo al máximo sin retrasos.",
    internalAntennas: 0,
    externalAntennas: 4,
    price: "$62.041",
    powerOne: 30,
    velocidad: "1800 Mbps"
  },
  {
    id: 2,
    name: "Tp-Link Archer AX55 Pro",
    brand: "TP-Link",
    model: "Archer AX55 Pro",
    functions: "Router, WMM",
    frequencyOne: "2.4",
    frequencyTwo: "5",
    description:
      "Disfrute de funciones de seguridad avanzadas que brindan un entorno seguro que protege los datos y de la red.",
    internalAntennas: 0,
    externalAntennas: 4,
    price: "$129.990",
    powerOne: 20,
    velocidad: "3000 Mbps"
  },
  {
    id: 3,
    name: "Tenda N300 4G03",
    brand: "Tenda",
    model: "4G03",
    functions: "4G, Inalambrico, Wifi",
    frequencyOne: "2.4",
    description:
      "Brinda a los dispositivos la capacidad de acceder a Internet donde y cuando sea que se encuentre el usuario.",
    internalAntennas: 4,
    externalAntennas: 0,
    price: "$64.890",
    powerOne: 20,
    velocidad: "300 Mbps"

  },
];

export const defaultValues = {
  cableValue: "",
  distanceValue: "",
  potenceAntennaOne: "",
  equipmentValue: "",
  cableLarge: "",
  antennaGainA: "",
  antennaGainB: "",
};

export const devices = {
  Celular: -85, // Sensibilidad promedio de celular en dBm
  Computadora: -90, // Sensibilidad promedio de computadora en dBm
};
