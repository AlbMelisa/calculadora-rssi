import "./main.css";
import AboutMe from "../components/aboutMe/AboutMe";
import calculator from "../assets/calculator-22.png";
import rssi from "../assets/rssi-front.png";
import CardComponent from "../components/cardComponent/CardComponent";
import Calculator from "../components/calculator/Calculator";
import image1 from "../assets/ubiquiti.jpg";
import Rssi from "../components/rssi/Rssi";

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
    image: "../../assets/ubiquiti.jpg",
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
    antennaGainOne: 13,
    frequencyOne: "5",
    image: { rssi },
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
    image: { rssi },
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
    powerOne: 20,
  },
];

const MainPage = () => {
  return (
    <div>
      <div className="row g-0">
        <div className="col-12 " id="#home">
          <img src={rssi} alt="" className="img-fluid w-100" />
        </div>
        <h5
          className="d-flex text-center justify-content-center p-3 mb-2 color-back text-white"
        >
          Obtenga información sobre los equipos y antenas para luego poder
          calcular la potencia de señal recibida (RSSI).
        </h5>{" "}
        <div >
        <h2 className="d-flex text-center justify-content-center pt-4 ">
        <i className="fa-solid fa-signal pe-2 "></i>
        RSSI
        </h2>{" "}
        <Rssi/>
      </div>
      </div>
      <div id="equipment">
        <h2 className="d-flex text-center justify-content-center p-3 m-0 ">
          <i className="fa-solid fa-wifi pe-2"></i>
          EQUIPOS
        </h2>{" "}
        <h5 className="text-center p-1 ">
          En esta sección usted podrá ver la información sobre los equipos
          disponibles
        </h5>
      </div>
      <div className="row g-0">
        {routers.map((router) => (
          <CardComponent
            key={router.id}
            id={router.id}
            title={router.name}
            description={router.description}
            price={router.price}
            type="routers"
          />
        ))}
      </div>
      <div className="d-flex justify-content-center" id="antennas">
        <h2 className="d-flex text-center justify-content-center p-4">
          <i className="fa-solid fa-tower-broadcast pe-2"></i>
          ANTENAS
        </h2>
      </div>
      <div className="row g-0 " >
        <h5 className="text-center p-1 ">
          En esta sección usted podrá ver la información sobre las antenas
          disponibles
        </h5>
        {antennas.map((antenna) => (
          <CardComponent
            key={antenna.id}
            id={antenna.id}
            title={antenna.name}
            description={antenna.description}
            price={antenna.price}
            type="antennas"
          />
        ))}
        <div id="calculator"></div>
      </div>
      <div>
        <span ></span>
        <h2
          className="d-flex text-center justify-content-center p-3 "
          
        >
          <i className="fa-solid fa-rss pe-2"></i>
          CALCULADORA
        </h2>
        <h4 className="text-center">
          Ingrese los datos según indica la imagen
        </h4>
      </div>
      <div>
        <div className=" d-flex justify-content-center">
          <img src={calculator} alt="" className="image-align" />
        </div>
        <Calculator />
      </div>
      <div className="color-back"></div>
      <div className="row g-0 p-3 text-center">
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <div className="square-green d-flex pe-2"></div>
            <h5 className="ps-2">Buena Calidad</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <div className="square-yellow d-flex pe-2"></div>
            <h5 className="ps-2">Media Calidad</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <div className="square-red d-flex pe-2"></div>
            <h5 className="ps-2">Mala Calidad</h5>
          </div>
        </div>
      </div>
      <div id="aboutme">
        <h2 className="d-flex text-center justify-content-center p-3 ">
          <i className="fa-solid fa-person-dress pe-2"></i>
          DATOS PERSONALES
        </h2>{" "}
      </div>
      <AboutMe />
    </div>
  );
};
export default MainPage;
