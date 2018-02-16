export default () => (
  <div>
    <div className='default'>
      <div className="wrapper">
        <p>No grid</p>
        <div className="row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
          <div className="col">4</div>
          <div className="col">5</div>
          <div className="col">6</div>
          <div className="col">7</div>
          <div className="col">8</div>
          <div className="col">9</div>
          <div className="col">10</div>
          <div className="col">11</div>
          <div className="col">12</div>
        </div>
        <div className="row">
          <div className="col span1">13</div>
          <div className="col span6">14</div>
          <div className="col span3">15</div>
          <div className="col span2">16</div>    
        </div>
      </div>
    </div>
    <hr />
    <div className='grid-easy'>
      <div className="wrapper">
        <p>Grid Layout</p>
        <div className="row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
          <div className="col">4</div>
          <div className="col">5</div>
          <div className="col">6</div>
          <div className="col">7</div>
          <div className="col">8</div>
          <div className="col">9</div>
          <div className="col">10</div>
          <div className="col">11</div>
          <div className="col">12</div>
        </div>
        <div className="row">
          <div className="col span1">13</div>
          <div className="col span6">14</div>
          <div className="col span3">15</div>
          <div className="col span2">16</div>
        </div>
      </div>    
    </div>
    <hr />
    <div className='grid-easy2'>
      <div className="wrapper">
        <p>Grid Layout with span</p>
        <div className="row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
          <div className="col">4</div>
          <div className="col">5</div>
          <div className="col">6</div>
          <div className="col">7</div>
          <div className="col">8</div>
          <div className="col">9</div>
          <div className="col">10</div>
          <div className="col">11</div>
          <div className="col">12</div>
        </div>
        <div className="row">
          <div className="col span1">13</div>
          <div className="col span6">14</div>
          <div className="col span3">15</div>
          <div className="col span2">16</div>
        </div>
      </div>
    </div>    
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      .grid-easy,
      .grid-easy2 {
        width: 980px;
        margin: 0 auto;
      }
      .grid-easy .wrapper,
      .grid-easy2 .wrapper {
        padding-right: 20px;
      }
      .grid-easy .row,
      .grid-easy2 .row {
        clear: both;
      }
      .grid-easy .col,
      .grid-easy2 .col {
        float: left;
        margin-left: 20px;
        width: 60px;
        background: rgb(255, 150, 150);
      }
      .grid-easy2 .col.span2 {
        width: 140px;
      }
      .grid-easy2 .col.span3 {
        width: 220px;
      }
      .grid-easy2 .col.span4 {
        width: 330px;
      }
      .grid-easy2 .col.span5 {
        width: 380px;
      }
      .grid-easy2 .col.span6 {
        width: 460px;
      }
      .grid-easy2 .col.span7 {
        width: 540px;
      }
      .grid-easy2 .col.span8 {
        width: 620px;
      }
      .grid-easy2 .col.span9 {
        width: 700px;
      }
      .grid-easy2 .col.span10 {
        width: 780px;
      }
      .grid-easy2 .col.span11 {
        width: 86px;
      }
      .grid-easy2 .col.span12 {
        width: 940px;
      }
    `}</style>
  </div>
)
