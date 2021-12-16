import { useState } from "react";
import { Note } from "./models/note.model";
import "./App.css";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";

function App() {
    const [notes, setNotes] = useState<Note[]>([
        {
            id: new Date().toString(),
            title: "Meetings",
            text: "Blablab lablablablabla blabla bla",
            color: "#dfdfdf",
            date: new Date().toString(),
        },
    ]);

    return (
        <>
            <Header></Header>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <NotesList
                            notes={notes}
                            setNotes={setNotes}
                        ></NotesList>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CreateNotes
                            notes={notes}
                            setNotes={setNotes}
                        ></CreateNotes>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
