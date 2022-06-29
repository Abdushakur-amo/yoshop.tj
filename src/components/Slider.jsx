import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../scss/slider.scss';

function Slider() {
    let ArrIMG = [];
    /*// Экстрамалые девайсы («телефоны», < 320px)*/
    if (window.innerWidth < 320) {
        ArrIMG = [
            '/assets/images/slider/bg/1-0.jpg',
            '/assets/images/slider/bg/2-0.jpg',
            '/assets/images/slider/bg/3-0.jpg',
        ];
    }
    /*// Экстрамалые девайсы («телефоны», < 576px)*/
    else if (window.innerWidth < 575) {
        ArrIMG = [
            '/assets/images/slider/bg/1-1.jpg',
            '/assets/images/slider/bg/2-1.jpg',
            '/assets/images/slider/bg/3-1.jpg',
        ];
    }
    /*// Малые девайсы («ландшафтные», < 768px)*/
    else if (window.innerWidth < 767) {
        ArrIMG = [
            '/assets/images/slider/bg/1-2.jpg',
            '/assets/images/slider/bg/2-2.jpg',
            '/assets/images/slider/bg/3-2.jpg',
        ];
    }
    /*// Средние девайсы («таблетки», < 992px) */
    else if (window.innerWidth < 992) {
        ArrIMG = [
            '/assets/images/slider/bg/1-3.jpg',
            '/assets/images/slider/bg/2-3.jpg',
            '/assets/images/slider/bg/3-3.jpg',
        ];
    }
    /*// Большие девайсы (большие десктопы, < 1200px)*/
    else if (window.innerWidth < 1199) {
        ArrIMG = [
            '/assets/images/slider/bg/1-4.jpg',
            '/assets/images/slider/bg/2-4.jpg',
            '/assets/images/slider/bg/3-4.jpg',
        ];
    }
    else {
        ArrIMG = [
            '/assets/images/slider/bg/1-5.jpg',
            '/assets/images/slider/bg/2-5.jpg',
            '/assets/images/slider/bg/3-5.jpg',
        ];
    }
    return (
        <>
            <section id='slider'>
                <Carousel fade variant="dark">
                    <Carousel.Item
                        style={{ background: `rgba(0, 0, 0, 0) url(${ArrIMG[0]}) no-repeat scroll center center / cover` }}
                    >
                        <img className="d-block w-100" />
                        <Carousel.Caption>
                            <h3>Ноутбук в кредит из 3 до 12 месяц</h3>
                            <hr />
                            <p>Лучшие и качество ноутбуки мы предлагаем вам купить в 11 магазинах.  </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item
                        style={{ background: `rgba(0, 0, 0, 0) url(${ArrIMG[1]}) no-repeat scroll center center / cover` }}
                    >
                        <img className="d-block w-100" />
                        <Carousel.Caption>
                            <h3>Любая одехда в 28 магазинах</h3>
                            <hr />
                            <p>Так удобно не выходя из дома вы можете купить у нас в сайте, мы доставим их бесплатно внутри Душанбе и Ёвон.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item
                        style={{ background: `rgba(0, 0, 0, 0) url(${ArrIMG[2]}) no-repeat scroll center center / cover` }}
                    >
                        <img className="d-block w-100" />
                        <Carousel.Caption>
                            <h3>Мебели в кредит до 24 месяц</h3>
                            <hr />
                            <p>На любому вкус ест унас на сайтах мебел. Купите на 21 сех и магазин лучшие мебели.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    );

}
export default Slider;