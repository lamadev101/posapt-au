
import Item from "antd/es/list/Item";
import React, { useEffect } from "react";
import { StateObservable } from "redux-observable";

interface Action {
  type: string;
  payload?: any;
}

interface State {
  blogsDatas: {
    id: string,
    title: string,
    description: string,
    sortOrder: string,
    url: string,
    slug: string,
    createdDate: string,
    image: string,
  }[],
  page: number,
  blogDetail: any,
  notFound: boolean
}

const initialState: State = {
  blogsDatas: [
    // {
    //   image: "/assets/dist/image/Blog/Blog_12.webp",
    //   url: "/blogs/how-to-start-a-restaurant-business-in-australia",
    //   slug: "how-to-start-a-restaurant-business-in-australia",
    //   title: "How to Start a Restaurant Business in Australia 2023",
    //   short_description: "Restaurants are one the most successful ventures and this is how you can start a restaurant business in Australia. A complete guide for beginners.",
    //   description:'none',
    //   publish_date: "2023-06-12"
    // },
    //{
    //   image: "/assets/dist/image/Blog/Blog_11.webp",
    //   url: "/blogs/what-are-the-most-profitable-small-businesses-in-australia",
    //   slug:"what-are-the-most-profitable-small-businesses-in-australia",
    //   title: "What are the Most Profitable Small Businesses in Australia 2023",
    //   short_description: "E-commerce, online retail stores, health and wellness stores, and innovative businesses are the most profitable small businesses in Australia.",
    //   description:'none',
    //   publish_date: "2023-06-01"
    // },
    // {
    //   image: "/assets/dist/image/Blog/Blog_10.webp",
    //   url: "/blogs/new-store-opening-marketing-strategies",
    //   slug:"new-store-opening-marketing-strategies",
    //   title: "10 New Store Opening Marketing Strategies to Follow",
    //   short_description: "Make your store stand out with these 10 new store opening marketing strategies. Targeted advertising, local partnerships, pre-opening events and more.",
    //   description:'none',
    //   publish_date: "2023-05-31"
    // },
    // {
    //   image: "/assets/dist/image/Blog/Blog_9.webp",
    //   url: "/blogs/how-a-point-of-sale-system-can-help-small-retailers",
    //   slug:"how-a-point-of-sale-system-can-help-small-retailers",
    //   title: "How a Point of Sale (POS) System Can Help Small Retailers",
    //   short_description: "A Point of Sale (POS) system helps small retailers by providing features like fast checkouts, inventory management, order tracking, and more.",
    //   description:'none',
    //   publish_date: "2023-05-31"
    // },
    // {
    //   image: "/assets/dist/image/Blog/Blog_8.webp",
    //   url: "/blogs/how-to-deal-with-difficult-customers-in-retail",
    //   slug:"how-to-deal-with-difficult-customers-in-retail",
    //   title: "How to Deal with Difficult Customers in Retail: 12 Tips to Follow",
    //   short_description: "Dealing with difficult customers in the retail business is always tough. With these 12 strategies, you can turn things around and make customers happy.",
    //   description:'none',
    //   publish_date: "2023-05-30"
    // },
    // {
    //   image: "/assets/dist/image/Blog/Blog_7.webp",
    //   url: "/blogs/how-to-increase-sales-for-retail-stores",
    //   slug:"how-to-increase-sales-for-retail-stores",
    //   title: "How to Increase Sales for Retail Stores: 13 Pro Tips",
    //   short_description: "Curious about how to increase sales for retail stores? Use these 13 pro tips to boost your daily retail sales and stand out in the market.",
    //   description:'none',
    //   publish_date: "2023-05-30"
    // },
    // {
    //   image: "/assets/dist/image/Blog/Blog_6.webp",
    //   url: "/blogs/how-to-start-a-food-business-in-australia",
    //   slug:"how-to-start-a-food-business-in-australia",
    //   title: "How to Start a Food Business in Australia 2023",
    //   short_description: "To start a successful flower business in Australia, you must follow our complete step-by-step guide. Make your flower store shine in 7 steps.",
    //   description:'none',
    //   publish_date: "2023-05-23"
    // },
    // {
    //   image: "/assets/dist/image/Blog/Blog_5.webp",
    //   url: "/blogs/how-to-start-a-flower-business-in-australia",
    //   slug:"how-to-start-a-flower-business-in-australia",
    //   title: "How to Start a flower business in Australia 2023",
    //   short_description: "Do you have a passion for flowers or simply recognise the growing demand and want to capitalize? No matter which category you fall into, starting a flower business in Australia in 2023 is super easy and profitable.",
    //   description:'none',
    //   publish_date: "2023-05-23"
    // },
    // {
    //   image: "/assets/dist/image/Blog/Blog_4.webp",
    //   url: "/blogs/how-to-start-a-business-in-australia-a-complete-checklist",
    //   slug:"how-to-start-a-business-in-australia-a-complete-checklist",
    //   title: "How to Start a Business in Australia- A Complete Checklist 2023",
    //   short_description: "Looking to start a new business? This is how you can successfully follow the startup checklist and implement it in Australia.",
    //   description:'none',
    //   publish_date: "2023-05-23"
    // },
    // {
    //   image: "/assets/dist/image/Blog/Blog_3.webp",
    //   url: "/blogs/pos-system-how-can-the-right-one-help-improve-a-small-business",
    //   slug:"pos-system-how-can-the-right-one-help-improve-a-small-business",
    //   title: "POS system: How Can the Right One Help Improve a Small Business",
    //   short_description: "Your small business probably has experimented with a number of marketing techniques over the years.",
    //   description:'none',
    //   publish_date: "2023-05-23"
    // },
    // {
    //   image: "/assets/dist/image/Blog/Blog_2.webp",
    //   url: "/blogs/what-is-contactless-payment-and-why-is-it-good-for-small-businesses",
    //   slug:"what-is-contactless-payment-and-why-is-it-good-for-small-businesses",
    //   title: "What is Contactless Payment and Why is it Good for Small Businesses?",
    //   short_description: " Many businesses have embraced a variety of technologies to operate more effectively since the COVID-19 outbreak. During this time, contactless payment has also",
    //   description:'none',
    //   publish_date: "2023-05-23"
    // },
    // {
    //   image: "/assets/dist/image/Blog/Blog_1.webp",
    //   url: "/blogs/online-ordering-system-5-reasons-why-all-small-businesses-need-it",
    //   slug:"online-ordering-system-5-reasons-why-all-small-businesses-need-it",
    //   title: "Online Ordering System-5 Reasons Why All Small Businesses Need It",
    //   short_description: "What factors contribute to a business’s success? Is it its business goals? Its team members? The quality of services it provides?",
    //   description:'none',
    //   publish_date: "2023-05-23"
    // },
  ],
  page: 1,
  blogDetail: {},
  notFound: false
};


const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {

    case "GET_BLOGS_SUCCESS":
      const nenData = [...state.blogsDatas, ...action.payload.data.data].reduce((acc, currentItem) => {
        const existingItem = acc.find((item: any) => item.id === currentItem.id);
        if (!existingItem) {
          acc.push(currentItem);
        }
        return acc;
      }, []);
      const num = state.page + 1;
      return {
        ...state,
        blogsDatas: nenData,
        page: 1
      };
    case "GET_BLOGS_DETAIL_SUCCESS":
      return {
        ...state,
        blogDetail: action.payload.data,
      };

    case "GET_BLOGS_DETAIL_FAILURE":
      return{
        ...state,
        notFound: true,
      };

    default:
      return state;
  }
}

export type { State };
export default reducer;