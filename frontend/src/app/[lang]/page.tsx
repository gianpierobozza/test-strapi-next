"use client";

import { Locale } from "@/i18n-config";
import { useQuery } from "@apollo/client";
import { getHomepage as getHomePage } from "@/query/schema";
import HomepageSeo from "./components/homepage-seo";
import Header from "./components/header";
import Cards from "./components/cards";
import DynamicCards from "./components/dynamic-cards";

export default function Homepage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { loading, error, data } = useQuery(getHomePage(lang));
  let config: any;
  let cards: any;

  if (data) {
    config = data.homepage.data.attributes.HomepageDynamicCards.find(
      (item: any) => item.__typename === "ComponentBlocksDynamicCardsConfig"
    );
    cards = data.homepage.data.attributes.HomepageDynamicCards.filter(
      (item: any) => item.__typename === "ComponentPageElementsCard"
    );
  }

  return (
    <div>
      {loading && <div className="m-4">Loading...</div>}
      {error && <div className="m-4">Error: {error.message}</div>}
      {data && (
        <div className="items-center">
          <HomepageSeo props={data.homepage.data.attributes.HomePageSeo} />
          <Header props={data.homepage.data.attributes.Header} />
          <Cards props={data.homepage.data.attributes.HomepageTopCards} />
          <DynamicCards props={{ config, cards }} />
          <Cards props={data.homepage.data.attributes.HomepageBottomCards} />
        </div>
      )}
    </div>
  );
}
