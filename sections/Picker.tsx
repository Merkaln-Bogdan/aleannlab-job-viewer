import { v4 as uuidv4 } from "uuid";

import { Headline } from "../components/Headline";
import Img from "../components/Image";

type PickerProps = {
  data: string[];
  label?: string;
  title?: string;
  className?: string;
  asImg?: boolean;
};

const defaultProps = {
  label: undefined,
  title: undefined,
  className: "",
  asImg: false,
};

export const Picker = (props: PickerProps) => {
  const { data, className, label, title, asImg } = {
    ...defaultProps,
    ...props,
  };

  return (
    <div className="text-dark">
      {title && (
        <Headline className="inline-block w-full mb-4 pb-2.5 mt-20 text-2xl font-bold border-b border-solid border-light">
          {title}
        </Headline>
      )}
      {label && <p className="mb-2.5">{label}</p>}
      <ul className="flex">
        {data &&
          data.map((el) => (
            <li
              key={uuidv4()}
              className={`rounded-lg font-bold mr-2.5 mb-4 text-center ${className}`}
            >
              {asImg ? (
                <Img src={el} width={200} height={115} className="rounded-lg" />
              ) : (
                el
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
