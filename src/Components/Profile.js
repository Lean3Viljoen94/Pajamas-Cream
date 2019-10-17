import React from 'react'

function Profile() {
    const customer = {
      firstName: "Lea",
      lastName: "Viljoen",
      date_Of_Birth: "30 May 1994",
      country: "South Africa",
      email: "lean331@gmail.com",
      telephone: "084 5959 155",
    };
    return (
      <div className="container">
        <p>Name: {customer.firstName}</p>
        <p>Surname: {customer.lastName}</p>
        <p>Date of Birth: {customer.date_Of_Birth}</p>
        <p>Country: {customer.country}</p>
        <p>Email: {customer.email}</p>
        <p>Telephone: {customer.telephone}</p>
      </div>
    );
}
export default Profile