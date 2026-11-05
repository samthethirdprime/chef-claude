import chef from '../images/chef-claude-icon.png'


export default function Header() {

    function hover() {
        console.log("image hovered")
    }
    return(
        <header className='header'>
            <img src={chef} alt='chef-animation' className='logo' onMouseOver={hover}></img>
            <h1>Chef Claude</h1>
        </header>
    )
}
