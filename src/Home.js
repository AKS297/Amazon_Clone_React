import React from 'react'
import './Home.css';
import Product from './Product';


export default function Home() {
    return (
        <div className='home'>
            <img className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='banner'
            />


            <div className='home__row'>
                <Product className='single__product'
                    id='123'
                    title='Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!'
                    price={199}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY218_.jpg'

                />
                <Product
                    id='1234'
                    title='Redmi Note 11T 5G (Matte Black, 6GB RAM, 128GB ROM)| Dimensity 810 5G | 33W Pro Fast Charging | Charger Included | Additional Exchange Offers|Get 2 Months of YouTube Premium Free!'
                    price={14999}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/7155Pasn1aL._AC_UY218_.jpg'

                />
            </div>
            <div className='home__row'>
                <Product
                    id='124'
                    title='Redmi Note 10 Pro (Vintage Bronze, 6GB RAM, 128GB Storage) -120Hz Super Amoled Display | 64MP Camera with 5MP Super Tele-Macro | 33W Charger Included'
                    price={17999}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/81aQWPoGdOL._AC_UY218_.jpg'

                />
                <Product
                    id='12'
                    title='Redmi Note 11 Pro + 5G (Mirage Blue, 6GB RAM, 128GB Storage) | 67W Turbo Charge | 120Hz Super AMOLED Display | Additional Exchange Offers | Charger Included| Get 2 Months of YouTube Premium Free!'
                    price={18999}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/71UDT0TuNDL._AC_UY218_.jpg'

                />
                <Product
                    id='1'
                    title='Fire-Boltt Beam Bluetooth Calling Smartwatch with 1.72” Full Touch & 320*380 Pixel Resolution, AI Voice Assistant, IP68 Rating, 60 Sports Modes & Full Metal Body'
                    price={1}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/61IClHkR1HL._AC_UY218_.jpg'

                />
            </div>
            <div className='home__row'>

            </div>
            <Product
                id='1235'
                title='ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-'
                price={199}
                rating={5}
                image='https://m.media-amazon.com/images/I/71S8U9VzLTL._AC_UY218_.jpg'

            />

        </div>
    )
}