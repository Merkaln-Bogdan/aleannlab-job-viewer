import { useRouter } from "next/router";

import Map from "../../components/Map";

import { Button } from "../../components/Button";

import { calculationDate } from "../../helpers/datingHooks";
import { dataTest } from "../api/testData";
import { Header } from "../../sections/Header";
import { Headline } from "../../components/Headline";
import { Info } from "../../components/Info";
import { Picker } from "../../sections/Picker";
import { Icon } from "../../components/Icon";
import Layout from "../../sections/Layout";

export const getServerSideProps = async (context: {
  params: { id: string };
}) => {
  const { id } = context.params;
  // should be request with id
  const response = await fetch(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const article = data?.filter((el: any) => el.id === id)[0];

  return {
    props: { article: article },
  };
};

const Details = ({ article }: any) => {
  const {
    description,
    pictures,
    salary,
    benefits,
    employment_type,
    updatedAt,
    title,
  } = article;

  const router = useRouter();

  return (
    <Layout>
      <div className="max-w-6xl m-auto flex py-14 sm:flex-col sm:px-4">
        <div className="w-4/6 mr-20 sm:mr-0 sm:w-full">
          <main className="mt-5">
            <Header title="Job Details" />

            <Button className="bg-dark text-white sm:hidden">Apply Now</Button>

            <Info className="flex justify-between mt-8 text-2xl font-bold mt-8 sm:mt-11 sm:mb-4 sm:flex-col">
              <Headline as="p" className="w-3/5 text-2xl font-bold ">
                {title}
              </Headline>
              <Headline
                as="span"
                className="text-xl flex flex-col sm:flex-col-reverse sm:self-end"
              >
                &#8364; {salary.replace(/\k/g, " 000")}
                <Headline as="p" className="text-base font-normal">
                  Brutto, per year
                </Headline>
              </Headline>
            </Info>

            <div className="flex">
              <p className="text-light sm:mt-mar_min_mid">
                Posted
                {calculationDate(updatedAt).postedDate}
                ago
              </p>
            </div>
            <Info>{description}</Info>

            <Info label="Responsibilities" className="flex flex-col">
              {description}
            </Info>

            <Info label="Compensation & Benefits:" className="flex flex-col">
              {description}
            </Info>

            <Button
              onClick={() => null}
              className="bg-dark text-white sm:m-auto"
            >
              Apply Now
            </Button>

            <div className="flex flex-col sm:flex-col-reverse">
              <Picker
                data={employment_type}
                label="Employment type"
                title="Additional info"
                className="w-56 py-4 px-8 bg-light border border-solid border-b_light"
              />

              <Picker
                data={benefits}
                label="Benefits"
                className="w-56 py-4 px-8 bg-light_yellow text-dark_yellow border border-solid border-yellow"
              />

              <Picker data={pictures} asImg title="Attaches images" />
            </div>
          </main>

          <Button
            onClick={() => router.back()}
            className="mt-20 ml-mar_min_lg bg-light text-dark sm:hidden"
          >
            <Icon name="BsChevronLeft" className="mr-4" />
            Return to job board
          </Button>
        </div>

        <Headline className="inline-block w-full mb-4 pb-2.5 mt-20 text-2xl font-bold border-b border-solid border-light lg:hidden">
          Contacts
        </Headline>
        <Map center={{ lat: 103.323006, long: -29.850569 }} />
      </div>
    </Layout>
  );
};

export default Details;
