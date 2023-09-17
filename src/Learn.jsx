import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import QuizPreview from "./Components/QuizPreview";
import QuizQuestion from "./Components/QuizQuestion";
import Refresh from "./assets/rotate-right-solid.svg";

import { useState } from "react";

export default function Learn() {
  const [selectedQuiz, setSelectedQuiz] = useState(-1);

  const [quizzes, setQuizzes] = useState([
    {
      title: "dkflksdsffds",
      description: "Non ad occaecat adipisicing deserunt et qui qui. ",
      category: "safsdff",
      body: "Amet incididunt magna qui incididunt officia. Laborum magna consequat proident exercitation irure ad. Ad adipisicing deserunt Lorem minim sit voluptate mollit non sunt tempor nulla. Commodo et qui ullamco ea dolore ut culpa enim.",
      question:
        "Qui pariatur est ad labore Lorem pariatur voluptate incididunt laboris pariatur consectetur.",
    },
  ]);

  return (
    <div>
      <NavBar />
      <div className="center-page">
        {/* Quiz Selection */}
        {selectedQuiz == -1 ? (
          <div className="lg:w-[45vw] mt-12 mb-8">
            <div className="flex">
              <div className="text-2xl font-bold">Pick Your Learning Path</div>
              <img className="w-4 ml-auto mr-3 cursor-pointer" src={Refresh} />
            </div>
            <div
              onClick={async () => {
                setSelectedQuiz(0);
                const res = await generateArticles();
                console.log(res);
              }}
            >
              {quizzes.map((q, i) => (
                <div onClick={() => setSelectedQuiz(i)}>
                  <QuizPreview
                    title={q.title}
                    desc={q.description}
                    category={q.category}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Article
          <div className="lg:w-[66vw] mt-16 grid grid-cols-1 lg:grid-cols-5 lg:gap-x-10">
            <div className="col-span-3 lg:border-r pr-10 ml-5 lg:ml-0">
              <h2>{quizzes[selectedQuiz].title}</h2>
              <div className="mt-3">{quizzes[selectedQuiz].body}</div>
            </div>
            <div className="col-span-2 mt-32 lg:mt-0 mx-5 lg:mx-0">
              <h1 className="mb-10">Done reading? Quiz Yourself!</h1>
              <QuizQuestion question={quizzes.question} />
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
