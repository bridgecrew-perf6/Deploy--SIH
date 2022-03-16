import React from 'react'
import img0 from '../../../assets/images/taj.jpg'
import img1 from '../../../assets/images/red-fort.jpg'
import img2 from '../../../assets/images/taj-mahal.png'
import img3 from '../../../assets/images/back1.jpg'
import img4 from '../../../assets/images/Lotus.jpg'
import img5 from '../../../assets/images/ajanta-and-ellora-caves.jpg'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  function loadComponent() {
    document.body.innerHTML  = "";
    var divElement = document.createElement("div");
    divElement.id = "root";
    document.body.appendChild(divElement);
     window.renderMyReactApp("root");
  }

  return (
    <div>
      {/* <div className="bg"> */}
         <br></br>
   
    <div className="container">
      {/*<h2 className="hi">  Heritage Of India</h2>  
      <span className = "hi"   style={{color:"#f37e11e5"}}     >Heritage</span>
      <span className = "hi" style={{color:"#f7f8f7"}}>Of</span>
      <span className = "hi" style={{color:"#07680f"}}>India</span>
      <br></br>*/}
      
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
      {/*Indicators*/}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
          <li data-target="#myCarousel" data-slide-to="5"></li>
        </ol>
    
      {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item active">
            <img src={img0} alt="" style={{width:"100%", height:"80vh"}}></img>
            {/* <div className="carousel-caption"> */}
              {/*<h3>India Gate</h3><br/>*/}
              {/*<p className="p"> The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway. It stands as a memorial to 90,000 soldiers of the British Indian Army who died in between 1914 and 1921 in the First World War.</p>*/}
            {/* </div> */}
          </div>
    
          <div className="item">
            <img src={img1} alt="" style={{width:"100%", height:"80vh"}}/>
            {/* <div className="carousel-caption">
              <h3>Red Fort</h3><br/>
              <p className="p">The Red Fort or Lal Qila  is a historic fort in Old Delhi, Delhi in India that served as the main residence of the Mughal Emperors.!</p>
            </div> */}
          </div>
          <div className="item">
              <img src={img2} alt="" style={{width:"100%", height:"75vh"}}/>
              {/* <div className="carousel-caption">
                <h3 >Taj Mahal</h3><br/>
                 <p className="p">The Taj Mahal 'Crown of the Palace', is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (r. 1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.</p> 
              </div> */}
            </div>
        
          <div className="item">
            <img src={img3} alt="" style={{width:"100%", height:"75vh"}}></img>
            {/* <div className="carousel-caption">
              <h3>Sun Temple</h3><br/>
               <p className="p">Konark Sun Temple is a 13th-century CE (year 1250). Dedicated to the Hindu Sun God Surya, what remains of the temple complex has the appearance of a 100-foot (30 m) high chariot with immense wheels and horses, all carved from stone.</p> 
            </div> */}
          </div>

          <div className="item">
              <img src={img4} alt="" style={{width:"100%", height:"75vh"}}/>
              {/* <div className="carousel-caption">
                <h3>Lotus Temple</h3><br/>
                <p className="p" > The Lotus Temple, located in Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986. Notable for its flowerlike shape, it has become a prominent attraction in the city. Like all Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other qualification.</p> 
              </div> */}
            </div>
            <div className="item">
              <img src={img5} alt="" style={{width:"100%", height:"75vh"}}/>
              {/* <div className="carousel-caption">
                <h3>Ajanta And Ellora Caves</h3><br/>
                <p className="p">The Ajanta Caves are approximately 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE in the Aurangabad district of Maharashtra state in India. The caves include paintings and rock-cut sculptures described as among the finest surviving examples of ancient Indian art, particularly expressive paintings that present emotions through gesture, pose and form!</p>
              </div> */} 
            </div>

          
        </div>
    
        {/* Left and right controls -->*/}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br/>
      <div className="para-2">
      {/*<p>Indian culture is the heritage of social norms, ethical values, traditional customs, belief systems, political systems, artifacts and technologies that originated in or are associated with the ethno-linguistically diverse Indian subcontinent. The term also applies beyond India to countries and cultures whose histories are strongly connected to India by immigration, colonization, or influence, particularly in South Asia and Southeast Asia. India's languages, religions, dance, music, architecture, food and customs differ from place to place within the country.<br/>

          Indian culture, often labelled as a combination of several cultures, has been influenced by a history that is several millennia old, beginning with the Indus Valley Civilization and other early cultural areas. Many elements of Indian culture, such as Indian religions, mathematics, philosophy, cuisine, languages, dance, music and movies have had a profound impact across the Indosphere, Greater India and the world. Specifically Southeast Asian and Himalayan influence on early India, had lasting impacts on the formation of Hinduism and Indian mythology. Hinduism itself formed from various distinct folk religions, which merged during the Vedic period and following periods.
          Especially Austroasiatic groups, such as early Munda and Mon Khmer, but also Tibetic and other Tibeto-Burmese groups, left noteworthy influence on local Indian peoples and culture. Several scholars, such as Professor Przyluski, among others, concluded that there is a significant cultural, linguistic, and political Mon-Khmer (Austroasiatic) influence on early India, which can also be observed by Austroasiatic loanwords within Indo-Aryan languages and rice cultivation, which was introduced by East/Southeast Asian rice-agriculturalists using a route from Southeast Asia through Northeast India into the Indian subcontinent</p>
    */}
  </div>
      <Link to="/book_ticket">
          <button className="btn"  onClick={loadComponent}>Book Tickets </button> 
      </Link>
    </div>

{/* </div> */}
  
 
</div>
    
  )
  }
