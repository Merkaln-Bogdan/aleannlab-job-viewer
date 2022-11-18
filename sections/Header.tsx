import { Icon } from "../components/Icon";

type HeadlineProps = {
  title: string;
};
// after:content-[''] after:absolute after:inset-y-0 after:w-full after:border-solid after:border-b-2 after:border-dark
const Header = ({ title }: HeadlineProps) => (
  <div className="flex justify-between items-center text-dark py-2.5 border-b border-solid border-light">
    <h2 className="font-bold text-3xl">{title}</h2>

    <div className="flex items-center">
      <Icon name="BsFillShareFill" label="Save to my list" className="mr-7" />

      <Icon name="BsBookmark" label="Share" />
    </div>
  </div>
);

export { Header };
