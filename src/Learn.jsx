import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
//import genArticlesTitles from "./Backend/genArticleTitles";

export default function Learn() {
  return (
    <div>
      <NavBar />
      <div className="center-page">
        <div className="lg:w-[66vw] mt-16 grid grid-cols-1 lg:grid-cols-5 lg:gap-x-10">
          <div className="col-span-2 lg:border-r pr-10 ml-5 lg:ml-0">
            <h1>Hello Name! 👋</h1>
            <h3 className="mt-3">What would you like to learn about today?</h3>
            <div className="flex flex-wrap lg:mt-2">
              <div className="topic-button bg-red-500">
                Ut laboris adipisicing tempor fugiat occaecat ea
              </div>
              <div className="topic-button bg-blue-500">
                Ut laboris adipisicing tempor fugiat
              </div>
            </div>
          </div>
          <div className="col-span-3 mt-32 lg:mt-0 mx-5 lg:mx-0">
            <h2>Article Title</h2>
            <div className="mt-3">
              Ut laboris adipisicing tempor fugiat occaecat ea. Nostrud quis
              ullamco dolore eiusmod occaecat dolor. Ipsum culpa magna
              consectetur sit sint reprehenderit occaecat do aliqua tempor nisi
              qui ullamco pariatur. Voluptate voluptate magna enim do sint. Ut
              laboris adipisicing tempor fugiat occaecat ea. Nostrud quis
              ullamco dolore eiusmod occaecat dolor. Ipsum culpa magna
              consectetur sit sint reprehenderit occaecat do aliqua tempor nisi
              qui ullamco pariatur. Voluptate voluptate magna enim do sint. Ut
              laboris adipisicing tempor fugiat occaecat ea. Nostrud quis
              ullamco dolore eiusmod occaecat dolor. Ipsum culpa magna
              consectetur sit sint reprehenderit occaecat do aliqua tempor nisi
              qui ullamco pariatur. Voluptate voluptate magna enim do sint. Ut
              laboris adipisicing tempor fugiat occaecat ea. Nostrud quis
              ullamco dolore eiusmod occaecat dolor. Ipsum culpa magna
              consectetur sit sint reprehenderit occaecat do aliqua tempor nisi
              qui ullamco pariatur. Voluptate voluptate magna enim do sint.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
