import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "./actions";
import { apiMiddleware as api } from "redux-api-middleware";
import nock from "nock";

const middlewares = [thunk, api];
const mockStore = configureMockStore(middlewares);


describe("async actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("creates SUCCESS when fetching user", () => {
    nock("https://api.github.com")
      .get("/users/jessicahyde")
      .reply(200, {
        data: { id: "id" },
      }, {
        'Content-type': 'application/json'
      });

    const expectedActions = [
      {
        type: 'REQUEST',
        meta: undefined,
        payload: undefined
      },
      {
        type: 'SUCCESS',
        payload: {
          data: { id: 'id'}
        }
      }
    ];

    const store = mockStore({});

    return store
      .dispatch(
        actions.loadData("jessicahyde")
      )
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
