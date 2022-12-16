import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import postsReducer from './postsReducer'
import setAllPosts from '../actions/postAC'
import * as postTypes from '../types/postTypes'
/*
describe('postsReducer', () => {
  it('returns the initial state', () => {
    expect(setAllPosts()).toBe('SET_ALL_POSTS');
    
  });

  it('handles the setAllPosts action', () => {});
});

describe('postsReducer', () => {
  it('Return initial State', () => {
      expect(postsReducer({}, '')).toEqual({});
  });

  it('should return the initial state', () => {
  expect(postsReducer(undefined, { type: undefined })).toEqual([
    { text: '', completed: false, id: 0 }
  ]);
});

});
*/
describe('postsReducer', () => {
  it('should return the initial state', () => {
    expect(postsReducer(undefined, {})).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle SET_ALL_POSTS', () => {
    expect(
      postsReducer([], {
        type: postTypes.SET_ALL_POSTS,
        text: 'SET_ALL_POSTS'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      postsReducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: postTypes.SET_POST,
          text: 'SET_POST'
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })
})
