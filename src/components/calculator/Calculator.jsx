// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import InputField from "../inputField/InputField";
// import "../calculator/calculator.css";
// import { Button } from "react-bootstrap";
// import calculator from "../../assets/calculator-22.png";
// import { useEffect } from "react";

// const defaultValues = {
//   cableValue: "",
//   distanceValue: "",
//   potenceAntennaOne: "",
//   equipmentValue: "",
//   cableLarge: "",
//   antennaGainA: "",
//   antennaGainB: "",
// };

// const devices = {
//   Celular: -85, // Sensibilidad promedio de celular en dBm
//   Computadora: -90, // Sensibilidad promedio de computadora en dBm
// };

// const antennas = [
//   {
//     id: 1,
//     name: "Antena Ubiquiti Litebeam",
//     brand: "Ubiquiti",
//     model: "LiteBeam LBE-5AC-Gen2",
//     description:
//       "Conectividad de larga distancia y utiliza un patrón de antena direccional para mejorar la inmunidad del ruido.",
//     frequencyOne: "5",
//     antennaType: "Antena Direccional",
//     antennaGain: 23,
//     price: "$149.324",
//   },
//   {
//     id: 2,
//     name: "Antena Ubiquiti Airmax AMO-5G13",
//     brand: "Ubiquiti",
//     model: "Airmax Antena Amo-5g13 ",
//     description: "",
//     frequencyOne: "5",
//     antennaType: "Antena Omnidireccional",
//     description:
//       "Ideal para redes inalámbricas en entornos que requieren cobertura en 360 grados en la banda de 5 GHz.",
//     antennaGain: 13,
//     price: "$464.883",
//   },
//   {
//     id: 3,
//     name: "Tupavco TP542 Dual-Band",
//     brand: "Tupavco",
//     model: "TP542",
//     description: "",
//     frequencyOne: "2.4",
//     frequencyTwo: "5",
//     antennaType: "Antena Direccional",
//     description:
//       "Ideal para quienes necesitan un rango confiable y una conexión estable en aplicaciones al aire libre con enfoque direccional.",
//     antennaGain: 13,
//     price: "$39.950",
//   },
// ];

// const routers = [
//   {
//     id: 1,
//     name: "Mercusys MR70X",
//     brand: "Mercusys",
//     model: "MR70X",
//     functions: "Router, ap",
//     frequencyOne: "2.4",
//     frequencyTwo: "5",
//     description:
//       "Ofrece velocidades totales de hasta 1800 Mbps, con 1201 Mbps en 5 GHz y 574 Mbps en 2.4 GHz. Juega en línea, mira vídeos en 4K y maximiza todo al máximo sin retrasos.",
//     internalAntennas: 0,
//     externalAntennas: 4,
//     price: "$62.041",
//     powerOne: 30,
//   },
//   {
//     id: 2,
//     name: "Tp-Link Archer AX55 Pro",
//     brand: "TP-Link",
//     model: "Archer AX55 Pro",
//     functions: "Router, WMM",
//     frequencyOne: "2.4",
//     frequencyTwo: "5",
//     description:
//       "Disfrute de funciones de seguridad avanzadas que brindan un entorno seguro que protege los datos y de la red.",
//     internalAntennas: 0,
//     externalAntennas: 4,
//     price: "$129.990",
//     powerOne: 20,
//   },
//   {
//     id: 3,
//     name: "Tenda N300 4G03",
//     brand: "Tenda",
//     model: "4G03",
//     functions: "4G, Inalambrico, Wifi",
//     frequencyOne: "2.4",
//     description:
//       "Brinda a los dispositivos la capacidad de acceder a Internet donde y cuando sea que se encuentre el usuario.",
//     internalAntennas: 4,
//     externalAntennas: 0,
//     price: "$64.890",
//     powerOne: 20,
//   },
// ];

