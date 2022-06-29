import React from 'react';
import { Link } from 'react-router-dom';
import jQuery from 'jquery';
import { http } from '../../../ajax';
// import '../../../scss/cat-menu.scss';
import '../../../scss/header.scss';

const objectNav = {
    width: '100%',
    top: 100,
    // BackgroungColor: '#336ca6',
    BackgroungColor: '#212529',
    ListClass: {
        ActiveUl: 'active-ul-2',
        ActiveAfterNav: 'after-nav-2',
        ActiveRoot: 'active-menu-2',
        NavOneClass: 'cat-menu-2',
        NavContent: 'content-cats',
    }
};
function Catalog(props) {
    const [error, setCatError] = React.useState(null);
    const [isLoaded, setCatIsLoaded] = React.useState(false);
    const [categorys, setCatCategorys] = React.useState([]);
    const [scrollTop, setScrollTop] = React.useState(0);
    const NavRef = React.useRef();

    const ajax = () => {
        jQuery.ajax({
            url: `${http()}/api/categorys`,
            method: 'POST',
            data: { 'date': 1 },
            dataType: "html",
            beforeSend: function () {
                setCatIsLoaded(true);
            },
            success: function (data) {
                let json = jQuery.parseJSON(data);
                setCatCategorys(json);
            }
        });
    };
    const navSinglePageClick = (event) => {
        if (event.target.nodeName !== 'SPAN') return false;
        else {
            let ulActive = event.target.parentNode.previousElementSibling;
            console.log(ulActive);
            //CloseChildren(ulActive);
            ulActive.classList.toggle(objectNav.ListClass.ActiveUl);
        }
        const Action = document.querySelectorAll(`.${objectNav.ListClass.NavOneClass} .${objectNav.ListClass.ActiveUl}`);
        let CountRootTrans = (Action.length * 40) + objectNav.width;
        document.querySelector('#root').style.transform = `translate3d(${CountRootTrans}px, 0, 0)`;
    };
    const CloseChildren = (current = null) => {
        let parents = [];
        if (current) {
            let currentParent = current.parentNode;
            while (currentParent) {
                if (currentParent.classList.contains(objectNav.ListClass.NavOneClass)) break;
                if (currentParent.classList[0] == objectNav.ListClass.NavContent)
                    parents.push(currentParent);
                currentParent = currentParent.parentNode;
            }
        }
        const subMenu = document.querySelectorAll(`.${objectNav.ListClass.NavOneClass} .${objectNav.ListClass.NavContent}`);
        Array.from(subMenu).forEach(item => {
            if (item.classList.contains('start') || item.classList.contains(objectNav.ListClass.ActiveUl)) item.classList.add(objectNav.ListClass.ActiveAfterNav);
            if (item != current && !parents.includes(item)) {
                item.classList.remove(objectNav.ListClass.ActiveUl);
                item.classList.remove(objectNav.ListClass.ActiveAfterNav);
            }
        });
    }
    const CreateMenuTitle = () => {
        const ChldrenNav = document.querySelectorAll(`nav.${objectNav.ListClass.NavOneClass} li.children`);
        let ArrayTitle = [objectNav.title];
        Array.from(ChldrenNav).forEach(item => {
            ArrayTitle.push(item.children[0].children[0].innerText);
            let title = item.children[1].children[0].innerText;
            item.children[0].children[0].innerText = title;
            // Назад 
            if (item.children[0].children[0].innerText) {
                let num = (ArrayTitle.length - 1);
                item.children[0].children[1].children[0].innerText = ArrayTitle[num];
            }
        });
    };
    React.useEffect(() => {
        ajax();
    }, []);

    const CreateObjectDOM = (cat, id, parentProp) => {
        const tree = Object.fromEntries(cat.map(n => [n[id], { ...n, children: [] }]));
        return Object.values(tree).filter(n => !tree[n[parentProp]]?.children.push(n));
    };
    const CreateUL_in_JSX = (data) => {

        return (
            <>
                <ul>
                    {data?.map((item, index) => {
                        return (
                            <li
                                key={`${item.id}_${index}`}
                                className={item.children.length ? 'children' : null}
                            >
                                {item.children.length ?
                                    <div className={objectNav.ListClass.NavContent}>
                                        {CreateUL_in_JSX(item.children)}
                                    </div>
                                    : ' '}
                                <div className="nav-link">
                                    {item.children.length ?
                                        <span className='parent-link'> {item.title} </span> :
                                        <Link to={'category/' + item.id}> {item.title} </Link>}

                                </div>

                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
    let CategoryNavMenu = CreateUL_in_JSX(CreateObjectDOM(categorys, 'id', 'parent'));
    if (error) return <div className='Error__menu'>Ошибка: Меню категория из Api не загружан / {error.message} </div>;
    else return (
        <>
            <div className="categories-menu mrg-xs" id="categories-menu">
                <nav ref={NavRef} onClick={(e) => navSinglePageClick(e)}>
                    {(!isLoaded) ? <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ddd' }}>Загрузка...</div> :
                        CategoryNavMenu
                    }
                </nav>
            </div>
        </>
    );
}
export default Catalog;
