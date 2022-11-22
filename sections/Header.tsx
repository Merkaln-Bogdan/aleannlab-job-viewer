import { Icon } from "../components/Icon";

type HeadlineProps = {
  title: string;
};

const Header = ({ title }: HeadlineProps) => (
  <div className="flex justify-between items-center text-dark py-2.5 border-b border-solid border-light">
    <h2 className="font-bold text-3xl">{title}</h2>

    <div className="flex items-center  sm:absolute sm:top-36">
      <Icon name="BsFillShareFill" label="Save to my list" className="mr-7" />

      <Icon name="BsBookmark" label="Share" />
    </div>
  </div>
);

export { Header };
