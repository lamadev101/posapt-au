/** @format */

import React, { useEffect, useState } from "react";
import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import Head from 'next/head';
import RecentBlogs, { formatDate } from "@/Components/Blogs/Recent";
import BlogNotFound from "@/Components/BlogNotFound";
import TableOfContent from "@/Components/Blogs/TableOfContent";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

interface HeadingData {
    h2: string;
    h3: string[];
}

const BlogDetails = (props: any) => {

    const blog = props.blog;

    const dispatch = useDispatch();
    const router = useRouter();

    const [modifiedContent, setModifiedContent] = useState('');
    const [tags, setTags] = useState<HeadingData[]>([]);


    const strippedString = blog.description ? blog.description.replace(/(<([^>]+)>)/g, "") : '';

    const schemaDatas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://posapt.au/blogs/${blog.slug}`
            },
            "headline": `${blog.title}`,
            "description": `${strippedString}`,

            "image": `${blog.imagePath}`,
            "author": {
                "@type": "Organization",
                "name": "POSApt",
                "url": "https://posapt.au/"
            },
            "publisher": {
                "@type": "Organization",
                "name": "POSApt",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://posapt.au/assets/dist/image/poslogo.png"
                }
            },
            "datePublished": `${blog.createdDate}`,
            "dateModified": `${blog.updatedDate}`
        }]

    let status = true;

    useEffect(() => {
        if (status) {
            status = false;
            if (router.isReady) {
                dispatch({
                    type: 'GET_BLOGS_REQUEST',
                    payload: {
                        Page: 1,
                        PageSize: 5
                    }
                });
            }
        }

    }, [router.query.slug]);

    // if url is not specified
    if (blog.data === null) {
        return (
            <Layout>
                <BlogNotFound />
            </Layout>
        )
    }

    useEffect(() => {
        const content = blog.description;

        const extractHeadings = () => {
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = content;

            const h2Elements = tempContainer.getElementsByTagName('h2');
            const headingData: HeadingData[] = [];

            for (let i = 0; i < h2Elements.length; i++) {
                const h2Element = h2Elements[i];
                const h3Elements: string[] = [];
                let nextSibling = h2Element.nextSibling;

                while (nextSibling && nextSibling.nodeType === Node.ELEMENT_NODE && nextSibling.nodeName !== 'H2') {
                    if (nextSibling.nodeName === 'H3') {
                        const h3Text = nextSibling.textContent || ''; 
                        h3Elements.push(h3Text);
                    }
                    nextSibling = nextSibling.nextSibling;
                }

                const h2Text = h2Element.textContent || ''; 
                headingData.push({
                    h2: h2Text,
                    h3: h3Elements,
                });
            }
            setTags(headingData);
        };

        const modifyH2Tags = () => {
            let counter = 0;
            if (content) {
                const modifiedContentWithIds = content.replace(/<h2(.*?)>(.*?)<\/h2>/gi, (match: string, p1: string, p2: string) => {
                    const h2WithId = `<h2 ${p1} id="blogtitle${counter}" style="color: #043687">${p2}</h2>`;
                    counter++;
                    return h2WithId;
                });
                setModifiedContent(modifiedContentWithIds);
            }
        }

        modifyH2Tags();
        extractHeadings();

    }, [blog.description]);

    return (
        <>
            <Head>
                <title>{blog.title}</title>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDatas) }}
                />
                <meta
                    name="title"
                    content={blog.title}
                />
                <meta
                    name="description"
                    content={blog.shortdescription}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="robots"
                    content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <meta property="og:locale" content="en_AU" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={blog.title}
                />
                <meta
                    property="og:description"
                    content={blog.shortdescription}
                />
                <meta property="og:url" content={`https://posapt.au/blogs/${blog.slug}`} />
                <meta property="og:site_name" content="POSApt Australia" />
                <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
                <meta
                    property="og:image"
                    content={blog.imagePath}
                />
                <meta
                    property="og:image:secure_url"
                    content={blog.imagePath}
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="628" />
                <meta
                    property="og:image:alt"
                    content={blog.title}
                />
                <meta property="og:image:type" content="image/webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={blog.title}
                />

                <meta
                    name="twitter:description"
                    content={blog.shortdescription}
                />
                <meta
                    name="twitter:image"
                    content={blog.imagePath}
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="POSApt" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <link rel="canonical" href={`https://posapt.au/blogs/${blog.slug}`} />
            </Head>

            <Layout>
                <>
                    <ScrollToTop />
                    <div
                        className="breadcrumbs-custom box-transform-wrap context-dark bg-image gradient-overlay"
                        style={{ backgroundImage: "url(images/bg-typography.jpg)" }}
                    >
                        <div className="container">
                            <h1 className="breadcrumbs-custom-title text-white">
                                {blog.title}
                            </h1>
                            <div className="breadcrumbs-custom-decor" />
                        </div>
                    </div>
                    <section className="pt-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-xxl-9">
                                    <div className="row fs-10">
                                        <div className="col-md-6 col-4 d-flex justify-content-start">
                                            <span><i className="far fa-user" ></i> By {schemaDatas[0].author.name}</span>
                                        </div>
                                        <div className="col-md-6 col-8 d-flex justify-content-end">
                                            <div className="last-update-date me-2 d-none d-md-block">Last updated:</div>
                                            <div className="d-flex" >
                                                <span className="mb-2">
                                                    <i className="far fa-clock me-1" />
                                                    {formatDate(schemaDatas[0].datePublished)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" service_left blogsingle">
                                        <div className="serviceinner_img">
                                            <img
                                                style={{ minWidth: "100%" }}
                                                src={blog.imagePath}
                                                className="img-fluid"
                                                alt={blog.title}
                                                title={blog.title}
                                                data-pagespeed-url-hash={4004492154}
                                            />
                                        </div>
                                        <div className="service_para blogs-details-page">
                                            <div dangerouslySetInnerHTML={{ __html: modifiedContent }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xxl-3">
                                    <RecentBlogs blogSlug={blog.slug} />
                                    {/* Table of content */}
                                    <TableOfContent tags={tags} />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            </Layout>
        </>
    )
}

export default BlogDetails;


export async function getServerSideProps(context: any) {
    const { params } = context;
    const { slug } = params;

    try {
        const response = await fetch(`https://api.posapt.au/api/common/getWebsiteBlogBySlug/${slug}`);
        const data = await response.json();

        return {
            props: {
                blog: data,
            },
        };
    } catch (error) {
        return {
            notFound: true, // Return a 404 page if there is an error or the blog is not found
        };
    }
}






