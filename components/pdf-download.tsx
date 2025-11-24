"use client";

export async function downloadNewsletterAsPDF(contentElement: HTMLElement, filename: string) {
  // Detect mobile devices more reliably
  const isMobile = typeof window !== 'undefined' && (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (window.innerWidth <= 768 && 'ontouchstart' in window)
  );
  
  // For mobile devices, use print API which is the most reliable
  // Mobile browsers support "Save as PDF" option in the print dialog
  if (isMobile) {
    window.print();
    return;
  }

  // For desktop, try html2pdf.js with better error handling
  try {
    // Use dynamic import to avoid loading on mobile
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
    // Fallback to print dialog on any error
    window.print();
  }
}

