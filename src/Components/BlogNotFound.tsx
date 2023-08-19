import Link from 'next/link'
import React from 'react'

const BlogNotFound = () => {
  return (
    <div className="container py-5 mb-lg-3">
      <div className="row justify-content-center pt-lg-4 text-center">
        <div className="col-lg-5 col-md-7 col-sm-9">
          <h1 className="display-error py-lg-3">404</h1>
          <h2 className=" mb-4">
            We can't seem to find the page you are looking for.
          </h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 mb-3">
              <Link className="card h-100 border-0 shadow-sm" href="/">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-home text-danger h4 mb-0" />
                    <div className="ps-3">
                      <h5 className="fs-sm mb-0">Homepage</h5>
                      <span className="text-muted fs-ms">Return to homepage</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogNotFound