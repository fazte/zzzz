import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import produc from '/card/product.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Sl({products,setProducts}){



return(
    <section className='slider_section'>
        <h2>Новые товары</h2>
        <Swiper
          modules={[Navigation, Pagination,]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {products.map((product, key) => {
            return (
              <SwiperSlide key={key} >
                <article className="product-card">
                  <img src={produc} alt="" />
                  <h3 className="product__name">{product.name}</h3>
                  <p className="product__price">{product.price}</p>
                  <button className="product__btn" data-id={product.id}>
                    Купить
                  </button>
                </article>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
)

      
}