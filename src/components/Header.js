import Button from "./Button"
const Header = ({ title,onAdd,showAdd }) => {

    return (
        <header className="header">
            <h1>{ title }</h1>
            <Button 
            color={showAdd ? "crimson" : "dodgerblue"} 
            text={showAdd ? "Close" : "Add Task"} 
            onClick={onAdd} 
            />
        </header>
  )
}

export default Header