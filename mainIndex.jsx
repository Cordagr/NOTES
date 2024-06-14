import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Button = props =>
    (
        <button onClick={()=> props.onClick()}>
            {props.text}
            </button>

    )

    class Form extends Component
    onClick()
    {
        console.log('Form submitted');
    }

render()
{
return
(
<Button onClick={() => this.onClick()} text="Submit" />
)
}

class App extends Component
onClick()
{
    console.log('Application clicked!')
}

render()
{
    return(
        <div>
            <Form/>
            <Button onClick={()=> this.onClick()} text="App"/>
            </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));
