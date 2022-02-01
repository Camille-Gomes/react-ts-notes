import * as React from "react";
import Button from "react-bootstrap/button";
import { Form } from "react-bootstrap";
import { Note } from "../models/note.model";

interface ICreateNotesProps {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = () => {
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);

    return (
        <div>
            <h2>Créer une note</h2>
            <Form className="mt-3 mb-3">
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entrer le titre de la note"
                        ref={titleRef}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                        placeholder="Entrer votre note"
                        as="textarea"
                        rows={3}
                        ref={textRef}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label htmlFor="colorInput">
                        Couleur de la note
                    </Form.Label>
                    <Form.Control
                        type="color"
                        id="colorInput"
                        defaultValue="#dfdfdf"
                        title="Choissisez votre couleur"
                        ref={colorRef}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Ajouter une note
                </Button>
            </Form>
        </div>
    );
};

export default CreateNotes;
