export const options = {
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 20, //this change the font size
          weight: 'bold'
        }
      }
    },
    y: {
      ticks: {
        font: {
          size: 18 //this change the font size
        }
      }
    }
  },
  // responsive :true,
  plugins: {
    legend: {
      position: 'top',
      display: false
    },
    title: {
      display: true,
      text: 'Data of the User',
      font: {
        size: 24
      }
    }
  }
};
