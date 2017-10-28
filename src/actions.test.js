
'use strict';

import {newGame, makeGuess, toggleInfoModal} from './actions.js';
import reducer from './reducer.js';

describe('newGame', () =>{ 
   
  it('should return the action', () => {

     const action =  newGame();
     expect(action.type).toEqual('NEW_GAME')
     
  });


describe('makeGuess', ()=>{
    it('should return the action and correct payload', () =>{
const action = makeGuess(4)
expect(action.type).toEqual('MAKE_GUESS')
expect(action.guess).toEqual(4)
    });
});

describe('toggleInfoModal', ()=>{
    it('should return the action', () =>{
const action = toggleInfoModal()
expect(action.type).toEqual('TOGGLE_INFO_MODAL')
    });
});
});

