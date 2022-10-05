import React from 'react'
import { render } from 'react-dom';
import Car from './Car';

export default function Lesson1() {
    const hello = () => {
        return "Xin chào mọi người";
    }
    const introduce = () => {
        return "Tôi tên là Văn";
    }
    //destructuring
    const vehicles = { car: 'mustang', truck: 'f-150', suv: 'expedition' };
    const { car, truck, suv } = vehicles;
    //spread operator
    const arr1 = [1, 4, 7];
    const arr2 = [2, 5, 8];
    const combine = [...arr1, ...arr2];
    combine.sort();
    const renderPage = () => {
        return(<Car/>);
    }
    return (
        <div>
            <p>{hello()}. {introduce()}. {car} {truck} {suv}</p>
                    {combine.map(
                        (item) => item
                    )}
            <button onClick={() => renderPage()}>Click</button>
        </div>

    )
}
