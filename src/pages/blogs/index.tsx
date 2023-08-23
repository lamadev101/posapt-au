/** @format */

import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import Head from 'next/head';
import BlogCardDarft from "@/Components/Blogs/BlogCardDarft";
import { Pagination } from "antd";
import { useRouter } from "next/router";

const blogs = ({blogItems}:any) => {
  
  const router = useRouter();
  const handlePaginationChange = (pageNumber: number) => {
    router.push(`/blogs?page=${pageNumber}`);
  };


  return (
    <>
      <Head>
        <title>Blogs | POSApt</title>
        <meta
          name="title"
          content="Blogs | POSApt"
        />

        <meta
          name="description"
          content="Read all the business related blogs by POSApt!"
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
          content="Blogs | POSApt"
        />
        <meta
          property="og:description"
          content="Read all the business related blogs by POSApt!"
        />
        <meta property="og:url" content="https://posapt.au/blogs" />
        <meta property="og:site_name" content="POSApt Australia" />
        <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
        <meta
          property="og:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta
          property="og:image:alt"
          content="Blogs | POSApt"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blogs | POSApt"
        />
        <meta
          name="twitter:description"
          content="Read all the business related blogs by POSApt!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="canonical" href="https://posapt.au/blogs" />
      </Head>

      <Layout>
        <>
          <ScrollToTop />
          <div
            className="breadcrumbs-custom box-transform-wrap context-dark bg-image gradient-overlay"
            style={{ backgroundImage: "url(images/bg-typography.jpg)" }}
          >
            <div className="container">
              <h1 className="breadcrumbs-custom-title text-white">Blogs</h1>
              <div className="breadcrumbs-custom-decor" />
            </div>
          </div>

          <section className="pt-50">
            <div className="container">
              <div className="blogs">
                <div className="row mt-3">
                  {blogItems.data.map((item: any) => (
                    <BlogCardDarft key={item.id} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </section>


          {/* <BlogCard /> */}
          <div className="d-flex text-center justify-content-end mb-5">
            <Pagination
              defaultCurrent={1}
              pageSize={12}
              total={blogItems.total}
              onChange={handlePaginationChange}
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default blogs;

export async function getServerSideProps(context: any) {
  const { query } = context;
  const page = parseInt(query.page as string, 10) || 1;

  try {
    const url = "https://api.posapt.au/api/common/listWebsiteBlogs";

    const sendData = {
      Page: page,
      PageSize: 12
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendData)
    });

    const data = await response.json();

    return {
      props: {
        blogItems: data,
        currentPage: page,
      },
    };
  } catch (err) {
    console.error("Error: ", err);
    return {
      notFound: true,
    };
  }
}

