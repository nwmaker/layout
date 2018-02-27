import App from './app'

export default () => (
  <div className='navbar'>
    <App items={
      ['Home', 'Products', 'Blog', 'Club']
    }/>
    <style jsx global>{`
      .navbar {
        font:14px normal Arial, sans-serif;
        color:#626771;
        background-color:#fff;
        padding: 0;
        margin: 0;
      }
      .container {
        padding: 60px;
        text-align: center;
      }
      ul {
        list-style:none;
        display: inline-block;
      }
      ul li {
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
        background-color: #eee;
        color: #7B8585;
        transition: 0.3s;
      }
      ul li:hover {
        background-color: #beecea;
      }
      ul li.focused {
        color: #fff;
        background-color: #41c7c2;
      }
      p {
        padding-top: 15px;
        font-size: 12px;
      }      
    `}</style>
  </div>
)
