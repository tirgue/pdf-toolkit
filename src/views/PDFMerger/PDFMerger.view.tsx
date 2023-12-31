import { Box, Button } from "@mui/material";
import { useState } from "react";
import { PDFOpener } from "../../components/PDFOpener";
import { PDFSelector } from "../../components/PDFSelector";
import { useInstallPrompt } from "../../hooks";
import { PDFAssociation } from "../../interfaces";
import { PDFService } from "../../services";
import { moveArrayElement, removeArrayElement } from "../../utils";
import "./PDFMerger.view.scss";

export function PDFMergerView() {
    const [pdfs, setPDFs] = useState<PDFAssociation[]>([]);
    const [canInstall, triggerInstall] = useInstallPrompt();

    const handlePDFOpen = (pdfList: PDFAssociation[]) => {
        setPDFs((pdfs) => [...pdfs, ...pdfList]);
    };

    const handleDragEnd = (fromIndex: number, toIndex: number) => {
        setPDFs((pdfs) => {
            return moveArrayElement(fromIndex, toIndex, pdfs);
        });
    };

    const handleRemovePDF = (index: number) => {
        setPDFs((pdfs) => removeArrayElement(index, pdfs));
    };

    const handleMerge = async () => {
        const [pdfA, pdfB, ...pdfList] = pdfs.map(({ document }) => document);

        if (!pdfB) return;

        const mergedPDF = await PDFService.merge(pdfA, pdfB, ...pdfList);

        const mergePDFBuffer = await mergedPDF.save();
        const pdfBlob = new Blob([mergePDFBuffer], { type: "application/pdf" });
        const url = URL.createObjectURL(pdfBlob);
        window.open(url, "_blank");
    };

    return (
        <Box className="pdf-merger-view">
            <Box className="pdf-merger-commands">
                <PDFOpener onPDFOpen={handlePDFOpen} />
                <Button
                    variant="contained"
                    onClick={handleMerge}
                    disabled={pdfs.length < 2}
                >
                    Merge
                </Button>
                <Button
                    variant="contained"
                    onClick={triggerInstall}
                    sx={{ display: canInstall ? "initial" : "none" }}
                >
                    Install
                </Button>
            </Box>
            <PDFSelector
                onDragEnd={handleDragEnd}
                onRemovePDF={handleRemovePDF}
                pdfs={pdfs}
            />
        </Box>
    );
}
