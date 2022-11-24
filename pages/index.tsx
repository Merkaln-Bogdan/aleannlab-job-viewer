import { Article } from "../sections/Article";
import { Layout } from "../sections/Layout";

export type ArticleType = {
  id: string | number;
  address: string;
  benefits: [];
  title: string;
  createdAt: string;
  description: string;
  email: string;
  pictures: string[];
  salary: string;
  employment_type: [];
};

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=AIzaSyDIsWcwptbQZ5jBvEHvuB1AjCeWaXOoWRo" ///should be proccess.env.API_KEY
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
type ListProps = {
  articles: ArticleType[];
};
const Home = (props: ListProps) => {
  const { articles } = { ...props };
  return (
    <Layout>
      <div className="flex justify-center items-center py-4 bg-light sm:px-2">
        {articles && (
          <ul className="w-4/5 sm:w-full">
            {articles.map((article: ArticleType) => (
              <Article article={article} key={article.id} />
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Home;
