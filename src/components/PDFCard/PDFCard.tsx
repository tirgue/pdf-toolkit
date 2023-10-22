import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { MouseEventHandler } from "react";
import {
    Draggable,
    DraggableProvided,
    DraggableStateSnapshot,
} from "react-beautiful-dnd";
import "./PDFCard.scss";

export interface PDFCardProps {
    id: string;
    index: number;
    name: string;
    onRemovePDF: (index: number) => void;
}

export function PDFCard({ id, name, index, onRemovePDF }: PDFCardProps) {
    return (
        <Draggable draggableId={id} index={index}>
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
                    <ListItemIcon>
                        <PictureAsPdfIcon className="pdf-card-pdf-icon" />
                    </ListItemIcon>
                    <ListItemText
                        primary={name}
                        primaryTypographyProps={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                        className="pdf-card-text"
                    />
                    <IconButton onClick={() => onRemovePDF(index)}>
                        <CancelRoundedIcon className="pdf-card-delete-icon" />
                    </IconButton>
                </ListItem>
            )}
        </Draggable>
    );
}
