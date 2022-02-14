function tick() {
   ReactDOM.render(
      <div>
         <h2>Время {new Date().getSeconds()}</h2>
      </div>,
      document.getElementById('container')
   )
}
setInterval(tick, 1000);