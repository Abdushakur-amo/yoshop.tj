import React from 'react';
export default function Search() {
    return (
        <section className="search-all">
            <div className="container">
                <br />
                <h4>Поиск товаров</h4>
                <div className="row">
                    <div className="col-md">
                        <form action="api/home" method="post">
                            <input type="hidden" name='name' value={'search'} />
                            <input type="text" className="form-control" />
                            <br />
                            <div className="element-center">
                                <button className='btn btn-success btn-lg'>Поиск</button>
                            </div>
                            <br />
                        </form>
                        <hr />
                    </div>
                </div>
            </div>
        </section>
    );
}
