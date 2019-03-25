import dva from 'dva';
import './index.css';


import createLoading from 'dva-loading';

//console.log(require('./services/test.js').default())


// 1. Initialize
const app = dva({
   initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  },
 });

// 2.Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/products').default);
app.model(require('./models/cards').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
