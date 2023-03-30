import { TextCard } from "components/TextCard/TextCard";

export function NoteBrowse(props) {
  return (
    <>
    <TextCard 
    title="Super note"
     subtitle="01/01/2023" 
     content="blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "
     onClick={() => alert("onClick")}
     onClickTrash={() => alert("onClickTrash")}
     >
    </TextCard>
    </>
  )
}
