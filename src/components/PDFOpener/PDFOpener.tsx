import { Button } from "@mui/material";
import { PDFDocument } from "pdf-lib";
import { ChangeEvent } from "react";
import { PDFAssociation } from "../../interfaces";
import { PDFService } from "../../services";

export interface PDFOpenerProps {
    onPDFOpen: (pdfList: PDFAssociation[]) => void;
}

export function PDFOpener({ onPDFOpen }: PDFOpenerProps) {
    const handlePDFOpen = async (event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if (!files || files.length === 0) return;

        const promises = Array.from(files).map<Promise<PDFAssociation>>(
            async (file) => {
                return {
                    name: file.name,
                    document: await PDFService.fileToPDF(file),
                };
            }
        );
        const pdfList = await Promise.all(promises);

        onPDFOpen(pdfList);
    };
    return (
        <Button variant="contained" component="label">
            Open pdf
            <input
                type="file"
                hidden
                onChange={handlePDFOpen}
                accept="application/pdf"
                multiple
            />
        </Button>
    );
}
