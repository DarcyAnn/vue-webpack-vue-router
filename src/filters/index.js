 const filters = {
  //将时间戳或其他格式的时间转换成2017-01-02的格式
  fmtDate: (val) => {
    var d = new Date(val);
    var month = (d.getMonth()+1) < 10 ? ('0' + (d.getMonth()+1)) : (d.getMonth()+1);
    var date = d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate();
    return d.getFullYear() + '-' + month + '-' + date;
  }
}

export default (Vue) => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
  })
}