import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel className='p-3 mb-3'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-road_114579-5051.jpg?t=st=1651984660~exp=1651985260~hmac=8925540674184c8100f4e65796e71e82995e8856206349ad0d2b45c909661f15&w=740"
                    alt=""
                />
                <Carousel.Caption>
                    <h3>Sport Car</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg?t=st=1652012869~exp=1652013469~hmac=9b3a827d9778d5ccbb5daab4ce58d9f2b0bce44e8a6c000cb06bcce99999b811&w=740"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Sedan blue Sport Car</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg?t=st=1652012869~exp=1652013469~hmac=1ce9e98ec0457ba0f61265a53d8d92a6b02379acbbd98f9e2ae64fc00fb4effb&w=740"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Dark Night</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;