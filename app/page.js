

import IFHome from "./assets/components/home";
import icon from '../public/assets/imgs/favicon.ico';

export default function home() {

  return (
    <div className="bg-[#101010] pb-[9.3rem]">
      <link rel="shortcut icon" href={icon.src} />
        <div className="w-screen">
            <IFHome />
        </div>
    </div>
  );
}