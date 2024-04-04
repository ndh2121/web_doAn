import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'
import {handlePercentDiscount} from '../../../untils/index'


function Iphone(props) {
    const [name, setName] = useState('iphone');
    const [hotIphone, setHotIphone] = useState([])
    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotIphone(data)
            } catch (error) {
            }
        }
        FetchApi()
    }, [])

   

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                    hotIphone ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotIphone)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Iphone;