"use client";

export async function downloadNewsletterAsPDF(contentElement: HTMLElement, filename: string) {
  try {
    // Dynamically import html2pdf.js
    const html2pdf = (await import('html2pdf.js')).default;
    
    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        backgroundColor: '#ffffff'
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

