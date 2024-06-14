import React , {useState} from 'react';
import {Button} from '../mainIndex'
import {userProfile} from 'userProfile'

export default function App()
{


const[cookies, setCookie] = useCookies(['user'])

function handleLogin(user)
{
  setCookie('user',user,{path:'/'})
}

function createUser()
{



}

  const [notes,setNotes] = React.useState(()=>JSON.parse(localStorage.getItem("notes"))||[])
  function createNewMainNote()
  {
  const newMainNote = 
  {
    title: "User Types title here",
    body: "User Types here",
    associatedUsers:"Needs parsing (list given by user, parse using POST req and external system to access collaboration/sharing perms)"
  } 
  }
  
  return (
    <CookiesProvider>
      <div>{cookies.user ? <WelcomePage user={cookies.user} /> : <LoginPage onLogin={handleLogin} />}</div>
    </CookiesProvider>
  )
}
