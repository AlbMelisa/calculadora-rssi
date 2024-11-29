import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../inputField/InputField";
import "../calculator/calculator.css";
import { antennas, devices, routers, defaultValues } from "../../constants/constants";

const Calculator = (values = defaultValues) => {
  const [rssi, setRssi] = useState(null); // Estado para el RSSI calculado
  const [color, setColor] = useState("normal");

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});

  const selectedAntennaName = watch("antennaGainA");
  const selectedAntenna = antennas.find((ant) => ant.name === selectedAntennaName);
  const selectedFrequency = watch("frequency") || (selectedAntenna ? selectedAntenna.frequencyOne : "");

  const calculateRssi = (data) => {
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
                {...register("antennaGainA")}
              >
                {antennas.map((antenna) => (
                  <option key={antenna.name} value={antenna.name}>
                    {antenna.name} ({antenna.antennaGain}dBi)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div className="row g-0 "></div>
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
                  {...register("frequency")}
                >
                  {selectedAntenna && (
                    <>
                      {selectedAntenna.frequencyOne && (
                        <option value={selectedAntenna.frequencyOne}>
                          {selectedAntenna.frequencyOne} GHz
                        </option>
                      )}
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
      </form>
    </div>
  );
};

export default Calculator;
