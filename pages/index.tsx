import { Key, useEffect, useState } from "react";
import Img from "../components/Image";
// import Image from "next/image";

import Layout from "../sections/Layout";

import styles from "../styles/Home.module.css";

type ArticleProps = {
  id: Key | null | undefined;
  address: string;
  benefits: string;
  createdAt: string;
  description: string;
  email: string;
  pictures: string[];
};

const Home = () => {
  const [list, setList] = useState<ArticleProps[]>();
  useEffect(() => {
    fetch(
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
    )
      .then((resp) => resp.json())
      .then((json) => setList(json));
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <ul>
          {list &&
            list.map((article: ArticleProps) => {
              const myLoader = ({ src }: any) => {
                return src;
              };

              return (
                <li key={article.id}>
                  <Img src={article.pictures[1]} />
                  <p>{article.description}</p>
                  <p>{article.address}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
