"use client";

export async function downloadNewsletterAsPDF(contentElement: HTMLElement, filename: string) {
  // Check if we're on mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // For mobile, use the print API which is well-supported
    // Users can save as PDF from the print dialog
    window.print();
    return;
  }

  try {
    // For desktop, try to use html2pdf.js
    const html2pdf = (await import('html2pdf.js')).default;
    
    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
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
    console.error('PDF generation failed:', error);
    // Fallback to print dialog
    window.print();
  }
}

