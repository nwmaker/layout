export default () => (
  <div>
    <div className='normal'>
      <h1>Positioning</h1>
      <p>I am a basic block level element.</p>
      <p className="positioned">I am a basic block level element.</p>
      <p>I am a basic block level element.</p>
    </div>
    <hr />
    <div className='relative-tweak'>
      <h1>Relative Positioning</h1>
      <p>I am a basic block level element.</p>
      <p className="positioned">I am a basic block level element (relative).</p>
      <p>I am a basic block level element.</p>
    </div>
    <hr />
    <div className='absolute-tweak'>
      <h1>Absolute Positioning</h1>
      <p>I am a basic block level element.</p>
      <p className="positioned">I am a basic block level element (absolute).</p>
      <p>I am a basic block level element.</p>
    </div>
    <hr />
    <div className='absolute-tweak2'>
      <h1>Absolute Positioning with zero values</h1>
      <p>I am a basic block level element.</p>
      <p className="positioned">I am a basic block level element (absolute 0).</p>
      <p>I am a basic block level element.</p>
    </div>
    <hr />
    <div className='fixed-tweak'>
      <h1>Fixed Positioning</h1>
      <p>I am a basic block level element.</p>
      <p className="positioned">I am a basic block level element (absolute 0).</p>
      <p>I am a basic block level element.</p>
    </div>
    <style jsx global>{`
      body {
        width: 500px;
        height: 1400px;
        margin: 0 auto;
      }
      .normal, 
      .relative-tweak,
      .absolute-tweak,
      .absolute-tweak2 {
        width: 500px;
        margin: 0 auto;
      }
      .normal p, 
      .relative-tweak p,
      .fixed-tweak p,
      .absolute-tweak p,
      .absolute-tweak2 p {
        background: aqua;
        border: 3px solid blue;
        padding: 10px;
        margin: 10px;
      }
      .relative-tweak .positioned {
        position: relative;
        background: yellow;
        top: 30px;
        left: 30px;
      }
      .absolute-tweak .positioned {
        position: absolute;
        background: yellow;
        top: 30px;
        left: 30px;
      }
      .absolute-tweak2 .positioned {
        position: absolute;
        background: yellow;
        top: 0px;
        left: 0px;
      }
      .fixed-tweak h1 {
        position: fixed;
        top: 0;
        width: 500px;
        margin: 0 auto;
        background: white;
        padding: 10px;
      }
    `}</style>
  </div>
)
