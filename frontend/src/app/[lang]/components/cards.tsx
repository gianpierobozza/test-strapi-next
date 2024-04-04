import cn from "@/lib/cn";
import Markdown from "react-markdown";

export interface CardsData {
  props: Card[];
}

interface Card {
  title: string;
  heading: string;
  subheading: string;
  text: string;
  cta: {
    action: string;
    type: string;
    text: string;
  };
  style: string;
  media: [
    {
      medium: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    }
  ];
}

function Cards({ props }: CardsData) {
  return props.map((card: Card, index: number) => (
    <div
      key={index}
      className="m-4 bg-white p-6 lg:p-12 rounded-xl shadow-soft-48 overflow-hidden"
    >
      <div className="text-center">{card.title}</div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div
          className={cn(
            "flex",
            "flex-col",
            "gap-4",
            card.style.replace('_', '-') === "text-start" ? "order-1" : "order-2"
          )}
        >
          <h1>{card.heading}</h1>
          <h2>{card.subheading}</h2>
          <Markdown>{card.text}</Markdown>
          {card.cta && (
            <div className="mt-auto">
              <a href={card.cta.action}>
                {card.cta.type === "button" ? (
                  <button className="btn btn-large btn-filled">
                    {card.cta.text}
                  </button>
                ) : (
                  card.cta.text
                )}
              </a>
            </div>
          )}
        </div>
        <div
          className={cn("rounded-lg", "overflow-hidden", card.style.replace('_', '-') === "text-start" ? "order-2" : "order-1")}
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
  ));
}

export default Cards;