// const Calculator = (values = defaultValues) => {
//   const [selectedAntenna, setSelectedAntenna] = useState(null);
//   const [selectedFrequency, setSelectedFrequency] = useState("");
//   const [rssi, setRssi] = useState(null); // Estado para el RSSI calculado
//   const [color, setColor] = useState("normal");
//   useEffect(() => {
//     if (selectedAntenna) {
//       setSelectedFrequency(selectedAntenna.frequencyOne || "");
//     }
//   }, [selectedAntenna]);

//   const handleAntennaChange = (event) => {
//     const antennaName = event.target.value;
//     console.log("antena recibida", antennaName);
//     const antenna = antennas.find((ant) => ant.name === antennaName);
//     setSelectedAntenna(antenna || null);
//     setSelectedFrequency(antenna ? antenna.frequencyOne : ""); // Actualizar frecuencia por defecto
//     console.log( "enruerneure",antenna.frequencyOne )
//   };

//   const {
//     reset,
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: values,
//     mode: "all",
//   });

//   const handleFrequencyChange = (event) => {
//     setSelectedFrequency(event.target.value); // Actualizar frecuencia seleccionada
//   };
//   (e) => setSelectedFrequency(e.target.value);
//   const calculateRssi = (data) => {
//     console.log(data);
//     const equipment = parseFloat(data.equipmentValue) || 0;
//     const cableLoss = 0.25 * parseFloat(data.cableValue) || 0; // Pérdida por cable
//     const cableLossB = 0.25 * parseFloat(data.cableLarge) || 0; // Pérdida por cable B
//     const distance = parseFloat(data.distanceValue) || 1; // Distancia
//     const frequency = parseFloat(selectedFrequency) || 2.4; // Frecuencia
//     const antennaGainA = parseFloat(data.antennaGainA) || 0;
//     const antennaGainB = parseFloat(data.antennaGainB) || 0;
//     const deviceSensitivity = parseFloat(data.deviceSensitivity);

//     const freeSpaceLoss =
//       20 * Math.log10(frequency) + 20 * Math.log10(distance) + 92.45;

//     const calculatedRssi =
//       equipment +
//       antennaGainA +
//       antennaGainB -
//       cableLoss -
//       cableLossB -
//       freeSpaceLoss;

//     console.log("Equipo (A):", equipment);
//     console.log("Pérdida por cable (B):", cableLoss);
//     console.log("Ganancia de la antena (C):", antennaGainA);
//     console.log("Distancia (D):", distance);
//     console.log("Frecuencia (E):", frequency);
//     console.log("Ganancia de la antena 2 (F):", antennaGainB);
//     console.log("Pérdida por cable (D):", cableLossB);
//     console.log("Sensibilidad del dispositivo (H):", deviceSensitivity);
//     // const freeSpaceLoss =
//     //   20 * Math.log10(frequency) + 20 * Math.log10(distance) + 92.45;

//     // console.log("freespaceloss", freeSpaceLoss);
//     // const calculatedRssi =
//     //   antennaGain - cableLoss - freeSpaceLoss + antennaGainTwo - cableLong;
//     colorRssi(calculatedRssi, deviceSensitivity);
//     setRssi(calculatedRssi.toFixed(2));
//     reset();
//   };
//   const colorRssi = (rssi, sensitivity) => {
//     // console.log(rssi)
//     // console.log(sensitivity)

