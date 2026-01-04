// Helper function to extract YouTube ID from various URL formats
function extractYouTubeId(url: string): string {
  // Handle youtu.be format: https://youtu.be/VIDEO_ID
  const youtuBeMatch = url.match(/youtu\.be\/([^?&#]+)/);
  if (youtuBeMatch) return youtuBeMatch[1];

  // Handle youtube.com/watch?v= format: https://www.youtube.com/watch?v=VIDEO_ID
  const youtubeMatch = url.match(/[?&]v=([^?&#]+)/);
  if (youtubeMatch) return youtubeMatch[1];

  // If no match, assume the URL itself is the ID
  return url;
}

export interface VideoItem {
  id: number;
  title: string;
  category: string;
  youtubeId: string;
  youtubeUrl: string;
  embedUrl: string;
  serviceType: "cinematography" | "videography";
}

// Cinematography videos (positions 1-5, gold outline)
const cinematographyVideos = [
  {
    youtubeUrl: "https://youtu.be/mq-EOODs_YQ",
  },
  {
    youtubeUrl: "https://youtu.be/Ykx2mNN2v_Y",
  },
  {
    youtubeUrl: "https://youtu.be/TD2hwGCfGjA",
  },
  {
    youtubeUrl: "https://youtu.be/5P0HWOI7Vtk",
  },
  {
    youtubeUrl: "https://youtu.be/4KwW5yBC10k",
  },
].map((video, index) => {
  const youtubeId = extractYouTubeId(video.youtubeUrl);
  return {
    id: index + 1,
    title: `Portfolio Video ${index + 1}`,
    category: "Portfolio",
    youtubeId,
    youtubeUrl: video.youtubeUrl,
    embedUrl: `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`,
    serviceType: "cinematography" as const,
  };
});

// Videography videos (silver outline)
// Note: Removed "startup croydon shoot" and "the business minds shoot" videos
const videographyVideos = [
  {
    youtubeId: "xkMZtQnHDOE",
    youtubeUrl: "https://www.youtube.com/watch?v=xkMZtQnHDOE",
  },
  {
    youtubeId: "IJv94hCtnJU",
    youtubeUrl: "https://www.youtube.com/watch?v=IJv94hCtnJU",
  },
  {
    youtubeId: "lErDN_bLkaI",
    youtubeUrl: "https://www.youtube.com/watch?v=lErDN_bLkaI",
  },
].map((video, index) => ({
  id: cinematographyVideos.length + index + 1,
  title: `Portfolio Video ${cinematographyVideos.length + index + 1}`,
  category: "Portfolio",
  youtubeId: video.youtubeId,
  youtubeUrl: video.youtubeUrl,
  embedUrl: `https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&playsinline=1`,
  serviceType: "videography" as const,
}));

// Combine: cinematography first (positions 1-5), then videography
export const portfolioVideos: VideoItem[] = [
  ...cinematographyVideos,
  ...videographyVideos,
];
