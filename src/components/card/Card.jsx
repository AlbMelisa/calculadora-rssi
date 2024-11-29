import React, { useState } from "react";
import "./card.css";
import { useForm } from "react-hook-form";
import InputField from "../../components/inputField/InputField";
import Table from "react-bootstrap/Table";
import imgModal from "../../assets/rssi-modal-2.png";

const devices = {
  Celular: -85, // Sensibilidad promedio de celular en dBm
  Computadora: -90, // Sensibilidad promedio de computadora en dBm
};
const antennas = [
  {
    name: "TP-LINK’s CPE510",
    brand: "Ubiquiti",
    model: "LiteBeam LBE-5AC-Gen2",
    frequencyOne: "5",
    antennaType: "Antena Direccional",
    antennaGain: 23,
    // internalAntennas: "2",
    // externalAntennas: "1",
    price: "$83.598",
    powerOne: 27,
  }
]
// const antennas = [
//   {
//     name: "TP-LINK’s CPE510",
//     brand: "TP-LINK’s",
//     model: "CPE510",
//     functions: "Access point, Enlace punto a punto (P2P),Repetidor",
//     frequencyOne: "5",
//     antennaType: "Antena Direccional de panel integrada",
//     antennaGain: 13,
//     internalAntennas: "2",
//     externalAntennas: "1",
//     price: "$80.000",
//     powerOne: 27,
//   },
//   {
//     name: "Ubiquiti NanoBeam ac Gen2",
//     brand: "Ubiquiti",
//     model: "NBE-5AC-Gen2",
//     functions: "Access point, Repetidor",
//     frequencyOne: "5",
//     antennaType: "Antena direccional de disco integrada",
//     antennaGain: 27,
//     internalAntennas: "0",
//     externalAntennas: "1",
//     price: "$209.546",
//     powerOne: 25,
//   },
//   {
//     name: "Antena Rejilla Mikrotik LHG 2",
//     brand: "Mikrotik",
//     model: "RBLHG-2",
//     functions: "Punto a punto (P2P),Punto a multipunto (P2MP) ",
//     frequencyOne: "2.4",
//     antennaType: "Antena de rejilla direccional integrada",
//     antennaGain: 27,
//     internalAntennas: "0",
//     externalAntennas: "1",
//     price: "$117.00",
//     powerOne: 25,
//   },
// ];

// const routers = [
//   {
//     name: "Mercusys MR70X",
//     brand: "Mercusys",
//     model: "MR70X",
//     functions: "Router, ap",
//     frequencyOne: "2.4",
//     frequencyTwo: "5",
//     internalAntennas: 0,
//     externalAntennas: 4,
//     price: "$62.041",
//     powerOne: 30,
//     powerTwo: 30,
//   },
//   {
//     name: "Tp-Link Archer AX55 Pro",
//     brand: "TP-Link",
//     model: "Archer AX55 Pro",
//     functions: "Router, WMM",
//     frequencyOne: "2.4",
//     frequencyTwo: "5",
//     internalAntennas: 0,
//     externalAntennas: 4,
//     price: "$129.990",
//     powerOne: 20,
//     powerTwo: 23,
//   },
//   {
//     name: "Tenda N300 4G03",
//     brand: "Tenda",
//     model: "4G03",
//     functions: "4G, Inalambrico, Wifi",
//     frequencyOne: "2.4",
//     internalAntennas: 4,
//     externalAntennas: 0,
//     price: "$64.890",
//     powerOne: 20,
//   },
// ];

const defaultValues = {
  cableValue: "",
  distanceValue: "",
  potenceAntennaOne: "",
  cableLarge: "",
};

