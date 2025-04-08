let attract = `
    <div class="attraction" onclick="setPostData(event)">
        <span class="image_conatiner">
            <img id="attraction_image" src="../public/abc.png" alt="#">
        </span>
        <span class="info_container">
            <h3 id="attraction_name">Название</h3>
            <h4 id="attraction_adress">Адрес</h4>
            <span class="price_and_time_container">
                <span class="price_container">
                    <h4>Стоимость</h4>
                    <h3 id="attraction_price">ЦЕНА</h3>
                </span>
                <span class="time_container">
                    <h3 id="attraction_time">Время</h3>
                </span>
            </span>
        </span>
        <span class="add_attraction">
            <button class="attraction_button" onclick="changeButton(event)">Добавить</button>
        </span>
        <p id="attraction_id">0</p>
    </div>
`