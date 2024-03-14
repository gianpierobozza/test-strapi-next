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
  console.log(JSON.stringify(homeData, null, 2))

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

      <div className="m-4">
        {homeData.data.attributes.HomepageTopCards.map((card: any, index: number) => (
          <div key={index}>
            <h1>{card.heading}</h1>
            <Markdown>{homeData.data.attributes.HomepageTopCards[0].text}</Markdown>
          </div>
        ))}
      </div>

      <div className="m-4">
        <div className={`grid grid-rows-${config.rows} grid-cols-${config.cols}`}>
          {cards.map((card: any, index: number) => {
            return (
              <div key={index}>
                <h1>{card.heading}</h1>
                <h1>{card.subheading}</h1>
                <Markdown>{card.text}</Markdown>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

async function getProps(lang: Locale) {
  const query = qs.stringify({
    populate: "*",
    locale: lang,
  });
  return await fetchAPI("/homepage?" + query);
}
