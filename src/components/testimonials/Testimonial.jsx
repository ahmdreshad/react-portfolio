import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

function Testimonial() {
  const data = [
    {
      avatar: AVTR1,
      name: 'Shale Wale',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsam laudantium odio optio aliquid ratione sequi, quaerat inventore facilis dolor nihil maxime, adipisci quia at cupiditate dolorum? Dolores, quia necessitatibus.',
    },
    {
      avatar: AVTR2,
      name: 'Shale Wale',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsam laudantium odio optio aliquid ratione sequi, quaerat inventore facilis dolor nihil maxime, adipisci quia at cupiditate dolorum? Dolores, quia necessitatibus.',
    },
    {
      avatar: AVTR3,
      name: 'Shale Wale',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsam laudantium odio optio aliquid ratione sequi, quaerat inventore facilis dolor nihil maxime, adipisci quia at cupiditate dolorum? Dolores, quia necessitatibus.',
    },
    {
      avatar: AVTR4,
      name: 'Shale Wale',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsam laudantium odio optio aliquid ratione sequi, quaerat inventore facilis dolor nihil maxime, adipisci quia at cupiditate dolorum? Dolores, quia necessitatibus.',
    },
  ]

  return (
    <section id="testimonials">
      <h5>Clients Review</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        pagination={({ dynamicBullets: true }, { clickable: true })}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {/* ====================== swiper js ============ */}
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonial
