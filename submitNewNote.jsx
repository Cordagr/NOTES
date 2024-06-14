import  React, {useState} from 'react'

const createMainNotePage = (props) =>
{
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>
    {
    const [noteTitle, setTitle] = useState(); 
    const [noteActiveState, setNoteActiveState] = useState();
    const [associatedUsers, setAssociatedUsersState] = useState();
     const handleSubmit = (event) =>
     {

        event.preventDefault();
        const postData = new FormData();
        const navigate = useNavigate();
        const onSubmit = async(noteInformation)=>
        {
        const response = await fetch("http://myapicall.com/newNote", {body: noteInformation});
        console.log("Successful passing of associated members");
        navigate('/wantedurl');
        }


        const handleClick = ()=>
        {
       

        }
     }
    }

    return(
        <div className='createNewNoteModule'>
            <div className='noteLogoCircle'>
                <img src = {People} className='loginLogo'/>
            </div>
            <form onSubmit={handleSubmit}>
            <p className='newNoteText'>
                Please submit any associated members
            </p>
            <p className='NewNote'>
                Enter your credentials
            </p>
                <div className='inputView'>
                    <img src = {Email} className='inputLogo'/>
                    <input 
                        type='email' value={email} 
                        placeholder='example@prodigy-id.com' 
                        className='inputColUser' 
                        onChange={handleEmailChange}/>
                </div>
                    <div className='inputView' style={{marginTop: 20}}>
                        <img src = {Lock} className='inputLogo'/>
                        <input 
                            type={passwordShown ? 'text' : 'password'} 
                            value={password} 
                            placeholder='Type password..' 
                            className='inputColUserPass' 
                            onChange={handlePasswordChange}/>
                        <div>
                            {svg === EyeOn ? (
                                <img src = {EyeOn} onClick={handleClick} className='inputLogo'/>
                              ) : (
                                <img src = {EyeOff} onClick={handleClick2} className='inputLogo'/>
                              )}
                        </div>
                </div>
                <Checkbox/>
                <a href='/administrator/dashboard'>
                    <button onClick={handleLoginSubmit} type='submit' className="loginButton">
                        <p>LOGIN</p>
                        <img src = {Continue} className='buttonLogo'/>
                    </button>
                </a>
            </form>
            <p className='termsFont'> By continuing, you're confirming that you've read our Terms & Conditions and Cookie Policy</p>
        </div>
      )
    }


