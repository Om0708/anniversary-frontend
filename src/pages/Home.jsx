import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function Home({ setToken }) {
  const [showSurprise, setShowSurprise] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  const startMusic = () => {
    const audio = new Audio("/assets/music.mp3");
    audio.loop = true;
    audio.play().catch((error) => {
      console.log("Autoplay blocked or error:", error);
    });
    setMusicStarted(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const triggerSurprise = () => {
    setShowSurprise(true);
    confetti({
      particleCount: 200,
      spread: 180,
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-pink-100 to-yellow-100 overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Floating Hearts */}
      <div className="absolute inset-0 animate-pulse pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-pink-400 opacity-70 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Message */}
      <div className="z-10 text-center mb-6 mt-24">
        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 mb-4 animate-bounce">
          Happy 25th Anniversary
        </h1>
        <h2 className="text-3xl md:text-4xl text-gray-700 mb-6">
          Mummy & Papa ❤️
        </h2>
        <p className="text-xl text-gray-600 max-w-xl mx-auto">
          Wishing you both endless love, happiness, and togetherness. Thank you
          for being our inspiration!
        </p>
      </div>

      {/* Music Play Button */}
      {!musicStarted && (
        <button
          className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-pink-600 mb-6"
          onClick={startMusic}
        >
          Play Music 🎶
        </button>
      )}

      {/* Surprise Button */}
      {!showSurprise && (
        <button
          className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-pink-600 mb-6"
          onClick={triggerSurprise}
        >
          Tap for a Surprise 🎁
        </button>
      )}

      {/* Surprise Message */}
      {showSurprise && (
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold text-pink-700">
            We Love You Both So Much! ❤️
          </h3>
          <p className="text-lg text-gray-700 max-w-md mx-auto">
            Your journey together is a beautiful example for all of us. Happy
            Silver Jubilee!
          </p>
        </div>
      )}

      {/* Photo Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-4xl">
        {[
          "photo1.jpeg",
          "photo2.jpeg",
          "photo3.jpeg",
          "photo4.jpeg",
          "photo5.jpeg",
          "photo6.jpeg",
        ].map((photo, index) => (
          <div
            key={index}
            className="flex items-center justify-center space-x-2"
          >
            {/* Left Floating Heart Outline */}
            <span className="text-red-500 text-3xl floating-heart">
              &#10084;&#65039;&#xFE0E;
            </span>

            {/* Photo */}
            <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition">
              <img
                src={`/assets/gallery/${photo}`}
                alt={`Anniversary Memory ${index + 1}`}
                className="w-48 h-64 object-cover"
              />
            </div>

            {/* Right Floating Heart Outline */}
            <span className="text-red-500 text-3xl floating-heart">
              &#10084;&#65039;&#xFE0E;
            </span>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <button
        className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
