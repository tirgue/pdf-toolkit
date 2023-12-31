import { PDFDocument } from "pdf-lib";

export class PDFService {
    static async fileToPDF(file: File): Promise<PDFDocument> {
        const fileBuffer = await file.arrayBuffer();
        return PDFDocument.load(fileBuffer);
    }

    static async merge(
        pdfA: PDFDocument,
        pdfB: PDFDocument,
        ...pdfList: (PDFDocument | undefined)[]
    ): Promise<PDFDocument> {
        const pdfListClean = pdfList.filter(
            (pdf: PDFDocument | undefined): pdf is PDFDocument => !!pdf
        );

        const mergedPdf = await PDFDocument.create();
        for (const pdf of [pdfA, pdfB, ...pdfListClean]) {
            const copiedPages = await mergedPdf.copyPages(
                pdf,
                pdf.getPageIndices()
            );
            copiedPages.forEach((page) => mergedPdf.addPage(page));
        }

        return mergedPdf;
    }
}
