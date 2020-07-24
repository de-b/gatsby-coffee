import React from "react"
import Title from "../globals/Title"
import { Link } from "gatsby"

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              cupiditate aspernatur eum itaque! Mollitia animi, ipsam,
              accusantium ab id ad nam veniam quo rem consequuntur earum?
              Nesciunt assumenda corporis aliquam omnis, quod architecto magnam
              consequuntur cupiditate harum illo veritatis commodi et
              repellendus amet consequatur blanditiis. Quibusdam omnis pariatur
              fugiat est cum laudantium cupiditate obcaecati molestias.
            </p>
            <Link to="/about">
              <button className="btn btn-primary text-uppercase">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Info
