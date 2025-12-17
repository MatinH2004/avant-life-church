import { FaSpotify, FaApple } from "react-icons/fa";


export default function Details() {
  return (
    <section className="px-6 mx-auto max-w-screen-sm">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Listen to the Podcast</h2>
        <p className="text-lg py-2">Catch up on the latest episodes of the Avant Life Church Podcast.</p>
      </div>
      <div className="py-4 text-center">
        <div className="py-2">
          <p className="font-bold text-2xl">NORTH SHORE</p>
          <div className="flex flex-row justify-center gap-8 py-4">
            <a
              href="https://open.spotify.com/show/6Osh174jPUdX9CS9GJyy72"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="group flex flex-col items-center gap-2 text-center"
            >
              <FaSpotify
                size={35}
                className="text-green-500 transition-colors group-hover:text-black"
              />
              <span className="text-sm group-hover:underline group-hover:font-semibold">SPOTIFY PODCAST</span>
            </a>

            <a
              href="https://podcasts.apple.com/ca/podcast/avant-life-church/id1480171888"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple Podcasts"
              className="group flex flex-col items-center gap-2 text-center"
            >
              <FaApple
                size={35}
                className="text-gray-300 transition-colors group-hover:text-black"
              />
              <span className="text-sm group-hover:underline group-hover:font-semibold">APPLE PODCAST</span>
            </a>
          </div>
        </div>
        <div className="py-2">
          <p className="font-bold text-2xl">SQUAMISH</p>
          <div className="flex flex-row justify-center gap-8 py-4">
            <a
              href="https://open.spotify.com/show/6Osh174jPUdX9CS9GJyy72"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="group flex flex-col items-center gap-2 text-center"
            >
              <FaSpotify
                size={35}
                className="text-green-500 transition-colors group-hover:text-black"
              />
              <span className="text-sm group-hover:underline group-hover:font-semibold">SPOTIFY PODCAST</span>
            </a>

            <a
              href="https://podcasts.apple.com/ca/podcast/avant-life-church/id1480171888"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple Podcasts"
              className="group flex flex-col items-center gap-2 text-center"
            >
              <FaApple
                size={35}
                className="text-gray-300 transition-colors group-hover:text-black"
              />
              <span className="text-sm group-hover:underline group-hover:font-semibold">APPLE PODCAST</span>
            </a>
          </div>
        </div>
        <div className="py-2">
          <p className="font-bold text-2xl">TORONTO</p>
          <p className="text-sm mt-2">COMING SOON...</p>
        </div>
      </div>
    </section>
  );
}