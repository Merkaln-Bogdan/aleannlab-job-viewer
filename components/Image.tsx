import Image from "next/image";

const imgLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 55}`;
};

const Img = ({ src, width, height, className }: any) => {
  return (
    <Image
      loader={imgLoader}
      src={src}
      alt="mini_post"
      width={width}
      height={height}
      style={{
        width: width,
        height: height,
      }}
      className={className}
      objectFit="cover"
    />
  );
};

export default Img;
