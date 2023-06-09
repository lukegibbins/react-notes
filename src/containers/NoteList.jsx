import { TextCard } from "components/TextCard/TextCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export function NoteList (props) {
    const noteList = useSelector((store) => store.noteSlice.noteList);
    const navigate = useNavigate();

    return <div className="row justify-content-center">
        {
            noteList.map((note, i) => {
                return (
                    <div className={s.card_container}> 
                    <TextCard key={i}
                        title={note.title}
                        content={note.content}
                        subtitle={note.created_at}
                        onClick={() => navigate("/note/" + note.id)}
                        onClickTrash={() => alert("On Click Trash")} 
                    />
                    </div>
                )
            })
        }
    </div>  
}