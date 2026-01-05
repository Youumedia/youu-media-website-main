"use client";

interface ServiceVideoCardProps {
  videoUrl: string;
  title: string;
}

export function ServiceVideoCard({ videoUrl, title }: ServiceVideoCardProps) {
  // Extract video ID from YouTube URL (handles both youtu.be and youtube.com formats)
  const getVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const videoId = getVideoId(videoUrl);
  
  if (!videoId) {
    return null;
  }

  // Use youtube-nocookie.com for privacy-enhanced mode
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}> {/* 16:9 aspect ratio */}
        <iframe
          src={embedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

