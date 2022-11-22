import { Key } from "react";

import { Article } from "./Article";
import Layout from "../sections/Layout";
import { dataTest } from "./api/testData";

export type ArticleProps = {
  id: string | number | boolean | Key;
  address: string;
  benefits: string;
  createdAt: string;
  description: string;
  email: string;
  pictures: string[];
};

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { articles: data },
  };
};

const Home = ({ articles }: any) => {
  console.log(articles);
  return (
    <Layout>
      <div className="flex justify-center items-center py-4 bg-light sm:px-2">
        {articles && (
          <ul className="w-4/5 sm:w-full">
            {articles.map((article: ArticleProps) => (
              <Article article={article} key={article.id} />
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Home;
