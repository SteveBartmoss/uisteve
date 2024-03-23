

export function MenuList({children,title}){
    <div className="menu-list">
        <div className="menu-list-head">
            <div className="menu-list-title">{title}</div>
        </div>
        <div>
            {children}
        </div>
    </div>
}