import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import antenna1 from "../../assets/antenna1.webp";
import { CardSubtitle, ModalBody } from "react-bootstrap";
import image1 from "../../assets/ubiquiti.jpg";
import image2 from "../../assets/tupuvaco.jpg";
import image3 from "../../assets/ubiquiti2.webp";

import router1 from "../../assets/router1.webp";
import router2 from "../../assets/router2.webp";
import router3 from "../../assets/router3.webp";

import "../cardComponent/cardComponent.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";

import Table from "react-bootstrap/Table";

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
    image: image1,
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
    image: image3,
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
    image: image2,
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
    image: router1,
    price: "$62.041",
    powerOne: 30,
    image: router2,
    powerTwo: 30,
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
    image: router3,
    powerTwo: 23,
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
    image: router1,
    powerOne: 20,
  },
];
const CardComponent = ({ id, title, price, description, type }) => {
  const [showModal, setShowModal] = useState(false);
  const [rssi, setRssi] = useState(null); // Estado para el RSSI calculado

  const antenna = Array.isArray(antennas)
    ? antennas.find((antenna) => antenna.id === id)
    : null;

  const data = type === "antennas" ? antennas : routers || [];
  const item = data.find((element) => element.id === id);

  // Funciones para manejar el modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="col-md-4">
      <Card style={{ width: "16rem", cursor: "pointer" }} onClick={handleShow}>
        <div className="d-flex justify-content-center">
          <Card.Img
            variant="top"
            src={item?.image}
            className="style-image-card"
          />
        </div>
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          {/* <Card.Text>
          {description}
          </Card.Text> */}
          <Card.Footer className="text-center">{price}</Card.Footer>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <div className="row g-0">
          <div className="col-md-5">
            <Modal.Body className="pb-0">
              <img
                src={item?.image}
                alt={title}
                className="img-fluid style-image-card "
              />
            </Modal.Body>
          </div>
          <div className="col-md-7">
            <Modal.Title className="p-2 pt-0 ">{title}</Modal.Title>
            <Modal.Body className="pt-0 text-center">{price}</Modal.Body>
            <Modal.Body className="pt-0">{description}</Modal.Body>
          </div>
          <ModalBody className="pt-0">
            <Table striped bordered hover size="sm" className="mt-3">
              <thead>
                <tr>
                  <th>Características</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Marca</td>
                  <td>{item?.brand}</td>
                </tr>
                <tr>
                  <td>Modelo</td>
                  <td>{item?.model}</td>
                </tr>
                {!item?.frequencyTwo && item?.frequencyOne && (
                  <tr>
                    <td>Frecuencia</td>
                    <td>{item.frequencyOne}GHz</td>
                  </tr>
                )}
                {item?.frequencyTwo && (
                  <tr>
                    <td>Frecuencia</td>
                    <td>
                      {item.frequencyTwo}GHz, {item.frequencyOne}GHz
                    </td>
                  </tr>
                )}
                {item?.antennaGain && (
                  <tr>
                    <td>Ganancia de Antena</td>
                    <td>{item?.antennaGain}dBi</td>
                  </tr>
                )}
                {item?.externalAntennas !== undefined && (
                  <tr>
                    <td>Antenas Externas</td>
                    <td>{item?.externalAntennas}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </ModalBody>
        </div>
        {/* <Modal.Footer>
          <div className="row g-0">
            <div className="col-md-6">
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </div>
          </div>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default CardComponent;
