
const renderJSX = (
  <div>
    <header>
      <div className="wrapper">
        <div className="header">
          <a>
              <div className="header-logo"></div>
          </a>
          <a className="header-phone" href={tel:888}></a>
          <div className="header-phonelink">
            <a href="tel:7(962)556-1234">+7(962)556-1234</a>
          </div>
        </div>
      </div>
    </header>
  </div>
)


ReactDOM.render('renderJSX', document.getElementById('root'))

// < a
// href = "tel:888"
// className = "header-phone" > < /a>
// <div className="header-phonelink">
//   <a href="tel:7(962)556-1234">+7(962)556-1234</a>
// </div>