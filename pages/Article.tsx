import Link from "next/link";
import { Icon } from "../components/Icon";

import Img from "../components/Image";

const Article = ({ article }: any) => {
  return (
    <li
      key={article.id}
      className="flex my-1 bg-white px-4 py-6 rounded-lg items-center"
    >
      <Img
        src={article.pictures[1]}
        width={85}
        height={85}
        className="rounded-full"
      />
      <Link href={`/${article.id}`} className="mx-8">
        <p className="font-bold text-dark text-base">
          Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
          Arzt/eine Ärztin (m/w/d) für die <br />
          Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)
        </p>
        <div className="text-lightgray">
          <p>
            Department name &#8226; Allgemeines Krankenhaus der Stadt Wien - AKH
          </p>

          <span className="flex">
            <Icon name="BsGeoAltFill" className="mr-2" /> Vienna, Austria
          </span>
        </div>
      </Link>
      <div className="text-lightgray flex flex-col justify-between ml-auto">
        <Icon name="BsBookmark" className="self-end" />
        posted 2 years ago
      </div>
    </li>
  );
};

export { Article };
