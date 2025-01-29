
interface MenuLateral{
    show:boolean
    onClose: () => void
    children?:  React.ReactNode
}

const MenuLateral: React.FC<MenuLateral> = (props) =>{
    if (!props.show) return null

    return(
        <>
        {props.children}
        </>
    )
}

export default MenuLateral