//     if (Math.abs(rssi) < Math.abs(sensitivity)) {
//       if (Math.abs(rssi) < 70) {
//         setColor("green");
//       } else {
//         setColor("yellow");
//       }
//     } else {
//       setColor("red");
//     }
//   };
//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit((data) => {
//           calculateRssi(data);
//         })}
//       >
//         <div className="row g-0 p-4">
//           <div className="row g-0 color-backgraound">
//             <div className="col-md-4">
//               <label className="d-flex justify-content-center">
//                 Equipo (A)
//               </label>
//               <select className="form-select" {...register("equipmentValue")}>
//                 {routers.map((router) => (
//                   <option key={router.id} value={router.powerOne}>
//                     {router.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="col-md-4 ps-4">
//               <InputField
//                 name="cableValue"
//                 register={register}
//                 label="Largo del Cable en metros (B)"
//                 rules={{
//                   required: "Requerido",
//                   pattern: {
//                     value: /^[0-9]+(\.[0-9]+)?$/,
//                     message: "Solo números",
//                   },
//                   maxLength: {
//                     value: 4,
//                     message: "No puede ser mayor a 4 caracteres",
//                   },
//                 }}
//                 mode="last-form"
//                 errors={errors}
//               />
//             </div>
//             <div className="col-md-4 ps-4">
//               <label className="">
//                 Antena (<span className="fw-bold">C</span>)
//               </label>
//               <select
//                 className="form-select"
//                 onChange={handleAntennaChange}
//                 {...register("antennaGainA")}
//               >
//                 {antennas.map((antenna) => (
//                   <option key={antenna.id} value={antenna.antennaGain}>
//                     {antenna.name} ({antenna.antennaGain}dBi)
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div>
//             <div className="row g-0 ">
//               <div className="col-md-6 color-backgraound2">
//                 <InputField
//                   label="Distancia en km (D)"
//                   name="distanceValue"
//                   register={register}
//                   rules={{
//                     required: "Requerido",
//                     pattern: {
//                       value: /^(?!0(\.0+)?$)[0-9]+(\.[0-9]+)?$/,
//                       message: "Solo números, sin incluir al 0.",
//                     },
//                     maxLength: {
//                       value: 5,
//                       message: "No puede ser mayor a 5 caracteres",
//                     },
//                   }}
//                   errors={errors}
//                 />
//               </div>
//               <div className="col-md-6 ps-4 color-backgraound2">
//                 <label>Frecuencia en GHz (E)</label>
//                 <select
//                   className="form-select"
//                   value={selectedFrequency}
//                   onChange={(e) => {
//                     console.log(e.target.value); // Para ver el valor seleccionado
//                     setSelectedFrequency(e.target.value); // Actualiza el estado
//                   }}

//                 >
//                   <option value=""></option>
//                   {selectedAntenna && (
//                     <>
//                       <option value={selectedAntenna.frequencyOne}>
//                         {selectedAntenna.frequencyOne} GHz
//                       </option>
//                       {selectedAntenna.frequencyTwo && (
//                         <option value={selectedAntenna.frequencyTwo}>
//                           {selectedAntenna.frequencyTwo} GHz
//                         </option>
//                       )}
//                     </>
//                   )}
//                 </select>
//               </div>

//               <div className="row g-0">
//                 <div className="col-md-4 color-backgraound">
//                   <label className="">Antena (F)</label>
//                   <select className="form-select" {...register("antennaGainB")}>
//                     {antennas.map((antenna) => (
//                       <option key={antenna.name} value={antenna.antennaGain}>
//                         {antenna.name} ({antenna.antennaGain} dBi)
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="col-md-4 ps-4 color-backgraound">
//                   <InputField
//                     label="Largo del Cable en metros (G)"
//                     name="cableLarge"
//                     mode="last-form"
//                     register={register}
//                     rules={{
//                       required: "Requerido",
//                       pattern: {
//                         value: /^(?!0(\.0+)?$)[0-9]+(\.[0-9]+)?$/,
//                         message: "Solo números, sin incluir al 0.",
//                       },
//                       maxLength: {
//                         value: 5,
//                         message: "No puede ser mayor a 5 caracteres",
//                       },
//                     }}
//                     errors={errors}
//                   />
//                 </div>
//                 <div className="col-md-4 ps-4 color-backgraound">
//                   <label>Dispositivo (H)</label>
//                   <select
//                     className="form-select"
//                     {...register("deviceSensitivity")}
//                   >
//                     {Object.keys(devices).map((device) => (
//                       <option key={device} value={devices[device]}>
//                         {device} ({devices[device]} dBm)
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="d-flex  justify-content-between">
//             <div className="d-flex align-items-center">
//               <button type="submit" className="calculate-button">
//                 Calcular
//               </button>
//             </div>

