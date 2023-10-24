import { PDFDocumentProxy } from 'pdfjs-dist';

// Function to extract text content from a PDF file
async function extractTextFromPDF(pdfFile: ArrayBuffer): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    // Create a new PDFDocumentProxy
    const pdfjs = require('pdfjs-dist/build/pdf');
    const pdfjsWorker = require('pdfjs-dist/build/pdf.worker.entry');

    pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
    const loadingTask = pdfjs.getDocument({ data: pdfFile });

    loadingTask.promise
      .then((pdf: PDFDocumentProxy) => {
        const numPages = pdf.numPages;
        const textContent: string[] = [];

        function loadPage(pageNum: number) {
          pdf.getPage(pageNum).then((page) => {
            page.getTextContent().then((content) => {
              textContent.push(content.items.map((item) => item.str).join(' '));

              if (pageNum < numPages) {
                loadPage(pageNum + 1);
              } else {
                resolve(textContent.join('\n'));
              }
            });
          });
        }

        loadPage(1);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}

export { extractTextFromPDF };
