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
        <Row>
          <Col className="pl-lg-5 pr-lg-5 pl-1 pr-1">
              <h1 className="mt-lg-2 mb-lg-4 mt-2">Amanda Wahlers</h1>
              <h3 className="mb-lg-3">PhD student in Economics at Stanford University</h3>
              <p>
                My research interests include topics in public economics, with a particular interest in topics relating to education, inequality, and environmental economics. I previously worked as a pre-doctoral fellow at Harvard's Opportunity Insights. I received my undergraduate degree from Washington and Lee University, where I majored in economics and minored in mathematics.
              </p>
              <p>
                <a href={process.env.PUBLIC_URL + "/AmandaWahlersCV.pdf"} target="__blank">
                  Click to view my CV
              </a>
              </p>
            </Col>
            <Col className="text-center" lg="auto">
              <Image src={process.env.PUBLIC_URL + "/IMG_1991.jpeg"} className="vh-100" fluid></Image>
            </Col>
          </Row>
      </section>
      <section className="mt-lg-3 mt-3">
        <h2>Projects Contributed to as a Research Assistant</h2>
        <ul>
          <li>
            <a href="https://tracktherecovery.org/" target="__blank">The Economic Impacts of Covid-19</a>
          </li>
          <li>
            <a href="https://opportunityinsights.org/paper/undermatching/" target="__blank">Income Segregation and Intergenerational Mobility Across Colleges in the United States</a>
          </li>
          <li>
            <a href="https://libertystreeteconomics.newyorkfed.org/2018/03/dealer-trading-and-positioning-in-floating-rate-notes.html" target="__blank">Dealer Trading and Positioning in Floating Rate Notes</a>
          </li>
          <li>
            <a href="https://niemesgt.github.io/files/NiemeshShester_SegregationLBW.pdf" target="__blank">Racial Residential Segregation and Black Low Birth Weight</a>, 1970-2010
          </li>
        </ul>
      </section>
      <section>
        <h2>Contact Information</h2>
        <p>
          Landau Economics Biulding<br/>
          579 Jane Stanford Way<br/>
          Stanford, CA 94305
        </p>
        <p>amanda20@stanford.edu</p>
      </section>
    </Container>
  );
}

export default App;