function getDateFunc (){
        let year = new Date().getFullYear(); //年
        let month = new Date().getMonth() + 1; //注意！月份是从0月开始获取的，所以要+1;
        let day = new Date().getDate(); //日
        let hour = new Date().getHours(); //时
        let minute = new Date().getMinutes(); //分
        let second = new Date().getSeconds(); //秒
        //拼接日期 YYYY-MM-DD HH:mm:ss
        this.yearMD =
            year +
            '-' +
            (month >= 10 ? month : '0' + month) +
            '-' +
            (day >= 10 ? day : '0' + day);
        this.Hms =
            (hour >= 10 ? hour : '0' + hour)
            + ':' +
            (minute >= 10 ? minute : '0' + minute)
            + ':' +
            (second >= 10 ? second : '0' + second);
    }


export default {getDateFunc};