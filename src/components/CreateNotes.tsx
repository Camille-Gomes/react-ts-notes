import * as React from "react";
import Button from "react-bootstrap/button";
import { Form, Alert } from "react-bootstrap";
import { Note } from "../models/note.model";

interface ICreateNotesProps {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
    notes,
    setNotes,
}) => {
    const [error, setError] = React.useState<string>("");
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("Merci de remplir tous les champs");
        }

        setError("");
        setNotes([
            ...notes,
            {
                id: new Date().toString(),
                title: (titleRef.current as HTMLInputElement).value,
                text: (textRef.current as HTMLTextAreaElement).value,
                color: (colorRef.current as HTMLInputElement).value,
                date: new Date().toString(),
            },
        ]);

        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";
    };

    return (
        <div>
            <h2>Créer une note</h2>
            {error && <Alert variant="danger ">{error}</Alert>}
            <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
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
