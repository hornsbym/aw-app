import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

function App() {
  return (
    <Container fluid>
      <section>
        <Row noGutters>
          <Col className="pl-lg-5 pr-lg-5 pl-4 pr-4 text-center">
            <h1 className="greenText mt-lg-4 mb-lg-4 mt-2">Amanda Wahlers</h1>
            <h3 className="greenText mb-lg-3">PhD student in Economics at Stanford University</h3>
            <p id="introParagraph" className="text-left">
              My research explores the intersection between firms, innovation, and environmental systems. I previously worked as a pre-doctoral fellow at Harvard's Opportunity Insights. I received my undergraduate degree from Washington and Lee University, where I majored in economics and minored in mathematics.
            </p>
            <p>
              <a href={process.env.PUBLIC_URL + "/AmandaWahlersCV.pdf"} target="__blank">
                Click to view my CV
            </a>
            </p>
          </Col>
          <Col className="text-center pr-0 pl-0" lg={4} xs={12}>
            <Image src={process.env.PUBLIC_URL + "/IMG_1991.jpeg"} fluid></Image>
          </Col>
        </Row>
      </section>
      <section className="greenWithWhiteText pt-lg-3 pt-3">
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center">Projects Contributed to as a Research Assistant</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={"auto"}>
            <ul>
              <li>
                <a className="whiteLink" href="https://tracktherecovery.org/" target="__blank">The Economic Impacts of Covid-19</a>
              </li>
              <li>
                <a className="whiteLink" href="https://opportunityinsights.org/paper/undermatching/" target="__blank">Income Segregation and Intergenerational Mobility Across Colleges in the United States</a>
              </li>
              <li>
                <a className="whiteLink" href="https://libertystreeteconomics.newyorkfed.org/2018/03/dealer-trading-and-positioning-in-floating-rate-notes.html" target="__blank">Dealer Trading and Positioning in Floating Rate Notes</a>
              </li>
              <li>
                <a className="whiteLink" href="https://niemesgt.github.io/files/NiemeshShester_SegregationLBW.pdf" target="__blank">Racial Residential Segregation and Black Low Birth Weight, 1970-2010</a>
              </li>
            </ul>
          </Col>
        </Row>
      </section>
      <section className="greenWithWhiteText pb-3">
        <Row className="justify-content-center">
          <Col lg={"auto"}>
            <h2 className="text-center">Contact Information</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={"auto"} xs={"auto"}>
            <p>
              Landau Economics Building<br />
              579 Jane Stanford Way<br />
              Stanford, CA 94305
            </p>
            <p>amanda20@stanford.edu</p>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default App;