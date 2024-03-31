import { useState } from "react";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AI_Image from "./assets/AISS.png";
import Hero_Image from "./assets/Hero_Image.jpeg";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <div className="center-page">
          <div className="bg-hero-bg w-full shadow-lg">
            <div className="backdrop-filter backdrop-blur-lg bg-gradient-to-b from-white to-opacity-0 text-center w-full bg-stretch py-24">
              <div className="font-semibold text-9xl money-text">ƒinboʈ</div>
            </div>
          </div>

          <div className="center-page w-full 2xl:w-[1536px]">
            <div className="grid mt-32 grid-cols-1 lg:grid-cols-2 lg:w-3/5 mx-10">
              <div className="font-semibold mt-5 text-4xl lg:text-5xl w-3/4">
                Powered by GPT 4 💪
              </div>
              <div className="mt-5 pb-16 lg:pb-24">
                Welcome to a financial revolution! We're on a mission to empower
                underrepresented minority communities and immigrants to take
                control of their financial futures. Our platform combines
                cutting-edge technology with personalized financial education,
                budgeting tools, multilingual support, and the scalability of
                AWS services.
              </div>
            </div>
            <div className="grid py-16 lg:pt-24 grid-cols-1 lg:grid-cols-2 lg:w-3/5 mx-10 border-t">
              <div>
                Knowledge Tailored to You: Tell us about your financial goals,
                and we'll curate personalized financial education modules just
                for you. Whether you're saving for college, buying a home, or
                securing your retirement, our resources will guide you every
                step of the way.
              </div>
              <div className="font-semibold text-4xl lg:ml-32 lg:text-5xl mb-10">
                Personalized Financial Education 🎓
              </div>
            </div>

            <div className="grid py-16 lg:pt-24 grid-cols-1 lg:grid-cols-2 lg:w-3/5 mx-10 border-t">
              <div className="font-semibold mt-5 text-4xl lg:text-5xl w-3/4">
                Budgeting and Expense Tracking 💰
              </div>
              <div className="mt-5 pb-16 lg:pb-24">
                Budget Like a Pro: Our user-friendly budgeting tool transforms
                financial management into a breeze. Set budgets, track income
                and expenses effortlessly, and receive real-time alerts to keep
                you on the right financial track.{" "}
              </div>
            </div>

            <div className="grid py-16 lg:pt-24 grid-cols-1 lg:grid-cols-2 lg:w-3/5 mx-10 border-t">
              <div>
                Accessible to All: We're committed to inclusivity. With
                multilingual support, our platform is designed to break language
                barriers and empower immigrant communities worldwide. Financial
                freedom knows no borders.{" "}
              </div>
              <div className="font-semibold text-4xl lg:ml-32 lg:text-5xl mb-10">
                Multilingual Support 🌍
              </div>
            </div>

            <div className="grid pt-16 lg:pt-24 pb-16 grid-cols-1 lg:grid-cols-2 lg:w-3/5 mx-10 border-t">
              <div className="font-semibold text-4xl lg:text-5xl w-3/4">
                Scalability Powered by AWS 🚀
              </div>
              <div className="mt-5 pb-16 lg:pb-24">
                Reliability and Security: Our platform relies on AWS Lambda,
                Amazon S3, and Amazon RDS, ensuring not just scalability but
                also top-tier security and reliability. Your financial data is
                safe with us.{" "}
              </div>
            </div>

            <div className="grid pt-16 lg:pt-24 grid-cols-1 lg:grid-cols-2 lg:w-3/5 mx-10 border-t">
              <div>
                <img className="" src={AI_Image} />
              </div>
              <div>
                <div className="font-semibold mt-5 text-4xl lg:ml-32 lg:text-5xl">
                  🤖 Meet Your Financial Ally
                </div>
                <div className="lg:ml-32 mt-16">
                  Your 24/7 Financial Companion. Need advice on the go? Our
                  interactive chatbot is here to answer your questions, provide
                  financial tips, and keep you motivated on your journey to
                  financial success.
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
