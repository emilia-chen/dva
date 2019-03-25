import * as cardsService from '../services/cards';

export default {

  namespace: 'cards',

  state: {
    cardsList: [],
    statistic: {},
  },

  effects: {
    *queryList({ _ }, { call, put }) {
      const rsp = yield call(cardsService.queryList);
      yield put({ type: 'saveList', payload: { cardsList: rsp.data.result } });
    },
    *deleteOne({ payload:id}, { call, put }) {
 console.log('deleteOne',id);
     const rsp = yield call(cardsService.deleteOne, id);
      console.log(rsp);
      return rsp;
    },
    *addOne({ payload }, { call, put }) {
      const rsp = yield call(cardsService.addOne, payload);
      yield put({ type: 'queryList' });
      return rsp;
    },
    *getStatistic({ payload }, { call, put }) {
      const rsp = yield call(cardsService.getStatistic, payload);
      yield put({
        type: 'saveStatistic',
        payload: {
          id: payload,
          data: rsp.result,
        },
      });
      return rsp;
    },
  },

  reducers: {
    saveList(state, { payload: { cardsList } }) {
   console.log('saveList',state);
      return {
        ...state,
        cardsList,
      }
    },
    saveStatistic(state, { payload: { id, data } }) {
      return {
        ...state,
        statistic: {
          ...state.statistic,
          [id]: data,
        },
      }
    },
  },
};
