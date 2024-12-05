import React from "react";
import { Accordion, Container } from "react-bootstrap";
import '../rssi/Rssi.css'
const Rssi = () => {
  return (
    <Container className="pb-4">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="custom-accordion-item">
        <Accordion.Header className="custom-header">
          <strong>¿Qué es?</strong>
        </Accordion.Header>
        <Accordion.Body className="custom-body">
          El <strong>RSSI</strong> (por sus siglas en inglés, Received Signal
          Strength Indicator) es una métrica utilizada para medir la potencia
          de la señal recibida por un dispositivo en una red inalámbrica, como
          Wi-Fi, Bluetooth o redes celulares.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="custom-accordion-item">
        <Accordion.Header className="custom-header">
          <strong>¿Cómo lo medimos?</strong>
        </Accordion.Header>
        <Accordion.Body className="custom-body">
          Se necesita un equipo de transmisión conectado a una antena
          transmisora, que emita la señal hacia una antena receptora. Es
          crucial calcular la pérdida en el espacio libre según la distancia y
          frecuencia de la señal, así como considerar la atenuación del cable
          entre la antena receptora y el dispositivo medidor, que puede ser un
          celular, analizador de espectro u otro equipo receptor.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="custom-accordion-item">
        <Accordion.Header className="custom-header">
          <strong>¿Cómo saber si un equipo, antena o dispositivo es correcto?</strong>
        </Accordion.Header>
        <Accordion.Body className="custom-body">
          <strong>Equipo:</strong> Potencia de salida. <br />
          <strong>Antena:</strong> Ganancia de la antena. <br />
          <strong>Dispositivo:</strong> Ten en cuenta el dispositivo al que
          deseas que llegue la señal. <br /> 
          En general, tanto para el equipo como para la antena, valores más altos de potencia de salida y ganancia contribuirán a una mejor recepción de la señal.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="custom-accordion-item">
        <Accordion.Header className="custom-header">
          <strong>¿De que me sirve este sitio web?</strong>
        </Accordion.Header>
        <Accordion.Body className="custom-body">
        El sitio web ofrece información detallada sobre los diferentes equipos y antenas disponibles en el mercado, proporcionando a los usuarios las herramientas necesarias para obtener datos técnicos y realizar cálculos del RSSI (Received Signal Strength Indicator). Esto les permitirá determinar si las antenas y equipos seleccionados son adecuados para recibir señal en su ubicación específica, ayudándolos a tomar decisiones informadas sobre la conectividad y el rendimiento.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Container>
  );
};

export default Rssi;
