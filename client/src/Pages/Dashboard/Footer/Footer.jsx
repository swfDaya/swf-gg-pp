import React, {useState} from 'react'
import './Footer.css'
import icon_activity from './asstes/activity.svg'
import icon_activity_select from './asstes/activity-black.svg'
import icon_anchor from './asstes/anchor.svg'
import icon_anchor_select from './asstes/anchor-black.svg'
import icon_book from './asstes/book-open.svg'
import icon_book_select from './asstes/book-open-black.svg'
import icon_box from './asstes/box.svg'
import icon_box_select from './asstes/box-black.svg'
import icon_coffee from './asstes/coffee.svg'
import icon_coffee_select from './asstes/coffee-black.svg'

const Footer = () => {

    const iconArray = [icon_activity, icon_activity_select, icon_anchor, icon_anchor_select, 
        icon_book, icon_book_select, icon_box, icon_box_select, icon_coffee, icon_coffee_select]

    const [selectedIcon, setSelectedIcon] = useState(2)

    return (
        <div
        className = 'footer-root'
        >
        {
            [1,2,3,4,5].map(
                (item, index) => {
                    return(
                        <div
                        key={item}
                        className = 'footer-nav-each to-center'
                        >
                            <img
                            onClick={() => setSelectedIcon(index)}
                            alt = "navIcons"
                            src = { index === selectedIcon ? iconArray[index*2 + 1] : iconArray[index*2]}
                            />
                        </div>
                    )
                }
            )
        }
        </div>
    )
}

export default Footer
