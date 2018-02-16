export default () => (
<div>
<div>
  <form>
    <p>First of all, tell us your name and age.</p>
    <div>
      <label id="fname">First name:</label>
      <input type="text" id="fname" />
    </div>
    <div>
      <label id="lname">Last name:</label>
      <input type="text" id="lname" />
    </div>
    <div>
      <label id="age">Age:</label>
      <input type="text" id="age" />
    </div>
  </form>
</div>
<hr />
<div className='css-table'>
  <form>
    <p>First of all, tell us your name and age.</p>
    <div>
      <label id="fname">First name:</label>
      <input type="text" id="fname" />
    </div>
    <div>
      <label id="lname">Last name:</label>
      <input type="text" id="lname" />
    </div>
    <div>
      <label id="age">Age:</label>
      <input type="text" id="age" />
    </div>
  </form>
  <style jsx globale>{`
    .css-table {
      font-family: sans-serif;
    }
    .css-table form {
      display: table;
      margin: 0 auto;
    }
    .css-table form div {
      display: table-row;
    }
    .css-table form label, .css-table form input {
      display: table-cell;
      margin-bottom: 10px;
    }
    .css-table form label {
      width: 200px;
      padding-right: 5%;
      text-align: right;
    }
    .css-table form input {
      width: 300px;
    }
    .css-table form p {
      display: table-caption;
      caption-side: bottom;
      width: 300px;
      color: #999;
      font-style: italic;
    }
  `}</style>
</div>
</div>
)
