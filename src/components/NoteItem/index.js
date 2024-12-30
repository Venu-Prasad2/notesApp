import {EachItem, EachTitle, EachNote} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {heading, text} = noteDetails

  return (
    <EachItem>
      <EachTitle>{heading}</EachTitle>
      <EachNote>{text}</EachNote>
    </EachItem>
  )
}
export default NoteItem
