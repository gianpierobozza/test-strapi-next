import { Locale } from "@/i18n-config";
import { fetchAPI } from "../../../lib/fetch-api";
import qs from "qs";
import Markdown from "react-markdown";

export default async function Homepage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const homeData = await getProps(lang);
  //console.log(JSON.stringify(homeData, null, 2));

  const config = homeData.data.attributes.HomepageDynamicCards.find(
    (item: any) => item.__component === "blocks.dynamic-cards-config"
  );

  const cards = homeData.data.attributes.HomepageDynamicCards.filter(
    (item: any) => item.__component === "page-elements.card"
  );

  return (
    <div className="container">
      <div className="m-4">
        <h1>Metadata</h1>
        <p>{`metaTitle: ${homeData.data.attributes.HomePageSeo.metaTitle}`}</p>
        <p>{`metaDescription: ${homeData.data.attributes.HomePageSeo.metaDescription}`}</p>
        <p>{`shareImageAlt: ${homeData.data.attributes.HomePageSeo.shareImageAlt}`}</p>
        <p>{`keywords: ${homeData.data.attributes.HomePageSeo.keywords}`}</p>
        <p>{`keywords: ${homeData.data.attributes.HomePageSeo.preventingIndex}`}</p>
      </div>

      <div className={`m-4 text-${homeData.data.attributes.Header.style}`}>
        <h1>{`${homeData.data.attributes.Header.heading}`}</h1>
        <h2>{`${homeData.data.attributes.Header.subheading}`}</h2>
        <p>{`${homeData.data.attributes.Header.slogan}`}</p>
        <p>{`${homeData.data.attributes.Header.description}`}</p>
      </div>

      <div className="m-4 bg-white p-6 lg:p-12 rounded-xl shadow-soft-48 overflow-hidden">
        {homeData.data.attributes.HomepageTopCards.map(
          (card: any, index: number) => (
            <div key={index}>
              <div className="text-center">{card.title}</div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div
                  className={`flex flex-col gap-4 order-${
                    card.style === "text-start" ? "1" : "2"
                  }`}
                >
                  <h1>{card.heading}</h1>
                  <h2>{card.subheading}</h2>
                  <Markdown>{card.text}</Markdown>
                </div>
                <div
                  className={`rounded-lg overflow-hidden order-${
                    card.style === "text-start" ? "2" : "1"
                  }`}
                >
                  {card.media.map((media: any, index: number) => {
                    return (
                      <img
                        key={index}
                        className="w-full h-full"
                        src={`http://localhost:1337${media.medium.data.attributes.url}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="m-4">
        <div
          className={`grid grid-rows-${config.rows} grid-cols-${config.cols} grid-flow-${config.gridFlow} gap-8`}
        >
          {cards.map((card: any, index: number) => {
            return (
              <div
                className="bg-white p-6 lg:p-8 h-full rounded-xl shadow-soft-48 overflow-hidden"
                key={index}
              >
                {card.media.map((media: any, index: number) => {
                  return (
                    <img
                      key={index}
                      src={`http://localhost:1337${media.medium.data.attributes.url}`}
                    />
                  );
                })}
                <h1>{card.heading}</h1>
                <h2>{card.subheading}</h2>
                <Markdown>{card.text}</Markdown>
              </div>
            );
          })}
        </div>
      </div>

      <div className="m-4 bg-white p-6 lg:p-12 rounded-xl shadow-soft-48 overflow-hidden">
        {homeData.data.attributes.HomepageBottomCards.map(
          (card: any, index: number) => (
            <div key={index}>
              <div className="text-center">{card.title}</div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div
                  className={`flex flex-col gap-4 order-${
                    card.style === "text-start" ? "1" : "2"
                  }`}
                >
                  <h1>{card.heading}</h1>
                  <h2>{card.subheading}</h2>
                  <Markdown>{card.text}</Markdown>
                </div>
                <div
                  className={`rounded-lg overflow-hidden order-${
                    card.style === "text-start" ? "2" : "1"
                  }`}
                >
                  {card.media.map((media: any, index: number) => {
                    return (
                      <img
                        key={index}
                        className="w-full h-full"
                        src={`http://localhost:1337${media.medium.data.attributes.url}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

async function getProps(lang: Locale) {
  /*
    http://localhost:1337/api/homepage?
    populate[HomePageSeo][populate][0]=media.medium&
    populate[Header][populate][0]=homeCTA.medium&
    populate[HomepageTopCards][populate][0]=media.medium&
    populate[HomepageTopCards][populate][1]=cta.medium&
    populate[HomepageDynamicCards][populate][0]=media.medium&
    populate[HomepageDynamicCards][populate][1]=cta.medium&
    populate[HomepageBottomCards][populate][0]=media.medium&
    populate[HomepageBottomCards][populate][1]=cta.medium 
  */
  const query = qs.stringify({
    populate: {
      HomePageSeo: {
        populate: ["media.medium"],
      },
      Header: {
        populate: ["homeCTA.medium"],
      },
      HomepageTopCards: {
        populate: ["media.medium", "cta.medium"],
      },
      HomepageDynamicCards: {
        populate: ["media.medium", "cta.medium"],
      },
      HomepageBottomCards: {
        populate: ["media.medium", "cta.medium"],
      },
    },
    locale: lang,
  });
  return await fetchAPI("/homepage?" + query);
}
