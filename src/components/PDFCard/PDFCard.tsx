import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
    Draggable,
    DraggableProvided,
    DraggableStateSnapshot,
} from "react-beautiful-dnd";
import "./PDFCard.scss";

export interface PDFCardProps {
    index: number;
    name: string;
}

export function PDFCard({ name, index }: PDFCardProps) {
    return (
        <Draggable draggableId={name} index={index}>
            {(
                provided: DraggableProvided,
                snapshot: DraggableStateSnapshot
            ) => (
                <ListItem
                    className={`pdf-card ${
                        snapshot.isDragging ? "is-dragging" : ""
                    }`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <ListItemIcon sx={{ color: "#f40f02" }}>
                        <PictureAsPdfIcon />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                </ListItem>
            )}
        </Draggable>
    );
}
