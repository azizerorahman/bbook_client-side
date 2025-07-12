import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="my-5 f-opensans">
      <Row className="mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <div className="h-100 p-4 bg-light rounded-3">
            <h2 className="fw-bold f-merriweather mb-3">Our Story</h2>
            <p>
              BBook began when a team of book lovers with technology backgrounds
              noticed that many independent bookstores and small publishers were
              struggling with outdated inventory systems.
            </p>
            <p>
              We set out to create a solution that would be powerful enough for
              large warehouses but intuitive enough for small bookshops. After
              months of development and testing with real bookstore owners,
              BBook was born.
            </p>
            <p>
              Today, BBook serves hundreds of book businesses worldwide, from
              corner bookshops to major publishing warehouses, all managing
              their inventory with greater efficiency and accuracy.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="h-100 p-4 bg-light rounded-3">
            <h2 className="fw-bold f-merriweather mb-3">Our Mission</h2>
            <p>
              At BBook, we believe that books are essential to culture,
              education, and human progress. Our mission is to support the book
              industry by providing tools that make inventory management simple
              and efficient.
            </p>
            <p>
              We're committed to continuous improvement, regularly updating our
              platform based on user feedback and emerging technologies. We aim
              to help bookstores and warehouses reduce costs, minimize errors,
              and focus more on what they love—books and readers.
            </p>
            <p>
              Our vision is a world where every book business, regardless of
              size, has access to enterprise-level inventory management tools
              that are affordable, secure, and easy to use.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
