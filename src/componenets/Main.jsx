import React from "react";
import WeekDaysCard from "./MainComponents/WeekDaysCard";
import ContactCard from "./MainComponents/ContactCard";
import ProductCard from "./MainComponents/ProductCard";
import WeekDaysData from "./Data/WeekDaysData";
import ContactData from "./Data/ContactData";
import ProductData from "./Data/ProductData";

function Main() {
  const weekdayscomponenet = WeekDaysData.map(day => (
    <WeekDaysCard key={day.id} day={day.day} />
  ));
  const contactcomponents = ContactData.map(Contact => (
    <ContactCard
      key={Contact.id}
      name={Contact.name}
      imgUrl={Contact.imgUrl}
      phone={Contact.phone}
      email={Contact.email}
    />
  ));
  const productcomponents = ProductData.map(product => (
    <ProductCard
      key={product.id}
      product={product.product}
      price={product.price}
      description={product.description}
    />
  ));
  return (
    <main>
      <h2>Todo List</h2>
      {weekdayscomponenet}
      <div className="contacts">{contactcomponents}</div>
      <div className="contacts">{productcomponents}</div>
    </main>
  );
}

export default Main;
