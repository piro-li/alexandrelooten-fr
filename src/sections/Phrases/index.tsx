import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import Window from '../../components/Window';
import './style.scss';
import taglineStrings from '../../data/taglineStrings';

export default function Phrases() {
  return (
    <Window id="phrases" head={{ title: "C'est moi", level: 2, color: 'tertiary' }}>
      <Swiper
        direction="vertical"
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="phrases"
      >
        {taglineStrings.map((taglineString) => (
          <SwiperSlide className="phrases__slide">
            <span className="phrases__slide__text">
              {taglineString}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </Window>
  );
}
