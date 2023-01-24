const Header = (props) => {
    return (
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            {props.title}
        </h1>
    )
}

export default Header;