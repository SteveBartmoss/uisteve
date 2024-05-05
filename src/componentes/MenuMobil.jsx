import { useState } from "react";
import { Icon } from "./Icon";
import { MenuList } from "./MenuList";


export function MenuMobil() {

    const [abrir, setAbrir] = useState(false)

    const onHandleClick=()=>{
        setAbrir(!abrir)
    }

    return (
        <div className="menu-mobil">
            <div onClick={onHandleClick}>
                <Icon icono="menu" color="md-light" />
            </div>
            <div className={abrir ? 'menu-mobil-open' : 'menu-mobil-close'} >
                <MenuList title={'Cards'} elements={
                    [
                        {
                            title: 'Card Basic',
                            route: '/cards/basic',
                        },
                    ]
                }
                />
                <MenuList title={'Components'} elements={
                    [
                        {
                            title: 'Expansion Panel',
                            route: '/acordeon',
                        },
                        {
                            title: 'Buttons',
                            route: '/components/buttons',
                        },
                        {
                            title: 'Tabs',
                            route: '/components/tabs',
                        },
                        {
                            title: 'Modales',
                            route: '/components/modales',
                        },
                        {
                            title: 'Iconos',
                            route: '/components/icons',
                        },
                        {
                            title: 'Loader',
                            route: '/components/loader',
                        },
                        {
                            title: 'Tool Tip',
                            route: '/components/tooltip',
                        },
                        {
                            title: 'Chip',
                            route: '/components/chip',
                        },
                        {
                            title: 'SnackBar',
                            route: '/components/snackbar',
                        },
                        {
                            title: 'Menu',
                            route: '/components/menu',
                        }
                    ]
                }
                />
                <MenuList title={'Forms & Tables'} elements={
                    [
                        {
                            title: 'Texfield',
                            route: '/forms/texfield',
                        },
                        {
                            title: 'Switch',
                            route: '/forms/switch',
                        },
                        {
                            title: 'Slider',
                            route: '/forms/slider',
                        },
                        {
                            title: 'Text Long',
                            route: '/forms/textlong',
                        }
                    ]
                }
                />
            </div>
        </div>
    )
}