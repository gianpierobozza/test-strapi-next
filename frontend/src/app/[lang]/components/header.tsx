import cn from "@/lib/cn";
import { DivProps } from "react-html-props";

interface HeaderProps extends DivProps {
  props: {
    heading: string;
    subheading: string;
    slogan: string;
    description: string;
    style: string;
    homeCTA?: {
      action: string;
      type: "button" | "link";
      text: string;
    };
  };
}

export default function Header({ props }: HeaderProps) {
  return (
    <div className={cn('m-4', props.style)}>
      <h1>{`${props.heading}`}</h1>
      <h2>{`${props.subheading}`}</h2>
      <p>{`${props.slogan}`}</p>
      <p>{`${props.description}`}</p>
      {props.homeCTA && (
        <a href={props.homeCTA.action}>
          {props.homeCTA.type === "button" ? (
            <button className="btn btn-large btn-filled">
              {props.homeCTA.text}
            </button>
          ) : (
            props.homeCTA.text
          )}
        </a>
      )}
    </div>
  );
};
