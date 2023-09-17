import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
//import genArticlesTitles from "./Backend/genArticleTitles";

export default function Learn() {
  return (
    <div>
      <NavBar />
      <div className="center-page">
        <div className="lg:w-[45vw] mt-12">
          <div className="text-2xl font-bold mb-8">Find a Quiz</div>
          <div className="card mb-10 cursor-pointer grid grid-cols-4">
            <div className="col-span-3">
              <div className="font-bold">Fugiat eiusmod</div>
              <div className="mt-3">
                Aliqua enim proident veniam duis et veniam dolor enim ea
                exercitation elit labore.
              </div>
            </div>
            <div className="col-span-1 text-center my-auto font-semibold gradient-text-purple text-xl">
              Veniam
            </div>
          </div>
          <div className="card mb-10 cursor-pointer grid grid-cols-4">
            <div className="col-span-3">
              <div className="font-bold">Fugiat eiusmod</div>
              <div className="mt-3">
                Aliqua enim proident veniam duis et veniam dolor enim ea
                exercitation elit labore.
              </div>
            </div>
            <div className="col-span-1 text-center my-auto font-semibold gradient-text-purple text-xl">
              Veniam
            </div>
          </div>
          <div className="card mb-10 cursor-pointer grid grid-cols-4">
            <div className="col-span-3">
              <div className="font-bold">Fugiat eiusmod</div>
              <div className="mt-3">
                Aliqua enim proident veniam duis et veniam dolor enim ea
                exercitation elit labore.
              </div>
            </div>
            <div className="col-span-1 text-center my-auto font-semibold gradient-text-purple text-xl">
              Veniam
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
