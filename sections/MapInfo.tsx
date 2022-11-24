import { Headline } from "../components/Headline";
import { Icon } from "../components/Icon";

export const MapInfo = () => (
  <div className="absolute flex flex-col justify-center px-14 py-7 w-full h-2/4 bg-dark text-white z-50 overflow-hidden hover:hidden">
    <div className="absolute w-60 h-60 -left-16 -top-2.5 bg-bg_map rounded-full z-[-1]"></div>
    <Headline as="p" className="font-bold">
      Department name. University Hospital Giessen.
    </Headline>
    <Headline as="p" className="flex">
      <Icon name="BsGeoAltFill" label="AKH Wien, 1090 Wien, Währinger" />
    </Headline>
    <Headline> Gürtel 18-20 </Headline>
    +43 (01) 40400-12090, post_akh_diz@akhwien.at
  </div>
);
