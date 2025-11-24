"use client";

// Helper function to detect mobile devices
function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (window.innerWidth <= 768 && 'ontouchstart' in window) ||
    (window.innerWidth <= 768 && navigator.maxTouchPoints > 0)
  );
}

export async function downloadNewsletterAsPDF(contentElement: HTMLElement, filename: string) {
  // For mobile devices, immediately use print API (most reliable)
  if (isMobileDevice()) {
    // Use requestAnimationFrame to ensure the UI is ready
    requestAnimationFrame(() => {
      window.print();
    });
    return;
  }

  // For desktop, use html2pdf.js
  try {
    const html2pdf = (await import('html2pdf.js')).default;
    
    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: contentElement.scrollWidth,
        windowHeight: contentElement.scrollHeight
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait' 
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    await html2pdf().set(opt).from(contentElement).save();
  } catch (error) {
    console.error('PDF generation failed, using print fallback:', error);
    window.print();
  }
}

