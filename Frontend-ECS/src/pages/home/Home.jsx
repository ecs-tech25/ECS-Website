import React from 'react';
import Gallery from './Gallery';
import Message from './Message';
import AboutUs from './AboutUs';
import Annual from './Annual';
import ParticlesComponent from '../Particle/Particle';
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="mx-auto w-full space-y-10 overflow-x-hidden">
      <ParticlesComponent id="particlejs" />
      <div className="absolute w-full top-1/3 flex flex-col items-center">
        <h2 className="title text-white flex justify-center items-center text-center text-4xl font-bold sm:text-5xl">
          Electronics and Communication Society
        </h2>
        <div id="hero" className="text-yellow-400 flex justify-center items-center text-4xl font-bold sm:text-5xl pl-6">
          <span className="typingText">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("NIT SILCHAR").pauseFor(1000).start();
              }}
            />
          </span>
        </div>
        <div className="py-10 flex flex-col items-center text-center justify-center w-full">
          <h1 className="text-4xl mobile:text-xl font-semibold w-full">
            Chamber of Secrets is <span className='text-red-500 font-bold animate-pulse drop-shadow-[0_0_10px_#ff00ff] text-5xl mobile:text-3xl'>LIVE</span>
          </h1>
          <div className="mt-6 p-4 rounded-xl shadow-xl transition-transform transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 to-purple-600">
            <a
              href="/chamber-of-secrets"
              className="text-2xl mobile:text-lg px-8 py-4 rounded-md font-bold uppercase tracking-wide text-white"
            >
              Click to Enter the arena
            </a>
          </div>
        </div>
      </div>
      <div className="pc:h-[90vh] mobile:h-[90vh]"></div>
      <Message />
      <AboutUs />
      <Annual />
      <Gallery />
    </div>
  );
}
