import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const services = [

  { category: "Послуги", name: "Консультація кардіолога", price: "500.00 грн" },
  { category: "Послуги", name: "Консультація ендокринолога", price: "500.00 грн" },
  { category: "Послуги", name: "Консультація терапевта", price: "400.00 грн" },
  { category: "Послуги", name: "Консультація невропатолога", price: "500.00 грн" },
  { category: "Послуги", name: "ЕКГ багатоканальне з розшифровкою", price: "300.00 грн" },
  { category: "Послуги", name: "Добовий моніторинг ЕКГ по Холтеру", price: "600.00 грн" },
  { category: "Послуги", name: "Добовий моніторинг артеріального тиску (АТ)", price: "600.00 грн" },

  { category: "Додаткові послуги", name: "Консультація онлайн", price: "500.00 грн" },
  { category: "Додаткові послуги", name: "Виїзд додому і консультація лікаря", price: "1500.00 грн" },
  { category: "Додаткові послуги", name: "Пакет (Грип/ковід)", price: "700.00 грн" },
  { category: "Додаткові послуги", name: "Експрес тест мікропрепаратів", price: "500.00 грн" },
  { category: "Додаткові послуги", name: "Експрес тест на COVID-19", price: "300.00 грн" },
  { category: "Додаткові послуги", name: "Комплексна мовно-силова терапія", price: "600.00 грн" },
  { category: "Додаткові послуги", name: "Терапія інфекціонального синдрому", price: "1000.00 грн" },
  { category: "Додаткові послуги", name: "Повторна консультація лікаря (-20%)", price: "400.00 грн" },

  { category: "Послуги УЗД", name: "УЗД одного органа черевної порожнини", price: "300.00 грн" },
  { category: "Послуги УЗД", name: "УЗД одного органу з пробами", price: "400.00 грн" },
  { category: "Послуги УЗД", name: "Визначення залишкової сечі (додатково)", price: "70.00 грн" },
  { category: "Послуги УЗД", name: "УЗД привушних залоз", price: "300.00 грн" },
  { category: "Послуги УЗД", name: "УЗД мигдаликів", price: "300.00 грн" },
  { category: "Послуги УЗД", name: "УЗД щитовидної залози", price: "300.00 грн" },
  { category: "Послуги УЗД", name: "УЗД молочних залоз", price: "350.00 грн" },
  { category: "Послуги УЗД", name: "УЗД серця", price: "500-600.00 грн" },
  { category: "Послуги УЗД", name: "УЗД черевної порожнини (печінка, підшлункова, жовчний міхур, селезінка)", price: "500.00 грн" },
  { category: "Послуги УЗД", name: "УЗД черевної порожнини + функціональна проба жовчного міхура", price: "550.00 грн" },
  { category: "Послуги УЗД", name: "УЗД черевної порожнини + селезінка + нирки + сечовий міхур", price: "600.00 грн" },
  { category: "Послуги УЗД", name: "УЗД надниркових залоз (додатково)", price: "200.00 грн" },
  { category: "Послуги УЗД", name: "УЗД нирок, сечового міхура та простати", price: "350.00 грн" },
  { category: "Послуги УЗД", name: "УЗД простати промежинним доступом", price: "300.00 грн" },
  { category: "Послуги УЗД", name: "УЗД простати та сечового міхура", price: "350.00 грн" },
  { category: "Послуги УЗД", name: "УЗД органів мошонки", price: "400.00 грн" },
  { category: "Послуги УЗД", name: "УЗД судин статевого члена", price: "400.00 грн" },
  { category: "Послуги УЗД", name: "УЗД хребетних артерій", price: "300.00 грн" },
  { category: "Послуги УЗД", name: "УЗД ниркових артерій", price: "200.00 грн" },
  { category: "Послуги УЗД", name: "УЗД лімфовузлів 1 область", price: "100.00 грн" },
  { category: "Послуги УЗД", name: "УЗД артерій/вен верхніх кінцівок - 1 рука", price: "250.00 грн" },
  { category: "Послуги УЗД", name: "УЗД артерій/вен верхніх кінцівок - 2 руки", price: "400.00 грн" },
  { category: "Послуги УЗД", name: "УЗД артерій/вен нижніх кінцівок - 1 нога", price: "250.00 грн" },
  { category: "Послуги УЗД", name: "УЗД артерій/вен нижніх кінцівок - 2 ноги", price: "400.00 грн" },
  { category: "Послуги УЗД", name: "УЗД кістково-суглобової системи - 1 суглоб", price: "300.00 грн" },
  { category: "Послуги УЗД", name: "УЗД кістково-суглобової системи - 2 симетричні суглоби", price: "600.00 грн" },
  { category: "Послуги УЗД", name: "УЗД легень (Blue protocol)", price: "500.00 грн" },
  { category: "Послуги УЗД", name: "УЗД діагностика симптоматичних гіпертоній", price: "1400.00 грн" },
  { category: "Послуги УЗД", name: "УЗД вдома (виїзд)", price: "900.00 грн" },
];

const Prices = () => {
  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="services-container">
      <h2 className="title mb-4" style={{width:'100%', marginBottom:'50px'}}>ЦIНИ НА ПОСЛУГИ</h2>
      {categories.map(category => (
        <div key={category} className="category">
         <div className="d-flex justify-content-between" style={{fontSize:'20px', fontWeight:'400', color:'#E20456'}}>
          <p>{category}</p>
          <p>Вартість</p>
        </div>
          <div className="services-list">
            {services
              .filter(service => service.category === category)
              .map(service => (
                <div key={service.name} className="service-item">
                  <span style={{color:'#0258A5', fontSize:'20px', fontWeight:'400'}}>{service.name}</span>
                  <span style={{color:'#E20456', fontSize:'20px', fontWeight:'400'}}>{service.price}</span>  
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Prices;