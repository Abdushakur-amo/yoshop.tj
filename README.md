<div ref={scrollNav} id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                    <div className="container">
                        <nav className="navbar navbar-light ">
                            <Link to="/" className="navbar-brand">
                                <img src="/assets/images/logo/logo2.png" className="d-inline-block align-top" />
                            </Link>
                            {/* <div>
                                <ul id="menu-primary" className="main-menu main-nav">
                                    <li id="menu-item-32" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"><a href="https://artel-avesto.tj/novosti/">НОВОСТИ</a></li>
                                    <li id="menu-item-31" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"><a href="https://artel-avesto.tj/katalog/">КАТАЛОГ</a></li>
                                    <li id="menu-item-30" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30"><a href="https://artel-avesto.tj/gde-kupit/">ГДЕ КУПИТЬ</a></li>
                                    <li id="menu-item-29" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29"><a href="https://artel-avesto.tj/servis/">СЕРВИС</a></li>
                                    <li id="menu-item-28" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28"><a href="https://artel-avesto.tj/kontakti/">КОНТАКТЫ</a></li>
                                </ul>
                            </div> */}
                            <div className="content-icons">
                                <ul className="menu-extra">
                                    <li>
                                        <Link to="/" className="navbar-brand">
                                            <span className="ti-search"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="navbar-brand">
                                            <span className="ti-user"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/carzin">
                                            <span className="ti-shopping-cart"></span>
                                        </Link>
                                    </li>
                                    <li
                                        ref={BurgerMenuRef}
                                        className={`  ${activeBurger ? 'btn-active' : ''}`}
                                    >
                                        <a><span className='ti-menu' ></span></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>