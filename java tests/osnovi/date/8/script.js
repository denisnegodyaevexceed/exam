function formatDate(date) {
    const sec = (new Date() - date) / 1000;
    const year = date.getFullYear().toString().slice(-2);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    switch (true) {
        case sec < 1:
            return `прямо сейчас`;
        case sec <= 60:
            return `${sec} сек. назад`;
        case sec < 3600:
            return `${Math.floor(sec / 60)} мин. назад`;
        case sec > 3600:
            return `вчерашняя дата вроде ${day}.${month}.${year}, ${hours}:${minutes}`;
    }
}
alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));