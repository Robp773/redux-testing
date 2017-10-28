'use strict';
import {newGame, makeGuess, toggleInfoModal} from './actions.js';
import reducer from './reducer.js';
describe('newGame', ()=>{
  it('should reset the state to initial values', () =>{
    const initialState = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: 6,
      showInfoModal: false
    };
    var state;
    state = reducer(initialState, makeGuess(4));
    state = reducer(state, makeGuess(6));

    state = reducer(state, newGame());


    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!')
    expect(state.showInfoModal).toEqual(false);
    
    
  });
});   
describe('makeGuess', ()=>{
    it('should add guesses', () =>{
      const initialState = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: 5,
        showInfoModal: false
      };
      var state;
      state = reducer(initialState, makeGuess(4));
      state = reducer(state, makeGuess(6));

      expect(state.guesses).toEqual([4,6]);
      expect(state.feedback).toEqual("You're Hot!")    
      
    });
  });   
describe('toggleInfo', ()=>{
  it('should toggle the toggle value', () =>{
    const initialState = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: 6,
      showInfoModal: false
    };
    var state;
    state = reducer(initialState, toggleInfoModal());
    expect(state.showInfoModal).toEqual(true);
    state = reducer(state, toggleInfoModal());
    expect(state.showInfoModal).toEqual(false);

    
  });
});   