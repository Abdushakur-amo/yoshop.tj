import React from 'react';
import { Link } from 'react-router-dom';
import jQuery from 'jquery';
import { http } from '../../../ajax';
import '../../../scss/cat-menu.scss';
let WindowWidth;
if (window.innerWidth > 575) WindowWidth = 400;
else WindowWidth = window.innerWidth;
const objectNav = {
    title: 'Все категори',
    width: WindowWidth,
    top: 100,
    // BackgroungColor: '#336ca6',
    BackgroungColor: '#212529',
    ListClass: {
        ActiveUl: 'active-ul',
        ActiveAfterNav: 'after-nav',
        ActiveRoot: 'active-menu',
        NavOneClass: 'cat-menu',
        NavContent: 'nav-content',
    }
};
function Menu(props) {
    const [error, setCatError] = React.useState(null);
    const [isLoaded, setCatIsLoaded] = React.useState(false);
    const [categorys, setCatCategorys] = React.useState([]);
    const [scrollTop, setScrollTop] = React.useState(0);
    const NavRef = React.useRef();
    const BtnNavCloseRef = React.useRef();
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
    const ToggleMenu = (param = false) => {
        if (param) {
            document.querySelector('#root').style.transform = `translate3d(${objectNav.width}px, 0px, 0px)`;
            document.querySelector('#root').classList.add(objectNav.ListClass.ActiveRoot);
            document.querySelector('body').style.backgroundColor = objectNav.BackgroungColor;
            document.querySelector('body').style.overflowY = 'hidden';
            document.querySelector('body').style.overflowX = 'hidden';
        }
        else {
            document.querySelector('#root').style.transform = null;
            document.querySelector('#root').classList.remove(objectNav.ListClass.ActiveRoot);
            document.querySelector('body').style.overflowY = 'scroll';
            document.querySelector('body').style.backgroundColor = null;
        }
    }
    const ClickBodyForNavMenu = (e) => {
        let YesActionNavMenu = document.querySelector('#root').classList.contains('active-menu');
        let scroll = 0;
        if (window.scrollY < 125) scroll = window.scrollY;
        else scroll = 110;
        if (e.path[0].classList.contains('link-close-nav')) {
            CloseChildren();
            ToggleMenu(false);
        }
        else if (e.path.includes(NavRef.current) && !e.path.includes(BtnNavCloseRef.current)) {
            return false;
        }
        else if (e.path.includes(props.BurgerMenuRef.current)) {
            setScrollTop(scroll);
            ToggleMenu(true); // Открит меню
        }
        else {
            if (YesActionNavMenu) {
                CloseChildren(); // Закрвает все подкатегори
                ToggleMenu(false); // Закрит меню
            }
            else return false;
        }
    };
    const navSinglePageClick = (event) => {
        if (event.target.nodeName !== 'SPAN') return false;
        if (event.target.classList[0] === 'exit-span') {
            event.target.parentNode.parentNode.classList.remove(objectNav.ListClass.ActiveUl)
            event.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove(objectNav.ListClass.ActiveAfterNav)
        }
        else {
            let ulActive = event.target.parentNode.previousElementSibling;
            CloseChildren(ulActive);
            ulActive.classList.toggle(objectNav.ListClass.ActiveUl);
        }
        const Action = document.querySelectorAll(`.${objectNav.ListClass.NavOneClass} .${objectNav.ListClass.ActiveUl}`);
        let CountRootTrans = (Action.length * 40) + objectNav.width;
        document.querySelector('#root').style.transform = `translate3d(${CountRootTrans}px, 0px, 0px)`;
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
        document.body.addEventListener('click', ClickBodyForNavMenu);
        return () => {
            document.body.removeEventListener('click', ClickBodyForNavMenu);
        }
    }, []);
    const CreateObjectDOM = (cat, idProp, parentProp) => {
        const tree = Object.fromEntries(cat.map(n => [n[idProp], { ...n, children: [] }]));
        return Object.values(tree).filter(n => !tree[n[parentProp]]?.children.push(n));
    };
    const CreateUL_in_JSX = (data, h1 = null) => {
        return (
            <ul>
                {data?.map((item, index) => {
                    return (
                        <li
                            key={`${item.id}_${index}`}
                            className={item.children.length ? 'children' : null}
                        >
                            {item.children.length ?
                                <div className={objectNav.ListClass.NavContent}>
                                    <h2 className="level-title">{h1}</h2>
                                    <div className='nav-next'><span className='exit-span'>Назад</span></div>
                                    {CreateUL_in_JSX(item.children, item.title)}
                                </div>
                                : ' '}
                            <div className="nav-item-wrapper">
                                {item.children.length ?
                                    <><span className='parent'> {item.title} </span> </> :
                                    <><Link className='link-close-nav' to={'category/' + item.id}> {item.title} </Link> </>}

                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
    let CategoryNavMenu = CreateUL_in_JSX(CreateObjectDOM(categorys, 'id', 'parent'));
    CreateMenuTitle(); // Создаюёт title и кнопку назад в меню
    if (error) return <div className='Error__menu'>Ошибка: Меню категория из Api не загружан / {error.message} </div>;
    else return (
        <>
            <div className='parent-nav'>
                <div className='parent-nav-chldren'>
                    <nav
                        ref={NavRef}
                        className={objectNav.ListClass.NavOneClass}
                        onClick={(e) => navSinglePageClick(e)}
                        style={{
                            width: `${objectNav.width}px`,
                            left: `-${objectNav.width}px`,
                            top: `${scrollTop}px`,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`,
                        }}
                    >
                        {(!isLoaded) ? <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ddd' }}>Загрузка...</div> :
                            <div className={`${objectNav.ListClass.NavContent} start`}>
                                <h2 className="level-title">{objectNav.title}</h2>
                                <div className='nav-close'><b ref={BtnNavCloseRef} className='btn-close-nav' >X</b></div>
                                {CategoryNavMenu}
                            </div>
                        }
                    </nav>
                </div>
            </div>
        </>
    );
}
export default Menu;
// https://somewebmedia.github.io/hc-offcanvas-nav/