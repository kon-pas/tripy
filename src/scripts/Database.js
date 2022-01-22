import React from 'react';
import {User} from "./User";
import {Attraction} from "./DBAttraction";
import {Flight} from "./DBFlight";
import {Hotel} from "./DBHotel";

// User
export const fetchUsers = () => {
    return new Promise(async(resolve, reject)=>{
        try{
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');
            fetch(`http://51.83.185.162:4000/users`, {
                method: 'GET',
                headers: headers
            }).then(response => response.json())
                .then(data => {
                    resolve(data.map((value) => new User(value.id,value.email,value.password,value.name,value.surname)))
                })
        }catch(e){
            reject(e);
        }
    });
}

export const logoutUser = () => localStorage.removeItem("user")

export const isLoggedIn = () => {
    return localStorage.getItem("user") !== null;

}

export const LoginUser = (email,password) => {
    return new Promise(async(resolve, reject)=>{
        try{
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');
            console.log(JSON.stringify({email:email,password:password}))
            fetch(`http://51.83.185.162:4000/auth/login`, {
                method: 'POST',
                headers: headers,
                body:JSON.stringify({email:email,password:password})
            }).then(response => response.json())
                .then(data => {
                    try{
                        const usr = new User(data.data.id,data.data.attributes.email,'',data.data.attributes.name,data.data.attributes.surname)
                        localStorage.setItem('user', JSON.stringify(usr));
                        resolve(usr)
                    }catch(e){
                        resolve(undefined);
                    }

                })
        }catch(e){
            reject(e);
        }
    });
}

export const RegisterUser = (email,name,surname,password) => {
    return new Promise(async(resolve, reject)=>{
        try{
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');

            fetch(`http://51.83.185.162:4000/register`, {
                method: 'POST',
                headers: headers,
                body:JSON.stringify({email:email,firstName:name,lastName:surname,password:password})
            }).then(response => {
                if(response.status === 201 || response.status === 200){
                    resolve(1);
                }
                else{
                    resolve(0);
                }
            });
        }catch(e){
            reject(e);
        }
    });
}

export const fetchTripyUser = (id) => {
    return new Promise(async(resolve, reject)=>{
        try{
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');

            fetch(`http://51.83.185.162:4000/user/tripy/${id}`, {
                method: 'POST',
                headers: headers,
            }).then(response => response.json())
                .then(data => {
                    const hotel = new Hotel(data[0].hotel.id,data[0].hotel.header,data[0].hotel.description,data[0].hotel.startDate,data[0].hotel.endDate,data[0].hotel.image,data[0].hotel.region,data[0].hotel.price)
                    const flight = new Flight(data[0].flight.id,data[0].flight.header,data[0].flight.description,data[0].flight.startDate,data[0].flight.endDate,data[0].flight.image,data[0].flight.fromCountry,data[0].flight.toCountry,data[0].flight.price)
                    const attraction = new Attraction(data[0].Attraction.id,data[0].Attraction.header,data[0].Attraction.description,data[0].Attraction.image,data[0].Attraction.price);
                    resolve([].push(hotel,flight,attraction))
                })
        }catch(e){
            reject(e);
        }
    });
}

export const registerTripyUser = (idUser,idFlight,idHotel,idAttraction) => {
    return new Promise(async(resolve, reject)=>{
        try{
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');

            fetch(`http://51.83.185.162:4000/tripy/register`, {
                method: 'POST',
                headers: headers,
                body:JSON.stringify({idUser:idUser,idFlight:idFlight,idHotel:idHotel,idAttraction:idAttraction})
            }).then(response => {
                if(response.status === 201 || response.status === 200){
                    resolve(1);
                }
                else{
                    resolve(0);
                }
            });
        }catch(e){
            reject(e);
        }
    });
}

// Attractions

export const fetchAttractions = () => {
    return new Promise(async(resolve, reject)=>{
        try{
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');

            fetch(`http://51.83.185.162:4000/attraction/all`, {
                method: 'GET',
                headers: headers
            }).then(response => response.json())
                .then(data => {
                    resolve({attraction: data.map((value) => new Attraction(value.id,value.header,value.description,value.image,value.price))})
                })
        }catch(e){
            reject(e);
        }
    });
}

export const registerAttractions = (header,description,image,price,email) => {
    return new Promise(async(resolve, reject)=>{
        try{
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');

            fetch(`http://51.83.185.162:4000/attraction/register`, {
                method: 'POST',
                headers: headers,
                body:JSON.stringify({header:header,description:description,image:image,price:price,email:email})
            }).then(response => {
                if(response.status === 201 || response.status === 200){
                    resolve(1);
                }
                else{
                    resolve(0);
                }
            });
        }catch(e){
            reject(e);
        }
    });
}

// Flights

export const fetchFlights = () => {
    return new Promise(async(resolve, reject)=>{
        try{
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');

            fetch(`http://51.83.185.162:4000/flights`, {
                method: 'GET',
                headers: headers
            }).then(response => response.json())
                .then(data => {
                    resolve(data.map((value) => new Flight(value.id,value.header,value.description,value.startDate,value.endDate,value.image,value.fromCountry,value.toCountry,value.price)))
                })
        }catch(e){
            reject(e);
        }
    });
}

export const registerFlight = (header,description,startDate,endDate,image,fromCountry,toCountry,price) => {
    return new Promise(async(resolve, reject)=>{
        try{
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');

            fetch(`http://51.83.185.162:4000/flight/register`, {
                method: 'POST',
                headers: headers,
                body:JSON.stringify({header:header,description:description,startDate:startDate,endDate:endDate,image:image,fromCountry:fromCountry,toCountry:toCountry,price:price})
            }).then(response => {
                if(response.status === 201 || response.status === 200){
                    resolve(1);
                }
                else{
                    resolve(0);
                }
            });
        }catch(e){
            reject(e);
        }
    });
}

// Hotel

export const fetchHotel = () => {
    return new Promise(async(resolve, reject)=>{
        try{
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');

            fetch(`http://51.83.185.162:4000/hotels`, {
                method: 'GET',
                headers: headers
            }).then(response => response.json())
                .then(data => {
                    resolve(data.map((value) => new Hotel(value.id,value.header,value.description,value.startDate,value.endDate,value.image,value.region,value.price)))
                })
        }catch(e){
            reject(e);
        }
    });
}

export const registerHotel = (header,description,startDate,endDate,image,region,price) => {
    return new Promise(async(resolve, reject)=>{
        try{
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');

            fetch(`http://51.83.185.162:4000/hotel/register`, {
                method: 'POST',
                headers: headers,
                body:JSON.stringify({header:header,description:description,startDate:startDate,endDate:endDate,image:image,region:region,price:price})
            }).then(response => {
                if(response.status === 201 || response.status === 200){
                    resolve(1);
                }
                else{
                    resolve(0);
                }
            });
        }catch(e){
            reject(e);
        }
    });
}