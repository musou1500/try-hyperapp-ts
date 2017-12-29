import {h, app} from 'hyperapp';

interface State {
  cur: number;
};

interface Actions {
  next(): (state: State) => State;
}

const state: State = {
  cur: 0
};

const actions: Actions = {
  next: () => (state: State) => ({ cur: state.cur + 3 }),
};

const data = [
  {username: 'musou1500', text: 'musou1500'},
  {username: 'musou1501', text: 'musou1501'},
  {username: 'musou1502', text: 'musou1502'},
  {username: null, text: 'guest'},
  {username: null, text: 'guest'},
  {username: null, text: 'guest'}
];

const view = (state: State, actions: Actions) =>
  h(
    'main', {},
    [
      h('div', {}, data
        .slice(state.cur, state.cur + 3)
        .map((obj) => h('li', {key: obj.username}, obj.text))),
      h('button', {onclick: actions.next, t: 'test'}, 'next')
    ]);

window.addEventListener('DOMContentLoaded', () =>
  app(state, actions, view, document.body));