import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Doctors = () => {
  const doctors = [
    {
      name: "Сальнікова Світлана Вікторівна",
      title: "Лікар-терапевт вищої категорії, лікар функціональної діагностики",
      optionTitle:"Лікар-терапевт вищої категорії ",
      photo: "./img/doctors/doctor.png", 
      address: "м. Харків, вул. Ярославська, 2/1",
      workingHours: "9:00 - 17:00 ПН-ПТ, СБ - запис",
      phone1: "+38 (099) 611-03-03",
      phone2: "+38 (098) 611-03-03",
      experience: "понад 45 років клінічної практики",
      specialization: "загальна терапія, серцево-судинні захворювання, захворювання дихальних шляхів, гастроентерологія та ін., функціональна діагностика",
      education: "Харківський медичний інститут, післядипломна освіта на базі ХМАПО",
      career: "рефлексотерарія, немедикаметозні та нетрадиційні методи лікування",
      methods: "детальний аналіз анамнезу, використання сучасних методів діагностики та профілактичних підходів",
    },
    {
      name: "Холодний Олександр Васильович",
      title: "Лікар-ендокринолог вищої категорії",
      optionTitle:"Лікар-ендокринолог вищої категорії ",
      photo: "./img/doctors/doctor2.png",
      address: "м. Харків, вул. Ярославська, 2/1",
      workingHours: "9:00 - 17:00 ПН-ПТ, СБ - запис",
      phone1: "+38 (099) 611-03-03",
      phone2: "+38 (098) 611-03-03",
      experience: "понад 47 років медичної практики",
      specialization: "діагностика та лікування ендокринних захворювань, зокрема цукрового діабету, захворювань щитоподібної залози, порушень обміну речовин",
      education: "Харківський медичний інститут, клінічна ординатура за спеціальністю 'Терапія'",
      career: "понад 20 років працював у клініці Інституту проблем ендокринної патології",
      methods: "комплексний аналіз стану пацієнта, індивідуальна схема терапії, сучасні методи діагностики",
    },
    {
      name: "Гладченко Олексій Романович",
      title: "Лікар ультразвукової діагностики, кардіолог",
      optionTitle:"Лікар ультразвукової діагностики, кардіолог",
      photo: "./img/doctors/doctor3.png",
      address: "м. Харків, вул. Ярославська, 2/1",
      workingHours: "9:00 - 17:00 ПН-ПТ, СБ - запис",
      phone1: "+38 (099) 611-03-03",
      phone2: "+38 (098) 611-03-03",
      experience: "понад 47 років медичної практики",
      specialization: "ультразвукові дослідження серця, легенів, органів черевної порожнини, сечо-статевих органів, судин, суглобів, мʼяких тканей; діагностика симптоматичних гіпертонії та ін.",
      education: "Харківський медичний інститут, клінічна ординатура з кардіології, курси УЗД-діагностики в Київському НДІ кардіології ім. М.Д. Стражеска",
      career: "працював у клінічному відділенні атеросклерозу та ІХС, згодом очолював відділення УЗД у центральній клінічній лікарні",
      methods: "детальне ультразвукове обстеження з високою точністю, комплексний аналіз результатів для виявлення прихованих патологій",
    },
    {
      name: "Таран Лілія Сергіївна",
      title: "Лікар-невропатолог",
      optionTitle:"Лікар невропатолог",
      photo: "./img/doctors/doctor5.png",
      address: "м. Харків, вул. Ярославська, 2/1",
      workingHours: "9:00 - 17:00 ПН-ПТ, СБ - запис",
      phone1: "+38 (099) 611-03-03",
      phone2: "+38 (098) 611-03-03",
      experience: "понад 47 років у сфері неврології",
      specialization: "діагностика та лікування неврологічних розладів (мігрень, остеохондроз, неврити, невралгії, порушення кровообігу мозку), рефлексотерапія",
      education: "Запорізький медичний інститут, спеціалізація «Нервові хвороби», клінічна ординатура в Харківському медичному університеті.",
      career: "тривалий час працювала у неврологічному відділенні Харківської обласної клінічної лікарніі",
      methods: "використання комплексного підходу до лікування неврологічних захворювань, включаючи рефлексотерапію та сучасні методи реабілітації",
    },

  ];

  return (
    <>
    <div className="container my-5">
    <div className="container text-center">
      <h1 className="custom-h1">
        МЕДИЧНИЙ ЦЕНТР ДІМ ЗДОРОВ’Я
      </h1>
    </div>
    <div className="row align-items-stretch" style={{margin:'50px 0px 50px'}}>
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div className="block-ultrasound" style={{fontSize:'28px', fontWeight:'400', color:'#E20456'}}>
            <p>
            Це команда висококваліфікованих спеціалістів, які щодня дбають про здоров’я наших пацієнтів
            </p>
            <p>
            Ми поєднуємо багаторічний досвід, сучасні методи діагностики та лікування, 
            а також індивідуальний підхід до кожного, хто звертається за допомогою 
            </p>
            <br />
          </div>
          {/* <a
            href="/doctors"
            className="btns"
            style={{width:'50%'}}
        >
            Розклад прийому
          </a> */}
        </div>
        <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
          <img
            src="./img/doctor-block.png"
            alt="УЗД процедура"
            className="img-fluid shadow"
          />
        </div>
      </div>
      <h2 className="title mb-4" style={{width:'100%', margin:'100px 0px'}}>НАШI ЛIКАРI</h2>
      {doctors.map((doctor, index) => (
        <div key={index} className="p-4 doctor-container mb-4">
          <h1 className="doctor-title text-center" style={{fontWeight: '700', fontSize:'36px', color:'#E20456'}}>{doctor.name}</h1>
          <h2 className="doctor-title-option text-center " style={{fontWeight: '600', fontSize:'24px', color:'#0258A5'}}>{doctor.title}</h2>
          <div className="row mt-4">
            <div className="col-md-4 text-center mb-3 d-flex flex-column align-items-center">
            <h5 className=" text-center mb-5" style={{fontWeight:'600', fontSize:'20px', color:'#E20456'}}>{doctor.optionTitle}</h5>
              <img 
                src={doctor.photo} 
                alt="Doctor" 
                className="img-fluid mb-3"
              />
              {/* <a
                href="/doctors"
                className="btns"
                style={{width:'100%', marginTop:'50px'}}
              >
                Розклад прийому
              </a> */}
            </div>
            <div className="col-md-4">
              <h5 className="text-center mb-5" style={{fontWeight:'600', fontSize:'20px', color:'#E20456'}}>Контакти:</h5>
              <p style={{color:'#0258A5', fontSize:'20px'}}>{doctor.address}</p>
              <p style={{color:'#0258A5', fontSize:'20px'}}>{doctor.workingHours}</p>
              <p style={{color:'#0258A5', fontSize:'20px'}}>{doctor.phone1}</p>
              <p style={{color:'#0258A5', fontSize:'20px'}}>{doctor.phone2}</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mb-5" style={{fontWeight:'600', fontSize:'20px', color:'#E20456'}}>Додаткові відомості:</h5>
              <p style={{color:'#0258A5'}}><strong style={{color:'#0258A5'}}>Досвід:</strong> {doctor.experience}</p>
              <p style={{color:'#0258A5'}}><strong style={{color:'#0258A5'}}>Спеціалізація:</strong> {doctor.specialization}</p>
              <p style={{color:'#0258A5'}}><strong style={{color:'#0258A5'}}>Освіта:</strong> {doctor.education}</p>
              <p style={{color:'#0258A5'}}><strong style={{color:'#0258A5'}}>Кар'єра:</strong> {doctor.career}</p>
              <p style={{color:'#0258A5'}}><strong style={{color:'#0258A5'}}>Методи роботи:</strong> {doctor.methods}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Doctors;