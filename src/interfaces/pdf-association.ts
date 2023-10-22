import { PDFDocument } from "pdf-lib";

export interface PDFAssociation {
    id: string;
    name: string;
    document: PDFDocument;
}
