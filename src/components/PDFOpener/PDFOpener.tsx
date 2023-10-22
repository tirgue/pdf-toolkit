import { Button } from "@mui/material";
import { ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
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
                    id: uuidv4(),
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
                value={""}
                accept="application/pdf"
                multiple
            />
        </Button>
    );
}
