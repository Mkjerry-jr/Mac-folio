import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Manoj Kumar K. I am a Computer Science student
               passionated in Developing Websites. Now Turning towards Generative AI.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Generative AI / Computer Vision / MERN Stack / Cloud Automation"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "Open to work as a Intern."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:mkjerry.dev@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                mkjerry.dev@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Mkjerry-jr"
                target="_blank"
                rel="noreferrer"
              >
                @Mkjerry-jr
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/manoj-kumar-k-27b338250/"
                target="_blank"
                rel="noreferrer"
              >
                Manoj Kumar K
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://mkjerry.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                https://mkjerry.netlify.app
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">Travelling</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">Peace</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
