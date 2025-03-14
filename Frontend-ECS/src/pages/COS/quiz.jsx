import { useState, useEffect } from "react";
import bgVid from './COS-BG.mp4';
import './quiz.css';

const quizData = [
  {
    question: "What is the capital of France?Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Newton", "Einstein", "Tesla", "Edison"],
    answer: "Einstein",
  },
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");
  const userName = "John Doe"; // Example username, can be replaced dynamically

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(22, 0, 0, 0); // Set target time to 10 PM
      if (now >= target) {
        target.setDate(target.getDate() + 1); // Move to next day if past 10 PM
      }
      const difference = target - now;
      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');
      setTimeRemaining(`${hours}:${minutes}:${seconds}`);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswerClick = (option) => {
    if (option === quizData[currentQuestion].answer) {
      setScore(prevScore => prevScore + 1); // Use previous state value
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="flex flex-col fixed z-50 w-full min-h-screen">
      <video autoPlay loop muted className="absolute object-cover w-full h-full -z-30" src={bgVid} />
      <div className="userinfo flex justify-around p-10 items-center" style={{ textShadow: " rgba(255,162,0) 0px 0px 19px" }}>
        <div className="username text-5xl font-semibold">{userName}</div>
        <div className="time-remaining text-3xl font-semibold"> Time Remaining: {timeRemaining}</div>
      </div>

      <div className="flex flex-col items-center justify-center -m-20 h-screen p-4">
        <div className="module-border-wrap w-2/3 h-2/3 mobile:max-h-fit  rounded-lg">
          <div className="bg-indigo-500 shadow-lg p-6 rounded-lg h-full w-full text-center text-violet-800 module "
            style={{ backgroundImage: "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #969ce9, #919df0, #8b9ff8, #9995ff, #ad88ff, #c777ff, #e25ffb)" }}>
            <div className="flex justify-between text-lg font-bold mb-4">
              {!quizFinished ? (<span>Question {currentQuestion + 1} / {quizData.length}</span>) : null}
            </div>
            {quizFinished ? (
              <div>
                <h2 className="text-2xl font-bold">Quiz Completed!</h2>
                <p className="text-lg my-4">Your Score: {score} / {quizData.length}</p>
                <button
                  onClick={restartQuiz}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Restart Quiz
                </button>
              </div>
            ) : (
              <div className="flex flex-col  h-full justify-around pb-10">
                <h2 className="text-4xl text-blue-950  font-semibold mb-4">
                  {quizData[currentQuestion].question}
                </h2>
                <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1">
                  {quizData[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(option)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 rounded"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
