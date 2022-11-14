import Image from "next/image";

const imgLoader = ({ src }: any) => {
  return src;
};

const Img = ({ src }: any) => {
  return (
    <Image
      loader={imgLoader}
      src={src}
      alt="mini_post"
      width={50}
      height={50}
    />
  );
};

export default Img;
