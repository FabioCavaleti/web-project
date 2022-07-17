import React, { useContext } from 'react';
import Context from '../context/Context';
import './NavBar.css';

const NavBar = (props) => {
    const categoriesArr = 
    [
        ["Mais vendidos", "Most Sold"],
        ["Lançamentos", "Realease"],
        ["Todos", "All"],
        ["Clássicos", "Classic"],
        ["HQs e Mangas", "HQs e Mangas"],
        ["Literatura Infantojuvenil", "Childish"],
        ["Literatura Estrangeira", "Foreign"],
        ["Literatura Nacional", "Nacional"],
    ];

    const {
        setFilterByCategory,
        ableFilterArea,
    } = useContext(Context)

    const defineCategoryFilter = ({target}) => {
        ableFilterArea(true)
        setFilterByCategory({
            categoryFilter: target.id,
        })
    }


    return ( 
        <div className='nav-top-bar'>
            { categoriesArr.map((el) => (
            <button onClick={defineCategoryFilter} key={el[0]} id={el[1]} >{el[0]}</button>)) }
        </div>
    );
}
 
export default NavBar;