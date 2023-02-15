import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-bold text-2xl text-white">
            Semaias Rangel
          </p>
          <p className="font-playfair text-md text-white">
            ©2023 RANGEL. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
