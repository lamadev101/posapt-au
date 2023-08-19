
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";
import Skeleton from "react-loading-skeleton";
import { formatDate } from "./Recent";

const BlogSkeleton = () => {
  return (
    <div className="col-md-4 pb-3">
      <Skeleton height={200} />
      <Skeleton height={10} count={5} />
    </div>
  )
}

const BlogCard = () => {

  const { blogsDatas, page } = useSelector((state: RootState) => state.BlogsReducer);
  const dispatch = useDispatch();


  const moreData = () => {
    dispatch({
      type: 'GET_BLOGS_REQUEST',
      payload: {
        Page: page,
        PageSize: blogsDatas.length + 10,
      }
    });
  }

  return (
    <>
      <section className="pt-50">
        {blogsDatas.length > 0 ?
          <div className="container">
            <div className="blogs">
              <div className="row mt-3">
                {blogsDatas?.map((blog: any, index: any) =>
                  <div className="col-md-4 pb-3" key={index}>
                    <div className="card bg-light h-100 border-0 shadow">
                      <img
                        src={blog.image}
                        className="card-img-top"
                        alt={blog.title}
                        title={blog.title}
                        data-pagespeed-url-hash={4004492154}
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold ">
                          <Link
                            href={blog.url ? blog.url : `/blogs/${blog.slug}`}
                          >
                            {blog.title}
                          </Link>
                        </h5>
                        <p className="card-text ">
                          {blog.description ?? 'none'}
                        </p>
                        <div className="mb-0  d-flex serbtn  justify-content-between mt-3 ">
                          <Link
                            href={`/blogs/${blog.slug}`}
                            className="btn btn-raised bg-danger shadow my-button w-xs  me-2 homecart homelogin rounded-0"
                          >
                            Read More
                            <i className="fas fa-long-arrow-right ms-3" />
                          </Link>
                          <div>
                            <i className="far fa-clock me-1" />
                            {formatDate(blog.createdDate)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
                }
              </div>

              <div className="d-flex text-center justify-content-center mb-5">
                <button className="text-center my-3 btn btn-raised bg-danger shadow my-button w-xs  me-2 homecart homelogin rounded-0" onClick={moreData}> More </button>
              </div>
            </div>
          </div>
          :
          <div className="row m-4">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>}
      </section>
    </>
  );

}

export default BlogCard;
