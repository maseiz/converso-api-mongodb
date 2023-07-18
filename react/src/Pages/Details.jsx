import BannerTop from '../Components/NavBar/BannerTop'
import Navbar from '../Components/NavBar/NavBar'
import ProductDetail from '../Components/Products/ProductDetail'
import FooterData from '../Components/Footer/FooterData'
import Socials from '../Components/Footer/Socials'
import BannerBottom from '../Components/Home/BannerBottom'
import { useParams } from 'react-router-dom'
import {useContext} from "react";
import {DataContext} from '../Context/ConversoContext';

export default function Details (){
const {id} = useParams();
console.log("funciona porfissss");

const { data } = useContext (DataContext);
console.log("mira este objeto " + data);

const Detail = data.find(item => item.id === parseInt(id));
console.log("esto retorna el objeto" + Detail);
   return (
      <div>
         <BannerTop />
         <Navbar />
         <ProductDetail id={Detail} />
         <BannerBottom />
         <FooterData />
         <Socials />
      </div>
   )
}