//             <div>
//               <div className={`calculate-${color} mt-4`}>
//                 <h5>RSSI Calculado</h5>
//                 <p>{rssi} dBm</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Calculator;
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "../inputField/InputField";
import "../calculator/calculator.css";
import { Button } from "react-bootstrap";
import calculator from "../../assets/calculator-22.png";

const defaultValues = {
  cableValue: "",
  distanceValue: "",
  potenceAntennaOne: "",
  equipmentValue: "",
  cableLarge: "",
  antennaGainA: "",
  antennaGainB: "",
};

const devices = {
  Celular: -85, // Sensibilidad promedio de celular en dBm
  Computadora: -90, // Sensibilidad promedio de computadora en dBm
};

const antennas = [
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

const routers = [
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
  },
];

const Calculator = (values = defaultValues) => {
  const [selectedAntenna, setSelectedAntenna] = useState(null);
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [rssi, setRssi] = useState(null); // Estado para el RSSI calculado
  const [color, setColor] = useState("normal");

  const handleAntennaChange = (event) => {
    const antennaName = event.target.value;
    console.log("antena recibida", antennaName);
    const antenna = antennas.find((ant) => ant.name === antennaName);
    setSelectedAntenna(antenna || null);
    setSelectedFrequency(antenna ? antenna.frequencyOne : ""); // Actualizar frecuencia por defecto
  };

  useEffect(() => {
    if (selectedAntenna) {
      setSelectedFrequency(selectedAntenna.frequencyOne || "");
    }
  }, [selectedAntenna]);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: values,
    mode: "all",
  });

  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value); // Actualizar frecuencia seleccionada
  };

  const calculateRssi = (data) => {
    console.log(data);
    const equipment = parseFloat(data.equipmentValue) || 0;
    const cableLoss = 0.25 * parseFloat(data.cableValue) || 0; // Pérdida por cable
    const cableLossB = 0.25 * parseFloat(data.cableLarge) || 0; // Pérdida por cable B
    const distance = parseFloat(data.distanceValue) || 1; // Distancia
    const frequency = parseFloat(selectedFrequency) || 2.4; // Frecuencia
    const antennaGainA = parseFloat(data.antennaGainA) || 0;
    const antennaGainB = parseFloat(data.antennaGainB) || 0;
    const deviceSensitivity = parseFloat(data.deviceSensitivity);

    const freeSpaceLoss =
      20 * Math.log10(frequency) + 20 * Math.log10(distance) + 92.45;

    const calculatedRssi =
      equipment +
      antennaGainA +
      antennaGainB -
      cableLoss -
      cableLossB -
      freeSpaceLoss;

    console.log("Equipo (A):", equipment);
    console.log("Pérdida por cable (B):", cableLoss);
    console.log("Ganancia de la antena (C):", antennaGainA);
    console.log("Distancia (D):", distance);
    console.log("Frecuencia (E):", frequency);
    console.log("Ganancia de la antena 2 (F):", antennaGainB);
    console.log("Pérdida por cable (D):", cableLossB);
    console.log("Sensibilidad del dispositivo (H):", deviceSensitivity);

    colorRssi(calculatedRssi, deviceSensitivity);
    setRssi(calculatedRssi.toFixed(2));
    reset();
  };

  const colorRssi = (rssi, sensitivity) => {
    if (Math.abs(rssi) < Math.abs(sensitivity)) {
      if (Math.abs(rssi) < 70) {
        setColor("green");
      } else {
        setColor("yellow");
      }
    } else {
      setColor("red");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          calculateRssi(data);
        })}
      >
        <div className="row g-0 p-4">
          <div className="row g-0 color-backgraound">
            <div className="col-md-4">
              <label className="d-flex justify-content-center">
                Equipo (A)
              </label>
              <select className="form-select" {...register("equipmentValue")}>
                {routers.map((router) => (
                  <option key={router.id} value={router.powerOne}>
                    {router.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-4 ps-4">
              <InputField
                name="cableValue"
                register={register}
                label="Largo del Cable en metros (B)"
                rules={{
                  required: "Requerido",
                  pattern: {
                    value: /^[0-9]+(\.[0-9]+)?$/,
                    message: "Solo números",
                  },
                  maxLength: {
                    value: 4,
                    message: "No puede ser mayor a 4 caracteres",
                  },
                }}
                mode="last-form"
                errors={errors}
              />
            </div>
            <div className="col-md-4 ps-4">
              <label className="">
                Antena (<span className="fw-bold">C</span>)
              </label>
              <select
                className="form-select"
                onChange={handleAntennaChange}
                {...register("antennaGainA")}
              >
                {antennas.map((antenna) => (
                  <option key={antenna.id} value={antenna.antennaGain}>
                    {antenna.name} ({antenna.antennaGain}dBi)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div className="row g-0 ">
              <div className="col-md-6 color-backgraound2">
                <InputField
                  label="Distancia en km (D)"
                  name="distanceValue"
                  register={register}
                  rules={{
                    required: "Requerido",
                    pattern: {
                      value: /^(?!0(\.0+)?$)[0-9]+(\.[0-9]+)?$/,
                      message: "Solo números, sin incluir al 0.",
                    },
                    maxLength: {
                      value: 5,
                      message: "No puede ser mayor a 5 caracteres",
                    },
                  }}
                  errors={errors}
                />
              </div>
              <div className="col-md-6 ps-4 color-backgraound2">
                <label>Frecuencia en GHz (E)</label>
                <select
                  className="form-select"
                  value={selectedFrequency}
                  onChange={handleFrequencyChange}
                >
                  <option value=""></option>
                  {selectedAntenna && (
                    <>
                      <option value={selectedAntenna.frequencyOne}>
                        {selectedAntenna.frequencyOne} GHz
                      </option>
                      {selectedAntenna.frequencyTwo && (
                        <option value={selectedAntenna.frequencyTwo}>
                          {selectedAntenna.frequencyTwo} GHz
                        </option>
                      )}
                    </>
                  )}
                </select>
              </div>

              <div className="row g-0">
                <div className="col-md-4 color-backgraound">
                  <label className="">Antena (F)</label>
                  <select className="form-select" {...register("antennaGainB")}>
                    {antennas.map((antenna) => (
                      <option key={antenna.name} value={antenna.antennaGain}>
                        {antenna.name} ({antenna.antennaGain} dBi)
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 ps-4 color-backgraound">
                  <InputField
                    label="Largo del Cable en metros (G)"
                    name="cableLarge"
                    mode="last-form"
                    register={register}
                    rules={{
                      required: "Requerido",
                      pattern: {
                        value: /^(?!0(\.0+)?$)[0-9]+(\.[0-9]+)?$/,
                        message: "Solo números, sin incluir al 0.",
                      },
                      maxLength: {
                        value: 5,
                        message: "No puede ser mayor a 5 caracteres",
                      },
                    }}
                    errors={errors}
                  />
                </div>
                <div className="col-md-4 ps-4 color-backgraound">
                  <label>Dispositivo (H)</label>
                  <select
                    className="form-select"
                    {...register("deviceSensitivity")}
                  >
                    {Object.keys(devices).map((device) => (
                      <option key={device} value={devices[device]}>
                        {device} ({devices[device]} dBm)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-between">
            <div className="d-flex align-items-center">
              <button type="submit" className="calculate-button">
                Calcular
              </button>
            </div>

            <div>
              <div className={`calculate-${color} mt-4`}>
                <h5>RSSI Calculado</h5>
                <p>{rssi} dBm</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
