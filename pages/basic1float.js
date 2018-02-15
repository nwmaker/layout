export default () => (
  <div>
    <div>
      <h1>2 column layout example (default)</h1>
      <div>
        <h2>First column</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
      </div>
      <div>
        <h2>Second column</h2>
        <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.</p>
      </div>
    </div>
    <hr />
    <div className='floats'>
      <h1>2 column layout example (floats)</h1>
      <div className='column'>
        <h2>First column</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
      </div>
      <div className='column'>
        <h2>Second column</h2>
        <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut.</p>
      </div>
    </div>
    <style jsx global>{`
      .floats {
        width: 90%;
        max-width: 900px;
        margin: 0 auto;
      }
      .column:nth-of-type(1) {
        width: 48%;
        float: left;
      }
      .column:nth-of-type(2) {
        width: 48%;
        float: right;
      }
    `}</style>
  </div>
)
