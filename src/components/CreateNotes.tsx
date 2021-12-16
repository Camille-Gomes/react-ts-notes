import * as React from "react";
import { Form, Button } from "react-bootstrap";

export interface ICreateNotesProps {}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
    return (
        <>
            <h2>Créer une note</h2>
            <Form className="mt-3 mb-3">
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entrer le titre de la note"
                    >
                        Titre
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                        placeholder="Entrer votre note"
                        as="textarea"
                        rows={3}
                    >
                        Titre
                    </Form.Control>
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
                    >
                        Titre
                    </Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Ajouter une note
                </Button>
            </Form>
        </>
    );
};

export default CreateNotes;
