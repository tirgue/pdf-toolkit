import { Box, List } from "@mui/material";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { PDFAssociation } from "../../interfaces";
import { PDFCard } from "../PDFCard";
import "./PDFSelector.scss";

export interface PDFSelectorProps {
    pdfs: PDFAssociation[];
    onRemovePDF: (index: number) => void;
    onDragEnd: (fromIndex: number, toIndex: number) => void;
    onDragStart: () => void;
}

export function PDFSelector({
    pdfs,
    onRemovePDF,
    onDragEnd,
    onDragStart,
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
        <Box className="pdf-selector">
            <DragDropContext
                onDragEnd={handleOnDragEnd}
                onDragStart={onDragStart}
            >
                <Droppable droppableId="pdf-droppable">
                    {(provided) => (
                        <List
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {pdfs.map(({ id, name }, index) => (
                                <PDFCard
                                    id={id}
                                    key={id}
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
        </Box>
    );
}
