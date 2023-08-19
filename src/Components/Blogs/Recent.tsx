import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "../../Redux/reducers";

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
};

const RecentBlogs = ({blogSlug}:any) => {
    const { blogsDatas } = useSelector((state: RootState) => state.BlogsReducer);

    const filterdBlog = blogsDatas.filter(({slug})=> slug !== blogSlug);
    const blogsList = filterdBlog.slice(0, 4);
    
    return (
        <div className="coursedetail_right">
            <div className="section_head text-start">
                <div className="recent-blog-text">Recent Blogs</div>
            </div>
            {blogsList?blogsList.map((item:any, index:number) => (
                <div className="bg-light p-3  rounded-3 m-1" key={index}>
                    <div className="recent-post-single mb-3">
                        <div className="recent-post-img">
                            <img
                                src={item.image}
                                alt={item.title}
                                title={item.title}
                                data-pagespeed-url-hash={4004492154}
                            />
                        </div>
                        <div className="recent-post-bio">
                            <div className="recent-post-title">
                                <Link
                                    href={item.url ? item.url : `/blogs/${item.slug}`}
                                >
                                    {item.title}
                                </Link>
                            </div>
                            <span>
                                <i className="far fa-clock" />
                                {formatDate(item.createdDate?item.createdDate:'2023-05-23')}
                            </span>
                        </div>
                    </div>
                </div>
            )):[]}
        </div>
    );
}

export {formatDate};
export default RecentBlogs;
