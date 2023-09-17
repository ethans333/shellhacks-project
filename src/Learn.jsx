import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import QuizPreview from "./Components/QuizPreview";

export default function Learn() {
  return (
    <div>
      <NavBar />
      <div className="center-page">
        <div className="lg:w-[45vw] mt-12">
          <div className="text-2xl font-bold mb-8">Find a Quiz</div>
          <QuizPreview
            title="Aliquip ut irure aute."
            desc="Aliquip ut irure aute consequat duis duis aliquip ex ut duis duis aliquip ex ut."
            category="Losfge"
          />
          <QuizPreview
            title="Aliquip ut irure aute."
            desc="Aliquip ut irure aute consequat duis duis aliquip ex ut duis duis aliquip ex ut."
            category="Losfge"
          />
          <QuizPreview
            title="Aliquip ut irure aute."
            desc="Aliquip ut irure aute consequat duis duis aliquip ex ut duis duis aliquip ex ut."
            category="Losfge"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