const Card = ({ name, description, image, price, values = defaultValues }) => {
  const [showModal, setShowModal] = useState(false);
  const [rssi, setRssi] = useState(null); // Estado para el RSSI calculado
  const [showFeaturesModal, setShowFeaturesModal] = useState(false);
  const antenna = antennas.find((antenna) => antenna.name === name);
  const [color, setColor] = useState("normal");

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: values,
    mode: "all",
  });
  const toggleModal = () => {
    setRssi(0);
    setColor("normal");
    reset();
    setShowModal(!showModal);
  };

  const toggleFeaturesModal = () => {
    setShowFeaturesModal(!showFeaturesModal);
  };

  const calculateRssi = (data) => {
    let cableLoss = 0.25 * parseFloat(data.cableValue) || 0; // Pérdida por cable
    const distance = parseFloat(data.distanceValue) || 1; // Distancia
    const frequency = parseFloat(data.frequency) || 2.4; // Frecuencia
    const antennaGainTwo = parseFloat(data.antennaGain) || 0
    const antennaGain = antenna.antennaGain; // Ganancia de antena
    const cableLong = parseFloat(data.cableLarge) || 0;
    const sensitivity = parseFloat(data.deviceSensitivity); // Sensibilidad del dispositivo

    console.log("perdida del cable:", cableLoss);
    console.log("distancia:", distance);
    console.log("frecuencia:", frequency);
    console.log("ganancia de la antena", antennaGain);
    console.log("ganancia de la antena2", antennaGainTwo);
    console.log("perdida del cable2:", cableLong);


    // console.log("",sensitivity)

    // if(parseFloat(data.antennaGain) === 0){
    //   cableLoss = 0;
    // }

    // let power = antenna.powerOne; // Potencia del router

    // if (frequency === 5) {
    //   power = antennar.powerTwo;
    // }

    // Cálculo de pérdida en espacio libre
    const freeSpaceLoss =
      20 * Math.log10(frequency) + 20 * Math.log10(distance) + 92.45;

    console.log("freespaceloss", freeSpaceLoss);
    // Fórmula de RSSI
    // const calculatedRssi = power + antennaGain + sensitivity - cableLoss - freeSpaceLoss;
    // setRssi(calculatedRssi.toFixed(2));
    const calculatedRssi = antennaGain  - cableLoss - freeSpaceLoss + antennaGainTwo - cableLong;
    colorRssi(calculatedRssi, sensitivity);
    setRssi(calculatedRssi.toFixed(2));
  };
  3;
  const colorRssi = (rssi, sensitivity) => {
    // console.log(rssi)
    // console.log(sensitivity)

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
    <>
      <div className="card">
        <div className="card-row">
          <div className="card-image">
            <img src={image} alt="Profile" className="image-align" />
          </div>
          <div className="card-content">
            <div className="d-flex justify-content-between">
              <h2>{name}</h2>
              <h5 className="fw-bold text-success me-3">{price}</h5>
            </div>
            <p>{description}</p>
            <div className="card-buttons">
              <button className="contact-button" onClick={toggleFeaturesModal}>
                Características
              </button>
              <button className="profile-button" onClick={toggleModal}>
                RSSI
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de RSSI */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal-content-two"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <h3 className="p-3 fw-bold">Calculadora RSSI - {name}</h3>
            <form
              onSubmit={handleSubmit((data) => {
                calculateRssi(data);
              })}
            >
              <div className="row">
                <div className="col-md-4">
                  <img src={imgModal} alt="" className="card-img" />
                </div>
                <div className="col-md-4">
                  <h5>Transmisor(A)</h5>

                  <InputField
                    label="Largo del Cable (m)"
                    name="cableValue"
                    register={register}
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
                    errors={errors}
                  />
                </div>
                <div className="col-md-4">
                  <h5>Pérdida en Espacio Libre</h5>
                  <InputField
                    label="Distancia (km)"
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
                  <label>Frecuencia (GHz)</label>
                  <select className="form-select" {...register("frequency")}>
                    <option value={antenna.frequencyOne}>
                      {antenna.frequencyOne} GHz
                    </option>
                    {/* {antenna.frequencyTwo && (
                      <option value={antenna.frequencyTwo}>
                        {antenna.frequencyTwo} GHz
                      </option>
                      )} */}
                  </select>
                </div>
                <div className="row p-0">
                  <h5>Receptor(B)</h5>
                  <div className="col-md-4">
                    <label>Antena</label>
                    <select
                      className="form-select"
                      {...register("antennaGain")}
                    >
                      {antennas.map((antenna) => (
                        <option key={antenna.name} value={antenna.antennaGain}>
                          {antenna.name} ({antenna.antennaGain} dBi)
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <InputField
                      label="Largo del Cable (m)"
                      name="cableLarge"
                      register={register}
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
                      errors={errors}
                      mode="last-form"
                    />
                  </div>
                  <div className="col-md-4 pe-0">
                    <label>Dispositivo</label>
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
            </form>
          </div>
        </div>
      )}
      {/* Modal de Características del Router */}
      {showFeaturesModal && (
        <div className="modal-overlay" onClick={toggleFeaturesModal}>
          <div
            className="modal-content-two"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-button" onClick={toggleFeaturesModal}>
              &times;
            </span>
            <h4 className="p-3 text-success">
              Características de {antenna.brand} {antenna.model}
            </h4>
            <form action="">
              <Table striped bordered>
                <tbody className="sticky-header">
                  <tr>
                    <td className="fw-bold">Marca</td>
                    <td>{antenna?.brand}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold w-50">Modelo</td>
                    <td>{antenna?.model}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Funciones</td>
                    <td>{antenna?.functions}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold d-flex justify-content-center ">
                      Wi-Fi Frecuencia
                    </td>
                    <td>
                      {antenna?.frequencyOne}GHz
                      {/* {antenna?.frequencyTwo && (
                        <div>{antenna?.frequencyTwo}GHz</div>
                      )} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Tipo de antena</td>
                    <td>{antenna?.antennaType}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Cantidad de antenas internas</td>
                    <td>{antenna?.internalAntennas}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Cantidad de antenas externas</td>
                    <td>{antenna?.externalAntennas}</td>
                  </tr>
                </tbody>
              </Table>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
