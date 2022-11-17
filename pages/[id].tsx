import Img from "../components/Image";
import { Map } from "../components/Map";
import moment from "moment";
import { Icon } from "../components/Icon";
import { Button } from "../components/Button";

export const getServerSideProps = async (context: {
  params: { id: string };
}) => {
  const { id } = context.params;
  /// i think should be request with id
  const response = await fetch(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const article = data.filter((el: any) => el.id === id)[0];

  return {
    props: { article: article },
  };
};

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
  } = article;

  const calculationDate = (updatedAt: string) => {
    const now = moment();
    const updatedDate = moment(updatedAt);

    const diff = now.diff(updatedDate);
    const diffDuration = moment.duration(diff);
    console.log(diffDuration.years() === 0);
    return {
      diffYears: diffDuration.years(),
      diffMonth: now.month(),
      diffDays: now.date(),
    };
  };

  return (
    <div className="flex container md">
      <div className="w-4/6 mr-28">
        <Icon name="BsFillShareFill" />
        <Button className="">Apply Now</Button>
        <p>{description}</p>
        <p>{address}</p>
        <p>{salary}</p>
        <p>{calculationDate(updatedAt).diffYears} years ago</p>
        <p>{calculationDate(updatedAt).diffMonth} month ago</p>
        <p>{calculationDate(updatedAt).diffDays} days ago</p>
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
        <div>
          {pictures.map((img: string, ind: number) => (
            <Img src={img} key={img + ind} width={100} height={100} />
          ))}
        </div>
      </div>
      <Map center={{ lat: 103.323006, long: -29.850569 }} />
    </div>
  );
};

export default Details;
