import './App.css'; 
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar';
import Title from './Title';
import Card from './Card';
import { useState } from 'react';

function App() {
  const cardContent = [
    {
      name: 'Iphone',
      image: 'https://i.pinimg.com/736x/18/84/24/1884248df0286062436ea23d29ef5183.jpg',
      price: '200',
      description: 'Where innovation meets sleek design in the palm of your hand.',
      buttonText: 'Add to Cart'
    },
    {
      name: 'Samsung',
      image: 'https://i.pinimg.com/564x/8c/cd/6f/8ccd6f93cdabe4ad8e437f8799895b83.jpg',
      price: '300',
      description: 'Elevating technology with cutting-edge features and stylish innovation.',
      buttonText: 'Add to Cart'
    },
    {
      name: 'onePlus',
      image: 'https://i.pinimg.com/564x/f6/f8/67/f6f867efc6192e4d9a5ff6fdfcd4cfd7.jpg',
      price: '400',
      description: 'Unleashing speed and elegance in a flagship killer package.',
      buttonText: 'Add to Cart'
    },
    {
      name: 'Redmi',
      image: 'https://i.pinimg.com/564x/fc/a3/93/fca3938d1c85f4934338fda51bbd3281.jpg',
      price: '500',
      description: 'Redefining affordability without compromising on performance and features.',
      buttonText: 'Add to Cart'
    },
    {
      name: 'Nokia',
      image: 'https://i.pinimg.com/564x/0f/f7/c5/0ff7c5e808eb6bfa898e23791a026727.jpg',
      price: '100',
      description: 'Connecting people through time-tested durability and innovative technology.',
      buttonText: 'Add to Cart'
    },
    {
      name: 'POCO',
      image: 'https://i.pinimg.com/564x/4b/fd/0e/4bfd0e2fc0a0036f88429088d9560532.jpg',
      price: '400',
      description: 'Power-packed performance at an unbeatable price, redefining budget smartphones.',
      buttonText: 'Add to Cart'
    },
    {
      name: 'Moto',
      image: 'https://i.pinimg.com/564x/9a/a5/21/9aa521b6d838e6dd518e01dd0dbe700c.jpg',
      price: '200',
      description: 'Blending iconic design with reliable performance for a classic mobile experience.',
      buttonText: 'Add to Cart'
    },
    {
      name: 'Google',
      image: 'https://i.pinimg.com/564x/86/22/1d/86221d3754af36743e1158bff3a08ba4.jpg',
      price: '500',
      description: 'Capturing the essence of pure Android with a focus on exceptional camera capabilities and seamless integration.',
      buttonText: 'Add to Cart'
    }
  ]

  const [num,setNum] = useState(0);
  function navClick()
  {
    setNum(num+1);
  }
  function decrease()
  {
    if(num>0)
      setNum(num-1);
  }

  return (
    <div className='app'>
      <Navbar num={num} ></Navbar>
      <Title></Title>
      <header className='p-5 m-5'>
        <div className='container'>
          <div className="row">
            {cardContent.map(ele => <Card data={ele} navClick={navClick} decrease={decrease}></Card>)}
          </div>
        </div>
      </header>  
      <footer class="py-5 bg-dark">
          <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
      </footer>        
      
          
    </div>
  );
}

export default App;
