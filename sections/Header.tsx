import { Icon } from "../components/Icon";

type HeadlineProps = {
  title: string;
};

export const phoneBreakpoint =
  typeof window !== "undefined" ? window.innerWidth < 647 : null;

const Header = ({ title }: HeadlineProps) => (
  <div className="flex justify-between items-center text-dark py-2.5 border-b border-solid border-light">
    <h2 className="font-bold text-3xl">{title}</h2>

    <div className="flex items-center  sm:absolute sm:top-40">
      <Icon
        name={phoneBreakpoint ? "BsStar" : "BsBookmark"}
        label="Save to my list"
        className="mr-7"
      />

      <Icon name="BsFillShareFill" label="Share" />
    </div>
  </div>
);

export { Header };
