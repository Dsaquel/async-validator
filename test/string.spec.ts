import { expect, it, describe } from 'vitest';
import Schema from '../src';

describe('string', () => {
  it('works for none require', (done) => {
    let data = {
      v: '',
    };
    new Schema({
      v: {
        type: 'string',
      },
    }).validate(data, (errors, d) => {
      expect(errors).toBe(null);
      expect(d).toEqual(data);
    });
  });

  it('works for empty string', (done) => {
    new Schema({
      v: {
        required: true,
        type: 'string',
      },
    }).validate(
      {
        v: '',
      },
      (errors) => {
        expect(errors?.length).toBe(1);
        expect(errors?.[0].message).toBe('v is required');
      },
    );
  });

  it('works for undefined string', (done) => {
    new Schema({
      v: {
        required: true,
        type: 'string',
      },
    }).validate(
      {
        v: undefined,
      },
      (errors) => {
        expect(errors?.length).toBe(1);
        expect(errors?.[0].message).toBe('v is required');
      },
    );
  });

  it('works for null string', (done) => {
    new Schema({
      v: {
        required: true,
        type: 'string',
      },
    }).validate(
      {
        v: null,
      },
      (errors) => {
        expect(errors?.length).toBe(1);
        expect(errors?.[0].message).toBe('v is required');
      },
    );
  });

  it('works for message', (done) => {
    new Schema({
      v: {
        required: true,
        type: 'string',
        message: 'haha',
      },
    }).validate(
      {
        v: null,
      },
      (errors) => {
        expect(errors?.length).toBe(1);
        expect(errors?.[0].message).toBe('haha');
      },
    );
  });

  it('works for none empty', (done) => {
    new Schema({
      v: {
        required: true,
        type: 'string',
        message: 'haha',
      },
    }).validate(
      {
        v: ' ',
      },
      (errors) => {
        expect(errors).toBe(null);
      },
    );
  });

  it('works for whitespace empty', (done) => {
    new Schema({
      v: {
        required: true,
        type: 'string',
        whitespace: true,
        message: 'haha',
      },
    }).validate(
      {
        v: ' ',
      },
      (errors) => {
        expect(errors?.length).toBe(1);
        expect(errors?.[0].message).toBe('haha');
      },
    );
  });
});
