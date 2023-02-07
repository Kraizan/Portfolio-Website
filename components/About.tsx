/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
export default function About() {
  return (
    <div id="About" className="flex my-16 justify-between">
      <div style={{ width: "65%" }}>
        <div className="text-5xl mb-4 text-beige font-medium">About</div>
        <div className="text-xl">
          <p>
            Hey, my name is Vanshaj Bhatnagar and I use Kraizan as my nickname
            across most platforms. The word 'Kraizan' is derived from the
            japanese word 'Kaizen' which means 'improve for the better'.
          </p>
          <br />
          <p>
            I am a Web Developer from India, looking forward to be a Web3
            Developer in the near future. I am also a passionate Competitive
            Programmer who regularly takes part in coding competitions.
          </p>
          <br />
          <p>
            My leisure time usually passes by watching anime or playing the
            latest video games. Ping me if you're an Otaku. 😉
          </p>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "30%",
          float: "right",
          marginLeft: "40px",
        }}
      >
        <Image
          src={require("/public/images/me.jpg")}
          alt="Profile"
          style={{
            objectFit: "fill",
            borderRadius: "15px",
            borderWidth: "3px",
            borderColor: "beige",
          }}
        />
      </div>
    </div>
  );
}
