import Option from "./Option";
import Category from "./Category";
import Alert from "./Alert";
import { useState } from "react";

const Generator = () => {
  const [data, setData] = useState({});
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleGenerate = () => {
    let md = "";
    // Welcome
    data.logo ? (md += `![logo](${data.logo})\n\n`) : null;
    data.name
      ? (md += `<img alt="${data.name}" align="center" src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=19&pause=850&color=986BEB&center=false&vCenter=true&width=435&lines=Hello,+I'm+${data.name}! 😊">\n<br>\n`)
      : null;
    data.subtitle ? (md += `${data.subtitle}\n\n`) : null;
    // About me
    data.aboutme ? (md += `## 🚀 About Me\n\n`) : null;
    data.aboutme ? (md += `${data.aboutme}\n\n`) : null;

    // Skills
    data.technologies ? (md += `## 🛠️ Skills\n\n`) : null;
    data.technologies
      ? (md += `![My Skills](https://skillicons.dev/icons?i=${data.technologies})\n\n`)
      : null;

    // Contact
    data.discord ? (md += `## 📧 Contact\n\n`) : null;
    data.discord
      ? (md += `👨‍💻 Discord: [${data.discord}](${data.discord})\n\n`)
      : null;
    data.twitter
      ? (md += `🐦 Twitter: [${data.twitter}](https://twitter.com/${data.twitter})\n\n`)
      : null;
    data.instagram
      ? (md += `📸 Instagram: [${data.instagram}](https://instagram.com/${data.instagram})\n\n`)
      : null;
    data.linkedin
      ? (md += `👔 LinkedIn: [${data.linkedin}](https://linkedin.com/in/${data.linkedin})\n\n`)
      : null;

    data.ghname
      ? (md += `<details>
  <summary>⚡GitHub Stats</summary>

  <a href="#">![Github stats](https://github-readme-stats.vercel.app/api?username=${data.ghname}&theme=blueberry&count_private=true&hide_border=true&line_height=20)</a>
  <a href="#">![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.ghname}&layout=compact&theme=blueberry&count_private=true&hide_border=true)</a>
</details>`)
      : null;

    setCode(md);
  };

  return (
    <>
      <div>
        <Category title="Welcome" />
        <Option
          id="logo"
          title="Logo"
          placeholder="https://... (empty if you don't want a logo)"
          onChange={handleChange}
        />
        <Option
          id="name"
          title="Username"
          placeholder="wuuu"
          onChange={handleChange}
        />
        <Option
          id="ghname"
          title="GitHub name"
          placeholder="ideabreaker"
          onChange={handleChange}
        />
        <Option
          id="subtitle"
          title="Subtitle"
          placeholder="frontend developer"
          onChange={handleChange}
        />
      </div>
      <div>
        <Category title="About me" />
        <Option
          id="aboutme"
          title="Text"
          placeholder="I love to code and learn new things everyday. I'm currently working on a project called wuuu, a social network for developers."
          onChange={handleChange}
        />
        <Option
          id="technologies"
          title="Technologies"
          placeholder="react,typescript,javascript etc."
          onChange={handleChange}
        />
      </div>
      <div>
        <Category title="Contact" />
        <Option
          id="discord"
          title="Discord Link"
          placeholder="discord.gg/..."
          onChange={handleChange}
        />
        <Option
          id="email"
          title="Email"
          placeholder="em@il.com"
          onChange={handleChange}
        />
        <Option
          id="twitter"
          title="Twitter"
          placeholder="wuuu"
          onChange={handleChange}
        />
      </div>
      <button
        className="mr-16 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={handleGenerate}
      >
        Generate
      </button>

      {code && <Alert code={code} setCode={setCode} />}
    </>
  );
};

export default Generator;
