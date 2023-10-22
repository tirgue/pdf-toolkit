import { List } from "@mui/material";
import {
    DragDropContext,
    DropResult,
    Droppable,
    OnDragEndResponder,
} from "react-beautiful-dnd";
import { PDFAssociation } from "../../interfaces";
import { PDFCard } from "../PDFCard";

export interface PDFSelectorProps {
    pdfs: PDFAssociation[];
    onRemovePDF: (index: number) => void;
    onDragEnd: (fromIndex: number, toIndex: number) => void;
}

export function PDFSelector({
    pdfs,
    onRemovePDF,
    onDragEnd,
}: PDFSelectorProps) {
    const handleRemovePDF = (index: number) => {
        onRemovePDF(index);
    };

    const handleOnDragEnd = (result: DropResult) => {
        const { destination, source } = result;
        if (!destination) return;

        if (destination.index === source.index) return;

        onDragEnd(source.index, destination.index);
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="pdf-draoppable">
                {(provided) => (
                    <List ref={provided.innerRef} {...provided.droppableProps}>
                        {pdfs.map(({ name }, index) => (
                            <PDFCard
                                name={name}
                                index={index}
                                onRemovePDF={handleRemovePDF}
                            />
                        ))}
                        {provided.placeholder}
                    </List>
                )}
            </Droppable>
        </DragDropContext>
    );
}
