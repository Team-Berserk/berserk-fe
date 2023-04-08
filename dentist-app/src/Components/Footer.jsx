import FooterData from "./Json/FooterJson.json";

export const Footer = () => {
  return (
    <div className="border-2 border-rose-600 w-screen absolute bottom-0">
      <div className="flex justify-around items-center h-96">
        {/* Sections */}

        {/* Socials */}
        <div className="flex flex-col justify-end w-fit gap-2">
          <div className="border-y-0 border-rose-500">Facebook</div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100057076555186&tabs=PAGE&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            title="facebook"
          />
        </div>
        {/* Socials */}

        <div className="flex justify-end mx-16 gap-5 ">
          <div className=" w-56">
            <div className="text-lg">Үйлчилгээ</div>
            {FooterData &&
              FooterData.Үйлчилгээ.map((item, index) => {
                return (
                  <div key={index}>
                    <h2 className="text-lg ">{item.type}</h2>
                  </div>
                );
              })}
          </div>
          <div className="x w-56">
            <div className="text-lg">Цагийн хуваарь</div>
            {FooterData &&
              FooterData.Цагийнхуваарь.map((item, index) => {
                return (
                  <div key={index}>
                    <h2 className="text-lg">{item.Schedule}</h2>
                  </div>
                );
              })}
          </div>
          <div className="flex flex-col  w-56 gap-3">
            <div>
              <div>ХАЯГ:</div>
              <div>13-р хорооллын Наран дэлгүүртэй 3-н өндөрт</div>
            </div>
            <div>
              <div>УТАС:</div>
              <div>7011 8778</div>
            </div>
            <div>
              <div>Email: </div>
              <div>soddent@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};