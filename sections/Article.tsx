import Link from "next/link";
import dynamic from "next/dynamic";

import { calculationDate } from "../helpers/datingHooks";
import { phoneBreakpoint } from "./Header";

import { ArticleType } from "../types/common.types";

import { Headline } from "../components/Headline";
import { Icon } from "../components/Icon";

const Rate = dynamic(() => import("../components/Rating"), {
  ssr: false,
});

const Img = dynamic(() => import("../components/Image"), {
  ssr: false,
});

export type ArticleProps = {
  article: ArticleType;
};

const Article = (props: ArticleProps) => {
  const { article } = { ...props };

  const { id, pictures, title, createdAt } = article;
  const widthImage = phoneBreakpoint ? 55 : 85;

  return (
    <li
      key={id}
      className="flex mb-2 bg-white px-4 py-6 rounded-lg items-center shadow shadow-el-sdw sm:flex-col-reverse sm:bg-bg_light"
    >
      <div className="flex w-full">
        <Img
          src={pictures[1]}
          width={widthImage}
          height={widthImage}
          className="rounded-full"
        />

        <Link
          href={`/article/${id}`}
          className="max-w-max_width_link mx-8 sm:mx-4 sm:max-w-max_phone_width_link"
        >
          <p className="font-bold text-dark text-base">{title}</p>
          <div className="text-lightgray font-light">
            <p>
              Department name &#8226; Allgemeines Krankenhaus der Stadt Wien -
              AKH
            </p>

            <span className="flex">
              <Icon name="BsGeoAltFill" className="mr-2" /> Vienna, Austria
            </span>
          </div>
        </Link>
      </div>

      <div className="flex justify-between items-center ml-auto text-lightgray sm:m-0">
        <Rate rate={4} />

        <div className="flex flex-col justify-between h-20 w-40 items-end sm:h-auto">
          <Icon name="BsBookmark" className="sm:hidden" />
          <Headline as="p">
            posted {calculationDate(createdAt).postedDate} ago
          </Headline>
        </div>
      </div>
    </li>
  );
};

export { Article };
