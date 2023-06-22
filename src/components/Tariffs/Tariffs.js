export const Tariffs = `
<div class="container">
<h1>Тарифы</h1>
</div>
<div class="wrapper">
  <div class="Tariff-List">
      <div class="Tariff-Title">
          <h3 class="line">Уникальных треков</h3>
          <h3 class="line">Лицензия</h3>
          <h3>Цена</h3>
      </div>
      <div class="tariff-card">
          <h3 class="box">Базовый</h3>
          <p class="BodyM p-line">5</p>
          <p class="BodyM p-line">на 1 проект</p>
        <p class="BodyM">10 000₸</p>
        <input type="button" value="Выбрать" class="btn Buttons">
      </div>
      <div class="tariff-card">
          <h3 class="box">Продвинутый</h3>
          <p class="BodyM p-line">10</p>
          <p class="BodyM p-line">на 3 проект</p>
        <p class="BodyM">18 000₸</p>
        <input type="button" value="Выбрать" class="btn Buttons">
      </div>
      <div class="tariff-card">
          <h3 class="box">Премиум</h3>
          <p class="BodyM p-line">15</p>
          <p class="BodyM p-line">на 5 проект</p>
        <p class="BodyM">25 000₸</p>
        <input type="button" value="Выбрать" class="btn Buttons">
      </div>
  </div>
<div class="Custom-Tariff">
  <h1>Собери свой тариф</h1>
  <div class="Inputs">
    <div class="Input License">
      <p class="BodyM">Лицензия (кол-во проектов)</p>
      <input type="text" id="Tariff1" value="4">
    </div>
    <div class="Input Tracks">
      <p class="BodyM">Кол-во треков для 1 проекта</p>
      <input type="text" id="Tariff2" value="4">
    </div>
    <div class="Input Price">
      <p class="BodyM">Цена</p>
      <input type="text" id="Total" value="28 800₸">
    </div>
  </div>
    <input type="button" class="btn Main" value="Выбрать">
</div>
<p class="BodyM info-title">*Кроме базовых цен, стоимость может быть подвержена изменениям в зависимости от сложности проекта. Мы понимаем, что каждый проект уникален и может требовать дополнительных усилий и ресурсов. Поэтому, если ваш проект имеет особые требования или высокую степень сложности, мы готовы рассмотреть индивидуальный подход к ценообразованию. Свяжитесь с нами для получения подробной консультации и индивидуального расчета стоимости вашего проекта.</p>
</div>
`