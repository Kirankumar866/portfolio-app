// pages/shuffle.js
import ShuffleButton from "../components/shufflecontent";

const ShufflePage = () => {
  return (
    <section id="shuffle" className="text-white text-center py-0">
      <div className="flex flex-col items-center">
        {/* Shuffle Button */}
        <div className="flex flex-col items-center space-y-6">
          <ShuffleButton />
        </div>
      </div>
    </section>
  );
};

export default ShufflePage;
