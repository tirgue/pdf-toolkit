import { List } from "@mui/material";
import {
    DragDropContext,
    Droppable,
    OnDragEndResponder,
} from "react-beautiful-dnd";
import { PDFCard } from "../PDFCard";

export interface PDFSelectorProps {
    pdfs: {
        index: number;
        name: string;
    }[];
    onDragEnd: OnDragEndResponder;
}

export function PDFSelector({ pdfs, onDragEnd }: PDFSelectorProps) {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="pdf-draoppable">
                {(provided) => (
                    <List ref={provided.innerRef} {...provided.droppableProps}>
                        {pdfs.map((pdf) => (
                            <PDFCard {...pdf} />
                        ))}
                        {provided.placeholder}
                    </List>
                )}
            </Droppable>
        </DragDropContext>
    );
}
