import  React, {useState} from 'react'
import {useHistory} from "react-router-dom"


function NewNoteForm ()
{
let history = useHistory()
const [formData,setFormData] = useState({
noteTitle: ' ',
noteActiveState: ' ',
associatedUsers: ' ',
});


const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>
    {
    const {name, value} = event.target; 
    setFormData((prevFormData) => ({
        ..prevFormData,
        [name]: value,
    }));
    };

const handleSubmit = (event)=>
    {

        event.preventDefault();
        const postData = new FormData();
        postData.append('noteTitle', formData.noteTitle);
        postData.append('noteActiveState', formData.noteActiveState);
        postData.append('associatedUsers', formData.associatedUsers);

        let data = new FormData(event.target)
        let url = new URLSearchParams(data).toString()
        history.push("/?"+url)


        fetch('/api/endpoint',
            {
                method: 'POST',
                body: postData,
            }
        )
         .then((response)=> reponse.json())
         .then((data)=>
        {
            //handle reponse data//
        })
        .catch((error)=>
        {
            //Handle error//
        });
    };

        return (<form onSubmit={handleSubmit}>
            </label>
             noteTitle:
            <input type="text" noteTitle="noteTitle" value={formData.noteTitle} onChange = {handleInputChange}/>
            </label>
            <label>
             associatedUsers:
             <input type = "associatedUsers" name="associatedUsers" value={formData.associatedUsers} onChange= {handleInputChange}/>
             </label>
             <label>
            <button type = "submit">Submit</button>
            </form>
        );
    };
    export default newMainNoteForm; 
