import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

function App() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md={10} className="my-5 mainContent ml-auto mr-auto ">
          <section className="whiteSection xPadding yPadding">
            <Row>
              <Col className="text-center">
                <h1 className="greenText mt-lg-4 mb-lg-4 mt-2">Amanda Wahlers</h1>
                <div className="text-left">
                  <p >
                    I’m a Ph.D. candidate in economics at Stanford University. 
                    My research explores the intersection between firms, innovation, and environmental systems.
                    I previously worked as a pre-doctoral fellow at Harvard's Opportunity Insights. 
                    I received my undergraduate degree from Washington and Lee University, 
                    where I majored in economics and minored in mathematics.
                  </p>
                </div>
              </Col>
              <Col className="text-center mt-4 ml-auto mr-auto" lg={4} xs={10}>
                <Image src={process.env.PUBLIC_URL + "/IMG_1991.jpeg"} fluid></Image>
              </Col>
            </Row>
            <Row className="yPadding">
              <div>
                <h2>Working Papers</h2>
                <p>“Regulation’s REACH: Trading-Up in Toxic Chemical Regulation,” 2022.</p>
                <p>“Education and the Diffusion of Agricultural Innovations in the United States during the Twentieth Century,” 2023.</p>
                <p className="text-center">
                  <a href={process.env.PUBLIC_URL + "/AmandaWahlersCV.pdf"} target="__blank" className={"greenText"}>
                    Click to view my CV
                  </a>
                </p>              
              </div>
            </Row>
          </section>
          <section className="greenWithWhiteText py-5 xPadding ">
            <Col className="align-items-center ml-auto mr-auto">
              <Row className="justify-content-center">
                <Col>
                  <h2 className="text-center">Projects Contributed to as a Research Assistant</h2>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
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
            </Col>
          </section> 
          <section className="greenWithWhiteText pb-4 xPadding">
            <Col className="mr-auto ml-auto" xs={12} lg={8}>
              <h2 className="text-center">Contact Information</h2>
              <Row>
                <div className="mr-auto ml-auto">
                  <p className="smallFont">
                    Landau Economics Building<br />
                    579 Jane Stanford Way<br />
                    Stanford, CA 94305
                  </p>
                  <p className="smallFont">amanda20@stanford.edu</p>
                </div>
              </Row>
            </Col>
          </section>      
        </Col>
      </Row>
    </Container>
  );
}

export default App;