import FestivalSection from "./FestivalSection";
import Bonfire from "./Bonfire";

const LohriSection = () => {
  return (
    <FestivalSection id="lohri" className="bg-lohri-night relative overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
          />
        ))}
      </div>

      {/* Dancing silhouettes */}
      <div className="absolute bottom-32 left-[10%] opacity-40">
        <svg width="60" height="80" viewBox="0 0 60 80">
          <circle cx="30" cy="10" r="8" fill="currentColor" className="text-amber-900" />
          <path
            d="M30 18 L30 50 M30 30 L15 45 M30 30 L45 40 M30 50 L20 75 M30 50 L40 75"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-amber-900"
          />
        </svg>
      </div>
      <div className="absolute bottom-36 right-[15%] opacity-40 transform scale-x-[-1]">
        <svg width="60" height="80" viewBox="0 0 60 80">
          <circle cx="30" cy="10" r="8" fill="currentColor" className="text-amber-900" />
          <path
            d="M30 18 L30 50 M30 30 L10 35 M30 30 L50 45 M30 50 L15 70 M30 50 L45 70"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-amber-900"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-bonfire/20 backdrop-blur-sm rounded-full text-amber-300 font-body text-sm mb-6">
          Punjab
        </span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-amber-100 mb-8">
          Lohri
        </h2>

        {/* Bonfire */}
        <div className="flex justify-center mb-8">
          <Bonfire className="transform scale-110 md:scale-125" />
        </div>

        {/* Offerings around fire with explanation */}
        <div className="bg-amber-900/30 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
          <h3 className="font-display text-lg text-amber-200 font-semibold mb-4">Sacred Offerings to the Fire</h3>
          <div className="flex justify-center gap-8 mb-4">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg">
                <span className="text-2xl">🥜</span>
              </div>
              <span className="text-sm text-amber-200/90 font-body">Peanuts</span>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍿</span>
              </div>
              <span className="text-sm text-amber-200/90 font-body">Popcorn</span>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍬</span>
              </div>
              <span className="text-sm text-amber-200/90 font-body">Rewri</span>
            </div>
          </div>
          <p className="font-body text-sm text-amber-200/80 leading-relaxed">
            These offerings are thrown into the sacred fire as gratitude to Agni (Fire God). 
            Peanuts and popcorn represent the winter harvest, while rewri (jaggery candy) symbolizes sweetness in life.
          </p>
        </div>

        {/* Why we celebrate */}
        <div className="bg-orange-900/30 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
          <h3 className="font-display text-lg text-amber-200 font-semibold mb-2">Why We Celebrate</h3>
          <p className="font-body text-amber-100/90 text-sm leading-relaxed">
            Lohri marks the end of the coldest winter month and celebrates the harvest of rabi (winter) crops.
            The bonfire represents the sun's return, bringing warmth and longer days ahead.
            It's a time for families to gather, sing folk songs, and welcome newlyweds and newborns into the community.
          </p>
        </div>

        <p className="font-body text-lg md:text-xl text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
          Families gather around the <strong>sacred bonfire</strong>, singing and dancing.
        </p>

        <p className="font-display text-xl md:text-2xl text-amber-300 italic mt-8">
          "सुंदर मुंदरीये!"
        </p>
        <p className="font-body text-sm text-amber-200/60 mt-2">
          Traditional Lohri folk song celebrating love and togetherness
        </p>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-950 to-transparent" />
    </FestivalSection>
  );
};

export default LohriSection;
