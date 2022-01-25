/* This example requires Tailwind CSS v2.0+ */
import WhiteCapPic from "../assets/images/whitecappic.jpg";

const projects = [
  {
    name: "CookiT",
    image: "http://cookit-2018.herokuapp.com/static/media/Logo.003092cb.png",
    githubLink: "https://github.com/DeclanMorrison/Cookit",
    liveLink: "http://cookit-2018.herokuapp.com/login",
    description: ` Hosted on Heroku, this app lets users search, favorite, and add recipes to a weekly calander which builds out a grocery list for the user.`,
  },
  {
    name: "iRyde",
    image:
      "data:image/png;base64,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",
    githubLink: "https://github.com/Izaakmills/codeteam-6",
    liveLink: "",
    description: "A price comparison tool between lyft and uber",
  },
  {
    name: "TappyHour",
    image: "https://tranquil-fjord-50136.herokuapp.com/images/logo.png",
    githubLink: "https://github.com/Izaakmills/project-2",
    liveLink: "https://tranquil-fjord-50136.herokuapp.com/",
    description: `A full stack application complete with server side
    authorization that details local happy hours.`,
  },
  {
    name: "Hangman",
    image: "https://image.freepik.com/free-icon/question-mark_318-52837.jpg",
    githubLink: "https://github.com/Izaakmills/hangman",
    liveLink: "https://izaakmills.github.io/hangman/",
    description: `A word guessing game that challenges your intellect!`,
  },
  {
    name: "Trivia Game",
    image: "https://upload.wikimedia.org/wikipedia/en/2/27/Trivia.png",
    githubLink: "https://github.com/Izaakmills/Trivia-Game",
    liveLink: "https://izaakmills.github.io/Trivia-Game/",
    description: `A question game that makes you think...but only a little bit.`,
  },
  {
    name: "Giphy App",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uofOgFFG8ss97XLvTm_3UlYicQyCfe6Gi8RiAj8WYgiey6n3qA",
    githubLink: "https://github.com/Izaakmills/Trivia-Game",
    liveLink: "https://izaakmills.github.io/Trivia-Game/",
    description: ` A giphy website that returns to the user giphs from a user
    generated search term.`,
  },
];

export default function MainContent() {
  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Hi, I'm Izaak
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              I enjoy learning new things and solving problems.
            </p>
          </div>
        </div>
      </div>
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Bootcamp projects
          </h1>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {projects.map((project) => (
            <>
              <div
                key={project.name}
                className="flex flex-col bg-white rounded-2xl shadow-xl mb-12 justify-center"
              >
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8 text-center">
                  <img
                    style={{
                      objectFit: "cover",
                      width: "320px",
                      height: "180px",
                    }}
                    alt={project.name}
                    src={project.image}
                    lazyLoad={true}
                  />
                  <h3 className="text-xl font-medium text-gray-900">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">
                    {project.description}
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a
                    href={project.githubLink}
                    className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                  >
                    Github link<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a
                    href={project.liveLink}
                    className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                  >
                    Live link<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}
