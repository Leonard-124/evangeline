import bike from "../assets/images/bike.jpg"
import bikes from  "../assets/images/bikes.jpg"
import redcar from "../assets/images/redcar.jpg"
import whitecar from "../assets/images/whitecar.jpg"
import sweets from "../assets/images/sweets.jpg"
import italian from "../assets/images/Italian-Coke.jpg"
import Mountain from "../assets/images/Mountain bike.jpg"
import burger from "../assets/images/burger.jpg"
import burger2 from "../assets/images/burger2.jpg"
import burger3 from "../assets/images/burger3.jpg"
import burger4 from "../assets/images/burger4.jpg"
import Coke from "../assets/images/Coke.jpg"
import ferari from "../assets/images/ferari.jpg"
import lambogini from "../assets/images/lambogini.jpg"

const products = [
    {
        id: 1,
        name: "Mountain Bike",
        image: Mountain,
        description: "A high-quality mountain bike for off-road adventures.",
        old_price: 23000,
        new_price: 20000,
        category: "Accessories"
    },
    {
        id: 2,
        name: "Red Car",
        image: redcar,
        description: "A sleek red car for a stylish ride.",
        old_price: 50000,
        new_price: 45000,
        category: "Beauty"
    },
    {
        id: 3,
        name: "White Car",
        image: whitecar,
        description: "A luxurious white car for a premium experience.",
        old_price: 60000,
        new_price: 55000,
        category: "Sports"
    },
    {
        id: 4,
        name: "Sweets",
        image: sweets,
        description: "Delicious sweets to satisfy your cravings.",
        old_price: 1000,
        new_price: 800,
        category: "Phones"
    },
    {
        id: 5,
        name: "Italian Coke",
        image: italian,
        description: "Authentic Italian Coke for a refreshing taste.",
        old_price: 1500,
        new_price: 1200,
        category: "Crockery"
    },
    {
        id: 6,
        name: "Hyundai",
        image: bikes,
        description: "A stylish Hyundai car for a smooth ride.",
        old_price: 20000,
        new_price: 18000,
        category: "Clothing"
    },
    {
        id: 7,
        name: "Honda",
        image: bike,
        description: "A reliable Honda bike for daily commutes.",
        old_price: 31000,
        new_price: 28000,
        category: "Footwear"
    },
    {
        id: 8,
        name: "Hot-Burger",
        image: burger,
        description: "A delicious hot burger for a quick meal.",
        old_price: 500,
        new_price: 450,
        category: "Foods"
    },
    {
        id: 9,
        name: "Italian-Burger",
        image: burger2,
        description: "A delicious Italian burger for a quick meal.",
        old_price: 200,
        new_price: 300,
        category: "Foods"
    },
    {
        id: 10,
        name: "Herbal-burger",
        image: burger3,
        description: "A delicious herbal burger for a quick meal.",
        old_price: 250,
        new_price: 500,
        category: "Foods"
    },
    {
        id: 11,
        name: "Waffy-burger",
        image: burger4,
        description: "A delicious waffy burger for a quick meal.",
        old_price: 150,
        new_price: 250,
        category: "Foods"
    },
    {
        id: 12,
        name: "Cool Coca-Cola",
        image: Coke,
        description: "A delicious cool drink for a quick refreshment.",
        old_price: 110,
        new_price: 150,
        category: "Drinks"
    },
    {
        id: 13,
        name: "Ferrari",
        image: ferari,
        description: "A high-performance sports car for the ultimate driving experience.",
        old_price: 2250000,
        new_price: 2000000,
        category: "Machines"
    },
    {
        id: 14,
        name: "Lamborghini",
        image: lambogini,
        description: "A high-performance sports car for the ultimate driving experience.",
        old_price: 2500000,
        new_price: 2300000,
        category: "Machines"
    }
]

export default products;