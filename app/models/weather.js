export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin
    this.city = data.name
    this.temp = this.getTemp(data.main.temp)
  }

  get Template() {
    return `
    <h2>${this.city}</h2>
    <h2>${this.temp}&#176</h2>`
  }

  getTemp(temp) {
  return Math.floor((temp - 273.15) * 9/5 + 32)
  }
}