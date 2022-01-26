import React from 'react'
import Card from './Card';
import img1 from '../assets/campaignImage-1.png'
import img2 from '../assets/campaignImage-2.png'
import img3 from '../assets/campaignImage-3.png'
import img4 from '../assets/campaignImage-4.png'

const cards = [
    {
        id: 1,
        title: 'Daviplata',
        image: img1,
        url: 'https://www.youtube.com'
    },
    {
        id: 2,
        title: 'RappiPay ',
        image: img2,
        url: 'https://www.youtube.com'
    },
    {
        id: 3,
        title: 'Familias En Acción',
        image: img3,
        url: "https://www.youtube.com"
    },
    {
        id: 4,
        title: 'CivicaPay',
        image: img4,
        url: "https://www.youtube.com"
    }
]

function Cards() {
    console.log(cards)
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">{
                cards.map(card => (
                    <div className="col-md-3" key={card.id}>
                        <Card title={card.title} imageURL={card.image} text={card.text} url={card.url}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Cards
