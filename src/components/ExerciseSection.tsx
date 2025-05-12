import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import React, { useState } from "react";
interface Exercise {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Ertalabki badantarbiya - Boshlang'ich daraja",
    duration: "15 daqiqa",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://youtu.be/r6AcUJL8gq0?si=ffdjSwMz-ZtGoUrf"
  },
  {
    id: 2,
    title: "Ertalabki badantarbiya - O'rta daraja",
    duration: "20 daqiqa",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://youtu.be/DoZ2VTgso3M?si=7_Qnrl3loi5PECVe"
  },
  {
    id: 3,
    title: "Ertalabki mashqlar toʻliq mashqlar",
    duration: "30 daqiqa",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://youtu.be/fI18gXySq18?si=vXpru0AG3aA4sbw1"
  }
];

const ExerciseSection = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-darkBg">
          Ertalabki badantarbiya mashg'ulotlari
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={exercise.thumbnail}
                  alt={exercise.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button 
                    variant="default"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => setOpenVideo(exercise.videoUrl)}
                  >
                    <Play className="mr-2" />
                    Videoni ko'rish
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{exercise.title}</h3>
                <p className="text-gray-600">Davomiyligi: {exercise.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for video */}
        {openVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold"
                onClick={() => setOpenVideo(null)}
                aria-label="Yopish"
              >
                ×
              </button>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src={getEmbedUrl(openVideo)}
                  title="Exercise Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-96"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function to convert YouTube URLs to embed URLs
function getEmbedUrl(url: string) {
  // Handle youtu.be links
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    // Faqat video ID qismini olamiz (query stringni olib tashlaymiz)
    const videoId = shortMatch[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  // Handle youtube.com/watch?v= links
  const longMatch = url.match(/v=([a-zA-Z0-9_-]+)/);
  if (longMatch) {
    return `https://www.youtube.com/embed/${longMatch[1]}`;
  }
  // Default fallback
  return url;
}

export default ExerciseSection;