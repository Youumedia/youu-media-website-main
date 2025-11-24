// Shared utility for PDF generation
export const generatePDF = async (title: string, contentElement: HTMLElement) => {
  // Use html2pdf or jsPDF library to generate actual PDF file
  // For now, we'll use a simpler approach with print-to-PDF
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    // Fallback to print if popup blocked
    window.print();
    return;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          @page {
            size: A4 portrait;
            margin: 15mm;
          }
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            margin: 0;
            padding: 20mm;
            background: white;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        </style>
      </head>
      <body>
        ${contentElement.innerHTML}
      </body>
    </html>
  `;
  
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  printWindow.print();
};

