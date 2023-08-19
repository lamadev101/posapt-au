import React from 'react'
import { formatDate } from './Recent'
import Link from 'next/link'

const BlogCardDarft = ({ slug, createdDate, title, image, url, description }: any) => {
  return (
    <div className="col-md-4 pb-3">
      <div className="card bg-light h-100 border-0 shadow">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          title={title}
          data-pagespeed-url-hash={4004492154}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold ">
            <Link
              href={url ? url : `/blogs/${slug}`}
            >
              {title}
            </Link>
          </h5>
          <p className="card-text ">
            {description ?? 'none'}
          </p>
          <div className="mb-0  d-flex serbtn  justify-content-between mt-3 ">
            <Link
              href={`/blogs/${slug}`}
              className="btn btn-raised bg-danger shadow my-button w-xs  me-2 homecart homelogin rounded-0"
            >
              Read More
              <i className="fas fa-long-arrow-right ms-3" />
            </Link>
            <div>
              <i className="far fa-clock me-1" />
              {formatDate(createdDate)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCardDarft