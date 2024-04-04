import cn from "@/lib/cn";
import Cards, { CardsData } from "./cards";

interface DynamicCardsConfigData {
  rows: number;
  cols: number;
  gridFlow: string;
}

export interface DynamicCardsData {
  props: {
    config: DynamicCardsConfigData;
    cards: CardsData["props"];
  };
}

function DynamicCards({ props }: DynamicCardsData) {
  const { config, cards } = props;
  const gridRows = "grid-rows-" + config.rows;
  const gridCols = "grid-cols-" + config.cols;
  const gridFlow = "grid-flow-" + config.gridFlow;
  
  return (
    <div className="m-4">
      <div className={cn("grid", gridRows, gridCols, gridFlow, "gap-8")}>
        <Cards props={cards} />
      </div>
    </div>
  );
}

export default DynamicCards;
