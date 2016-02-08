var React = require('react');

var Footer = React.createClass({

   render: function () {

    return(
      <div className="footer">
        <div className ="footer-center">

          <div className="footer-left">
            <h4>Created by Jenny Juarez, 2016 educational purposes.
            <a href="https://www.linkedin.com/in/jennyj2012"> Hire Me.</a>
            </h4>
          </div>

          <div className="footer-right group">
          </div>
        </div>
      </div>
    );
  },


});

module.exports = Footer;
