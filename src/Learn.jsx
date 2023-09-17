import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import QuizPreview from "./Components/QuizPreview";
import QuizQuestion from "./Components/QuizQuestion";

import { useState } from "react";

export default function Learn() {
  const [selectedQuiz, setSelectedQuiz] = useState(-1);

  return (
    <div>
      <NavBar />
      <div className="center-page">
        {/* Quiz Selection */}
        {selectedQuiz == -1 ? (
          <div className="lg:w-[45vw] mt-12">
            <div className="text-2xl font-bold mb-8">Find a Quiz</div>
            <div onClick={() => setSelectedQuiz(0)}>
              <QuizPreview
                title="Aliquip ut irure aute."
                desc="Aliquip ut irure aute consequat duis duis aliquip ex ut duis duis aliquip ex ut."
                category="Losfge"
              />
            </div>
            <div onClick={() => setSelectedQuiz(1)}>
              <QuizPreview
                title="Aliquip ut irure aute."
                desc="Aliquip ut irure aute consequat duis duis aliquip ex ut duis duis aliquip ex ut."
                category="Losfge"
              />
            </div>
            <div onClick={() => setSelectedQuiz(2)}>
              <QuizPreview
                title="Aliquip ut irure aute."
                desc="Aliquip ut irure aute consequat duis duis aliquip ex ut duis duis aliquip ex ut."
                category="Losfge"
              />
            </div>
          </div>
        ) : (
          // Article
          <div className="lg:w-[66vw] mt-16 grid grid-cols-1 lg:grid-cols-5 lg:gap-x-10">
            <div className="col-span-3 lg:border-r pr-10 ml-5 lg:ml-0">
              <h2>Article Title</h2>
              <div className="mt-3">
                Ut laboris adipisicing tempor fugiat occaecat ea. Nostrud quis
                ullamco dolore eiusmod occaecat dolor. Ipsum culpa magna
                consectetur sit sint reprehenderit occaecat do aliqua tempor
                nisi qui ullamco pariatur. Voluptate voluptate magna enim do
                sint. Ut laboris adipisicing tempor fugiat occaecat ea. Nostrud
                quis ullamco dolore eiusmod occaecat dolor. Ipsum culpa magna
                consectetur sit sint reprehenderit occaecat do aliqua tempor
                nisi qui ullamco pariatur. Voluptate voluptate magna enim do
                sint. Ut laboris adipisicing tempor fugiat occaecat ea. Nostrud
                quis ullamco dolore eiusmod occaecat dolor. Ipsum culpa magna
                consectetur sit sint reprehenderit occaecat do aliqua tempor
                nisi qui ullamco pariatur. Voluptate voluptate magna enim do
                sint. Ut laboris adipisicing tempor fugiat occaecat ea. Nostrud
                quis ullamco dolore eiusmod occaecat dolor. Ipsum culpa magna
                consectetur sit sint reprehenderit occaecat do aliqua tempor
                nisi qui ullamco pariatur. Voluptate voluptate magna enim do
                sint.
              </div>
            </div>
            <div className="col-span-2 mt-32 lg:mt-0 mx-5 lg:mx-0">
              <h1 className="mb-10">Done reading? Quiz Yourself!</h1>
              <QuizQuestion />
              <QuizQuestion />
              <QuizQuestion />
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
