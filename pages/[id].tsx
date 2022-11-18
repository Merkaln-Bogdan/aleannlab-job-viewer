import { Img } from "../components/Image";
import { Map } from "../components/Map";

import { Button } from "../components/Button";

import { calculationDate } from "../helpers/datingHooks";
import { dataTest } from "./api/testData";
import { Header } from "../sections/Header";
import { Headline } from "../components/Headline";
import { Info } from "../components/Info";

export const getServerSideProps = async (context: {
  params: { id: string };
}) => {
  const { id } = context.params;
  /// should be request with id
  // const response = await fetch(
  //   "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  // );
  // const data = await response.json();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  const article = dataTest.filter((el: any) => el.id === id)[0];

  return {
    props: { article: article },
  };
};
console.log(process.env.GOOGLE_MAP_API_KEY);
const Details = ({ article }: any) => {
  console.log(article);
  const {
    description,
    address,
    pictures,
    salary,
    benefits,
    employment_type,
    updatedAt,
    title,
  } = article;

  return (
    <div className="flex container md py-14">
      <div className="w-4/6 mr-28">
        <Header title="Job Details" />

        <Button>Apply Now</Button>
        <div className="flex">
          <p>&#8364;{salary}</p>
        </div>
        <Info>{title}</Info>
        <div className="flex">
          <p className="text-light">
            Posted {calculationDate(updatedAt).diffYears} years ago
            {calculationDate(updatedAt).diffMonth} month ago
            {calculationDate(updatedAt).diffDays} days ago
          </p>
        </div>
        <Info>{description}</Info>

        <Info label="Responsibilities">{description}</Info>

        <Info label="Compensation & Benefits:">{description}</Info>

        <p>{address}</p>

        <div>
          {benefits.map((str: string, ind: number) => (
            <span key={str + ind}>{str}</span>
          ))}
        </div>
        <div>
          {employment_type.map((str: string, ind: number) => (
            <span key={str + ind}>{str}</span>
          ))}
        </div>
        <div className="flex">
          {pictures.map((img: string, ind: number) => (
            <Img src={img} key={img + ind} width={200} height={120} />
          ))}
        </div>
      </div>
      <Map center={{ lat: 103.323006, long: -29.850569 }} />
    </div>
  );
};

export default Details;
