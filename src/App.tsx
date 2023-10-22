import { Button } from "@mui/material";
import { PDFDocument } from "pdf-lib";
import React, { useState } from "react";
import "./App.css";

const mergePDF = async (
    pdfA: PDFDocument,
    pdfB: PDFDocument
): Promise<Uint8Array> => {
    const mergedPdf = await PDFDocument.create();

    const copiedPagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
    copiedPagesA.forEach((page) => mergedPdf.addPage(page));

    const copiedPagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
    copiedPagesB.forEach((page) => mergedPdf.addPage(page));

    return mergedPdf.save();
};

const fileToPDFDocument = async (file: File) => {
    const fileBuffer = await file.arrayBuffer();
    return PDFDocument.load(fileBuffer);
};

function App() {
    const [pdfURL, setPDFURL] = useState("");

    const handlePDF = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        const fileA = event.target.files[0];
        const fileB = event.target.files[1];

        const pdfA = await fileToPDFDocument(fileA);
        const pdfB = await fileToPDFDocument(fileB);

        const newPDFBuffer = await mergePDF(pdfA, pdfB);

        const fileBlob = new Blob([newPDFBuffer], { type: "application/pdf" });
        const url = URL.createObjectURL(fileBlob);
        setPDFURL(url);
    };
    return (
        <div>
            <Button variant="contained" component="label">
                Open pdf
                <input
                    type="file"
                    hidden
                    onChange={handlePDF}
                    accept="application/pdf"
                    multiple
                />
            </Button>
            {!!pdfURL ? <iframe src={pdfURL} height={500}></iframe> : null}
        </div>
    );
}

export default App;
