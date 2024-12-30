import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  Heading,
  NotesContainer,
  TitleInput,
  NoNoteContainer,
  Image,
  NoNotesHeading,
  NoNotesText,
  NoteTextArea,
  Form,
  Button,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [heading, setHeading] = useState('')
  const [text, setText] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setHeading(event.target.value)
  }

  const onChangeNote = event => {
    setText(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      heading,
      text,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNote])
    setHeading('')
    setText('')
  }

  const renderNoList = () => (
    <NoNoteContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNotesHeading>No Notes Yet</NoNotesHeading>
      <NoNotesText>Notes you add will appear here</NoNotesText>
    </NoNoteContainer>
  )

  const renderNotesList = () => (
    <NotesList>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesList>
  )

  return (
    <MainContainer>
      <NotesContainer>
        <Heading>Notes</Heading>
        <Form onSubmit={onAddNote}>
          <TitleInput
            type="text"
            placeholder="Title"
            value={heading}
            onChange={onChangeTitle}
          />
          <NoteTextArea
            placeholder="Take a Note..."
            value={text}
            onChange={onChangeNote}
            rows="3"
          />
          <Button type="submit">Add</Button>
        </Form>
      </NotesContainer>

      {notesList.length === 0 ? renderNoList() : renderNotesList()}
    </MainContainer>
  )
}
export default Notes
