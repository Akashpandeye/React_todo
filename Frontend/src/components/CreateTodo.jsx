export function CreateTodo(){
    return (
         <div>
        <input style = {{
            padding : 10,
            margin : 10
        }} type="text" placeholder="tile"></input> <br />
        <input style = {{
            padding : 10,
            margin : 10
        }} type="text" placeholder="discription"></input><br/>

        <button style = {{
            padding : 10,
            margin : 10
        }}>Add a Todo</button>
    
    </div>
    )
   
}