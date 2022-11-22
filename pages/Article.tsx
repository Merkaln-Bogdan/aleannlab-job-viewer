import Link from "next/link";
import { Headline } from "../components/Headline";
import { Icon } from "../components/Icon";

import { Img } from "../components/Image";
import { Rate } from "../components/Rating";
import { calculationDate } from "../helpers/datingHooks";

const Article = ({ article }: any) => {
  return (
    <li
      key={article.id}
      className="flex mb-2 bg-white px-4 py-6 rounded-lg items-center shadow shadow-el-sdw sm:flex-col-reverse sm:bg-bg_light"
    >
      <div className="flex">
        <Img
          src={article.pictures[1]}
          width={85}
          height={85}
          className="rounded-full w-14 h-14"
        />

        <Link
          href={`/article/${article.id}`}
          className="mx-8 sm:w-250px sm:mx-4"
        >
          <p className="font-bold text-dark text-base">{article.title}</p>
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

      <div className="text-lightgray flex justify-between ml-auto sm:m-0">
        <Rate rate={4} />
        <div className="flex flex-col justify-between w-40 items-end">
          <Icon name="BsBookmark" className="sm:hidden" />
          <Headline as="p">
            posted {calculationDate(article.updatedAt).postedDate} ago
          </Headline>
        </div>
      </div>
    </li>
  );
};

export { Article };
